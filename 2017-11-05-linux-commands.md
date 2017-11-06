Linux Commands
==============

Use the instructions provided in the session for building your own Ubuntu instance on Docker.

If you are following from home, look for instructions on how to install docker. I already had ubuntu, so I used this guide (which won't work on OSX or Windows):
- https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-16-04

Create Ubuntu container
-----------------------

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


Installing software
-------------------
We use `apt-get` in ubuntu to install software. First, we must update our repositories, so that we can then install the latest software. This is especially important for new Ubuntu containers in docker, as they come with practically nothing.
```
# apt-get update
```

Now, we can install software. Here are some things we'll need:
```
# apt-get install python
```

Notice that you are prompted if you want to install the package. Press `n` to say no.

Oops, we actually want to install python. Instead of re-typing the command, press the UP arrow key and press enter. (You can do this a number of time to re-run a command from your "history.") This time, press `Y` when asked if you want to install python.

We can pass the `-y` flag so that packages are installed without us pressing yes:
```
# apt-get install -y vim
```
```
# apt-get install -y sudo
```

At this point, you should be logged in as root. If you're not logged in as root, you will likely need to prefix the above commands with `sudo`. We'll talk about that more in a bit.

Creating a user & sudo
----------------------

We will create two users: one who is capable of running `sudo` commands, and one who isn't. Don't worry about what that means now.

First, our non-sudo user, who's named **no**lan to remind us that he does not have sudo access:
```
# adduser nolan
```

Give nolan a password (`pass1` is good enough, but do whatever you want - just don't forget it) and press enter through all the fields like Full Name, etc. Those aren't important today.

We can now log in as nolan:

```
root@af2e62e7233d:/# su nolan
nolan@af2e62e7233d:/$ 
```

Notice that the first word on the new line is nolan instead of root now.

Let's try to create a user:

```
nolan@af2e62e7233d:/$ adduser bob
adduser: Only root may add a user or group to the system.
```

Well, that didn't work.

Let's log out of nolan since he's no use to us right now:

```
nolan@af2e62e7233d:/$ exit
exit
root@af2e62e7233d:/# 
```

Next, we'll create a user that can sudo. Let's call her sue:

```
# adduser suzy
```

Fill out all the steps like last time, and then grant her the powers of sudo:

```
# usermod -aG sudo suzy
```

Now we can log in as suzy:

```
root@af2e62e7233d:/# su - suzy
suzy@af2e62e7233d:~$ 
```

Can suzy create a user?

```
suzy@af2e62e7233d:/$ adduser bob
adduser: Only root may add a user or group to the system.
```

Hmm... only root may add users. But, suzy has sudo, which means "super user do", so she _can_ create users:

```
suzy@af2e62e7233d:/$ sudo adduser bob
[sudo] password for suzy: 
```

Enter suzy's password from before. Nothing will appear on the screen, but it is keeping track of what you're typing. This is to prevent others from reading sensitive information when they're looking at your screen. Press enter once you've entered the password. You should see:

```
Adding user `bob' ...
Adding new group `bob' (1002) ...
Adding new user `bob' (1002) with group `bob' ...
Creating home directory `/home/bob' ...
Copying files from `/etc/skel' ...
Enter new UNIX password: 
```

Fill out the form as before. Now let's log in as bob:

```
suzy@af2e62e7233d:/$ su bob
Password: 
bob@af2e62e7233d:/$
```

We had to enter bob's password, but we got in. Let's exit and try again with sudo:

```
bob@af2e62e7233d:/$ exit
suzy@af2e62e7233d:/$ sudo su bob
bob@af2e62e7233d:/$ 
```

With sudo, we didn't have to enter a password.

Now let's get back to root by pressing `CTRL+D` or typing exit:

```
bob@af2e62e7233d:/$ exit
suzy@af2e62e7233d:/$ exit
root@af2e62e7233d:/# 
```

Let's try to create a user with bob again.

```
root@af2e62e7233d:/# su bob
bob@af2e62e7233d:/$ sudo adduser gina
[sudo] password for bob: 
bob is not in the sudoers file.  This incident will be reported.
bob@af2e62e7233d:/$ 
```

We never gave bob sudo powers, so apparently, the system is going to snitch on his attempt to do something he shouldn't be doing.

Get back to root:

```
bob@af2e62e7233d:/$ exit
root@af2e62e7233d:/# 
```


Directory commands
------------------
TODO ls, cd, grep, find, touch, find, tab

Variables
---------
TODO export allows variables to be accessed by subprocesses; see:
```
al$ foo="Hello, World"
al$ echo $foo
Hello, World
al$ bar="Goodbye"
al$ export foo
al$ bash
bash-3.2$ echo $foo
Hello, World
bash-3.2$ echo $bar

bash-3.2$ 
```

Bash scripts
------------
TODO Create a bash script that echoes "hello" if a variable is on, then add it to cron so we can turn it on/off.

Cron
----
TODO

Processes
---------
TODO

Tail
----
TODO

curl
----
TODO

Vim
---
TODO curl a wikipedia article then use vim to find text in it.
