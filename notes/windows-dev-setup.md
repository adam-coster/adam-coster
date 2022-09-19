# Setting up a dev environment on Windows

e by Starship)

- Choose and install a [NerdFont](https://www.nerdfonts.com/font-downloads) (for us)
- Install [Neovim](https://neovim.io/doc/general/)  
  `winget install Neovim.Neovim`
- Install [Windows Terminal Preview](https://apps.microsoft.com/store/detail/windows-terminal-preview/9N8G5RFZ9XK3)
- Install [nushell](https://www.nushell.sh/)  
  `winget install nushell`
- Install [Starship]()  
  `winget install --id Starship.Starship`
  - Append `eval "$(starship init bash)"` to `~/.bashrc`
  - Append `Invoke-Expression (&starship init powershell)` to PowerShell config (via `$PROFILE`)
  - For nushell (via `$nu.env-path`) append:
  ```
  mkdir ~/.cache/starship
  starship init nu | save ~/.cache/starship/init.nu
  ```
  - For nushell (via `$nu.config-path`) append `source ~/.cache/starship/init.nu`

```bash
winget install Neovim.Neovim
winget install nushell
winget install --id Starship.Starship
```
