Visual Studio Code (VSCode) has some handy features for automatically fixing things upon various triggers. While convenient, those settings can also get in the way when they don't do exactly what you want.

In particular, while debugging something you may want to temporarily add an early-exit to a function (with an early `return`) or a program (with an `process.exit()`). But when using VSCode's `fixAll` setting, then upon saving all of that now-unreachable code will get deleted. Personally, I've never found the automatic deletion of unreachable code to be useful.

Fortunately, you don't have to completely disable the `fixAll` options to make it stop doing that part. You just have to have the right ones enabled.

Here's what's in my own `settings.json` for these code actions (note that the `"explicit"` value basically means "On Save"):

```json
{
  //...
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    // ⚠️ Typescript's is the one that causes deletion of unreachable code!
    // "source.fixAll.ts": "explicit",
    // ⚠️ This runs all fixAll ops, including Typescript's
    // "source.fixAll": "explicit",

    // These are useful for a lot of projects if there is good uniqueness
    // in the names of things you're importing. If not then you'll often
    // end up auto-importing unexpected things that have the right name but
    // are not actually what you want. I usually have these enabled, but
    // disabled them in some workspaces when they get annoying.
    "source.addMissingImports": "explicit",
    "source.organizeImports": "explicit",
    "source.removeUnusedImports": "explicit"
  },
  //...
}
```

If you want to keep Typescript's `fixAll` actions, you can keep `source.fixAll` or `source.fixAll.ts` enabled in VSCode but then update your Typescript config so that `compilerOptions.allowUnreachableCode` is `false`. However, if you do so then any unreachable code will not be clearly distinguished in your editor, which is dangerous since unreachable code is *probably* a bug if you aren't actively debugging something.

I've [seen claims](https://stackoverflow.com/questions/72944608/vscode-aggressively-deletes-all-code-after-unconditional-return-no-unreachable) that you can get that error detection back via eslint, but I haven't found a way to get that to work in combination with `compilerOptions.allowUnreachableCode` being set to `false`. Just using `source.fixAll.eslint` has worked well enough for me!