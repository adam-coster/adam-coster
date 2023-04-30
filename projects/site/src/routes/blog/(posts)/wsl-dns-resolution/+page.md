If you're running WSL on Windows and seeing the error message "Temporary failure in name resolution", here's what's going on and how to fix it.

## Verify the problem

You'll see that error any time a request comes from WSL to the internet. Verify by pinging some website from the WSL terminal, e.g. via `ping google.com`. If you see that "Temporary failure" error instead of the `ping` expected data, you've got a DNS resolution problem. But we can fix it.

## Why is this happening?

The WSL configuration file `/etc/wsl.conf` contains, by default, a setting `generateResolvConf = false` that is intended to prevent the Linux instance from resetting your DNS resolution settings on each bootup. Unfortunately that setting does _not_ stop the instance from _deleting_ your settings.

You can set your DNS resolver manually, but it'll get deleted every time you reboot unless you mark the file as read-only. So that's what we'll do.

## Update `/etc/resolv.conf` and make it read-only

Run the following commands in your WSL terminal, changing the nameservers if you feel so inclined:

```sh
# /etc/resolv.conf is a symbol link, delete it to create a regular file
sudo rm /etc/resolv.conf
sudo tee /etc/resolv.conf << EOF
nameserver 1.1.1.1 # Cloudflare
nameserver 8.8.8.8 # Google
nameserver 8.8.4.4 # Google
EOF

# Mark as read-only to prevent deletion on reboot
sudo chattr +i /etc/resolv.conf
```

Thanks to the the [WSL GitHub issue](https://github.com/microsoft/WSL/issues/6977) on the topic, and specifically [the comment](https://github.com/microsoft/WSL/issues/6977#issuecomment-858716868) by GitHub user [wjzhou](https://github.com/wjzhou), for this answer!
