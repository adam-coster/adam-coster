/**
 * @file Make theme-patching easier via programmatic
 * definition of colors and theme rules, instead of having
 * to manually edit JSON files (*shudder*).
 */

type FontStyle = 'italic' | 'bold' | 'underline' | 'strikethrough';

interface RuleRaw {
	name?: string;
	scope: string | string[];
	settings: {
		/** The text color */
		foreground?: string;
		/** Space-separated styles, in any order */
		fontStyle?: string;
	};
}

type NonEmptyArray<T> = T extends [infer U]
	? U extends never
		? never
		: T
	: never;

type Set<Obj, Key extends keyof Obj, Val> = {
	[K in keyof Obj]: K extends Key ? Val : Obj[K];
};

type Upsert<Obj, Key extends string, Val> = {
	[K in keyof Obj | Key]: K extends Key
		? Val
		: K extends keyof Obj
		? Obj[K]
		: never;
};

type StyleConfig = { [key in FontStyle]?: true };

type AnyRule = Rule<any, any, any, any>;

/**
 * A minimum viable "rule"
 */
type MinimalRule<N extends string | undefined> = RuleBase<N, any, any, any>;

type SetRuleStyle<
	R extends AnyRule,
	T extends FontStyle | null,
> = R extends Rule<
	infer Name,
	infer Color,
	infer Style extends StyleConfig,
	infer Scopes
>
	? T extends null
		? Omit<Rule<Name, Color, null, Scopes>, 'style' | FontStyle>
		: T extends FontStyle
		? Omit<Rule<Name, Color, Set<Style, T, true>>, T>
		: never
	: never;

type EnsureArray<T> = T extends any[] ? T : [T];

class RuleBase<
	Name extends string | undefined,
	Color extends string | undefined,
	Style extends StyleConfig | null,
	Scopes extends string[],
> {
	constructor(
		readonly name: Name,
		public _color: Color,
		public _style: Style,
		public _scope: Scopes,
	) {}

	get styleString() {
		// Having no keys set is not the same as UNSETTING --
		// when unsetting, need to return `''`. If no props
		// are set, we can just return `undefined` since JSON
		// stringify will skip it.
		if (this._style === null) {
			return '';
		}
		const styles = Object.keys(this._style).join(' ');
		return styles || undefined;
	}

	toJSON(): RuleRaw {
		return {
			name: this.name,
			scope: this._scope,
			settings: {
				foreground: this._color,
				fontStyle: this.styleString,
			},
		};
	}
}

class Rule<
	Name extends string | undefined = undefined,
	Color extends string | undefined = undefined,
	Style extends StyleConfig | null = {},
	Scopes extends string[] = [],
> extends RuleBase<Name, Color, Style, Scopes> {
	constructor(name: Name, color: Color, style: Style, scope: Scopes) {
		super(name, color, style, scope);
	}

	/**
	 * Any number of TextMate scopes as selectors.
	 *
	 * If an array, each string is treated as a separate selector.
	 *
	 * Each scope string is assumed to be copy-pasted, so for convenience
	 * known nearly-aliased scope components are automatically removed
	 * (e.g. `.js` and `.ts`).
	 *
	 * If `scope` is a string with newlines, it is assumed to be copy-pasted
	 * from VSCode's `Developer: Inspect Editor Tokens and Scopes` command,
	 * and will be therefore be interpreted as a single selector with each
	 * space-separated scope *reversed*.
	 */
	scope<T extends string>(
		scope: T[] | T,
	): Rule<Name, Color, Style, [...Scopes, ...EnsureArray<T>]> {
		const scopes = (Array.isArray(scope) ? scope : [scope]).map((s) => {
			let cleanScope: string = s.trim();
			if (cleanScope.includes('\n')) {
				cleanScope = cleanScope
					.split(/\s*\r?\n\s*/g)
					.reverse()
					.join(' ');
			}
			return cleanScope
				.split(' ')
				.map((s) => s.replace(/\.[jt]s$/, ''))
				.join(' ');
		});

		this._scope.push(...scopes);
		return this as any;
	}

	color<T extends string>(rgb: T): Omit<Rule<Name, T, Style>, 'color'> {
		// @ts-expect-error
		this._color = rgb;
		return this as any;
	}

	get italic() {
		return this.style('italic');
	}

	get bold() {
		return this.style('bold');
	}

	get underline() {
		return this.style('underline');
	}

	get strikethrough() {
		return this.style('strikethrough');
	}

	style<T extends FontStyle | null>(style: T): SetRuleStyle<this, T> {
		if (style === null) {
			// @ts-expect-error
			this._style = null;
			return this as any;
		}
		// @ts-expect-error
		this._style ||= {};
		this._style[style] = true;
		return this as any;
	}
}

class Rules<Rs extends Record<string, MinimalRule<any>>> {
	constructor(protected rules: Rs) {}

	add<N extends string, R extends MinimalRule<N>>(
		rule: R,
	): Rules<Upsert<Rs, N, R>>;
	add(rule: MinimalRule<undefined>): this;
	add(rule: MinimalRule<any>): any {
		if (rule.name !== undefined) {
			// @ts-expect-error
			this.rules[rule.name] = rule;
		}
		return this as any;
	}
}

// TODO: Create a 'Theme' class that contains named colors and lookup mechanisms.
class Theme {
	constructor(readonly name: string) {}
}

export function rule(): Rule<undefined>;
export function rule<N extends string>(name: N): Rule<N>;
export function rule(name?: string): Rule<any> {
	return new Rule(name, undefined, {}, []);
}

export function rules(): Rules<{}> {
	return new Rules({});
}

// Test sample
const rs = rules()
	.add(
		rule('Exported')
			.scope(
				`entity.name.function.ts
					meta.function-call.ts
					source.ts`,
			)
			.color('#b462e0'),
	)
	.add(
		rule('Import as type')
			.scope('meta.block keyword.control.type')
			.color('#cacaca').italic,
	)
	.add(rule('Something else').scope('meta.other'));
