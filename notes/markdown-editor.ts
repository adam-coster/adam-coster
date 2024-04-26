/**
 * @file This is a draft of an editor for Markdown content using
 * `contenteditable` elements. It basically works for inline editing,
 * but multiline content does not behave well.
 */

import { inlineMarkdownToHtml } from '@bscotch/blork-shared';
import { marked } from 'marked';
import { tick } from 'svelte';
import { getHotkeyAction, type HotkeyAction } from './hotkeys.js';
import { globalAssert, globalInbox } from './inbox.svelte.js';
import { currentSelectionRange } from './utility.js';

export interface MarkdownEditorOptions {
	inline?: boolean;
	/**
	 * Inline mode disallows pasting multiline text.
	 * If this function is provided, it will be called
	 * on the text in that scenario instead of erroring.
	 */
	onMultilinePaste?: (plaintext: string) => void;

	hotkeys?: {
		[K in HotkeyAction]?: (ctx: {
			node: HTMLElement;
			event: KeyboardEvent;
			preventDefault: () => true;
		}) => void;
	};

	/**
	 * A function to call when the Markdown content is updated.
	 * Can be debounced with `onUpdateDebounceMillis`.
	 */
	onUpdate?: (markdown: string) => void;
	onUpdateDebounceMillis?: number;
}

export class MarkdownEditor {
	static editors = new Map<string, Set<MarkdownEditor>>();
	protected history: TextHistory;
	protected _node: HTMLElement | null = null;
	protected _mode: 'edit' | 'view' = 'view';
	protected _updateDebounceTimeout?: NodeJS.Timeout;
	protected _onfocus = () => {
		this.mode = 'edit';
	};
	protected _onblur = () => {
		this.mode = 'view';
		this._prepareForViewing();
	};
	protected _onclick = (event: MouseEvent) => {
		if (this._mode === 'view' && this.node) {
			// Then we're clicking to edit
			// Update the history with the nearest
			// cursor position to the click
			const [x, y] = [event.clientX, event.clientY];
			let offset = document.caretRangeFromPoint?.(x, y)?.startOffset;
			if (offset) {
				this.updateMarkdown(this.history.current.text, {
					start: offset,
					end: offset,
				});
			}
		}
		this._prepareForEditing();
		this._node?.focus();
	};
	protected _onkeydown = (event: KeyboardEvent) => {
		// Keep the cursor position up to date
		const range = currentSelectionRange();
		this.updateMarkdown(this.history.current.text, range);
		const currentText = this.history.current.text;
		const splitText = [
			currentText.slice(0, range.start),
			currentText.slice(range.start, range.end),
			currentText.slice(range.end),
		];
		const action = getHotkeyAction(event);

		if (event.key === 'Escape') {
			this._node?.blur();
		} else if (event.key === 'Enter' && this.options.inline) {
			event.preventDefault();
			if (action) {
				this.options.hotkeys?.[action]?.({
					node: this.node!,
					event,
					preventDefault: () => {
						event.preventDefault();
						return true;
					},
				});
			}
		} else if (action === 'undo') {
			event.preventDefault();
			this.history.undo();
			this.updateMarkdown(this.current);
		} else if (action === 'redo') {
			event.preventDefault();
			this.history.redo();
			this.updateMarkdown(this.current);
		} else if (action && ['bold', 'italic', 'link', 'code'].includes(action)) {
			event.preventDefault();
			const urlPlaceholder = 'url';
			const left =
				action === 'bold'
					? '**'
					: action === 'italic'
					  ? '*'
					  : action === 'code'
					    ? '`'
					    : '[';
			const right = action === 'link' ? `](${urlPlaceholder})` : left;
			const updatedText =
				splitText[0] + left + splitText[1] + right + splitText[2];
			let start = range.start + left.length;
			if (action === 'link') {
				start += splitText[1].length + 2;
			}
			let end = start + splitText[1].length;
			if (action === 'link') {
				end = start + urlPlaceholder.length;
			}
			this.updateMarkdown(updatedText, {
				// Cursor should go after the pasted content
				start,
				end,
			});
			this.render();
		} else if (action) {
			this.options.hotkeys?.[action]?.({
				node: this.node!,
				event,
				preventDefault: () => {
					event.preventDefault();
					return true;
				},
			});
		}
	};
	protected _onpaste = async (e: ClipboardEvent) => {
		e.preventDefault();
		const content = e.clipboardData?.getData('text/plain');
		globalAssert(content, 'No plaintext clipboard data found');
		const isMultiline = /[\r\n]/g.test(content);
		// Get the start/end of the selection within the task title
		const pasteRange = currentSelectionRange();
		// Handle multiline pastes in inline mode
		if (this.options.onMultilinePaste && isMultiline) {
			return this.options.onMultilinePaste(content);
		} else if (this.options.inline && isMultiline) {
			return globalInbox.failure(
				'Cannot paste multiline text into an inline editor.',
			);
		}
		// Ensure the cursor position is up to date in the history
		this.updateMarkdown(this.history.current.text, pasteRange);
		// Replace the selection with the pasted content
		const currentText = this.history.current.text;
		const updatedText =
			currentText.slice(0, pasteRange.start) +
			content +
			currentText.slice(pasteRange.end);
		this.updateMarkdown(updatedText, {
			// Cursor should go after the pasted content
			start: pasteRange.start + content.length,
			end: pasteRange.start + content.length,
		});
		this.render();
	};

	constructor(
		readonly textId: string,
		initial: string,
		protected readonly options: MarkdownEditorOptions = {},
	) {
		this.history = new TextHistory(initial);
		MarkdownEditor.editors.set(
			textId,
			MarkdownEditor.editors.get(textId) || new Set(),
		);
		MarkdownEditor.editors.get(textId)!.add(this);
	}

	get range(): SelectionRange {
		return this.history.current.range;
	}

	get current(): string {
		return this.history.current.text;
	}
	set current(markdown: string) {
		// Only set if not currently focused
		if (this._mode === 'edit') return;
		this.history.reset(markdown);
		this.render();
	}

	get mode() {
		return this._mode;
	}
	set mode(mode: 'edit' | 'view') {
		globalAssert(this._node, 'Cannot set mode without a node');
		this._mode = mode;
		this.render();
	}

	get node() {
		return this._node;
	}
	set node(node: HTMLElement | null) {
		if (node === this._node) return;
		if (this._node) {
			// Unbind things
			this._node.removeEventListener('focus', this._onfocus);
			this._node.removeEventListener('blur', this._onblur);
			this._node.removeEventListener('click', this._onclick);
			this._node.removeEventListener('keydown', this._onkeydown);
			this._node.removeEventListener('paste', this._onpaste);
		}
		this._node = node;
		this.history.node = node;
		if (node) {
			this.mode = 'view';
			this.render();
			const observer = new MutationObserver((mutations, observer) => {
				if (this._mode !== 'edit') return;
				// Get the cursor position
				const selection = window.getSelection();
				if (!selection) return;
				globalAssert(
					selection.anchorNode === selection.focusNode,
					'Selection must be within the same node',
				);
				this.updateMarkdown(node.textContent || '', currentSelectionRange());
			});
			observer.observe(node, {
				// childList: true,
				subtree: true,
				characterData: true,
			});
			node.addEventListener('focus', this._onfocus);
			node.addEventListener('blur', this._onblur);
			node.addEventListener('click', this._onclick);
			node.addEventListener('keydown', this._onkeydown);
			node.addEventListener('paste', this._onpaste);
		}
	}

	focus() {
		this._prepareForEditing();
		this.mode = 'edit';
		this._node?.focus();
	}
	blur() {
		this._node?.blur();
	}
	protected _prepareForEditing() {
		if (!this._node) return;
		if (this._node.getAttribute('contenteditable') === 'true') return;
		this._node.setAttribute('contenteditable', 'true');
		this._node.setAttribute('spellcheck', 'true');
		this._node.style.whiteSpace = 'pre-wrap'; // Need to undo this on blur?
	}
	protected _prepareForViewing() {
		if (!this._node) return;
		if (this._node.getAttribute('contenteditable') === 'false') return;
		this._node.setAttribute('contenteditable', 'false');
		this._node.setAttribute('spellcheck', 'false');
		// this._node.style.whiteSpace = 'normal';
	}

	updateMarkdown(newText: string, cursorRange?: SelectionRange) {
		if (cursorRange) {
			this.history.update(newText, cursorRange);
		}
		// Update all other editors (that should be rendering the same text) in real-time
		MarkdownEditor.editors.get(this.textId)?.forEach((editor) => {
			if (editor !== this) {
				editor.history.reset(newText);
				editor.render();
			}
		});
		if (!this.options.onUpdate) return;
		if (this.options.onUpdateDebounceMillis) {
			clearTimeout(this._updateDebounceTimeout);
			this._updateDebounceTimeout = setTimeout(() => {
				this.options.onUpdate?.(this.history.current.text);
			}, this.options.onUpdateDebounceMillis);
		} else {
			this.options.onUpdate(this.history.current.text);
		}
	}

	render() {
		if (!this._node) return;
		if (this.mode === 'edit') {
			this.history.render();
		} else {
			this.renderHtml();
		}
	}

	protected renderHtml() {
		if (!this._node || this.mode !== 'view') return;
		this._node.innerHTML = this.options.inline
			? inlineMarkdownToHtml(this.history.current.text || '&nbsp;')
			: (marked(this.history.current.text || '&nbsp;') as string);
	}

	destroy() {
		this.node = null;
		MarkdownEditor.editors.get(this.textId)?.delete(this);
	}
}

interface SelectionRange {
	start: number;
	end: number;
}
interface TextHistoryEntry {
	text: string;
	range: SelectionRange;
}

export class TextHistory {
	protected _node: ParentNode | null = null;

	protected _historyCursor = 0;
	protected _history: TextHistoryEntry[] = [];
	protected _lastUpdate = new Date();
	readonly _debounceMilliseconds = 200;

	constructor(text: string) {
		this._history.push({
			text,
			range: { start: 0, end: 0 },
		});
	}

	set node(node: ParentNode | null) {
		if (node === this._node) return;
		this._node = node;
	}

	async render() {
		if (!this._node) return;
		const range = this.current.range;
		const newTextNode = document.createTextNode(this.current.text);
		this._node.replaceChildren(newTextNode);
		await tick();
		this._setSelection(newTextNode, range);
	}

	get history() {
		return [...this._history];
	}

	get current() {
		return this._history[this._historyCursor];
	}

	get cursorIsAtEnd() {
		return this._historyCursor === this._history.length - 1;
	}

	get cursorIsAtStart() {
		return this._historyCursor === 0;
	}

	reset(text: string) {
		this._history = [{ text, range: { start: 0, end: 0 } }];
		this._historyCursor = 0;
		return this.current;
	}

	redo() {
		if (this.cursorIsAtEnd) {
			return this.current;
		}
		this._historyCursor++;
		this.render();
		return this.current;
	}

	undo() {
		if (this._history.length < 2 || this.cursorIsAtStart) {
			return this.current;
		}
		// Set the cursor back one
		this._historyCursor--;
		this.render();
		return this.current;
	}

	update(text: string, range: SelectionRange) {
		if (text === this.current.text) {
			this.current.range = range;
			return;
		}
		// If we aren't at the end of the history, truncate it
		if (this._historyCursor < this._history.length - 1) {
			this._history = this._history.slice(0, this._historyCursor + 1);
		}

		const lastLastUpdate = this._lastUpdate;
		this._lastUpdate = new Date();

		// If we're within the debounce period, update the prior
		// history entry. Else create a new one.
		if (Date.now() - lastLastUpdate.getTime() > this._debounceMilliseconds) {
			// Create a new entry
			this._history.push({
				text,
				range: range,
			});
			this._historyCursor = this._history.length - 1;
		} else {
			// Update the last entry
			this._history[this._history.length - 1] = {
				text,
				range: range,
			};
		}
	}

	protected _setSelection(textNode: Node, selectionRange?: SelectionRange) {
		globalAssert(
			textNode.nodeType === Node.TEXT_NODE,
			'Node must be a text node',
		);
		selectionRange = selectionRange || this.current.range;
		const currentSelection = window.getSelection();
		globalAssert(currentSelection, 'No selection found');
		const text = textNode.textContent || '';
		const range = document.createRange();
		range.selectNodeContents(textNode);
		range.setStart(textNode, Math.min(selectionRange.start, text.length));
		range.setEnd(textNode, Math.min(selectionRange.end, text.length));
		currentSelection.removeAllRanges();
		try {
			currentSelection.addRange(range);
		} catch {}
	}
}
