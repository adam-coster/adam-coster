Matching your development and production environments can save a lot of headache. In webdev our production environments are usually some flavor of Linux. While I love using Linux (I spent a couple years mostly usuing Ubuntu), the reality is that I often need Windows-only software. Switching back and forth between Windows and Linux machines/partitions is painful -- fortunately you can run both at once.

There have been ways to do this via virtualization for some time, but Windows 10 recently added a _native_ feature for running Linux on top of Windows. It's called, descriptively, "Windows Subsystem for Linux" (WSL). The latest version is WSL2.

I'm not sure what kind of spooky magic the Microsoft devs did to make this work, but it's amazing. Once it's set up, you can even add new Linux distributions _via the Windows Store_!

Of particular importance for modern webdev, Docker for Windows has [built-in support for WSL2](https://docs.docker.com/docker-for-windows/wsl/) and the performance is stellar (with some caveats).

**Important:** WSL won't give you a GUI for your Linux distros. It's more like having Linux servers running on your Windows machine. If you want a GUI, you'll need something like [VirtualBox](https://www.virtualbox.org/) (there are many options).

At the time of writing, the following steps work. Things will probably change (and get easier) over time, so take a look at the [official WSL2 installation docs](https://docs.microsoft.com/en-us/windows/wsl/install-win10) before getting started.

(Note that for all the `Start` &rarr; commands, the fastest way to run those is to hit the Windows key, then just start typing the command until a match comes up, then hit `Enter`.)

1. Make sure you're running the latest Windows 10 update (`Start` &rarr; `Check for Updates`). This might require a few rounds of updates and restarts.
2. Currently, WSL2 is only available in the Windows Insider program: go to `Start` &rarr; `Windows Insider Program Settings` and "Get Started". If you haven't registered before you'll have to go through some steps.
3. Choose whichever channel you're comfortable with. At the time of writing, "Release Preview" is sufficient to get WSL2 via the "manual" install path, and "Dev" would let you use the "Simple" install path.
4. Go to `Start` &rarr; `Windows Update Settings`. Check for and install any updates. When you're fully up to date, you should see a somewhat non-obvious link appear saying something about downloading the latest version. Click it. Restart once it's downloaded everything.
5. Do a final check for Windows Updates just to make sure you're all square.
6. Follow the [official WSL2 installation docs](https://docs.microsoft.com/en-us/windows/wsl/install-win10). Notes:

- You want WSL2 (not WSL1)
- Note that your approach depends on which Insider channel, and therefore Windows version, you're on -- you can check via `This PC` (right click) &rarr; `Properties` &rarr; `OS Build`. At the time of writing, the "Release Preview" channel required the "Manual" installation approach.
- To open Powershell as administrator, `Start` &rarr; `Powershell` (right click) &rarr; `Run as administrator`
- If you try to run commands that start with `wsl` during the process, and you get an error that the command was not found, there's a decent chance you missed a restart step.

1. Don't skip that last step of installing your favorite Linux Distro through the Microsoft Store! Ubuntu is always a good choice.

- Log into your new Linux distro via `Start` &rarr; `wsl`.

Whew, now you're all set up!

To run your distro, you can directly go to `Start` &rarr; `wsl`, or you can run the `wsl` command inside PowerShell or your favorite terminal. You can log into any of your installed distros, and change which one is the default, using the various [`wsl` command options](https://docs.microsoft.com/en-us/windows/wsl/reference).

**Important:** when you log into your distro via the `wsl` command, you'll find yourself in your Windows home directory. The Windows file system is mounted to your Linux distro (you can see this by looking at your path when running `pwd`), and _everything is slow_ (especially Docker) when using Linux on top of the mounted Windows filesystem! Switch over to the Linux filesystem (via `cd ~`) before you start your work.
