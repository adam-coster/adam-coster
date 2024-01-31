Add `style="display:inline-block"` to the root SVG

Add `fill="currentColor"` to the root `<path/>`

Add styling:

```html
<style>
	svg {
		width: var(--icon-width, 1em);
		height: auto;
	}
</style>
```

Then it can be used like this:

```html
<MyIcon --icon-width="0.8em" />
```

And since icons come in different widths, you can do some per-icon normalization in the component. E.g.


<style>
	svg {
		/* Normalize this icon to be 80% the width */
		width: calc(var(--icon-width, 1em) * 0.8);
		height: auto;
	}
</style>
