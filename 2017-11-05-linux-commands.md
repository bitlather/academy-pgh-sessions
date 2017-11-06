Linux Commands
==============

Use the instructions provided in the session for building your own Ubuntu instance on Docker.

If you are following from home, look for instructions on how to install docker. I already had ubuntu, so I used this guide (which won't work on OSX or Windows):
- https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-16-04

Create Ubuntu Container
-----------------------

Create your instance of ubuntu (do not copy the $, and replace `davebuntu` with `(yourname)buntu`):
```
$ sudo docker run -it --name davebuntu ubuntu
```

Verify the installation version (look for the arrow below):
```
$ cat /etc/*release
    DISTRIB_ID=Ubuntu
    DISTRIB_RELEASE=16.04
    DISTRIB_CODENAME=xenial
    DISTRIB_DESCRIPTION="Ubuntu 16.04.3 LTS"
    NAME="Ubuntu"
    VERSION="16.04.3 LTS (Xenial Xerus)"
    ID=ubuntu
    ID_LIKE=debian
    PRETTY_NAME="Ubuntu 16.04.3 LTS" <=== HERE!
    VERSION_ID="16.04"
    HOME_URL="http://www.ubuntu.com/"
    SUPPORT_URL="http://help.ubuntu.com/"
    BUG_REPORT_URL="http://bugs.launchpad.net/ubuntu/"
    VERSION_CODENAME=xenial
    UBUNTU_CODENAME=xenial
```

If your version does not match, then things will probably still be fine for this tutorial; just be aware of it in case something goes wrong.


Logging out and back in
-----------------------
You can press `CTRL+D` on Windows computers (`CMD+D` on OSX?) or type `exit` and press enter to exit.

If you are SSH'd in then be careful about pressing `CTRL+D` too many times, as it will also break your SSH connection.

To log back in (replace `davebuntu` with your name):
```
$ sudo docker start davebuntu
$ sudo docker attach davebuntu
```

If you don't see `root@af2e62e7233d:/#` then you might just need to press enter.


Installing Software
-------------------------------
We use `apt-get` in ubuntu to install software. First, we must update our repositories, so that we can then install the latest software. This is especially important for new Ubuntu containers in docker, as they come with practically nothing.
```
$ apt-get update
```

Now, we can install software. Here are some things we'll need:
```
$ apt-get install python
```

Notice that you are prompted if you want to install the package. Press `n` to say no.

Oops, we actually want to install python. Instead of re-typing the command, press the UP arrow key and press enter. (You can do this a number of time to re-run a command from your "history.") This time, press `Y` when asked if you want to install python.

We can pass the `-y` flag so that packages are installed without us pressing yes:
```
$ apt-get install -y vim
```
