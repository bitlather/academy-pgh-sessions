Linux Commands
==============

Use the instructions provided in the session for building your own Ubuntu instance on Docker.

If you are following from home, look for instructions on how to install docker. I already had ubuntu, so I used this guide (which won't work on OSX or Windows):
- https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-16-04

Contents
--------

It's best to run through these in order your first time, as some sections may rely on others.

1. [Create ubuntu container](Create_ubuntu_container.md)
2. [Installing software on ubuntu](Installing_software_on_ubuntu.md)



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

Next, we'll create a user that can sudo. Let's call her suzy:

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
TODO ls, cd, grep, find, touch, find, tab, cp, mkdir, rm, rmdir

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

Redirecting command output to file
----------------------------------
TODO see https://askubuntu.com/questions/420981/how-do-i-save-terminal-output-to-a-file

Tail
----
TODO

Cat
---
TODO

curl
----
TODO

Vim
---
TODO curl a wikipedia article then use vim to find text in it.
