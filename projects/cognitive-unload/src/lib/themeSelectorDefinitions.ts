export const appSelectorDefinitions = {
	/**
	 * An extra border around active elements to separate them from others for greater contrast.
	 */
	contrastActiveBorder: {
		selector: 'contrastActiveBorder',
		description:
			'An extra border around active elements to separate them from others for greater contrast.',
	},
	/**
	 * An extra border around elements to separate them from others for greater contrast.
	 */
	contrastBorder: {
		selector: 'contrastBorder',
		description:
			'An extra border around elements to separate them from others for greater contrast.',
	},
	/**
	 * Overall border color for focused elements. This color is only used if not overridden by a component.
	 */
	focusBorder: {
		selector: 'focusBorder',
		description:
			'Overall border color for focused elements. This color is only used if not overridden by a component.',
	},
	/**
	 * Overall foreground color. This color is only used if not overridden by a component.
	 */
	foreground: {
		selector: 'foreground',
		description:
			'Overall foreground color. This color is only used if not overridden by a component.',
	},
	/**
	 * Overall foreground for disabled elements. This color is only used if not overridden by a component.
	 */
	disabledForeground: {
		selector: 'disabledForeground',
		description:
			'Overall foreground for disabled elements. This color is only used if not overridden by a component.',
	},
	/**
	 * Shadow color of widgets such as Find/Replace inside the editor.
	 */
	'widget.shadow': {
		selector: 'widget.shadow',
		description:
			'Shadow color of widgets such as Find/Replace inside the editor.',
	},
	/**
	 * Background color of text selections in the workbench (for input fields or text areas, does not apply to selections within the editor and the terminal).
	 */
	'selection.background': {
		selector: 'selection.background',
		description:
			'Background color of text selections in the workbench (for input fields or text areas, does not apply to selections within the editor and the terminal).',
	},
	/**
	 * Foreground color for description text providing additional information, for example for a label.
	 */
	descriptionForeground: {
		selector: 'descriptionForeground',
		description:
			'Foreground color for description text providing additional information, for example for a label.',
	},
	/**
	 * Overall foreground color for error messages (this color is only used if not overridden by a component).
	 */
	errorForeground: {
		selector: 'errorForeground',
		description:
			'Overall foreground color for error messages (this color is only used if not overridden by a component).',
	},
	/**
	 * The default color for icons in the workbench.
	 */
	'icon.foreground': {
		selector: 'icon.foreground',
		description: 'The default color for icons in the workbench.',
	},
	/**
	 * The hover border color for draggable sashes.
	 */
	'sash.hoverBorder': {
		selector: 'sash.hoverBorder',
		description: 'The hover border color for draggable sashes.',
	},
	/**
	 * Border color for the active (focused) window.
	 */
	'window.activeBorder': {
		selector: 'window.activeBorder',
		description: 'Border color for the active (focused) window.',
	},
	/**
	 * Border color for the inactive (unfocused) windows.
	 */
	'window.inactiveBorder': {
		selector: 'window.inactiveBorder',
		description: 'Border color for the inactive (unfocused) windows.',
	},
	/**
	 * Background color for block quotes in text.
	 */
	'textBlockQuote.background': {
		selector: 'textBlockQuote.background',
		description: 'Background color for block quotes in text.',
	},
	/**
	 * Border color for block quotes in text.
	 */
	'textBlockQuote.border': {
		selector: 'textBlockQuote.border',
		description: 'Border color for block quotes in text.',
	},
	/**
	 * Background color for code blocks in text.
	 */
	'textCodeBlock.background': {
		selector: 'textCodeBlock.background',
		description: 'Background color for code blocks in text.',
	},
	/**
	 * Foreground color for links in text when clicked on and on mouse hover.
	 */
	'textLink.activeForeground': {
		selector: 'textLink.activeForeground',
		description:
			'Foreground color for links in text when clicked on and on mouse hover.',
	},
	/**
	 * Foreground color for links in text.
	 */
	'textLink.foreground': {
		selector: 'textLink.foreground',
		description: 'Foreground color for links in text.',
	},
	/**
	 * Foreground color for preformatted text segments.
	 */
	'textPreformat.foreground': {
		selector: 'textPreformat.foreground',
		description: 'Foreground color for preformatted text segments.',
	},
	/**
	 * Color for text separators.
	 */
	'textSeparator.foreground': {
		selector: 'textSeparator.foreground',
		description: 'Color for text separators.',
	},
	/**
	 * Toolbar background when hovering over actions using the mouse
	 */
	'toolbar.hoverBackground': {
		selector: 'toolbar.hoverBackground',
		description:
			'Toolbar background when hovering over actions using the mouse',
	},
	/**
	 * Toolbar outline when hovering over actions using the mouse
	 */
	'toolbar.hoverOutline': {
		selector: 'toolbar.hoverOutline',
		description: 'Toolbar outline when hovering over actions using the mouse',
	},
	/**
	 * Toolbar background when holding the mouse over actions
	 */
	'toolbar.activeBackground': {
		selector: 'toolbar.activeBackground',
		description: 'Toolbar background when holding the mouse over actions',
	},
	/**
	 * Button background color.
	 */
	'button.background': {
		selector: 'button.background',
		description: 'Button background color.',
	},
	/**
	 * Button foreground color.
	 */
	'button.foreground': {
		selector: 'button.foreground',
		description: 'Button foreground color.',
	},
	/**
	 * Button border color.
	 */
	'button.border': {
		selector: 'button.border',
		description: 'Button border color.',
	},
	/**
	 * Button separator color.
	 */
	'button.separator': {
		selector: 'button.separator',
		description: 'Button separator color.',
	},
	/**
	 * Button background color when hovering.
	 */
	'button.hoverBackground': {
		selector: 'button.hoverBackground',
		description: 'Button background color when hovering.',
	},
	/**
	 * Secondary button foreground color.
	 */
	'button.secondaryForeground': {
		selector: 'button.secondaryForeground',
		description: 'Secondary button foreground color.',
	},
	/**
	 * Secondary button background color.
	 */
	'button.secondaryBackground': {
		selector: 'button.secondaryBackground',
		description: 'Secondary button background color.',
	},
	/**
	 * Secondary button background color when hovering.
	 */
	'button.secondaryHoverBackground': {
		selector: 'button.secondaryHoverBackground',
		description: 'Secondary button background color when hovering.',
	},
	/**
	 * Background color of checkbox widget.
	 */
	'checkbox.background': {
		selector: 'checkbox.background',
		description: 'Background color of checkbox widget.',
	},
	/**
	 * Foreground color of checkbox widget.
	 */
	'checkbox.foreground': {
		selector: 'checkbox.foreground',
		description: 'Foreground color of checkbox widget.',
	},
	/**
	 * Border color of checkbox widget.
	 */
	'checkbox.border': {
		selector: 'checkbox.border',
		description: 'Border color of checkbox widget.',
	},
	/**
	 * Background color of checkbox widget when the element it's in is selected.
	 */
	'checkbox.selectBackground': {
		selector: 'checkbox.selectBackground',
		description:
			"Background color of checkbox widget when the element it's in is selected.",
	},
	/**
	 * Border color of checkbox widget when the element it's in is selected.
	 */
	'checkbox.selectBorder': {
		selector: 'checkbox.selectBorder',
		description:
			"Border color of checkbox widget when the element it's in is selected.",
	},
	/**
	 * Dropdown background.
	 */
	'dropdown.background': {
		selector: 'dropdown.background',
		description: 'Dropdown background.',
	},
	/**
	 * Dropdown list background.
	 */
	'dropdown.listBackground': {
		selector: 'dropdown.listBackground',
		description: 'Dropdown list background.',
	},
	/**
	 * Dropdown border.
	 */
	'dropdown.border': {
		selector: 'dropdown.border',
		description: 'Dropdown border.',
	},
	/**
	 * Dropdown foreground.
	 */
	'dropdown.foreground': {
		selector: 'dropdown.foreground',
		description: 'Dropdown foreground.',
	},
	/**
	 * Input box background.
	 */
	'input.background': {
		selector: 'input.background',
		description: 'Input box background.',
	},
	/**
	 * Input box border.
	 */
	'input.border': {
		selector: 'input.border',
		description: 'Input box border.',
	},
	/**
	 * Input box foreground.
	 */
	'input.foreground': {
		selector: 'input.foreground',
		description: 'Input box foreground.',
	},
	/**
	 * Input box foreground color for placeholder text.
	 */
	'input.placeholderForeground': {
		selector: 'input.placeholderForeground',
		description: 'Input box foreground color for placeholder text.',
	},
	/**
	 * Background color of activated options in input fields.
	 */
	'inputOption.activeBackground': {
		selector: 'inputOption.activeBackground',
		description: 'Background color of activated options in input fields.',
	},
	/**
	 * Border color of activated options in input fields.
	 */
	'inputOption.activeBorder': {
		selector: 'inputOption.activeBorder',
		description: 'Border color of activated options in input fields.',
	},
	/**
	 * Foreground color of activated options in input fields.
	 */
	'inputOption.activeForeground': {
		selector: 'inputOption.activeForeground',
		description: 'Foreground color of activated options in input fields.',
	},
	/**
	 * Background color of activated options in input fields.
	 */
	'inputOption.hoverBackground': {
		selector: 'inputOption.hoverBackground',
		description: 'Background color of activated options in input fields.',
	},
	/**
	 * Input validation background color for error severity.
	 */
	'inputValidation.errorBackground': {
		selector: 'inputValidation.errorBackground',
		description: 'Input validation background color for error severity.',
	},
	/**
	 * Input validation foreground color for error severity.
	 */
	'inputValidation.errorForeground': {
		selector: 'inputValidation.errorForeground',
		description: 'Input validation foreground color for error severity.',
	},
	/**
	 * Input validation border color for error severity.
	 */
	'inputValidation.errorBorder': {
		selector: 'inputValidation.errorBorder',
		description: 'Input validation border color for error severity.',
	},
	/**
	 * Input validation background color for information severity.
	 */
	'inputValidation.infoBackground': {
		selector: 'inputValidation.infoBackground',
		description: 'Input validation background color for information severity.',
	},
	/**
	 * Input validation foreground color for information severity.
	 */
	'inputValidation.infoForeground': {
		selector: 'inputValidation.infoForeground',
		description: 'Input validation foreground color for information severity.',
	},
	/**
	 * Input validation border color for information severity.
	 */
	'inputValidation.infoBorder': {
		selector: 'inputValidation.infoBorder',
		description: 'Input validation border color for information severity.',
	},
	/**
	 * Input validation background color for information warning.
	 */
	'inputValidation.warningBackground': {
		selector: 'inputValidation.warningBackground',
		description: 'Input validation background color for information warning.',
	},
	/**
	 * Input validation foreground color for warning severity.
	 */
	'inputValidation.warningForeground': {
		selector: 'inputValidation.warningForeground',
		description: 'Input validation foreground color for warning severity.',
	},
	/**
	 * Input validation border color for warning severity.
	 */
	'inputValidation.warningBorder': {
		selector: 'inputValidation.warningBorder',
		description: 'Input validation border color for warning severity.',
	},
	/**
	 * Scrollbar slider shadow to indicate that the view is scrolled.
	 */
	'scrollbar.shadow': {
		selector: 'scrollbar.shadow',
		description:
			'Scrollbar slider shadow to indicate that the view is scrolled.',
	},
	/**
	 * Scrollbar slider background color when clicked on.
	 */
	'scrollbarSlider.activeBackground': {
		selector: 'scrollbarSlider.activeBackground',
		description: 'Scrollbar slider background color when clicked on.',
	},
	/**
	 * Scrollbar slider background color.
	 */
	'scrollbarSlider.background': {
		selector: 'scrollbarSlider.background',
		description: 'Scrollbar slider background color.',
	},
	/**
	 * Scrollbar slider background color when hovering.
	 */
	'scrollbarSlider.hoverBackground': {
		selector: 'scrollbarSlider.hoverBackground',
		description: 'Scrollbar slider background color when hovering.',
	},
	/**
	 * Badge foreground color.
	 */
	'badge.foreground': {
		selector: 'badge.foreground',
		description: 'Badge foreground color.',
	},
	/**
	 * Badge background color.
	 */
	'badge.background': {
		selector: 'badge.background',
		description: 'Badge background color.',
	},
	/**
	 * Background color of the progress bar shown for long running operations.
	 */
	'progressBar.background': {
		selector: 'progressBar.background',
		description:
			'Background color of the progress bar shown for long running operations.',
	},
	/**
	 * List/Tree background color for the selected item when the list/tree is active.
	 */
	'list.activeSelectionBackground': {
		selector: 'list.activeSelectionBackground',
		description:
			'List/Tree background color for the selected item when the list/tree is active.',
	},
	/**
	 * List/Tree foreground color for the selected item when the list/tree is active.
	 */
	'list.activeSelectionForeground': {
		selector: 'list.activeSelectionForeground',
		description:
			'List/Tree foreground color for the selected item when the list/tree is active.',
	},
	/**
	 * List/Tree icon foreground color for the selected item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
	 */
	'list.activeSelectionIconForeground': {
		selector: 'list.activeSelectionIconForeground',
		description:
			'List/Tree icon foreground color for the selected item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.',
	},
	/**
	 * List/Tree drag and drop background when moving items around using the mouse.
	 */
	'list.dropBackground': {
		selector: 'list.dropBackground',
		description:
			'List/Tree drag and drop background when moving items around using the mouse.',
	},
	/**
	 * List/Tree background color for the focused item when the list/tree is active.
	 */
	'list.focusBackground': {
		selector: 'list.focusBackground',
		description:
			'List/Tree background color for the focused item when the list/tree is active.',
	},
	/**
	 * List/Tree foreground color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
	 */
	'list.focusForeground': {
		selector: 'list.focusForeground',
		description:
			'List/Tree foreground color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.',
	},
	/**
	 * List/Tree foreground color of the match highlights on actively focused items when searching inside the list/tree.
	 */
	'list.focusHighlightForeground': {
		selector: 'list.focusHighlightForeground',
		description:
			'List/Tree foreground color of the match highlights on actively focused items when searching inside the list/tree.',
	},
	/**
	 * List/Tree outline color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
	 */
	'list.focusOutline': {
		selector: 'list.focusOutline',
		description:
			'List/Tree outline color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.',
	},
	/**
	 * List/Tree outline color for the focused item when the list/tree is active and selected. An active list/tree has keyboard focus, an inactive does not.
	 */
	'list.focusAndSelectionOutline': {
		selector: 'list.focusAndSelectionOutline',
		description:
			'List/Tree outline color for the focused item when the list/tree is active and selected. An active list/tree has keyboard focus, an inactive does not.',
	},
	/**
	 * List/Tree foreground color of the match highlights when searching inside the list/tree.
	 */
	'list.highlightForeground': {
		selector: 'list.highlightForeground',
		description:
			'List/Tree foreground color of the match highlights when searching inside the list/tree.',
	},
	/**
	 * List/Tree background when hovering over items using the mouse.
	 */
	'list.hoverBackground': {
		selector: 'list.hoverBackground',
		description:
			'List/Tree background when hovering over items using the mouse.',
	},
	/**
	 * List/Tree foreground when hovering over items using the mouse.
	 */
	'list.hoverForeground': {
		selector: 'list.hoverForeground',
		description:
			'List/Tree foreground when hovering over items using the mouse.',
	},
	/**
	 * List/Tree background color for the selected item when the list/tree is inactive.
	 */
	'list.inactiveSelectionBackground': {
		selector: 'list.inactiveSelectionBackground',
		description:
			'List/Tree background color for the selected item when the list/tree is inactive.',
	},
	/**
	 * List/Tree foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.
	 */
	'list.inactiveSelectionForeground': {
		selector: 'list.inactiveSelectionForeground',
		description:
			'List/Tree foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.',
	},
	/**
	 * List/Tree icon foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.
	 */
	'list.inactiveSelectionIconForeground': {
		selector: 'list.inactiveSelectionIconForeground',
		description:
			'List/Tree icon foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.',
	},
	/**
	 * List background color for the focused item when the list is inactive. An active list has keyboard focus, an inactive does not. Currently only supported in lists.
	 */
	'list.inactiveFocusBackground': {
		selector: 'list.inactiveFocusBackground',
		description:
			'List background color for the focused item when the list is inactive. An active list has keyboard focus, an inactive does not. Currently only supported in lists.',
	},
	/**
	 * List/Tree outline color for the focused item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.
	 */
	'list.inactiveFocusOutline': {
		selector: 'list.inactiveFocusOutline',
		description:
			'List/Tree outline color for the focused item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.',
	},
	/**
	 * List/Tree foreground color for invalid items, for example an unresolved root in explorer.
	 */
	'list.invalidItemForeground': {
		selector: 'list.invalidItemForeground',
		description:
			'List/Tree foreground color for invalid items, for example an unresolved root in explorer.',
	},
	/**
	 * Foreground color of list items containing errors.
	 */
	'list.errorForeground': {
		selector: 'list.errorForeground',
		description: 'Foreground color of list items containing errors.',
	},
	/**
	 * Foreground color of list items containing warnings.
	 */
	'list.warningForeground': {
		selector: 'list.warningForeground',
		description: 'Foreground color of list items containing warnings.',
	},
	/**
	 * List/Tree Filter background color of typed text when searching inside the list/tree.
	 */
	'listFilterWidget.background': {
		selector: 'listFilterWidget.background',
		description:
			'List/Tree Filter background color of typed text when searching inside the list/tree.',
	},
	/**
	 * List/Tree Filter Widget's outline color of typed text when searching inside the list/tree.
	 */
	'listFilterWidget.outline': {
		selector: 'listFilterWidget.outline',
		description:
			"List/Tree Filter Widget's outline color of typed text when searching inside the list/tree.",
	},
	/**
	 * List/Tree Filter Widget's outline color when no match is found of typed text when searching inside the list/tree.
	 */
	'listFilterWidget.noMatchesOutline': {
		selector: 'listFilterWidget.noMatchesOutline',
		description:
			"List/Tree Filter Widget's outline color when no match is found of typed text when searching inside the list/tree.",
	},
	/**
	 * Shadown color of the type filter widget in lists and tree
	 */
	'listFilterWidget.shadow': {
		selector: 'listFilterWidget.shadow',
		description: 'Shadown color of the type filter widget in lists and tree',
	},
	/**
	 * Background color of the filtered matches in lists and trees.
	 */
	'list.filterMatchBackground': {
		selector: 'list.filterMatchBackground',
		description: 'Background color of the filtered matches in lists and trees.',
	},
	/**
	 * Border color of the filtered matches in lists and trees.
	 */
	'list.filterMatchBorder': {
		selector: 'list.filterMatchBorder',
		description: 'Border color of the filtered matches in lists and trees.',
	},
	/**
	 * List/Tree foreground color for items that are deemphasized.
	 */
	'list.deemphasizedForeground': {
		selector: 'list.deemphasizedForeground',
		description: 'List/Tree foreground color for items that are deemphasized.',
	},
	/**
	 * Tree Widget's stroke color for indent guides.
	 */
	'tree.indentGuidesStroke': {
		selector: 'tree.indentGuidesStroke',
		description: "Tree Widget's stroke color for indent guides.",
	},
	/**
	 * Tree stroke color for the indentation guides.
	 */
	'tree.tableColumnsBorder': {
		selector: 'tree.tableColumnsBorder',
		description: 'Tree stroke color for the indentation guides.',
	},
	/**
	 * Background color for odd table rows.
	 */
	'tree.tableOddRowsBackground': {
		selector: 'tree.tableOddRowsBackground',
		description: 'Background color for odd table rows.',
	},
	/**
	 * Activity Bar background color.
	 */
	'activityBar.background': {
		selector: 'activityBar.background',
		description: 'Activity Bar background color.',
	},
	/**
	 * Drag and drop feedback color for the activity bar items. The activity bar is showing on the far left or right and allows to switch between views of the side bar.
	 */
	'activityBar.dropBorder': {
		selector: 'activityBar.dropBorder',
		description:
			'Drag and drop feedback color for the activity bar items. The activity bar is showing on the far left or right and allows to switch between views of the side bar.',
	},
	/**
	 * Activity Bar foreground color (for example used for the icons).
	 */
	'activityBar.foreground': {
		selector: 'activityBar.foreground',
		description:
			'Activity Bar foreground color (for example used for the icons).',
	},
	/**
	 * Activity Bar item foreground color when it is inactive.
	 */
	'activityBar.inactiveForeground': {
		selector: 'activityBar.inactiveForeground',
		description: 'Activity Bar item foreground color when it is inactive.',
	},
	/**
	 * Activity Bar border color with the Side Bar.
	 */
	'activityBar.border': {
		selector: 'activityBar.border',
		description: 'Activity Bar border color with the Side Bar.',
	},
	/**
	 * Activity notification badge background color.
	 */
	'activityBarBadge.background': {
		selector: 'activityBarBadge.background',
		description: 'Activity notification badge background color.',
	},
	/**
	 * Activity notification badge foreground color.
	 */
	'activityBarBadge.foreground': {
		selector: 'activityBarBadge.foreground',
		description: 'Activity notification badge foreground color.',
	},
	/**
	 * Activity Bar active indicator border color.
	 */
	'activityBar.activeBorder': {
		selector: 'activityBar.activeBorder',
		description: 'Activity Bar active indicator border color.',
	},
	/**
	 * Activity Bar optional background color for the active element.
	 */
	'activityBar.activeBackground': {
		selector: 'activityBar.activeBackground',
		description:
			'Activity Bar optional background color for the active element.',
	},
	/**
	 * Activity bar focus border color for the active item.
	 */
	'activityBar.activeFocusBorder': {
		selector: 'activityBar.activeFocusBorder',
		description: 'Activity bar focus border color for the active item.',
	},
	/**
	 * Foreground color for the profile entry on the activity bar.
	 */
	'activityBarItem.profilesForeground': {
		selector: 'activityBarItem.profilesForeground',
		description: 'Foreground color for the profile entry on the activity bar.',
	},
	/**
	 * Foreground color for the profile entry on the activity bar when hovering.
	 */
	'activityBarItem.profilesHoverForeground': {
		selector: 'activityBarItem.profilesHoverForeground',
		description:
			'Foreground color for the profile entry on the activity bar when hovering.',
	},
	/**
	 * Background color for the profile entry on the activity bar.
	 */
	'activityBarItem.profilesBackground': {
		selector: 'activityBarItem.profilesBackground',
		description: 'Background color for the profile entry on the activity bar.',
	},
	/**
	 * Editor background color.
	 */
	'editor.background': {
		selector: 'editor.background',
		description: 'Editor background color.',
	},
	/**
	 * Editor default foreground color.
	 */
	'editor.foreground': {
		selector: 'editor.foreground',
		description: 'Editor default foreground color.',
	},
	/**
	 * Color of editor line numbers.
	 */
	'editorLineNumber.foreground': {
		selector: 'editorLineNumber.foreground',
		description: 'Color of editor line numbers.',
	},
	/**
	 * Color of the active editor line number.
	 */
	'editorLineNumber.activeForeground': {
		selector: 'editorLineNumber.activeForeground',
		description: 'Color of the active editor line number.',
	},
	/**
	 * The background color of the editor cursor. Allows customizing the color of a character overlapped by a block cursor.
	 */
	'editorCursor.background': {
		selector: 'editorCursor.background',
		description:
			'The background color of the editor cursor. Allows customizing the color of a character overlapped by a block cursor.',
	},
	/**
	 * Color of the editor cursor.
	 */
	'editorCursor.foreground': {
		selector: 'editorCursor.foreground',
		description: 'Color of the editor cursor.',
	},
	/**
	 * Color of the editor selection.
	 */
	'editor.selectionBackground': {
		selector: 'editor.selectionBackground',
		description: 'Color of the editor selection.',
	},
	/**
	 * Color of the selected text for high contrast.
	 */
	'editor.selectionForeground': {
		selector: 'editor.selectionForeground',
		description: 'Color of the selected text for high contrast.',
	},
	/**
	 * Color of the selection in an inactive editor. The color must not be opaque so as not to hide underlying decorations.
	 */
	'editor.inactiveSelectionBackground': {
		selector: 'editor.inactiveSelectionBackground',
		description:
			'Color of the selection in an inactive editor. The color must not be opaque so as not to hide underlying decorations.',
	},
	/**
	 * Color for regions with the same content as the selection. The color must not be opaque so as not to hide underlying decorations.
	 */
	'editor.selectionHighlightBackground': {
		selector: 'editor.selectionHighlightBackground',
		description:
			'Color for regions with the same content as the selection. The color must not be opaque so as not to hide underlying decorations.',
	},
	/**
	 * Border color for regions with the same content as the selection.
	 */
	'editor.selectionHighlightBorder': {
		selector: 'editor.selectionHighlightBorder',
		description:
			'Border color for regions with the same content as the selection.',
	},
	/**
	 * Background color of a symbol during read-access, for example when reading a variable. The color must not be opaque so as not to hide underlying decorations.
	 */
	'editor.wordHighlightBackground': {
		selector: 'editor.wordHighlightBackground',
		description:
			'Background color of a symbol during read-access, for example when reading a variable. The color must not be opaque so as not to hide underlying decorations.',
	},
	/**
	 * Border color of a symbol during read-access, for example when reading a variable.
	 */
	'editor.wordHighlightBorder': {
		selector: 'editor.wordHighlightBorder',
		description:
			'Border color of a symbol during read-access, for example when reading a variable.',
	},
	/**
	 * Background color of a symbol during write-access, for example when writing to a variable. The color must not be opaque so as not to hide underlying decorations.
	 */
	'editor.wordHighlightStrongBackground': {
		selector: 'editor.wordHighlightStrongBackground',
		description:
			'Background color of a symbol during write-access, for example when writing to a variable. The color must not be opaque so as not to hide underlying decorations.',
	},
	/**
	 * Border color of a symbol during write-access, for example when writing to a variable.
	 */
	'editor.wordHighlightStrongBorder': {
		selector: 'editor.wordHighlightStrongBorder',
		description:
			'Border color of a symbol during write-access, for example when writing to a variable.',
	},
	/**
	 * Color of the current search match.
	 */
	'editor.findMatchBackground': {
		selector: 'editor.findMatchBackground',
		description: 'Color of the current search match.',
	},
	/**
	 * Color of the other search matches. The color must not be opaque so as not to hide underlying decorations.
	 */
	'editor.findMatchHighlightBackground': {
		selector: 'editor.findMatchHighlightBackground',
		description:
			'Color of the other search matches. The color must not be opaque so as not to hide underlying decorations.',
	},
	/**
	 * Color the range limiting the search (Enable 'Find in Selection' in the find widget). The color must not be opaque so as not to hide underlying decorations.
	 */
	'editor.findRangeHighlightBackground': {
		selector: 'editor.findRangeHighlightBackground',
		description:
			"Color the range limiting the search (Enable 'Find in Selection' in the find widget). The color must not be opaque so as not to hide underlying decorations.",
	},
	/**
	 * Border color of the current search match.
	 */
	'editor.findMatchBorder': {
		selector: 'editor.findMatchBorder',
		description: 'Border color of the current search match.',
	},
	/**
	 * Border color of the other search matches.
	 */
	'editor.findMatchHighlightBorder': {
		selector: 'editor.findMatchHighlightBorder',
		description: 'Border color of the other search matches.',
	},
	/**
	 * Border color the range limiting the search (Enable 'Find in Selection' in the find widget).
	 */
	'editor.findRangeHighlightBorder': {
		selector: 'editor.findRangeHighlightBorder',
		description:
			"Border color the range limiting the search (Enable 'Find in Selection' in the find widget).",
	},
	/**
	 * Color of the editor's results.
	 */
	'searchEditor.findMatchBackground': {
		selector: 'searchEditor.findMatchBackground',
		description: "Color of the editor's results.",
	},
	/**
	 * Border color of the editor's results.
	 */
	'searchEditor.findMatchBorder': {
		selector: 'searchEditor.findMatchBorder',
		description: "Border color of the editor's results.",
	},
	/**
	 * Search editor text input box border.
	 */
	'searchEditor.textInputBorder': {
		selector: 'searchEditor.textInputBorder',
		description: 'Search editor text input box border.',
	},
	/**
	 * Highlight below the word for which a hover is shown. The color must not be opaque so as not to hide underlying decorations.
	 */
	'editor.hoverHighlightBackground': {
		selector: 'editor.hoverHighlightBackground',
		description:
			'Highlight below the word for which a hover is shown. The color must not be opaque so as not to hide underlying decorations.',
	},
	/**
	 * Background color for the highlight of line at the cursor position.
	 */
	'editor.lineHighlightBackground': {
		selector: 'editor.lineHighlightBackground',
		description:
			'Background color for the highlight of line at the cursor position.',
	},
	/**
	 * Background color for the border around the line at the cursor position.
	 */
	'editor.lineHighlightBorder': {
		selector: 'editor.lineHighlightBorder',
		description:
			'Background color for the border around the line at the cursor position.',
	},
	/**
	 * Border color used to highlight unicode characters.
	 */
	'editorUnicodeHighlight.border': {
		selector: 'editorUnicodeHighlight.border',
		description: 'Border color used to highlight unicode characters.',
	},
	/**
	 * Background color used to highlight unicode characters.
	 */
	'editorUnicodeHighlight.background': {
		selector: 'editorUnicodeHighlight.background',
		description: 'Background color used to highlight unicode characters.',
	},
	/**
	 * Color of active links.
	 */
	'editorLink.activeForeground': {
		selector: 'editorLink.activeForeground',
		description: 'Color of active links.',
	},
	/**
	 * Background color of highlighted ranges, used by Quick Open, Symbol in File and Find features. The color must not be opaque so as not to hide underlying decorations.
	 */
	'editor.rangeHighlightBackground': {
		selector: 'editor.rangeHighlightBackground',
		description:
			'Background color of highlighted ranges, used by Quick Open, Symbol in File and Find features. The color must not be opaque so as not to hide underlying decorations.',
	},
	/**
	 * Background color of the border around highlighted ranges.
	 */
	'editor.rangeHighlightBorder': {
		selector: 'editor.rangeHighlightBorder',
		description: 'Background color of the border around highlighted ranges.',
	},
	/**
	 * Background color of highlighted symbol. The color must not be opaque so as not to hide underlying decorations.
	 */
	'editor.symbolHighlightBackground': {
		selector: 'editor.symbolHighlightBackground',
		description:
			'Background color of highlighted symbol. The color must not be opaque so as not to hide underlying decorations.',
	},
	/**
	 * Background color of the border around highlighted symbols.
	 */
	'editor.symbolHighlightBorder': {
		selector: 'editor.symbolHighlightBorder',
		description: 'Background color of the border around highlighted symbols.',
	},
	/**
	 * Color of whitespace characters in the editor.
	 */
	'editorWhitespace.foreground': {
		selector: 'editorWhitespace.foreground',
		description: 'Color of whitespace characters in the editor.',
	},
	/**
	 * Color of the editor indentation guides.
	 */
	'editorIndentGuide.background': {
		selector: 'editorIndentGuide.background',
		description: 'Color of the editor indentation guides.',
	},
	/**
	 * Color of the active editor indentation guide.
	 */
	'editorIndentGuide.activeBackground': {
		selector: 'editorIndentGuide.activeBackground',
		description: 'Color of the active editor indentation guide.',
	},
	/**
	 * Background color of inline hints.
	 */
	'editorInlayHint.background': {
		selector: 'editorInlayHint.background',
		description: 'Background color of inline hints.',
	},
	/**
	 * Foreground color of inline hints.
	 */
	'editorInlayHint.foreground': {
		selector: 'editorInlayHint.foreground',
		description: 'Foreground color of inline hints.',
	},
	/**
	 * Foreground color of inline hints for types
	 */
	'editorInlayHint.typeForeground': {
		selector: 'editorInlayHint.typeForeground',
		description: 'Foreground color of inline hints for types',
	},
	/**
	 * Background color of inline hints for types
	 */
	'editorInlayHint.typeBackground': {
		selector: 'editorInlayHint.typeBackground',
		description: 'Background color of inline hints for types',
	},
	/**
	 * Foreground color of inline hints for parameters
	 */
	'editorInlayHint.parameterForeground': {
		selector: 'editorInlayHint.parameterForeground',
		description: 'Foreground color of inline hints for parameters',
	},
	/**
	 * Background color of inline hints for parameters
	 */
	'editorInlayHint.parameterBackground': {
		selector: 'editorInlayHint.parameterBackground',
		description: 'Background color of inline hints for parameters',
	},
	/**
	 * Foreground color of an editor CodeLens.
	 */
	'editorCodeLens.foreground': {
		selector: 'editorCodeLens.foreground',
		description: 'Foreground color of an editor CodeLens.',
	},
	/**
	 * The color used for the lightbulb actions icon.
	 */
	'editorLightBulb.foreground': {
		selector: 'editorLightBulb.foreground',
		description: 'The color used for the lightbulb actions icon.',
	},
	/**
	 * The color used for the lightbulb auto fix actions icon.
	 */
	'editorLightBulbAutoFix.foreground': {
		selector: 'editorLightBulbAutoFix.foreground',
		description: 'The color used for the lightbulb auto fix actions icon.',
	},
	/**
	 * Background color behind matching brackets.
	 */
	'editorBracketMatch.background': {
		selector: 'editorBracketMatch.background',
		description: 'Background color behind matching brackets.',
	},
	/**
	 * Color for matching brackets boxes.
	 */
	'editorBracketMatch.border': {
		selector: 'editorBracketMatch.border',
		description: 'Color for matching brackets boxes.',
	},
	/**
	 * Foreground color of brackets (1). Requires enabling bracket pair colorization.
	 */
	'editorBracketHighlight.foreground1': {
		selector: 'editorBracketHighlight.foreground1',
		description:
			'Foreground color of brackets (1). Requires enabling bracket pair colorization.',
	},
	/**
	 * Foreground color of brackets (2). Requires enabling bracket pair colorization.
	 */
	'editorBracketHighlight.foreground2': {
		selector: 'editorBracketHighlight.foreground2',
		description:
			'Foreground color of brackets (2). Requires enabling bracket pair colorization.',
	},
	/**
	 * Foreground color of brackets (3). Requires enabling bracket pair colorization.
	 */
	'editorBracketHighlight.foreground3': {
		selector: 'editorBracketHighlight.foreground3',
		description:
			'Foreground color of brackets (3). Requires enabling bracket pair colorization.',
	},
	/**
	 * Foreground color of brackets (4). Requires enabling bracket pair colorization.
	 */
	'editorBracketHighlight.foreground4': {
		selector: 'editorBracketHighlight.foreground4',
		description:
			'Foreground color of brackets (4). Requires enabling bracket pair colorization.',
	},
	/**
	 * Foreground color of brackets (5). Requires enabling bracket pair colorization.
	 */
	'editorBracketHighlight.foreground5': {
		selector: 'editorBracketHighlight.foreground5',
		description:
			'Foreground color of brackets (5). Requires enabling bracket pair colorization.',
	},
	/**
	 * Foreground color of brackets (6). Requires enabling bracket pair colorization.
	 */
	'editorBracketHighlight.foreground6': {
		selector: 'editorBracketHighlight.foreground6',
		description:
			'Foreground color of brackets (6). Requires enabling bracket pair colorization.',
	},
	/**
	 * Foreground color of unexpected brackets.
	 */
	'editorBracketHighlight.unexpectedBracket.foreground': {
		selector: 'editorBracketHighlight.unexpectedBracket.foreground',
		description: 'Foreground color of unexpected brackets.',
	},
	/**
	 * Background color for folded ranges. The color must not be opaque so as not to hide underlying decorations.
	 */
	'editor.foldBackground': {
		selector: 'editor.foldBackground',
		description:
			'Background color for folded ranges. The color must not be opaque so as not to hide underlying decorations.',
	},
	/**
	 * Background color of the editor overview ruler. Only used when the minimap is enabled and placed on the right side of the editor.
	 */
	'editorOverviewRuler.background': {
		selector: 'editorOverviewRuler.background',
		description:
			'Background color of the editor overview ruler. Only used when the minimap is enabled and placed on the right side of the editor.',
	},
	/**
	 * Color of the overview ruler border.
	 */
	'editorOverviewRuler.border': {
		selector: 'editorOverviewRuler.border',
		description: 'Color of the overview ruler border.',
	},
	/**
	 * Overview ruler marker color for find matches. The color must not be opaque so as not to hide underlying decorations.
	 */
	'editorOverviewRuler.findMatchForeground': {
		selector: 'editorOverviewRuler.findMatchForeground',
		description:
			'Overview ruler marker color for find matches. The color must not be opaque so as not to hide underlying decorations.',
	},
	/**
	 * Overview ruler marker color for highlighted ranges, like by the Quick Open, Symbol in File and Find features. The color must not be opaque so as not to hide underlying decorations.
	 */
	'editorOverviewRuler.rangeHighlightForeground': {
		selector: 'editorOverviewRuler.rangeHighlightForeground',
		description:
			'Overview ruler marker color for highlighted ranges, like by the Quick Open, Symbol in File and Find features. The color must not be opaque so as not to hide underlying decorations.',
	},
	/**
	 * Overview ruler marker color for selection highlights. The color must not be opaque so as not to hide underlying decorations.
	 */
	'editorOverviewRuler.selectionHighlightForeground': {
		selector: 'editorOverviewRuler.selectionHighlightForeground',
		description:
			'Overview ruler marker color for selection highlights. The color must not be opaque so as not to hide underlying decorations.',
	},
	/**
	 * Overview ruler marker color for symbol highlights. The color must not be opaque so as not to hide underlying decorations.
	 */
	'editorOverviewRuler.wordHighlightForeground': {
		selector: 'editorOverviewRuler.wordHighlightForeground',
		description:
			'Overview ruler marker color for symbol highlights. The color must not be opaque so as not to hide underlying decorations.',
	},
	/**
	 * Overview ruler marker color for write-access symbol highlights. The color must not be opaque so as not to hide underlying decorations.
	 */
	'editorOverviewRuler.wordHighlightStrongForeground': {
		selector: 'editorOverviewRuler.wordHighlightStrongForeground',
		description:
			'Overview ruler marker color for write-access symbol highlights. The color must not be opaque so as not to hide underlying decorations.',
	},
	/**
	 * Overview ruler marker color for modified content.
	 */
	'editorOverviewRuler.modifiedForeground': {
		selector: 'editorOverviewRuler.modifiedForeground',
		description: 'Overview ruler marker color for modified content.',
	},
	/**
	 * Overview ruler marker color for added content.
	 */
	'editorOverviewRuler.addedForeground': {
		selector: 'editorOverviewRuler.addedForeground',
		description: 'Overview ruler marker color for added content.',
	},
	/**
	 * Overview ruler marker color for deleted content.
	 */
	'editorOverviewRuler.deletedForeground': {
		selector: 'editorOverviewRuler.deletedForeground',
		description: 'Overview ruler marker color for deleted content.',
	},
	/**
	 * Overview ruler marker color for errors.
	 */
	'editorOverviewRuler.errorForeground': {
		selector: 'editorOverviewRuler.errorForeground',
		description: 'Overview ruler marker color for errors.',
	},
	/**
	 * Overview ruler marker color for warnings.
	 */
	'editorOverviewRuler.warningForeground': {
		selector: 'editorOverviewRuler.warningForeground',
		description: 'Overview ruler marker color for warnings.',
	},
	/**
	 * Overview ruler marker color for infos.
	 */
	'editorOverviewRuler.infoForeground': {
		selector: 'editorOverviewRuler.infoForeground',
		description: 'Overview ruler marker color for infos.',
	},
	/**
	 * Overview ruler marker color for matching brackets.
	 */
	'editorOverviewRuler.bracketMatchForeground': {
		selector: 'editorOverviewRuler.bracketMatchForeground',
		description: 'Overview ruler marker color for matching brackets.',
	},
	/**
	 * Foreground color of error squiggles in the editor.
	 */
	'editorError.foreground': {
		selector: 'editorError.foreground',
		description: 'Foreground color of error squiggles in the editor.',
	},
	/**
	 * Border color of error boxes in the editor.
	 */
	'editorError.border': {
		selector: 'editorError.border',
		description: 'Border color of error boxes in the editor.',
	},
	/**
	 * Background color of error text in the editor. The color must not be opaque so as not to hide underlying decorations.
	 */
	'editorError.background': {
		selector: 'editorError.background',
		description:
			'Background color of error text in the editor. The color must not be opaque so as not to hide underlying decorations.',
	},
	/**
	 * Foreground color of warning squiggles in the editor.
	 */
	'editorWarning.foreground': {
		selector: 'editorWarning.foreground',
		description: 'Foreground color of warning squiggles in the editor.',
	},
	/**
	 * Border color of warning boxes in the editor.
	 */
	'editorWarning.border': {
		selector: 'editorWarning.border',
		description: 'Border color of warning boxes in the editor.',
	},
	/**
	 * Background color of warning text in the editor. The color must not be opaque so as not to hide underlying decorations.
	 */
	'editorWarning.background': {
		selector: 'editorWarning.background',
		description:
			'Background color of warning text in the editor. The color must not be opaque so as not to hide underlying decorations.',
	},
	/**
	 * Foreground color of info squiggles in the editor.
	 */
	'editorInfo.foreground': {
		selector: 'editorInfo.foreground',
		description: 'Foreground color of info squiggles in the editor.',
	},
	/**
	 * Border color of info boxes in the editor.
	 */
	'editorInfo.border': {
		selector: 'editorInfo.border',
		description: 'Border color of info boxes in the editor.',
	},
	/**
	 * Background color of info text in the editor. The color must not be opaque so as not to hide underlying decorations.
	 */
	'editorInfo.background': {
		selector: 'editorInfo.background',
		description:
			'Background color of info text in the editor. The color must not be opaque so as not to hide underlying decorations.',
	},
	/**
	 * Foreground color of hints in the editor.
	 */
	'editorHint.foreground': {
		selector: 'editorHint.foreground',
		description: 'Foreground color of hints in the editor.',
	},
	/**
	 * Border color of hint boxes in the editor.
	 */
	'editorHint.border': {
		selector: 'editorHint.border',
		description: 'Border color of hint boxes in the editor.',
	},
	/**
	 * The color used for the problems error icon.
	 */
	'problemsErrorIcon.foreground': {
		selector: 'problemsErrorIcon.foreground',
		description: 'The color used for the problems error icon.',
	},
	/**
	 * The color used for the problems warning icon.
	 */
	'problemsWarningIcon.foreground': {
		selector: 'problemsWarningIcon.foreground',
		description: 'The color used for the problems warning icon.',
	},
	/**
	 * The color used for the problems info icon.
	 */
	'problemsInfoIcon.foreground': {
		selector: 'problemsInfoIcon.foreground',
		description: 'The color used for the problems info icon.',
	},
	/**
	 * Border color of unnecessary (unused) source code in the editor.
	 */
	'editorUnnecessaryCode.border': {
		selector: 'editorUnnecessaryCode.border',
		description:
			'Border color of unnecessary (unused) source code in the editor.',
	},
	/**
	 * Opacity of unnecessary (unused) source code in the editor. For example, <code>&quot;#000000c0&quot;</code> will render the code with 75% opacity. For high contrast themes, use the <code>&quot;editorUnnecessaryCode.border&quot;</code> theme color to underline unnecessary code instead of fading it out.
	 */
	'editorUnnecessaryCode.opacity': {
		selector: 'editorUnnecessaryCode.opacity',
		description:
			'Opacity of unnecessary (unused) source code in the editor. For example, <code>&quot;#000000c0&quot;</code> will render the code with 75% opacity. For high contrast themes, use the <code>&quot;editorUnnecessaryCode.border&quot;</code> theme color to underline unnecessary code instead of fading it out.',
	},
	/**
	 * Background color of the editor gutter. The gutter contains the glyph margins and the line numbers.
	 */
	'editorGutter.background': {
		selector: 'editorGutter.background',
		description:
			'Background color of the editor gutter. The gutter contains the glyph margins and the line numbers.',
	},
	/**
	 * Editor gutter background color for lines that are modified.
	 */
	'editorGutter.modifiedBackground': {
		selector: 'editorGutter.modifiedBackground',
		description: 'Editor gutter background color for lines that are modified.',
	},
	/**
	 * Editor gutter background color for lines that are added.
	 */
	'editorGutter.addedBackground': {
		selector: 'editorGutter.addedBackground',
		description: 'Editor gutter background color for lines that are added.',
	},
	/**
	 * Editor gutter background color for lines that are deleted.
	 */
	'editorGutter.deletedBackground': {
		selector: 'editorGutter.deletedBackground',
		description: 'Editor gutter background color for lines that are deleted.',
	},
	/**
	 * Editor gutter decoration color for commenting ranges.
	 */
	'editorGutter.commentRangeForeground': {
		selector: 'editorGutter.commentRangeForeground',
		description: 'Editor gutter decoration color for commenting ranges.',
	},
	/**
	 * Color of the folding control in the editor gutter.
	 */
	'editorGutter.foldingControlForeground': {
		selector: 'editorGutter.foldingControlForeground',
		description: 'Color of the folding control in the editor gutter.',
	},
	/**
	 * Color of borders and arrow for resolved comments.
	 */
	'editorCommentsWidget.resolvedBorder': {
		selector: 'editorCommentsWidget.resolvedBorder',
		description: 'Color of borders and arrow for resolved comments.',
	},
	/**
	 * Color of borders and arrow for unresolved comments.
	 */
	'editorCommentsWidget.unresolvedBorder': {
		selector: 'editorCommentsWidget.unresolvedBorder',
		description: 'Color of borders and arrow for unresolved comments.',
	},
	/**
	 * Color of background for comment ranges.
	 */
	'editorCommentsWidget.rangeBackground': {
		selector: 'editorCommentsWidget.rangeBackground',
		description: 'Color of background for comment ranges.',
	},
	/**
	 * Color of border for comment ranges.
	 */
	'editorCommentsWidget.rangeBorder': {
		selector: 'editorCommentsWidget.rangeBorder',
		description: 'Color of border for comment ranges.',
	},
	/**
	 * Color of background for currently selected or hovered comment range.
	 */
	'editorCommentsWidget.rangeActiveBackground': {
		selector: 'editorCommentsWidget.rangeActiveBackground',
		description:
			'Color of background for currently selected or hovered comment range.',
	},
	/**
	 * Color of border for currently selected or hovered comment range.
	 */
	'editorCommentsWidget.rangeActiveBorder': {
		selector: 'editorCommentsWidget.rangeActiveBorder',
		description:
			'Color of border for currently selected or hovered comment range.',
	},
	/**
	 * Background color for text that got inserted. The color must not be opaque so as not to hide underlying decorations.
	 */
	'diffEditor.insertedTextBackground': {
		selector: 'diffEditor.insertedTextBackground',
		description:
			'Background color for text that got inserted. The color must not be opaque so as not to hide underlying decorations.',
	},
	/**
	 * Outline color for the text that got inserted.
	 */
	'diffEditor.insertedTextBorder': {
		selector: 'diffEditor.insertedTextBorder',
		description: 'Outline color for the text that got inserted.',
	},
	/**
	 * Background color for text that got removed. The color must not be opaque so as not to hide underlying decorations.
	 */
	'diffEditor.removedTextBackground': {
		selector: 'diffEditor.removedTextBackground',
		description:
			'Background color for text that got removed. The color must not be opaque so as not to hide underlying decorations.',
	},
	/**
	 * Outline color for text that got removed.
	 */
	'diffEditor.removedTextBorder': {
		selector: 'diffEditor.removedTextBorder',
		description: 'Outline color for text that got removed.',
	},
	/**
	 * Border color between the two text editors.
	 */
	'diffEditor.border': {
		selector: 'diffEditor.border',
		description: 'Border color between the two text editors.',
	},
	/**
	 * Color of the diff editor's diagonal fill. The diagonal fill is used in side-by-side diff views.
	 */
	'diffEditor.diagonalFill': {
		selector: 'diffEditor.diagonalFill',
		description:
			"Color of the diff editor's diagonal fill. The diagonal fill is used in side-by-side diff views.",
	},
	/**
	 * Background color for lines that got inserted. The color must not be opaque so as not to hide underlying decorations.
	 */
	'diffEditor.insertedLineBackground': {
		selector: 'diffEditor.insertedLineBackground',
		description:
			'Background color for lines that got inserted. The color must not be opaque so as not to hide underlying decorations.',
	},
	/**
	 * Background color for lines that got removed. The color must not be opaque so as not to hide underlying decorations.
	 */
	'diffEditor.removedLineBackground': {
		selector: 'diffEditor.removedLineBackground',
		description:
			'Background color for lines that got removed. The color must not be opaque so as not to hide underlying decorations.',
	},
	/**
	 * Background color for the margin where lines got inserted.
	 */
	'diffEditorGutter.insertedLineBackground': {
		selector: 'diffEditorGutter.insertedLineBackground',
		description: 'Background color for the margin where lines got inserted.',
	},
	/**
	 * Background color for the margin where lines got removed.
	 */
	'diffEditorGutter.removedLineBackground': {
		selector: 'diffEditorGutter.removedLineBackground',
		description: 'Background color for the margin where lines got removed.',
	},
	/**
	 * Diff overview ruler foreground for inserted content.
	 */
	'diffEditorOverview.insertedForeground': {
		selector: 'diffEditorOverview.insertedForeground',
		description: 'Diff overview ruler foreground for inserted content.',
	},
	/**
	 * Diff overview ruler foreground for removed content.
	 */
	'diffEditorOverview.removedForeground': {
		selector: 'diffEditorOverview.removedForeground',
		description: 'Diff overview ruler foreground for removed content.',
	},
	/**
	 * Exception widget background color.
	 */
	'debugExceptionWidget.background': {
		selector: 'debugExceptionWidget.background',
		description: 'Exception widget background color.',
	},
	/**
	 * Exception widget border color.
	 */
	'debugExceptionWidget.border': {
		selector: 'debugExceptionWidget.border',
		description: 'Exception widget border color.',
	},
	/**
	 * Editor marker navigation widget background.
	 */
	'editorMarkerNavigation.background': {
		selector: 'editorMarkerNavigation.background',
		description: 'Editor marker navigation widget background.',
	},
	/**
	 * Editor marker navigation widget error color.
	 */
	'editorMarkerNavigationError.background': {
		selector: 'editorMarkerNavigationError.background',
		description: 'Editor marker navigation widget error color.',
	},
	/**
	 * Editor marker navigation widget warning color.
	 */
	'editorMarkerNavigationWarning.background': {
		selector: 'editorMarkerNavigationWarning.background',
		description: 'Editor marker navigation widget warning color.',
	},
	/**
	 * Editor marker navigation widget info color.
	 */
	'editorMarkerNavigationInfo.background': {
		selector: 'editorMarkerNavigationInfo.background',
		description: 'Editor marker navigation widget info color.',
	},
	/**
	 * Editor marker navigation widget error heading background.
	 */
	'editorMarkerNavigationError.headerBackground': {
		selector: 'editorMarkerNavigationError.headerBackground',
		description: 'Editor marker navigation widget error heading background.',
	},
	/**
	 * Editor marker navigation widget warning heading background.
	 */
	'editorMarkerNavigationWarning.headerBackground': {
		selector: 'editorMarkerNavigationWarning.headerBackground',
		description: 'Editor marker navigation widget warning heading background.',
	},
	/**
	 * Editor marker navigation widget info heading background.
	 */
	'editorMarkerNavigationInfo.headerBackground': {
		selector: 'editorMarkerNavigationInfo.headerBackground',
		description: 'Editor marker navigation widget info heading background.',
	},
	/**
	 * Color of the peek view borders and arrow.
	 */
	'peekView.border': {
		selector: 'peekView.border',
		description: 'Color of the peek view borders and arrow.',
	},
	/**
	 * Background color of the peek view editor.
	 */
	'peekViewEditor.background': {
		selector: 'peekViewEditor.background',
		description: 'Background color of the peek view editor.',
	},
	/**
	 * Background color of the gutter in the peek view editor.
	 */
	'peekViewEditorGutter.background': {
		selector: 'peekViewEditorGutter.background',
		description: 'Background color of the gutter in the peek view editor.',
	},
	/**
	 * Match highlight color in the peek view editor.
	 */
	'peekViewEditor.matchHighlightBackground': {
		selector: 'peekViewEditor.matchHighlightBackground',
		description: 'Match highlight color in the peek view editor.',
	},
	/**
	 * Match highlight border color in the peek view editor.
	 */
	'peekViewEditor.matchHighlightBorder': {
		selector: 'peekViewEditor.matchHighlightBorder',
		description: 'Match highlight border color in the peek view editor.',
	},
	/**
	 * Background color of the peek view result list.
	 */
	'peekViewResult.background': {
		selector: 'peekViewResult.background',
		description: 'Background color of the peek view result list.',
	},
	/**
	 * Foreground color for file nodes in the peek view result list.
	 */
	'peekViewResult.fileForeground': {
		selector: 'peekViewResult.fileForeground',
		description:
			'Foreground color for file nodes in the peek view result list.',
	},
	/**
	 * Foreground color for line nodes in the peek view result list.
	 */
	'peekViewResult.lineForeground': {
		selector: 'peekViewResult.lineForeground',
		description:
			'Foreground color for line nodes in the peek view result list.',
	},
	/**
	 * Match highlight color in the peek view result list.
	 */
	'peekViewResult.matchHighlightBackground': {
		selector: 'peekViewResult.matchHighlightBackground',
		description: 'Match highlight color in the peek view result list.',
	},
	/**
	 * Background color of the selected entry in the peek view result list.
	 */
	'peekViewResult.selectionBackground': {
		selector: 'peekViewResult.selectionBackground',
		description:
			'Background color of the selected entry in the peek view result list.',
	},
	/**
	 * Foreground color of the selected entry in the peek view result list.
	 */
	'peekViewResult.selectionForeground': {
		selector: 'peekViewResult.selectionForeground',
		description:
			'Foreground color of the selected entry in the peek view result list.',
	},
	/**
	 * Background color of the peek view title area.
	 */
	'peekViewTitle.background': {
		selector: 'peekViewTitle.background',
		description: 'Background color of the peek view title area.',
	},
	/**
	 * Color of the peek view title info.
	 */
	'peekViewTitleDescription.foreground': {
		selector: 'peekViewTitleDescription.foreground',
		description: 'Color of the peek view title info.',
	},
	/**
	 * Color of the peek view title.
	 */
	'peekViewTitleLabel.foreground': {
		selector: 'peekViewTitleLabel.foreground',
		description: 'Color of the peek view title.',
	},
	/**
	 * Current header background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations.
	 */
	'merge.currentHeaderBackground': {
		selector: 'merge.currentHeaderBackground',
		description:
			'Current header background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations.',
	},
	/**
	 * Current content background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations.
	 */
	'merge.currentContentBackground': {
		selector: 'merge.currentContentBackground',
		description:
			'Current content background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations.',
	},
	/**
	 * Incoming header background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations.
	 */
	'merge.incomingHeaderBackground': {
		selector: 'merge.incomingHeaderBackground',
		description:
			'Incoming header background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations.',
	},
	/**
	 * Incoming content background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations.
	 */
	'merge.incomingContentBackground': {
		selector: 'merge.incomingContentBackground',
		description:
			'Incoming content background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations.',
	},
	/**
	 * Border color on headers and the splitter in inline merge conflicts.
	 */
	'merge.border': {
		selector: 'merge.border',
		description:
			'Border color on headers and the splitter in inline merge conflicts.',
	},
	/**
	 * Common ancestor content background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.
	 */
	'merge.commonContentBackground': {
		selector: 'merge.commonContentBackground',
		description:
			'Common ancestor content background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.',
	},
	/**
	 * Common ancestor header background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.
	 */
	'merge.commonHeaderBackground': {
		selector: 'merge.commonHeaderBackground',
		description:
			'Common ancestor header background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.',
	},
	/**
	 * Current overview ruler foreground for inline merge conflicts.
	 */
	'editorOverviewRuler.currentContentForeground': {
		selector: 'editorOverviewRuler.currentContentForeground',
		description:
			'Current overview ruler foreground for inline merge conflicts.',
	},
	/**
	 * Incoming overview ruler foreground for inline merge conflicts.
	 */
	'editorOverviewRuler.incomingContentForeground': {
		selector: 'editorOverviewRuler.incomingContentForeground',
		description:
			'Incoming overview ruler foreground for inline merge conflicts.',
	},
	/**
	 * Common ancestor overview ruler foreground for inline merge conflicts.
	 */
	'editorOverviewRuler.commonContentForeground': {
		selector: 'editorOverviewRuler.commonContentForeground',
		description:
			'Common ancestor overview ruler foreground for inline merge conflicts.',
	},
	/**
	 * The background color for changes.
	 */
	'mergeEditor.change.background': {
		selector: 'mergeEditor.change.background',
		description: 'The background color for changes.',
	},
	/**
	 * The background color for word changes.
	 */
	'mergeEditor.change.word.background': {
		selector: 'mergeEditor.change.word.background',
		description: 'The background color for word changes.',
	},
	/**
	 * The border color of unhandled unfocused conflicts.
	 */
	'mergeEditor.conflict.unhandledUnfocused.border': {
		selector: 'mergeEditor.conflict.unhandledUnfocused.border',
		description: 'The border color of unhandled unfocused conflicts.',
	},
	/**
	 * The border color of unhandled focused conflicts.
	 */
	'mergeEditor.conflict.unhandledFocused.border': {
		selector: 'mergeEditor.conflict.unhandledFocused.border',
		description: 'The border color of unhandled focused conflicts.',
	},
	/**
	 * The border color of handled unfocused conflicts.
	 */
	'mergeEditor.conflict.handledUnfocused.border': {
		selector: 'mergeEditor.conflict.handledUnfocused.border',
		description: 'The border color of handled unfocused conflicts.',
	},
	/**
	 * The border color of handled focused conflicts.
	 */
	'mergeEditor.conflict.handledFocused.border': {
		selector: 'mergeEditor.conflict.handledFocused.border',
		description: 'The border color of handled focused conflicts.',
	},
	/**
	 * The foreground color for changes in input 1.
	 */
	'mergeEditor.conflict.handled.minimapOverViewRuler': {
		selector: 'mergeEditor.conflict.handled.minimapOverViewRuler',
		description: 'The foreground color for changes in input 1.',
	},
	/**
	 * The foreground color for changes in input 1.
	 */
	'mergeEditor.conflict.unhandled.minimapOverViewRuler': {
		selector: 'mergeEditor.conflict.unhandled.minimapOverViewRuler',
		description: 'The foreground color for changes in input 1.',
	},
	/**
	 * The background of the &quot;Conflicting Lines&quot; text.
	 */
	'mergeEditor.conflictingLines.background': {
		selector: 'mergeEditor.conflictingLines.background',
		description: 'The background of the &quot;Conflicting Lines&quot; text.',
	},
	/**
	 * The background color for changes in base.
	 */
	'mergeEditor.changeBase.background': {
		selector: 'mergeEditor.changeBase.background',
		description: 'The background color for changes in base.',
	},
	/**
	 * The background color for word changes in base.
	 */
	'mergeEditor.changeBase.word.background': {
		selector: 'mergeEditor.changeBase.word.background',
		description: 'The background color for word changes in base.',
	},
	/**
	 * The background color of decorations in input 1.
	 */
	'mergeEditor.conflict.input1.background': {
		selector: 'mergeEditor.conflict.input1.background',
		description: 'The background color of decorations in input 1.',
	},
	/**
	 * The background color of decorations in input 2.
	 */
	'mergeEditor.conflict.input2.background': {
		selector: 'mergeEditor.conflict.input2.background',
		description: 'The background color of decorations in input 2.',
	},
	/**
	 * Panel background color.
	 */
	'panel.background': {
		selector: 'panel.background',
		description: 'Panel background color.',
	},
	/**
	 * Panel border color to separate the panel from the editor.
	 */
	'panel.border': {
		selector: 'panel.border',
		description: 'Panel border color to separate the panel from the editor.',
	},
	/**
	 * Drag and drop feedback color for the panel titles. Panels are shown below the editor area and contain views like output and integrated terminal.
	 */
	'panel.dropBorder': {
		selector: 'panel.dropBorder',
		description:
			'Drag and drop feedback color for the panel titles. Panels are shown below the editor area and contain views like output and integrated terminal.',
	},
	/**
	 * Border color for the active panel title.
	 */
	'panelTitle.activeBorder': {
		selector: 'panelTitle.activeBorder',
		description: 'Border color for the active panel title.',
	},
	/**
	 * Title color for the active panel.
	 */
	'panelTitle.activeForeground': {
		selector: 'panelTitle.activeForeground',
		description: 'Title color for the active panel.',
	},
	/**
	 * Title color for the inactive panel.
	 */
	'panelTitle.inactiveForeground': {
		selector: 'panelTitle.inactiveForeground',
		description: 'Title color for the inactive panel.',
	},
	/**
	 * Input box border for inputs in the panel.
	 */
	'panelInput.border': {
		selector: 'panelInput.border',
		description: 'Input box border for inputs in the panel.',
	},
	/**
	 * Panel section border color used when multiple views are stacked horizontally in the panel. Panels are shown below the editor area and contain views like output and integrated terminal.
	 */
	'panelSection.border': {
		selector: 'panelSection.border',
		description:
			'Panel section border color used when multiple views are stacked horizontally in the panel. Panels are shown below the editor area and contain views like output and integrated terminal.',
	},
	/**
	 * Drag and drop feedback color for the panel sections. The color should have transparency so that the panel sections can still shine through. Panels are shown below the editor area and contain views like output and integrated terminal.
	 */
	'panelSection.dropBackground': {
		selector: 'panelSection.dropBackground',
		description:
			'Drag and drop feedback color for the panel sections. The color should have transparency so that the panel sections can still shine through. Panels are shown below the editor area and contain views like output and integrated terminal.',
	},
	/**
	 * Panel section header background color. Panels are shown below the editor area and contain views like output and integrated terminal.
	 */
	'panelSectionHeader.background': {
		selector: 'panelSectionHeader.background',
		description:
			'Panel section header background color. Panels are shown below the editor area and contain views like output and integrated terminal.',
	},
	/**
	 * Panel section header foreground color. Panels are shown below the editor area and contain views like output and integrated terminal.
	 */
	'panelSectionHeader.foreground': {
		selector: 'panelSectionHeader.foreground',
		description:
			'Panel section header foreground color. Panels are shown below the editor area and contain views like output and integrated terminal.',
	},
	/**
	 * Panel section header border color used when multiple views are stacked vertically in the panel. Panels are shown below the editor area and contain views like output and integrated terminal.
	 */
	'panelSectionHeader.border': {
		selector: 'panelSectionHeader.border',
		description:
			'Panel section header border color used when multiple views are stacked vertically in the panel. Panels are shown below the editor area and contain views like output and integrated terminal.',
	},
	/**
	 * Standard Status Bar background color.
	 */
	'statusBar.background': {
		selector: 'statusBar.background',
		description: 'Standard Status Bar background color.',
	},
	/**
	 * Status Bar foreground color.
	 */
	'statusBar.foreground': {
		selector: 'statusBar.foreground',
		description: 'Status Bar foreground color.',
	},
	/**
	 * Status Bar border color separating the Status Bar and editor.
	 */
	'statusBar.border': {
		selector: 'statusBar.border',
		description:
			'Status Bar border color separating the Status Bar and editor.',
	},
	/**
	 * Status Bar background color when a program is being debugged.
	 */
	'statusBar.debuggingBackground': {
		selector: 'statusBar.debuggingBackground',
		description:
			'Status Bar background color when a program is being debugged.',
	},
	/**
	 * Status Bar foreground color when a program is being debugged.
	 */
	'statusBar.debuggingForeground': {
		selector: 'statusBar.debuggingForeground',
		description:
			'Status Bar foreground color when a program is being debugged.',
	},
	/**
	 * Status Bar border color separating the Status Bar and editor when a program is being debugged.
	 */
	'statusBar.debuggingBorder': {
		selector: 'statusBar.debuggingBorder',
		description:
			'Status Bar border color separating the Status Bar and editor when a program is being debugged.',
	},
	/**
	 * Status Bar foreground color when no folder is opened.
	 */
	'statusBar.noFolderForeground': {
		selector: 'statusBar.noFolderForeground',
		description: 'Status Bar foreground color when no folder is opened.',
	},
	/**
	 * Status Bar background color when no folder is opened.
	 */
	'statusBar.noFolderBackground': {
		selector: 'statusBar.noFolderBackground',
		description: 'Status Bar background color when no folder is opened.',
	},
	/**
	 * Status Bar border color separating the Status Bar and editor when no folder is opened.
	 */
	'statusBar.noFolderBorder': {
		selector: 'statusBar.noFolderBorder',
		description:
			'Status Bar border color separating the Status Bar and editor when no folder is opened.',
	},
	/**
	 * Status Bar item background color when clicking.
	 */
	'statusBarItem.activeBackground': {
		selector: 'statusBarItem.activeBackground',
		description: 'Status Bar item background color when clicking.',
	},
	/**
	 * Status Bar item background color when hovering.
	 */
	'statusBarItem.hoverBackground': {
		selector: 'statusBarItem.hoverBackground',
		description: 'Status Bar item background color when hovering.',
	},
	/**
	 * Status Bar prominent items foreground color.
	 */
	'statusBarItem.prominentForeground': {
		selector: 'statusBarItem.prominentForeground',
		description: 'Status Bar prominent items foreground color.',
	},
	/**
	 * Status Bar prominent items background color.
	 */
	'statusBarItem.prominentBackground': {
		selector: 'statusBarItem.prominentBackground',
		description: 'Status Bar prominent items background color.',
	},
	/**
	 * Status Bar prominent items background color when hovering.
	 */
	'statusBarItem.prominentHoverBackground': {
		selector: 'statusBarItem.prominentHoverBackground',
		description: 'Status Bar prominent items background color when hovering.',
	},
	/**
	 * Background color for the remote indicator on the status bar.
	 */
	'statusBarItem.remoteBackground': {
		selector: 'statusBarItem.remoteBackground',
		description: 'Background color for the remote indicator on the status bar.',
	},
	/**
	 * Foreground color for the remote indicator on the status bar.
	 */
	'statusBarItem.remoteForeground': {
		selector: 'statusBarItem.remoteForeground',
		description: 'Foreground color for the remote indicator on the status bar.',
	},
	/**
	 * Status bar error items background color. Error items stand out from other status bar entries to indicate error conditions.
	 */
	'statusBarItem.errorBackground': {
		selector: 'statusBarItem.errorBackground',
		description:
			'Status bar error items background color. Error items stand out from other status bar entries to indicate error conditions.',
	},
	/**
	 * Status bar error items foreground color. Error items stand out from other status bar entries to indicate error conditions.
	 */
	'statusBarItem.errorForeground': {
		selector: 'statusBarItem.errorForeground',
		description:
			'Status bar error items foreground color. Error items stand out from other status bar entries to indicate error conditions.',
	},
	/**
	 * Status bar warning items background color. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window.
	 */
	'statusBarItem.warningBackground': {
		selector: 'statusBarItem.warningBackground',
		description:
			'Status bar warning items background color. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window.',
	},
	/**
	 * Status bar warning items foreground color. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window.
	 */
	'statusBarItem.warningForeground': {
		selector: 'statusBarItem.warningForeground',
		description:
			'Status bar warning items foreground color. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window.',
	},
	/**
	 * Status bar item background color when hovering an item that contains two hovers. The status bar is shown in the bottom of the window.
	 */
	'statusBarItem.compactHoverBackground': {
		selector: 'statusBarItem.compactHoverBackground',
		description:
			'Status bar item background color when hovering an item that contains two hovers. The status bar is shown in the bottom of the window.',
	},
	/**
	 * Status bar item border color when focused on keyboard navigation. The status bar is shown in the bottom of the window.
	 */
	'statusBarItem.focusBorder': {
		selector: 'statusBarItem.focusBorder',
		description:
			'Status bar item border color when focused on keyboard navigation. The status bar is shown in the bottom of the window.',
	},
	/**
	 * Status bar border color when focused on keyboard navigation. The status bar is shown in the bottom of the window.
	 */
	'statusBar.focusBorder': {
		selector: 'statusBar.focusBorder',
		description:
			'Status bar border color when focused on keyboard navigation. The status bar is shown in the bottom of the window.',
	},
	/**
	 * Title Bar background when the window is active.
	 */
	'titleBar.activeBackground': {
		selector: 'titleBar.activeBackground',
		description: 'Title Bar background when the window is active.',
	},
	/**
	 * Title Bar foreground when the window is active.
	 */
	'titleBar.activeForeground': {
		selector: 'titleBar.activeForeground',
		description: 'Title Bar foreground when the window is active.',
	},
	/**
	 * Title Bar background when the window is inactive.
	 */
	'titleBar.inactiveBackground': {
		selector: 'titleBar.inactiveBackground',
		description: 'Title Bar background when the window is inactive.',
	},
	/**
	 * Title Bar foreground when the window is inactive.
	 */
	'titleBar.inactiveForeground': {
		selector: 'titleBar.inactiveForeground',
		description: 'Title Bar foreground when the window is inactive.',
	},
	/**
	 * Title bar border color.
	 */
	'titleBar.border': {
		selector: 'titleBar.border',
		description: 'Title bar border color.',
	},
	/**
	 * Foreground color of the selected menu item in the menubar.
	 */
	'menubar.selectionForeground': {
		selector: 'menubar.selectionForeground',
		description: 'Foreground color of the selected menu item in the menubar.',
	},
	/**
	 * Background color of the selected menu item in the menubar.
	 */
	'menubar.selectionBackground': {
		selector: 'menubar.selectionBackground',
		description: 'Background color of the selected menu item in the menubar.',
	},
	/**
	 * Border color of the selected menu item in the menubar.
	 */
	'menubar.selectionBorder': {
		selector: 'menubar.selectionBorder',
		description: 'Border color of the selected menu item in the menubar.',
	},
	/**
	 * Foreground color of menu items.
	 */
	'menu.foreground': {
		selector: 'menu.foreground',
		description: 'Foreground color of menu items.',
	},
	/**
	 * Background color of menu items.
	 */
	'menu.background': {
		selector: 'menu.background',
		description: 'Background color of menu items.',
	},
	/**
	 * Foreground color of the selected menu item in menus.
	 */
	'menu.selectionForeground': {
		selector: 'menu.selectionForeground',
		description: 'Foreground color of the selected menu item in menus.',
	},
	/**
	 * Background color of the selected menu item in menus.
	 */
	'menu.selectionBackground': {
		selector: 'menu.selectionBackground',
		description: 'Background color of the selected menu item in menus.',
	},
	/**
	 * Border color of the selected menu item in menus.
	 */
	'menu.selectionBorder': {
		selector: 'menu.selectionBorder',
		description: 'Border color of the selected menu item in menus.',
	},
	/**
	 * Color of a separator menu item in menus.
	 */
	'menu.separatorBackground': {
		selector: 'menu.separatorBackground',
		description: 'Color of a separator menu item in menus.',
	},
	/**
	 * Border color of menus.
	 */
	'menu.border': {
		selector: 'menu.border',
		description: 'Border color of menus.',
	},
	/**
	 * Foreground color of the Command Center.
	 */
	'commandCenter.foreground': {
		selector: 'commandCenter.foreground',
		description: 'Foreground color of the Command Center.',
	},
	/**
	 * Active foreground color of the Command Center.
	 */
	'commandCenter.activeForeground': {
		selector: 'commandCenter.activeForeground',
		description: 'Active foreground color of the Command Center.',
	},
	/**
	 * Background color of the Command Center.
	 */
	'commandCenter.background': {
		selector: 'commandCenter.background',
		description: 'Background color of the Command Center.',
	},
	/**
	 * Active background color of the Command Center.
	 */
	'commandCenter.activeBackground': {
		selector: 'commandCenter.activeBackground',
		description: 'Active background color of the Command Center.',
	},
	/**
	 * Border color of the Command Center.
	 */
	'commandCenter.border': {
		selector: 'commandCenter.border',
		description: 'Border color of the Command Center.',
	},
	/**
	 * Foreground color of the Command Center when the window is inactive.
	 */
	'commandCenter.inactiveForeground': {
		selector: 'commandCenter.inactiveForeground',
		description:
			'Foreground color of the Command Center when the window is inactive.',
	},
	/**
	 * Border color of the Command Center when the window is inactive.
	 */
	'commandCenter.inactiveBorder': {
		selector: 'commandCenter.inactiveBorder',
		description:
			'Border color of the Command Center when the window is inactive.',
	},
	/**
	 * Active border color of the command center.
	 */
	'commandCenter.activeBorder': {
		selector: 'commandCenter.activeBorder',
		description: 'Active border color of the command center.',
	},
	/**
	 * Notification Center border color.
	 */
	'notificationCenter.border': {
		selector: 'notificationCenter.border',
		description: 'Notification Center border color.',
	},
	/**
	 * Notification Center header foreground color.
	 */
	'notificationCenterHeader.foreground': {
		selector: 'notificationCenterHeader.foreground',
		description: 'Notification Center header foreground color.',
	},
	/**
	 * Notification Center header background color.
	 */
	'notificationCenterHeader.background': {
		selector: 'notificationCenterHeader.background',
		description: 'Notification Center header background color.',
	},
	/**
	 * Notification toast border color.
	 */
	'notificationToast.border': {
		selector: 'notificationToast.border',
		description: 'Notification toast border color.',
	},
	/**
	 * Notification foreground color.
	 */
	'notifications.foreground': {
		selector: 'notifications.foreground',
		description: 'Notification foreground color.',
	},
	/**
	 * Notification background color.
	 */
	'notifications.background': {
		selector: 'notifications.background',
		description: 'Notification background color.',
	},
	/**
	 * Notification border color separating from other notifications in the Notification Center.
	 */
	'notifications.border': {
		selector: 'notifications.border',
		description:
			'Notification border color separating from other notifications in the Notification Center.',
	},
	/**
	 * Notification links foreground color.
	 */
	'notificationLink.foreground': {
		selector: 'notificationLink.foreground',
		description: 'Notification links foreground color.',
	},
	/**
	 * The color used for the notification error icon.
	 */
	'notificationsErrorIcon.foreground': {
		selector: 'notificationsErrorIcon.foreground',
		description: 'The color used for the notification error icon.',
	},
	/**
	 * The color used for the notification warning icon.
	 */
	'notificationsWarningIcon.foreground': {
		selector: 'notificationsWarningIcon.foreground',
		description: 'The color used for the notification warning icon.',
	},
	/**
	 * The color used for the notification info icon.
	 */
	'notificationsInfoIcon.foreground': {
		selector: 'notificationsInfoIcon.foreground',
		description: 'The color used for the notification info icon.',
	},
	/**
	 * Banner background color.
	 */
	'banner.background': {
		selector: 'banner.background',
		description: 'Banner background color.',
	},
	/**
	 * Banner foreground color.
	 */
	'banner.foreground': {
		selector: 'banner.foreground',
		description: 'Banner foreground color.',
	},
	/**
	 * Color for the icon in front of the banner text.
	 */
	'banner.iconForeground': {
		selector: 'banner.iconForeground',
		description: 'Color for the icon in front of the banner text.',
	},
	/**
	 * Extension view button foreground color (for example <strong>Install</strong> button).
	 */
	'extensionButton.prominentForeground': {
		selector: 'extensionButton.prominentForeground',
		description:
			'Extension view button foreground color (for example <strong>Install</strong> button).',
	},
	/**
	 * Extension view button background color.
	 */
	'extensionButton.prominentBackground': {
		selector: 'extensionButton.prominentBackground',
		description: 'Extension view button background color.',
	},
	/**
	 * Extension view button background hover color.
	 */
	'extensionButton.prominentHoverBackground': {
		selector: 'extensionButton.prominentHoverBackground',
		description: 'Extension view button background hover color.',
	},
	/**
	 * Button background color for extension actions.
	 */
	'extensionButton.background': {
		selector: 'extensionButton.background',
		description: 'Button background color for extension actions.',
	},
	/**
	 * Button foreground color for extension actions.
	 */
	'extensionButton.foreground': {
		selector: 'extensionButton.foreground',
		description: 'Button foreground color for extension actions.',
	},
	/**
	 * Button background hover color for extension actions.
	 */
	'extensionButton.hoverBackground': {
		selector: 'extensionButton.hoverBackground',
		description: 'Button background hover color for extension actions.',
	},
	/**
	 * Button separator color for extension actions.
	 */
	'extensionButton.separator': {
		selector: 'extensionButton.separator',
		description: 'Button separator color for extension actions.',
	},
	/**
	 * Background color for the remote badge in the extensions view.
	 */
	'extensionBadge.remoteBackground': {
		selector: 'extensionBadge.remoteBackground',
		description:
			'Background color for the remote badge in the extensions view.',
	},
	/**
	 * Foreground color for the remote badge in the extensions view.
	 */
	'extensionBadge.remoteForeground': {
		selector: 'extensionBadge.remoteForeground',
		description:
			'Foreground color for the remote badge in the extensions view.',
	},
	/**
	 * The icon color for extension ratings.
	 */
	'extensionIcon.starForeground': {
		selector: 'extensionIcon.starForeground',
		description: 'The icon color for extension ratings.',
	},
	/**
	 * The icon color for extension verified publisher.
	 */
	'extensionIcon.verifiedForeground': {
		selector: 'extensionIcon.verifiedForeground',
		description: 'The icon color for extension verified publisher.',
	},
	/**
	 * The icon color for pre-release extension.
	 */
	'extensionIcon.preReleaseForeground': {
		selector: 'extensionIcon.preReleaseForeground',
		description: 'The icon color for pre-release extension.',
	},
	/**
	 * The icon color for extension sponsor.
	 */
	'extensionIcon.sponsorForeground': {
		selector: 'extensionIcon.sponsorForeground',
		description: 'The icon color for extension sponsor.',
	},
	/**
	 * Quick picker (Quick Open) color for grouping borders.
	 */
	'pickerGroup.border': {
		selector: 'pickerGroup.border',
		description: 'Quick picker (Quick Open) color for grouping borders.',
	},
	/**
	 * Quick picker (Quick Open) color for grouping labels.
	 */
	'pickerGroup.foreground': {
		selector: 'pickerGroup.foreground',
		description: 'Quick picker (Quick Open) color for grouping labels.',
	},
	/**
	 * Quick input background color. The quick input widget is the container for views like the color theme picker.
	 */
	'quickInput.background': {
		selector: 'quickInput.background',
		description:
			'Quick input background color. The quick input widget is the container for views like the color theme picker.',
	},
	/**
	 * Quick input foreground color. The quick input widget is the container for views like the color theme picker.
	 */
	'quickInput.foreground': {
		selector: 'quickInput.foreground',
		description:
			'Quick input foreground color. The quick input widget is the container for views like the color theme picker.',
	},
	/**
	 * Quick picker background color for the focused item.
	 */
	'quickInputList.focusBackground': {
		selector: 'quickInputList.focusBackground',
		description: 'Quick picker background color for the focused item.',
	},
	/**
	 * Quick picker foreground color for the focused item.
	 */
	'quickInputList.focusForeground': {
		selector: 'quickInputList.focusForeground',
		description: 'Quick picker foreground color for the focused item.',
	},
	/**
	 * Quick picker icon foreground color for the focused item.
	 */
	'quickInputList.focusIconForeground': {
		selector: 'quickInputList.focusIconForeground',
		description: 'Quick picker icon foreground color for the focused item.',
	},
	/**
	 * Quick picker title background color. The quick picker widget is the container for pickers like the Command Palette.
	 */
	'quickInputTitle.background': {
		selector: 'quickInputTitle.background',
		description:
			'Quick picker title background color. The quick picker widget is the container for pickers like the Command Palette.',
	},
	/**
	 * Keybinding label background color. The keybinding label is used to represent a keyboard shortcut.
	 */
	'keybindingLabel.background': {
		selector: 'keybindingLabel.background',
		description:
			'Keybinding label background color. The keybinding label is used to represent a keyboard shortcut.',
	},
	/**
	 * Keybinding label foreground color. The keybinding label is used to represent a keyboard shortcut.
	 */
	'keybindingLabel.foreground': {
		selector: 'keybindingLabel.foreground',
		description:
			'Keybinding label foreground color. The keybinding label is used to represent a keyboard shortcut.',
	},
	/**
	 * Keybinding label border color. The keybinding label is used to represent a keyboard shortcut.
	 */
	'keybindingLabel.border': {
		selector: 'keybindingLabel.border',
		description:
			'Keybinding label border color. The keybinding label is used to represent a keyboard shortcut.',
	},
	/**
	 * Keybinding label border bottom color. The keybinding label is used to represent a keyboard shortcut.
	 */
	'keybindingLabel.bottomBorder': {
		selector: 'keybindingLabel.bottomBorder',
		description:
			'Keybinding label border bottom color. The keybinding label is used to represent a keyboard shortcut.',
	},
	/**
	 * Background color for the keyboard shortcuts table header.
	 */
	'keybindingTable.headerBackground': {
		selector: 'keybindingTable.headerBackground',
		description: 'Background color for the keyboard shortcuts table header.',
	},
	/**
	 * Background color for the keyboard shortcuts table alternating rows.
	 */
	'keybindingTable.rowsBackground': {
		selector: 'keybindingTable.rowsBackground',
		description:
			'Background color for the keyboard shortcuts table alternating rows.',
	},
	/**
	 * The background of the Integrated Terminal's viewport.
	 */
	'terminal.background': {
		selector: 'terminal.background',
		description: "The background of the Integrated Terminal's viewport.",
	},
	/**
	 * The color of the border that separates split panes within the terminal. This defaults to panel.border.
	 */
	'terminal.border': {
		selector: 'terminal.border',
		description:
			'The color of the border that separates split panes within the terminal. This defaults to panel.border.',
	},
	/**
	 * The default foreground color of the Integrated Terminal.
	 */
	'terminal.foreground': {
		selector: 'terminal.foreground',
		description: 'The default foreground color of the Integrated Terminal.',
	},
	/**
	 * 'Black' ANSI color in the terminal.
	 */
	'terminal.ansiBlack': {
		selector: 'terminal.ansiBlack',
		description: "'Black' ANSI color in the terminal.",
	},
	/**
	 * 'Blue' ANSI color in the terminal.
	 */
	'terminal.ansiBlue': {
		selector: 'terminal.ansiBlue',
		description: "'Blue' ANSI color in the terminal.",
	},
	/**
	 * 'BrightBlack' ANSI color in the terminal.
	 */
	'terminal.ansiBrightBlack': {
		selector: 'terminal.ansiBrightBlack',
		description: "'BrightBlack' ANSI color in the terminal.",
	},
	/**
	 * 'BrightBlue' ANSI color in the terminal.
	 */
	'terminal.ansiBrightBlue': {
		selector: 'terminal.ansiBrightBlue',
		description: "'BrightBlue' ANSI color in the terminal.",
	},
	/**
	 * 'BrightCyan' ANSI color in the terminal.
	 */
	'terminal.ansiBrightCyan': {
		selector: 'terminal.ansiBrightCyan',
		description: "'BrightCyan' ANSI color in the terminal.",
	},
	/**
	 * 'BrightGreen' ANSI color in the terminal.
	 */
	'terminal.ansiBrightGreen': {
		selector: 'terminal.ansiBrightGreen',
		description: "'BrightGreen' ANSI color in the terminal.",
	},
	/**
	 * 'BrightMagenta' ANSI color in the terminal.
	 */
	'terminal.ansiBrightMagenta': {
		selector: 'terminal.ansiBrightMagenta',
		description: "'BrightMagenta' ANSI color in the terminal.",
	},
	/**
	 * 'BrightRed' ANSI color in the terminal.
	 */
	'terminal.ansiBrightRed': {
		selector: 'terminal.ansiBrightRed',
		description: "'BrightRed' ANSI color in the terminal.",
	},
	/**
	 * 'BrightWhite' ANSI color in the terminal.
	 */
	'terminal.ansiBrightWhite': {
		selector: 'terminal.ansiBrightWhite',
		description: "'BrightWhite' ANSI color in the terminal.",
	},
	/**
	 * 'BrightYellow' ANSI color in the terminal.
	 */
	'terminal.ansiBrightYellow': {
		selector: 'terminal.ansiBrightYellow',
		description: "'BrightYellow' ANSI color in the terminal.",
	},
	/**
	 * 'Cyan' ANSI color in the terminal.
	 */
	'terminal.ansiCyan': {
		selector: 'terminal.ansiCyan',
		description: "'Cyan' ANSI color in the terminal.",
	},
	/**
	 * 'Green' ANSI color in the terminal.
	 */
	'terminal.ansiGreen': {
		selector: 'terminal.ansiGreen',
		description: "'Green' ANSI color in the terminal.",
	},
	/**
	 * 'Magenta' ANSI color in the terminal.
	 */
	'terminal.ansiMagenta': {
		selector: 'terminal.ansiMagenta',
		description: "'Magenta' ANSI color in the terminal.",
	},
	/**
	 * 'Red' ANSI color in the terminal.
	 */
	'terminal.ansiRed': {
		selector: 'terminal.ansiRed',
		description: "'Red' ANSI color in the terminal.",
	},
	/**
	 * 'White' ANSI color in the terminal.
	 */
	'terminal.ansiWhite': {
		selector: 'terminal.ansiWhite',
		description: "'White' ANSI color in the terminal.",
	},
	/**
	 * 'Yellow' ANSI color in the terminal.
	 */
	'terminal.ansiYellow': {
		selector: 'terminal.ansiYellow',
		description: "'Yellow' ANSI color in the terminal.",
	},
	/**
	 * The selection background color of the terminal.
	 */
	'terminal.selectionBackground': {
		selector: 'terminal.selectionBackground',
		description: 'The selection background color of the terminal.',
	},
	/**
	 * The selection foreground color of the terminal. When this is null the selection foreground will be retained and have the minimum contrast ratio feature applied.
	 */
	'terminal.selectionForeground': {
		selector: 'terminal.selectionForeground',
		description:
			'The selection foreground color of the terminal. When this is null the selection foreground will be retained and have the minimum contrast ratio feature applied.',
	},
	/**
	 * The selection background color of the terminal when it does not have focus.
	 */
	'terminal.inactiveSelectionBackground': {
		selector: 'terminal.inactiveSelectionBackground',
		description:
			'The selection background color of the terminal when it does not have focus.',
	},
	/**
	 * Color of the current search match in the terminal. The color must not be opaque so as not to hide underlying terminal content.
	 */
	'terminal.findMatchBackground': {
		selector: 'terminal.findMatchBackground',
		description:
			'Color of the current search match in the terminal. The color must not be opaque so as not to hide underlying terminal content.',
	},
	/**
	 * Border color of the current search match in the terminal.
	 */
	'terminal.findMatchBorder': {
		selector: 'terminal.findMatchBorder',
		description: 'Border color of the current search match in the terminal.',
	},
	/**
	 * Color of the other search matches in the terminal. The color must not be opaque so as not to hide underlying terminal content.
	 */
	'terminal.findMatchHighlightBackground': {
		selector: 'terminal.findMatchHighlightBackground',
		description:
			'Color of the other search matches in the terminal. The color must not be opaque so as not to hide underlying terminal content.',
	},
	/**
	 * Border color of the other search matches in the terminal.
	 */
	'terminal.findMatchHighlightBorder': {
		selector: 'terminal.findMatchHighlightBorder',
		description: 'Border color of the other search matches in the terminal.',
	},
	/**
	 * The background color of the terminal cursor. Allows customizing the color of a character overlapped by a block cursor.
	 */
	'terminalCursor.background': {
		selector: 'terminalCursor.background',
		description:
			'The background color of the terminal cursor. Allows customizing the color of a character overlapped by a block cursor.',
	},
	/**
	 * The foreground color of the terminal cursor.
	 */
	'terminalCursor.foreground': {
		selector: 'terminalCursor.foreground',
		description: 'The foreground color of the terminal cursor.',
	},
	/**
	 * The background color when dragging on top of terminals. The color should have transparency so that the terminal contents can still shine through.
	 */
	'terminal.dropBackground': {
		selector: 'terminal.dropBackground',
		description:
			'The background color when dragging on top of terminals. The color should have transparency so that the terminal contents can still shine through.',
	},
	/**
	 * Border on the side of the terminal tab in the panel. This defaults to <code>tab.activeBorder</code>.
	 */
	'terminal.tab.activeBorder': {
		selector: 'terminal.tab.activeBorder',
		description:
			'Border on the side of the terminal tab in the panel. This defaults to <code>tab.activeBorder</code>.',
	},
	/**
	 * The default terminal command decoration background color.
	 */
	'terminalCommandDecoration.defaultBackground': {
		selector: 'terminalCommandDecoration.defaultBackground',
		description: 'The default terminal command decoration background color.',
	},
	/**
	 * The terminal command decoration background color for successful commands.
	 */
	'terminalCommandDecoration.successBackground': {
		selector: 'terminalCommandDecoration.successBackground',
		description:
			'The terminal command decoration background color for successful commands.',
	},
	/**
	 * The terminal command decoration background color for error commands.
	 */
	'terminalCommandDecoration.errorBackground': {
		selector: 'terminalCommandDecoration.errorBackground',
		description:
			'The terminal command decoration background color for error commands.',
	},
	/**
	 * The overview ruler cursor color.
	 */
	'terminalOverviewRuler.cursorForeground': {
		selector: 'terminalOverviewRuler.cursorForeground',
		description: 'The overview ruler cursor color.',
	},
	/**
	 * Overview ruler marker color for find matches in the terminal.
	 */
	'terminalOverviewRuler.findMatchForeground': {
		selector: 'terminalOverviewRuler.findMatchForeground',
		description:
			'Overview ruler marker color for find matches in the terminal.',
	},
	/**
	 * Debug toolbar background color.
	 */
	'debugToolBar.background': {
		selector: 'debugToolBar.background',
		description: 'Debug toolbar background color.',
	},
	/**
	 * Debug toolbar border color.
	 */
	'debugToolBar.border': {
		selector: 'debugToolBar.border',
		description: 'Debug toolbar border color.',
	},
	/**
	 * Background color of the top stack frame highlight in the editor.
	 */
	'editor.stackFrameHighlightBackground': {
		selector: 'editor.stackFrameHighlightBackground',
		description:
			'Background color of the top stack frame highlight in the editor.',
	},
	/**
	 * Background color of the focused stack frame highlight in the editor.
	 */
	'editor.focusedStackFrameHighlightBackground': {
		selector: 'editor.focusedStackFrameHighlightBackground',
		description:
			'Background color of the focused stack frame highlight in the editor.',
	},
	/**
	 * Color for the debug inline value text.
	 */
	'editor.inlineValuesForeground': {
		selector: 'editor.inlineValuesForeground',
		description: 'Color for the debug inline value text.',
	},
	/**
	 * Color for the debug inline value background.
	 */
	'editor.inlineValuesBackground': {
		selector: 'editor.inlineValuesBackground',
		description: 'Color for the debug inline value background.',
	},
	/**
	 * Foreground color for a label shown in the CALL STACK view when the debugger breaks on an exception
	 */
	'debugView.exceptionLabelForeground': {
		selector: 'debugView.exceptionLabelForeground',
		description:
			'Foreground color for a label shown in the CALL STACK view when the debugger breaks on an exception',
	},
	/**
	 * Background color for a label shown in the CALL STACK view when the debugger breaks on an exception
	 */
	'debugView.exceptionLabelBackground': {
		selector: 'debugView.exceptionLabelBackground',
		description:
			'Background color for a label shown in the CALL STACK view when the debugger breaks on an exception',
	},
	/**
	 * Foreground color for a label in the CALL STACK view showing the current session's or thread's state
	 */
	'debugView.stateLabelForeground': {
		selector: 'debugView.stateLabelForeground',
		description:
			"Foreground color for a label in the CALL STACK view showing the current session's or thread's state",
	},
	/**
	 * Background color for a label in the CALL STACK view showing the current session's or thread's state
	 */
	'debugView.stateLabelBackground': {
		selector: 'debugView.stateLabelBackground',
		description:
			"Background color for a label in the CALL STACK view showing the current session's or thread's state",
	},
	/**
	 * Color used to highlight value changes in the debug views (ie. in the Variables view)
	 */
	'debugView.valueChangedHighlight': {
		selector: 'debugView.valueChangedHighlight',
		description:
			'Color used to highlight value changes in the debug views (ie. in the Variables view)',
	},
	/**
	 * Foreground color for the token names shown in debug views (ie. the Variables or Watch view)
	 */
	'debugTokenExpression.name': {
		selector: 'debugTokenExpression.name',
		description:
			'Foreground color for the token names shown in debug views (ie. the Variables or Watch view)',
	},
	/**
	 * Foreground color for the token values shown in debug views
	 */
	'debugTokenExpression.value': {
		selector: 'debugTokenExpression.value',
		description: 'Foreground color for the token values shown in debug views',
	},
	/**
	 * Foreground color for strings in debug views
	 */
	'debugTokenExpression.string': {
		selector: 'debugTokenExpression.string',
		description: 'Foreground color for strings in debug views',
	},
	/**
	 * Foreground color for booleans in debug views
	 */
	'debugTokenExpression.boolean': {
		selector: 'debugTokenExpression.boolean',
		description: 'Foreground color for booleans in debug views',
	},
	/**
	 * Foreground color for numbers in debug views
	 */
	'debugTokenExpression.number': {
		selector: 'debugTokenExpression.number',
		description: 'Foreground color for numbers in debug views',
	},
	/**
	 * Foreground color for expression errors in debug views
	 */
	'debugTokenExpression.error': {
		selector: 'debugTokenExpression.error',
		description: 'Foreground color for expression errors in debug views',
	},
	/**
	 * Color for the 'failed' icon in the test explorer.
	 */
	'testing.iconFailed': {
		selector: 'testing.iconFailed',
		description: "Color for the 'failed' icon in the test explorer.",
	},
	/**
	 * Color for the 'Errored' icon in the test explorer.
	 */
	'testing.iconErrored': {
		selector: 'testing.iconErrored',
		description: "Color for the 'Errored' icon in the test explorer.",
	},
	/**
	 * Color for the 'passed' icon in the test explorer.
	 */
	'testing.iconPassed': {
		selector: 'testing.iconPassed',
		description: "Color for the 'passed' icon in the test explorer.",
	},
	/**
	 * Color for 'run' icons in the editor.
	 */
	'testing.runAction': {
		selector: 'testing.runAction',
		description: "Color for 'run' icons in the editor.",
	},
	/**
	 * Color for the 'Queued' icon in the test explorer.
	 */
	'testing.iconQueued': {
		selector: 'testing.iconQueued',
		description: "Color for the 'Queued' icon in the test explorer.",
	},
	/**
	 * Color for the 'Unset' icon in the test explorer.
	 */
	'testing.iconUnset': {
		selector: 'testing.iconUnset',
		description: "Color for the 'Unset' icon in the test explorer.",
	},
	/**
	 * Color for the 'Skipped' icon in the test explorer.
	 */
	'testing.iconSkipped': {
		selector: 'testing.iconSkipped',
		description: "Color for the 'Skipped' icon in the test explorer.",
	},
	/**
	 * Color of the peek view borders and arrow.
	 */
	'testing.peekBorder': {
		selector: 'testing.peekBorder',
		description: 'Color of the peek view borders and arrow.',
	},
	/**
	 * Color of the peek view borders and arrow.
	 */
	'testing.peekHeaderBackground': {
		selector: 'testing.peekHeaderBackground',
		description: 'Color of the peek view borders and arrow.',
	},
	/**
	 * Text color of test error messages shown inline in the editor.
	 */
	'testing.message.error.decorationForeground': {
		selector: 'testing.message.error.decorationForeground',
		description:
			'Text color of test error messages shown inline in the editor.',
	},
	/**
	 * Margin color beside error messages shown inline in the editor.
	 */
	'testing.message.error.lineBackground': {
		selector: 'testing.message.error.lineBackground',
		description:
			'Margin color beside error messages shown inline in the editor.',
	},
	/**
	 * Text color of test info messages shown inline in the editor.
	 */
	'testing.message.info.decorationForeground': {
		selector: 'testing.message.info.decorationForeground',
		description: 'Text color of test info messages shown inline in the editor.',
	},
	/**
	 * Margin color beside info messages shown inline in the editor.
	 */
	'testing.message.info.lineBackground': {
		selector: 'testing.message.info.lineBackground',
		description:
			'Margin color beside info messages shown inline in the editor.',
	},
	/**
	 * SCM Provider separator border.
	 */
	'scm.providerBorder': {
		selector: 'scm.providerBorder',
		description: 'SCM Provider separator border.',
	},
	/**
	 * Color for added Git resources. Used for file labels and the SCM viewlet.
	 */
	'gitDecoration.addedResourceForeground': {
		selector: 'gitDecoration.addedResourceForeground',
		description:
			'Color for added Git resources. Used for file labels and the SCM viewlet.',
	},
	/**
	 * Color for modified Git resources. Used for file labels and the SCM viewlet.
	 */
	'gitDecoration.modifiedResourceForeground': {
		selector: 'gitDecoration.modifiedResourceForeground',
		description:
			'Color for modified Git resources. Used for file labels and the SCM viewlet.',
	},
	/**
	 * Color for deleted Git resources. Used for file labels and the SCM viewlet.
	 */
	'gitDecoration.deletedResourceForeground': {
		selector: 'gitDecoration.deletedResourceForeground',
		description:
			'Color for deleted Git resources. Used for file labels and the SCM viewlet.',
	},
	/**
	 * Color for renamed or copied Git resources. Used for file labels and the SCM viewlet.
	 */
	'gitDecoration.renamedResourceForeground': {
		selector: 'gitDecoration.renamedResourceForeground',
		description:
			'Color for renamed or copied Git resources. Used for file labels and the SCM viewlet.',
	},
	/**
	 * Color for staged modifications git decorations.  Used for file labels and the SCM viewlet.
	 */
	'gitDecoration.stageModifiedResourceForeground': {
		selector: 'gitDecoration.stageModifiedResourceForeground',
		description:
			'Color for staged modifications git decorations.  Used for file labels and the SCM viewlet.',
	},
	/**
	 * Color for staged deletions git decorations.  Used for file labels and the SCM viewlet.
	 */
	'gitDecoration.stageDeletedResourceForeground': {
		selector: 'gitDecoration.stageDeletedResourceForeground',
		description:
			'Color for staged deletions git decorations.  Used for file labels and the SCM viewlet.',
	},
	/**
	 * Color for untracked Git resources. Used for file labels and the SCM viewlet.
	 */
	'gitDecoration.untrackedResourceForeground': {
		selector: 'gitDecoration.untrackedResourceForeground',
		description:
			'Color for untracked Git resources. Used for file labels and the SCM viewlet.',
	},
	/**
	 * Color for ignored Git resources. Used for file labels and the SCM viewlet.
	 */
	'gitDecoration.ignoredResourceForeground': {
		selector: 'gitDecoration.ignoredResourceForeground',
		description:
			'Color for ignored Git resources. Used for file labels and the SCM viewlet.',
	},
	/**
	 * Color for conflicting Git resources. Used for file labels and the SCM viewlet.
	 */
	'gitDecoration.conflictingResourceForeground': {
		selector: 'gitDecoration.conflictingResourceForeground',
		description:
			'Color for conflicting Git resources. Used for file labels and the SCM viewlet.',
	},
	/**
	 * Color for submodule resources.
	 */
	'gitDecoration.submoduleResourceForeground': {
		selector: 'gitDecoration.submoduleResourceForeground',
		description: 'Color for submodule resources.',
	},
	/**
	 * The foreground color for a section header or active title.
	 */
	'settings.headerForeground': {
		selector: 'settings.headerForeground',
		description: 'The foreground color for a section header or active title.',
	},
	/**
	 * The line that indicates a modified setting.
	 */
	'settings.modifiedItemIndicator': {
		selector: 'settings.modifiedItemIndicator',
		description: 'The line that indicates a modified setting.',
	},
	/**
	 * Dropdown background.
	 */
	'settings.dropdownBackground': {
		selector: 'settings.dropdownBackground',
		description: 'Dropdown background.',
	},
	/**
	 * Dropdown foreground.
	 */
	'settings.dropdownForeground': {
		selector: 'settings.dropdownForeground',
		description: 'Dropdown foreground.',
	},
	/**
	 * Dropdown border.
	 */
	'settings.dropdownBorder': {
		selector: 'settings.dropdownBorder',
		description: 'Dropdown border.',
	},
	/**
	 * Dropdown list border.
	 */
	'settings.dropdownListBorder': {
		selector: 'settings.dropdownListBorder',
		description: 'Dropdown list border.',
	},
	/**
	 * Checkbox background.
	 */
	'settings.checkboxBackground': {
		selector: 'settings.checkboxBackground',
		description: 'Checkbox background.',
	},
	/**
	 * Checkbox foreground.
	 */
	'settings.checkboxForeground': {
		selector: 'settings.checkboxForeground',
		description: 'Checkbox foreground.',
	},
	/**
	 * Checkbox border.
	 */
	'settings.checkboxBorder': {
		selector: 'settings.checkboxBorder',
		description: 'Checkbox border.',
	},
	/**
	 * The background color of a settings row when hovered.
	 */
	'settings.rowHoverBackground': {
		selector: 'settings.rowHoverBackground',
		description: 'The background color of a settings row when hovered.',
	},
	/**
	 * Text input box background.
	 */
	'settings.textInputBackground': {
		selector: 'settings.textInputBackground',
		description: 'Text input box background.',
	},
	/**
	 * Text input box foreground.
	 */
	'settings.textInputForeground': {
		selector: 'settings.textInputForeground',
		description: 'Text input box foreground.',
	},
	/**
	 * Text input box border.
	 */
	'settings.textInputBorder': {
		selector: 'settings.textInputBorder',
		description: 'Text input box border.',
	},
	/**
	 * Number input box background.
	 */
	'settings.numberInputBackground': {
		selector: 'settings.numberInputBackground',
		description: 'Number input box background.',
	},
	/**
	 * Number input box foreground.
	 */
	'settings.numberInputForeground': {
		selector: 'settings.numberInputForeground',
		description: 'Number input box foreground.',
	},
	/**
	 * Number input box border.
	 */
	'settings.numberInputBorder': {
		selector: 'settings.numberInputBorder',
		description: 'Number input box border.',
	},
	/**
	 * Background color of a focused setting row.
	 */
	'settings.focusedRowBackground': {
		selector: 'settings.focusedRowBackground',
		description: 'Background color of a focused setting row.',
	},
	/**
	 * The color of the row's top and bottom border when the row is focused.
	 */
	'settings.focusedRowBorder': {
		selector: 'settings.focusedRowBorder',
		description:
			"The color of the row's top and bottom border when the row is focused.",
	},
	/**
	 * The color of the header container border.
	 */
	'settings.headerBorder': {
		selector: 'settings.headerBorder',
		description: 'The color of the header container border.',
	},
	/**
	 * The color of the Settings editor splitview sash border.
	 */
	'settings.sashBorder': {
		selector: 'settings.sashBorder',
		description: 'The color of the Settings editor splitview sash border.',
	},
	/**
	 * Color of breadcrumb items.
	 */
	'breadcrumb.foreground': {
		selector: 'breadcrumb.foreground',
		description: 'Color of breadcrumb items.',
	},
	/**
	 * Background color of breadcrumb items.
	 */
	'breadcrumb.background': {
		selector: 'breadcrumb.background',
		description: 'Background color of breadcrumb items.',
	},
	/**
	 * Color of focused breadcrumb items.
	 */
	'breadcrumb.focusForeground': {
		selector: 'breadcrumb.focusForeground',
		description: 'Color of focused breadcrumb items.',
	},
	/**
	 * Color of selected breadcrumb items.
	 */
	'breadcrumb.activeSelectionForeground': {
		selector: 'breadcrumb.activeSelectionForeground',
		description: 'Color of selected breadcrumb items.',
	},
	/**
	 * Background color of breadcrumb item picker.
	 */
	'breadcrumbPicker.background': {
		selector: 'breadcrumbPicker.background',
		description: 'Background color of breadcrumb item picker.',
	},
	/**
	 * Highlight background color of a snippet tabstop.
	 */
	'editor.snippetTabstopHighlightBackground': {
		selector: 'editor.snippetTabstopHighlightBackground',
		description: 'Highlight background color of a snippet tabstop.',
	},
	/**
	 * Highlight border color of a snippet tabstop.
	 */
	'editor.snippetTabstopHighlightBorder': {
		selector: 'editor.snippetTabstopHighlightBorder',
		description: 'Highlight border color of a snippet tabstop.',
	},
	/**
	 * Highlight background color of the final tabstop of a snippet.
	 */
	'editor.snippetFinalTabstopHighlightBackground': {
		selector: 'editor.snippetFinalTabstopHighlightBackground',
		description:
			'Highlight background color of the final tabstop of a snippet.',
	},
	/**
	 * Highlight border color of the final tabstop of a snippet.
	 */
	'editor.snippetFinalTabstopHighlightBorder': {
		selector: 'editor.snippetFinalTabstopHighlightBorder',
		description: 'Highlight border color of the final tabstop of a snippet.',
	},
	/**
	 * The foreground color for array symbols.
	 */
	'symbolIcon.arrayForeground': {
		selector: 'symbolIcon.arrayForeground',
		description: 'The foreground color for array symbols.',
	},
	/**
	 * The foreground color for boolean symbols.
	 */
	'symbolIcon.booleanForeground': {
		selector: 'symbolIcon.booleanForeground',
		description: 'The foreground color for boolean symbols.',
	},
	/**
	 * The foreground color for class symbols.
	 */
	'symbolIcon.classForeground': {
		selector: 'symbolIcon.classForeground',
		description: 'The foreground color for class symbols.',
	},
	/**
	 * The foreground color for color symbols.
	 */
	'symbolIcon.colorForeground': {
		selector: 'symbolIcon.colorForeground',
		description: 'The foreground color for color symbols.',
	},
	/**
	 * The foreground color for constant symbols.
	 */
	'symbolIcon.constantForeground': {
		selector: 'symbolIcon.constantForeground',
		description: 'The foreground color for constant symbols.',
	},
	/**
	 * The foreground color for constructor symbols.
	 */
	'symbolIcon.constructorForeground': {
		selector: 'symbolIcon.constructorForeground',
		description: 'The foreground color for constructor symbols.',
	},
	/**
	 * The foreground color for enumerator symbols.
	 */
	'symbolIcon.enumeratorForeground': {
		selector: 'symbolIcon.enumeratorForeground',
		description: 'The foreground color for enumerator symbols.',
	},
	/**
	 * The foreground color for enumerator member symbols.
	 */
	'symbolIcon.enumeratorMemberForeground': {
		selector: 'symbolIcon.enumeratorMemberForeground',
		description: 'The foreground color for enumerator member symbols.',
	},
	/**
	 * The foreground color for event symbols.
	 */
	'symbolIcon.eventForeground': {
		selector: 'symbolIcon.eventForeground',
		description: 'The foreground color for event symbols.',
	},
	/**
	 * The foreground color for field symbols.
	 */
	'symbolIcon.fieldForeground': {
		selector: 'symbolIcon.fieldForeground',
		description: 'The foreground color for field symbols.',
	},
	/**
	 * The foreground color for file symbols.
	 */
	'symbolIcon.fileForeground': {
		selector: 'symbolIcon.fileForeground',
		description: 'The foreground color for file symbols.',
	},
	/**
	 * The foreground color for folder symbols.
	 */
	'symbolIcon.folderForeground': {
		selector: 'symbolIcon.folderForeground',
		description: 'The foreground color for folder symbols.',
	},
	/**
	 * The foreground color for function symbols.
	 */
	'symbolIcon.functionForeground': {
		selector: 'symbolIcon.functionForeground',
		description: 'The foreground color for function symbols.',
	},
	/**
	 * The foreground color for interface symbols.
	 */
	'symbolIcon.interfaceForeground': {
		selector: 'symbolIcon.interfaceForeground',
		description: 'The foreground color for interface symbols.',
	},
	/**
	 * The foreground color for key symbols.
	 */
	'symbolIcon.keyForeground': {
		selector: 'symbolIcon.keyForeground',
		description: 'The foreground color for key symbols.',
	},
	/**
	 * The foreground color for keyword symbols.
	 */
	'symbolIcon.keywordForeground': {
		selector: 'symbolIcon.keywordForeground',
		description: 'The foreground color for keyword symbols.',
	},
	/**
	 * The foreground color for method symbols.
	 */
	'symbolIcon.methodForeground': {
		selector: 'symbolIcon.methodForeground',
		description: 'The foreground color for method symbols.',
	},
	/**
	 * The foreground color for module symbols.
	 */
	'symbolIcon.moduleForeground': {
		selector: 'symbolIcon.moduleForeground',
		description: 'The foreground color for module symbols.',
	},
	/**
	 * The foreground color for namespace symbols.
	 */
	'symbolIcon.namespaceForeground': {
		selector: 'symbolIcon.namespaceForeground',
		description: 'The foreground color for namespace symbols.',
	},
	/**
	 * The foreground color for null symbols.
	 */
	'symbolIcon.nullForeground': {
		selector: 'symbolIcon.nullForeground',
		description: 'The foreground color for null symbols.',
	},
	/**
	 * The foreground color for number symbols.
	 */
	'symbolIcon.numberForeground': {
		selector: 'symbolIcon.numberForeground',
		description: 'The foreground color for number symbols.',
	},
	/**
	 * The foreground color for object symbols.
	 */
	'symbolIcon.objectForeground': {
		selector: 'symbolIcon.objectForeground',
		description: 'The foreground color for object symbols.',
	},
	/**
	 * The foreground color for operator symbols.
	 */
	'symbolIcon.operatorForeground': {
		selector: 'symbolIcon.operatorForeground',
		description: 'The foreground color for operator symbols.',
	},
	/**
	 * The foreground color for package symbols.
	 */
	'symbolIcon.packageForeground': {
		selector: 'symbolIcon.packageForeground',
		description: 'The foreground color for package symbols.',
	},
	/**
	 * The foreground color for property symbols.
	 */
	'symbolIcon.propertyForeground': {
		selector: 'symbolIcon.propertyForeground',
		description: 'The foreground color for property symbols.',
	},
	/**
	 * The foreground color for reference symbols.
	 */
	'symbolIcon.referenceForeground': {
		selector: 'symbolIcon.referenceForeground',
		description: 'The foreground color for reference symbols.',
	},
	/**
	 * The foreground color for snippet symbols.
	 */
	'symbolIcon.snippetForeground': {
		selector: 'symbolIcon.snippetForeground',
		description: 'The foreground color for snippet symbols.',
	},
	/**
	 * The foreground color for string symbols.
	 */
	'symbolIcon.stringForeground': {
		selector: 'symbolIcon.stringForeground',
		description: 'The foreground color for string symbols.',
	},
	/**
	 * The foreground color for struct symbols.
	 */
	'symbolIcon.structForeground': {
		selector: 'symbolIcon.structForeground',
		description: 'The foreground color for struct symbols.',
	},
	/**
	 * The foreground color for text symbols.
	 */
	'symbolIcon.textForeground': {
		selector: 'symbolIcon.textForeground',
		description: 'The foreground color for text symbols.',
	},
	/**
	 * The foreground color for type parameter symbols.
	 */
	'symbolIcon.typeParameterForeground': {
		selector: 'symbolIcon.typeParameterForeground',
		description: 'The foreground color for type parameter symbols.',
	},
	/**
	 * The foreground color for unit symbols.
	 */
	'symbolIcon.unitForeground': {
		selector: 'symbolIcon.unitForeground',
		description: 'The foreground color for unit symbols.',
	},
	/**
	 * The foreground color for variable symbols.
	 */
	'symbolIcon.variableForeground': {
		selector: 'symbolIcon.variableForeground',
		description: 'The foreground color for variable symbols.',
	},
	/**
	 * Notebook background color.
	 */
	'notebook.editorBackground': {
		selector: 'notebook.editorBackground',
		description: 'Notebook background color.',
	},
	/**
	 * The border color for notebook cells.
	 */
	'notebook.cellBorderColor': {
		selector: 'notebook.cellBorderColor',
		description: 'The border color for notebook cells.',
	},
	/**
	 * The background color of a cell when the cell is hovered.
	 */
	'notebook.cellHoverBackground': {
		selector: 'notebook.cellHoverBackground',
		description: 'The background color of a cell when the cell is hovered.',
	},
	/**
	 * The color of the notebook cell insertion indicator.
	 */
	'notebook.cellInsertionIndicator': {
		selector: 'notebook.cellInsertionIndicator',
		description: 'The color of the notebook cell insertion indicator.',
	},
	/**
	 * The background color of notebook cell status bar items.
	 */
	'notebook.cellStatusBarItemHoverBackground': {
		selector: 'notebook.cellStatusBarItemHoverBackground',
		description: 'The background color of notebook cell status bar items.',
	},
	/**
	 * The color of the separator in the cell bottom toolbar
	 */
	'notebook.cellToolbarSeparator': {
		selector: 'notebook.cellToolbarSeparator',
		description: 'The color of the separator in the cell bottom toolbar',
	},
	/**
	 * The color of the notebook cell editor background
	 */
	'notebook.cellEditorBackground': {
		selector: 'notebook.cellEditorBackground',
		description: 'The color of the notebook cell editor background',
	},
	/**
	 * The background color of a cell when the cell is focused.
	 */
	'notebook.focusedCellBackground': {
		selector: 'notebook.focusedCellBackground',
		description: 'The background color of a cell when the cell is focused.',
	},
	/**
	 * The color of the cell's focus indicator borders when the cell is focused..
	 */
	'notebook.focusedCellBorder': {
		selector: 'notebook.focusedCellBorder',
		description:
			"The color of the cell's focus indicator borders when the cell is focused..",
	},
	/**
	 * The color of the notebook cell editor border.
	 */
	'notebook.focusedEditorBorder': {
		selector: 'notebook.focusedEditorBorder',
		description: 'The color of the notebook cell editor border.',
	},
	/**
	 * The color of the cell's top and bottom border when a cell is focused while the primary focus is outside of the editor.
	 */
	'notebook.inactiveFocusedCellBorder': {
		selector: 'notebook.inactiveFocusedCellBorder',
		description:
			"The color of the cell's top and bottom border when a cell is focused while the primary focus is outside of the editor.",
	},
	/**
	 * The color of the cell's borders when multiple cells are selected.
	 */
	'notebook.inactiveSelectedCellBorder': {
		selector: 'notebook.inactiveSelectedCellBorder',
		description:
			"The color of the cell's borders when multiple cells are selected.",
	},
	/**
	 * The Color of the notebook output container background.
	 */
	'notebook.outputContainerBackgroundColor': {
		selector: 'notebook.outputContainerBackgroundColor',
		description: 'The Color of the notebook output container background.',
	},
	/**
	 * The border color of the notebook output container.
	 */
	'notebook.outputContainerBorderColor': {
		selector: 'notebook.outputContainerBorderColor',
		description: 'The border color of the notebook output container.',
	},
	/**
	 * The background color of a cell when the cell is selected.
	 */
	'notebook.selectedCellBackground': {
		selector: 'notebook.selectedCellBackground',
		description: 'The background color of a cell when the cell is selected.',
	},
	/**
	 * The color of the cell's top and bottom border when the cell is selected but not focused.
	 */
	'notebook.selectedCellBorder': {
		selector: 'notebook.selectedCellBorder',
		description:
			"The color of the cell's top and bottom border when the cell is selected but not focused.",
	},
	/**
	 * Background color of highlighted cell
	 */
	'notebook.symbolHighlightBackground': {
		selector: 'notebook.symbolHighlightBackground',
		description: 'Background color of highlighted cell',
	},
	/**
	 * Notebook scrollbar slider background color when clicked on.
	 */
	'notebookScrollbarSlider.activeBackground': {
		selector: 'notebookScrollbarSlider.activeBackground',
		description: 'Notebook scrollbar slider background color when clicked on.',
	},
	/**
	 * Notebook scrollbar slider background color.
	 */
	'notebookScrollbarSlider.background': {
		selector: 'notebookScrollbarSlider.background',
		description: 'Notebook scrollbar slider background color.',
	},
	/**
	 * Notebook scrollbar slider background color when hovering.
	 */
	'notebookScrollbarSlider.hoverBackground': {
		selector: 'notebookScrollbarSlider.hoverBackground',
		description: 'Notebook scrollbar slider background color when hovering.',
	},
	/**
	 * The error icon color of notebook cells in the cell status bar.
	 */
	'notebookStatusErrorIcon.foreground': {
		selector: 'notebookStatusErrorIcon.foreground',
		description:
			'The error icon color of notebook cells in the cell status bar.',
	},
	/**
	 * The running icon color of notebook cells in the cell status bar.
	 */
	'notebookStatusRunningIcon.foreground': {
		selector: 'notebookStatusRunningIcon.foreground',
		description:
			'The running icon color of notebook cells in the cell status bar.',
	},
	/**
	 * The success icon color of notebook cells in the cell status bar.
	 */
	'notebookStatusSuccessIcon.foreground': {
		selector: 'notebookStatusSuccessIcon.foreground',
		description:
			'The success icon color of notebook cells in the cell status bar.',
	},
	/**
	 * Contrast color for text in charts.
	 */
	'charts.foreground': {
		selector: 'charts.foreground',
		description: 'Contrast color for text in charts.',
	},
	/**
	 * Color for lines in charts.
	 */
	'charts.lines': {
		selector: 'charts.lines',
		description: 'Color for lines in charts.',
	},
	/**
	 * Color for red elements in charts.
	 */
	'charts.red': {
		selector: 'charts.red',
		description: 'Color for red elements in charts.',
	},
	/**
	 * Color for blue elements in charts.
	 */
	'charts.blue': {
		selector: 'charts.blue',
		description: 'Color for blue elements in charts.',
	},
	/**
	 * Color for yellow elements in charts.
	 */
	'charts.yellow': {
		selector: 'charts.yellow',
		description: 'Color for yellow elements in charts.',
	},
	/**
	 * Color for orange elements in charts.
	 */
	'charts.orange': {
		selector: 'charts.orange',
		description: 'Color for orange elements in charts.',
	},
	/**
	 * Color for green elements in charts.
	 */
	'charts.green': {
		selector: 'charts.green',
		description: 'Color for green elements in charts.',
	},
	/**
	 * Color for purple elements in charts.
	 */
	'charts.purple': {
		selector: 'charts.purple',
		description: 'Color for purple elements in charts.',
	},
	/**
	 * The color of the icon for a port that has an associated running process.
	 */
	'ports.iconRunningProcessForeground': {
		selector: 'ports.iconRunningProcessForeground',
		description:
			'The color of the icon for a port that has an associated running process.',
	},
};
export const appSelectorNames: (keyof typeof appSelectorDefinitions)[] =
	Object.keys(appSelectorDefinitions) as any;
