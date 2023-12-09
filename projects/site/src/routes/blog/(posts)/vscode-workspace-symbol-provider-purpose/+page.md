I'm currently working on two [Visual Studio Code](https://code.visualstudio.com/) ("VSCode") extensions:

1. [Stitch](https://marketplace.visualstudio.com/items?itemName=bscotch.bscotch-stitch-vscode): a [GameMaker](https://gamemaker.io/) extension providing an alternative to the official IDE
2. Crashlands Quest Editor: an internal extension for my studio's upcoming game, [Crashlands 2](https://store.steampowered.com/app/1401730?utm_source=adamcoster.com&utm_campaign=vscode-workspace-symbol-provider-purpose)

In both cases I'm making use of VSCode's [Workspace Symbol Provider API](https://code.visualstudio.com/api/language-extensions/programmatic-language-features#show-all-symbol-definitions-in-folder) (available in Node via `vscode.WorkspaceSymbolProvider`).

What's this API for?

> The "Workspace Symbol Provider API" allows an extension to add symbols to the "Go to Symbol in Workspace" feature in VSCode. That's the search you get when you open your command pallet with the `#` prefix, or when you press <kbd><kbd>Ctrl</kbd>+<kbd>T</kbd></kbd>.

Okay, but what's a "symbol"?

> A "symbol" is basically any *named* ***thing*** in your code (a variable, function, class, etc.). But it goes a little deeper than that: two ***things*** in your code could have the exact same *name*, but not actually be referring to the same ***thing*** -- each one of those ***things*** has its own *symbol*!

For example:

```js
// 'a' is the name of this symbol we're declaring
let a;

// If we declare *another* variable, also named 'a', in a new
// scope, we're creating a **new symbol**!
for(let a=0; a<10; a++){
  a; // This is a *reference* to the second symbol named 'a',
     // which was declared in the for-loop.
}
a; // This is a *reference* to the first symbol named 'a',
   // which was declared at the top, *before* the loop
```

The design intent of the Workspace Symbol Provider API, then, is to help you find *where* the *individual things* (variables, functions, etc.) are *first declared or defined* in your code, without getting confused when things have the same name.

If you have multiple things ("symbols") with the same name, the API should provide them as distinct search results. And if you have multiple *references* to a symbol, only the one that *declares* that symbol should be returned.

## Case Studies

While the Workspace Symbol Provider API is intended for code symbols, it's a generic concept! So you can leverage it for other kinds of cases, too.

### Case Study 1: GameMaker Symbols

My GameMaker extension ("Stitch") provides a classic IDE experience for editing GameMaker code. So I use the API to do exactly the kinds of things that you'd expect for any code editor: find all of the variables, functions, constructors, and so on that you've declared in your code.

However, GameMaker projects also include symbols that are *not* defined in the code! These include "assets" (Objects, Sounds, Sprites, etc.) and built-in symbols (e.g. global functions defined natively by the GameMaker engine).

It would be really annoying if you opened "Go to Symbol" to look for an Object or Sprite and just... couldn't find it. But since these aren't declared in the *code* anywhere, the question becomes:

> ❓ When using "Go to Symbol" for a symbol that isn't defined in code, where is the *most useful* place to send the user?

For example, GameMaker Objects contain code files per type of "event" (e.g. Create, Step, Draw, etc.). The Object itself is described by a JSON-like configuration file, and is also declared within the project's global configuration file.

So there are a bunch of places that "Go to Symbol" for an Object *could* take the user. But what the user will want to actually *do*, nearly 100% of the time, is get to that Object's *code*, not the configuration files!

An Object's code can be spread across multiple files, though, so which file should it go to? The behavior I settled on was this:

- If the Object has a Create event, go to that event's file (this is the intuitive result, since it's close, conceptually, to a "declaration").
- If the Object has no create event, choose the next most-likely-desired event (e.g. tons of our Object logic lives in Step events, a little less in Draw events, etc., so we fall back in that order)
- If the Object has *no* events, open its configuration file. While this is rarely actually useful for the programmer, it's better than doing *nothing*. Plus, Objects nearly always have at least *one* event, so this is an edge case in practice.

> ⚠️ The "Go to Symbol" feature can only take you to *file locations*, so unfortunately you cannot use it to take someone to a documentation website or similar.

### Case Study 2: Quest Editor (Virtual) Symbols

The Quest Editor I'm creating for Crashlands isn't about *code*. It's about making the prose from Crashlands editable in a powerful text editor (VSCode) while ensuring we can convert back and forth between the prose and the highly-structured data needed within the game.

In this case, then, the typical use of "Go to Symbol" doesn't seem to apply. But the quest system *does* have symbols: each quest and storyline is a unique *thing*, represented by a *name*, and can therefore be treated the same way as are code symbols!

For the editor, then, I wanted to use the Workspace Symbol Provider API to allow searching for quests and storylines by name *or* ID. This use case is conceptually similar to doing a file-search, except that I can provide *virtual* names for these files that are much more useful.

For example, we may have a quest named "Go over there!" with ID `q_gooverthere`, which would map onto a file named something like `q_gooverthere.cl2_quest`. That's pretty dang hard to search for in a list of files! I could change the filename to *include* the human-readable quest name, but those can contain all kinds of special characters and can change at any time, so that's not great either. (Plus, I'm using a virtual filesystem to manage these textual representations of structured data, so I can't even use VSCode's file search in the first place.)

But! If I use the API to provide a *virtual* symbol called "Go over there! (q_gooverthere)", then the user can easily get to that quest via "Go to Symbol in Workspace".

## How to Implement a Workspace Symbol Provider in your VSCode extension

So we know what the Workspace Symbol Provider API is *for*, and we've got some case studies, but how do you actually use it in a VSCode extension?

In short, you need to create an instance of `vscode.WorkspaceSymbolProvider` and register it when you activate your extension. That provider instance must implement a `provideWorkspaceSymbols()` method that returns an array of [`vscode.SymbolInformation` instances](https://code.visualstudio.com/api/references/vscode-api#SymbolInformation).

### A Template for `WorkspaceSymbolProvider` Classes

Here's the template I start with when creating a Workspace Symbol Provider:

```ts
import vscode from "vscode";

export class WorkspaceSymbolProviderTemplate
  implements vscode.WorkspaceSymbolProvider
{
  // Call this during activation to create the provider
  // instance and register it
  static register() {
    const provider = new WorkspaceSymbolProviderTemplate();
    return vscode.languages.registerWorkspaceSymbolProvider(provider);
  }
  protected constructor() {
    // Note: protected so that you can only instance this through
    // the static `register()` method.
  }

  // This is the method that VSCode calls to get your symbols.
  // It will sort the results for the user using its own algorithm,
  // but it provides the query so you can provide a filtered list of
  // matching symbols (super useful for performance).
	// (Note: This method can be async if needed!)
  provideWorkspaceSymbols(query: string): vscode.SymbolInformation[] {
    /**
     * Create a fuzzy matcher that works the same
     * way VSCode's searches do (requiring all characters in
     * the query to appear, in order, but allowing other
     * characters in between)
     */
    const matcher = query ? new RegExp(query.split("").join(".*"), "i") : /.*/;
    /**
     * The list of symbols your extension provides, however you
     * represent them.
     */
    const yourRawSymbols = [];
    return (
      yourRawSymbols
        .map((result) => {
          return new vscode.SymbolInformation(
            // However this should appear in the list. This
            // is what is used by VSCode to rank the query match.
            result.name,
            // Choose one of the built-in enum values that best represents
            // the *kind* of symbol this is. This is mostly cosmetic;
            // it dictates which icon is used for this symbol.
            vscode.SymbolKind.Variable,
            // This appears next to the name, before the location
            "Group",
            // Where the user should be taken if they choose this
            // symbol. (Typically, where this symbol is first declared.)
            new vscode.Location(
              vscode.Uri.file(result.filePath),
              // (This is the first position in the file, which
              //  is a useful default. For symbols not defined *in*
              //  the code, but instead defined *by the file*, this
              //  is the most appropriate position!)
              new vscode.Position(0, 0)
            )
          );
        })
        // Improve performance by minimizing the size of the returned
        // list to things that are relevant. Depending on use-case, you
        // may want to do this *before* creating all the
        // `vscode.SymbolInformation` instances.
        .filter((symbol) => symbol.name.match(matcher))
    );
  }
}
```

## Example `WorkspaceSymbolProvider` Implementation

If you read through the template code above, you'll see that we need to provide a "Symbol Kind" for each symbol we return (provided via the `vscode.SymbolKind` enum). Which kind we pick dictates which icon VSCode will show in the "Go to Symbol" results.

Every time I add a new type of symbol to one of my extensions' Workspace Symbol Providers, I have to pick the Symbol Kind that best represents that new symbol type. This is always annoying, because:

1. My symbols don't always have a good semantic match with the available Symbol Kinds (e.g. a game sprite or a quest does not obviously map onto something like "Constructor" or "Variable"); and
2. When there's no good semantic match, I want to choose the Symbol Kind whose *icon* best reflects the vibe of my symbol. But! There doesn't seem to be a listing anywhere of which icons pair with which `vscode.SymbolKind` values. So then I find myself trying one, reloading, trying another, reloading... you get the idea.

To solve this problem I wrote a Symbol Provider that lists one symbol per `vscode.SymbolKind` value, so that I can just *look at the list* in VSCode to figure out which icons go with which symbols.


<figure>

<img alt="VSCode's Symbol Kind names and their associated icons." src="/images/vscode-workspace-symbol-provider-purpose/vscode-symbolkind-icons.jpg" />

<figcaption aria-hidden="true">

VSCode's Symbol Kind names and their associated icons.

</figcaption>

</figure>

Here's the implementation:

```ts
import vscode from 'vscode';

export class SymbolKindIconProvider
	implements vscode.WorkspaceSymbolProvider
{
	provideWorkspaceSymbols(): vscode.SymbolInformation[] {
		return (
			[
				['Array', vscode.SymbolKind.Array],
				['Boolean', vscode.SymbolKind.Boolean],
				['Class', vscode.SymbolKind.Class],
				['Constant', vscode.SymbolKind.Constant],
				['Constructor', vscode.SymbolKind.Constructor],
				['Enum', vscode.SymbolKind.Enum],
				['EnumMember', vscode.SymbolKind.EnumMember],
				['Event', vscode.SymbolKind.Event],
				['Field', vscode.SymbolKind.Field],
				['File', vscode.SymbolKind.File],
				['Function', vscode.SymbolKind.Function],
				['Interface', vscode.SymbolKind.Interface],
				['Key', vscode.SymbolKind.Key],
				['Method', vscode.SymbolKind.Method],
				['Module', vscode.SymbolKind.Module],
				['Namespace', vscode.SymbolKind.Namespace],
				['Null', vscode.SymbolKind.Null],
				['Number', vscode.SymbolKind.Number],
				['Object', vscode.SymbolKind.Object],
				['Operator', vscode.SymbolKind.Operator],
				['Package', vscode.SymbolKind.Package],
				['Property', vscode.SymbolKind.Property],
				['String', vscode.SymbolKind.String],
				['Struct', vscode.SymbolKind.Struct],
				['TypeParameter', vscode.SymbolKind.TypeParameter],
				['Variable', vscode.SymbolKind.Variable],
			] as const
		).map(([name, kind]) => {
			return new vscode.SymbolInformation(
				name,
				kind,
				'SymbolKind',
				new vscode.Location(
               // Just a fake filepath, since there's no reason
               // to actually *pick* these symbols from the search.
					vscode.Uri.file('example'),
					new vscode.Position(0, 0),
				),
			);
		});
	}

	protected constructor() {}
	static register() {
		const provider = new SymbolKindIconProvider();
		return provider;
	}
}
```