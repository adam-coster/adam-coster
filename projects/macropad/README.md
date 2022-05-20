# Adam's Adafruit MacroPad RP2040 Hotkeys

Adafruit makes a nifty device they call [a "MacroPad"](https://www.adafruit.com/product/5128). It's basically a Raspberry Pi with a 12-key mechanical keyboard, 128x64 pixel screen, and rotary dial stuck to it.

<p style="center"><img src="https://cdn-shop.adafruit.com/145x109/5128-12.jpg" alt="Top shot of powered on, assembled MacroPal keypad glowing rainbow colors."></p>

This project contains reference info for where to find appropriate documentation, and otherwise serves as a playground and repository for any hotkeys I put together for it.

## Documentation

- [Adafruit's docs](https://learn.adafruit.com/macropad-hotkeys). Start there for instructions on where to get the code and how to boot it up.

## What hotkeys are here?

Currently this is just a copy of Adafruit's provided project, so... whatever they've provided!

## How to load the code

Once you've got your MacroPad mounted on your computer (following their instructions), you can just drag-and-drop everything in the [`src`](./src) folder right into the root of MacroPad's drive. The Macropad will autoreload once copying is complete (note that copying is very slow!).

Alternatively, if you have NodeJS v16+ installed and have run `npm install` to install local dependencies, you can run `npm run load` from this directory.
