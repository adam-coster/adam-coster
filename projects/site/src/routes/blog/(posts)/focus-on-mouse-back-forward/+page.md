While working on a web app where I have to constantly manage which elements are focused, I ran into a surprise: triggering the browser's back/forward operations via the mouse (by clicking the mousewheel left/right) caused the elements I was hovering over to capture focus!

In most cases this wouldn't matter, since you'd be triggering a browser navigation and therefore making current focus state irrelevant. And even if the navigation didn't destroy focus, having the hovered element gain focus probably won't hurt anything.

But in my case it did matter, so I had to disable it. To do so, I attached listeners to the `onpointerdown` and `onmousedown` events, and blocked default behaviors if the mouse button was not the primary one. The listener function looked something like this:

```js
/**
 * @param {MouseEvent|PointerEvent} e
 */
export function abortIfNotPrimaryMouseButton(e) {
	// The "primary" (left-click, usually) mouse button is indexed 0. Anything else
	// probably shouldn't cause focus!
	if (e.button !== 0) {
		// Then it's not a left-click! We want to avoid incidental focus caused by e.g. mousewheel left/right click
		e.preventDefault();
		e.stopPropagation();
	}
}
```

## Why does Browser Forward/Back trigger focus?

The mousewheel left/right click do not trigger the `onclick` event, but they _do_ trigger `onmouseup`/`onmousedown` (and `onpointer(up|down)`) events. Apparently these events cause the target element to capture focus.

If you capture these events via a listener, you can tell which mouse button was responsible by checking the event's [`button` property](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button). When that value is `0` you're dealing with the primary button (left-click, probably).
