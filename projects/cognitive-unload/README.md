# Cognitive Unload

A theme for VS Code. **Work in Progress.**

## TODO

- Analyze the built-in Dark theme to determine:
  - Token selectors
  - Brightness/color categorization of existing TM selectors
- Add mechanism for later-defined styles to override earlier styles.
- Add base app styles using the most common components and their modifiers.
- Override base app styles using color groups computed by the theme analysis
- Add base editor styles using color categorization from theme analysis.

## Notes

_See [the official docs](https://code.visualstudio.com/api/references/theme-color) for reference._

### How are styles defined?

VS Code theme definitions are broken into three primary types of styles:

1. **app styles** _(the `colors` field in the theme file)_. Styles for VSCode itself. The identifiers/selectors for these are in the following format, where an "element" is a visual element of the window and a "component" is a stylable part+state of that element (e.g. "border", "inactiveBorder", etc).
   ```js
   /^((?<element>[^.])\.)?(?<component>[a-zA-Z0-9]+)$/;
   ```
2. **token styles** _(the `tokenColors` field in the theme file)_. These use TextMate "scopes" as selectors to identify which language components to style, using an optional foreground color and font style (e.g. bold, italic, underlined).
3. **semantic token styles** _(the `semanticTokenColors` field in the theme file)_. For supported languages (like Typescript) these selectors can override the TextMate selectors with more specific categorization. As with regular token styles, the foreground color and font style can be set.

### How to find selectors for the app itself

There are a huge number of stylable elements in the VSCode app itself. VSCode lists these in [the official docs](https://code.visualstudio.com/api/references/theme-color) (though those docs might not be kept in sync with updates to VS Code).

As of writing, there are **532** defined selectors in the docs. This is why people tend to start with an existing theme and edit it to create new ones, since starting from scratch is quite the ordeal!

However, some analysis of these selectors shows a few useful patterns.

These four components are mutually exclusive and collectively found in ~92% of all selectors.

```yml
foreground: 192
background: 180
border: 104
ansi: 16
```

Of these, the `ansi` component is quite separate. If we look at the sibling components for the other three, we see that they share a set of "modifier" components that are found pretty frequently:

- `active`
- `inactive`
- `hover`
- `selection`
- `find`
- `focus`
- `error`
- `warning`
- `highlight`

Given all of that, we can automate the creation of a _base_ style for the most common _kinds_ of elements just by checking the selector for the most common components and modifiers.
