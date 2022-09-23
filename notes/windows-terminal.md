**WHO:** Users of any Command Line tools/scripts (e.g. Stitch, node, python, etc)

**WHAT:** Install Windows Terminal Preview, and set defaults (see the thread)

**WHEN:** Zero-urgency, if and whenever you please! It's quality-of-life improvement stuff

**WHY**

- The user experience is MUCH better than using your shells (e.g. Git Bash, cmd, or Powershell) directly. E.g. copy-paste just works as you'd expect.

- You can use a common theme across all of your shells, so that things look nice all the time.

- You can default to it for all of your shells, so that you'll just get a better experience for free every time you use the command line.

- You can make it so that the windows _no longer close_ upon error or completion. This is very useful for running bash scripts and stuff, since those close before you can see what the error message was!

- You can run multiple tools at the same time, in different tabs or even in a grid (useful for cases like Sam's, where he needs to run multiple CLI tools at once)

- You can create custom "profiles", which can specify different shells, starting locations, appearance, and behavior. E.g. Sam could make a profile called "Crashlands2 Spritely" that's properly configured to start in the right place. You can even give them custom icons and titles so that they're easy to grok at a glance.

- You can create desktop shortcuts that launch a terminal with a collection of tabs already prepped, making it easy to rerun complicated setups

See the thread for more details and to comment/ask questions!

**WTF is a shell/terminal?**

- **Shell:** A program that provides a collection of commands and a programming language for interacting with your system, all via text-based input and output. Examples include cmd, Powershell, Bash, Git Bash, sh, fsh, zsh, nushell, and on and on.

- **Shell Session:** When a shell is first launched it loads a bunch of info from your machine and then sits there waiting for commands. From that time until it is closed is your "Session". The session should include your history of commands and other context information.

- **Terminal:** A program that creates the _interactive interface_ for a shell. Basically, the thing you actually _see_ and _type into_. The Terminal processes your inputs and passes them to the shell, and then captures the shell's outputs, processes them, and shows them to you. Windows Terminal is an example of a terminal, and so is the integrated terminal you might use in VSCode.

- **Profile:** A collection of Terminal settings to use in a Shell session. For example, you could have a "Crashlands2" profile that starts a Git Bash session from your Crashlands2 root directory, or an "Admin" profile that runs with admin permissions for doing weird stuff.

So whenever you "open Git Bash/Powershell/cmd", what's actually happening is that you're opening a _default terminal_ that lets you interact with that shell. Those default terminals mostly suck.

And thus: Windows Terminal Preview provides a slick interface and UI/UX for running and managing _shell sessions_, and can replace the defaults that are normally used when you launch any of your shells.

**How to Install**

- Uninstall the non-Preview version (it comes with most versions of Windows) -- this prevents you from accidentally launching the worse one and getting confused when things don't work as you expect. To do so, hit `Win` then search `remove` to pull up "Add or remove programs". The search for "terminal", or "windows", or "wt" (or just scroll) until you find "Windows Terminal" (which might just be called "Terminal" in this list!). Uninstall it right there!

- Install Preview using the Microsoft Store for easy updates: <https://apps.microsoft.com/store/detail/windows-terminal-preview/9N8G5RFZ9XK3>

**Pro Tips**

- Open the terminal by hitting the `Win` key and starting to type either `terminal` (works on my Windows 11 machine) or `wt` (works on my laptop). Windows search should pull it right up!

- Peruse the Settings (the down-arrow next to the tab, or `Ctrl+Shift+P` and search "settings") to see what you can do right out of the gate. Change your font and color schemes! I recommend "Half Dark"

- `Settings > Startup > Default profile`: set that to whichever profile you'll use most often

- `Settings > Profiles > {shell you don't use} > "Hide profile from dropdown"`: remove the shells you don't care about from the list of options

- `Settings > Open JSON File` (bottom left of the Settings window): where all of your settings are stored, and where you can make edits that the Settings window doesn't provide (e.g. re-ordering the profiles). Also great for backing up and sharing your settings!

- `Settings > Startup > "When Terminal starts"`: set that to "open windows from a previous session". That way whatever you were last doing is where you'll start!

- `Settings > Startup > "New instance behavior"`: I recommend one of the "Attach to most recent . . ." options, so you have fewer application windows

- `Settings > Actions`: a bunch of keyboard shortcuts -- these are fully customizable and you can add more!

- `Settings > Profiles > Defaults > Advanced > Profile Termination Behavior`: I recommend "Close when ... successfully". When you run a `.cmd`, `.bat`, or any other script, this will keep the terminal tab from closing if something goes wrong -- that way you can see the log information to help triangulate the problem!
