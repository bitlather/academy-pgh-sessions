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

If your version does not match, then things will probably still be fine for this tutorial.


Logging out and back in
-----------------------
You can press `CTRL+D` on Windows computers (`CMD+D` on OSX?) or type `exit` and press enter to exit.

If you are SSH'd in then be careful about pressing `CTRL+D` too many times, as it will also break your SSH connection.

To log back in (replace `davebuntu` with your name):
```
$ sudo docker start davebuntu
$ sudo docker attach davebuntu
```


Install the software we'll need
-------------------------------
```
$ apt-get update
$ apt-get install python
```
