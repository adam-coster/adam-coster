# WSL DNS resolution error

Error message: `Temporary failure in name resolution`

When trying to do all kinds of web stuff. Verify by pinging Google, e.g. `ping google.com`. If you see that error instead of ping data, you've got a resolution problem.

Why is this happening?

The WSL configuration file `/etc/wsl.conf` contains, by default, a setting `generateResolvConf = false` that is intended to prevent the Linux instance from resetting your DNS resolution settings on each bootup. Unfortunately that setting does _not_ stop the instance from _deleting_ your settings.

You can set your DNS resolver manually, but it'll get deleted every time you reboot unless you mark the file as read-only.

Open GitHub Issue for WSL, including resolution: https://github.com/microsoft/WSL/issues/6977

Resolution provided by GitHub user [wjzhou](https://github.com/wjzhou) in [comment on that issue](https://github.com/microsoft/WSL/issues/6977#issuecomment-858716868)

Resolution:

Stolen directly from the solution:

```sh
# /etc/resolv.conf is a symbol link, delete it to create a regular file
sudo rm /etc/resolv.conf
sudo tee /etc/resolv.conf << EOF
nameserver 1.1.1.1
nameserver 8.8.8.8
nameserver 8.8.4.4
EOF

# Mark as read-only to prevent deletion on reboot
sudo chattr +i /etc/resolv.conf
```
