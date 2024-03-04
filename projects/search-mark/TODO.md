# TODO

- [ ] Support performing searches on and marking text while skipping html/markdown/etc in the source. Will require some index management. E.g. `<b class="meh">hello</b> world` should be searchable by `"hello world"`, allowing the whole thing to get marked as `<mark><b class="meh">hello</b> world</mark>`
