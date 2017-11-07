Create ubuntu container
=======================

Create your instance of ubuntu (do not copy the $, and replace `davebuntu` with `(yourname)buntu`):
```
$ sudo docker run -it --name davebuntu ubuntu
```

Verify the installation version (do not copy the #, and compare the line with an arrow to your output):
```
# cat /etc/*release
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


Logging out and back in to ubuntu container
-------------------------------------------
You can press `CTRL+D` on Windows computers (`CMD+D` on OSX?) or type `exit` and press enter to exit.

If you are SSH'd in then be careful about pressing `CTRL+D` too many times, as it will also break your SSH connection.

To log back in (replace `davebuntu` with your name):
```
$ sudo docker start davebuntu
$ sudo docker attach davebuntu
```

If you don't see `root@af2e62e7233d:/#` then you might just need to press enter.

