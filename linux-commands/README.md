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
3. [Creating users & sudo](Creating_users_and_sudo.md)



Directory commands
==================

`ls`
----

Type `ls` to list files and folders.

```
root@af2e62e7233d:/# ls
TEST.DAVE  boot  etc   lib    media  opt   root  sbin  sys  usr
bin        dev   home  lib64  mnt    proc  run   srv   tmp  var
```

Use the `-a` flag to list hidden files (of note is `.dockerenv`; we'll talk more about `.` and `..` later):

```
root@af2e62e7233d:/# ls -a
.   .dockerenv  bin   dev  home  lib64  mnt  proc  run   srv  tmp  var
..  TEST.DAVE   boot  etc  lib   media  opt  root  sbin  sys  usr
```

Hidden files are (usually) prefixed with a dot.

Use the `-l` flag to list more details:

```
root@af2e62e7233d:/# ls -l
total 64
-rw-r--r--   1 root root    0 Nov  6 00:19 TEST.DAVE
drwxr-xr-x   2 root root 4096 Oct  6 01:38 bin
drwxr-xr-x   2 root root 4096 Apr 12  2016 boot
drwxr-xr-x   5 root root  380 Nov  7 01:08 dev
drwxr-xr-x  52 root root 4096 Nov  6 01:39 etc
drwxr-xr-x   5 root root 4096 Nov  6 01:36 home
drwxr-xr-x   9 root root 4096 Nov  6 00:50 lib
drwxr-xr-x   2 root root 4096 Oct  6 01:38 lib64
drwxr-xr-x   2 root root 4096 Oct  6 01:38 media
drwxr-xr-x   2 root root 4096 Oct  6 01:38 mnt
drwxr-xr-x   2 root root 4096 Oct  6 01:38 opt
dr-xr-xr-x 170 root root    0 Nov  7 01:08 proc
drwx------   2 root root 4096 Nov  6 00:19 root
drwxr-xr-x   7 root root 4096 Nov  6 01:36 run
drwxr-xr-x   2 root root 4096 Nov  4 09:45 sbin
drwxr-xr-x   2 root root 4096 Oct  6 01:38 srv
dr-xr-xr-x  13 root root    0 Nov  7 01:08 sys
drwxrwxrwt   2 root root 4096 Nov  6 01:35 tmp
drwxr-xr-x  17 root root 4096 Nov  6 01:35 usr
drwxr-xr-x  16 root root 4096 Nov  6 00:50 var
```

If you want to see hidden files with more details you can do `ls -a -l` or `ls -al`:

```
root@af2e62e7233d:/# ls -al
total 72
drwxr-xr-x  42 root root 4096 Nov  7 01:08 .
drwxr-xr-x  42 root root 4096 Nov  7 01:08 ..
-rwxr-xr-x   1 root root    0 Nov  6 00:19 .dockerenv
-rw-r--r--   1 root root    0 Nov  6 00:19 TEST.DAVE
drwxr-xr-x   2 root root 4096 Oct  6 01:38 bin
drwxr-xr-x   2 root root 4096 Apr 12  2016 boot
drwxr-xr-x   5 root root  380 Nov  7 01:08 dev
drwxr-xr-x  52 root root 4096 Nov  6 01:39 etc
drwxr-xr-x   5 root root 4096 Nov  6 01:36 home
drwxr-xr-x   9 root root 4096 Nov  6 00:50 lib
drwxr-xr-x   2 root root 4096 Oct  6 01:38 lib64
drwxr-xr-x   2 root root 4096 Oct  6 01:38 media
drwxr-xr-x   2 root root 4096 Oct  6 01:38 mnt
drwxr-xr-x   2 root root 4096 Oct  6 01:38 opt
dr-xr-xr-x 170 root root    0 Nov  7 01:08 proc
drwx------   2 root root 4096 Nov  6 00:19 root
drwxr-xr-x   7 root root 4096 Nov  6 01:36 run
drwxr-xr-x   2 root root 4096 Nov  4 09:45 sbin
drwxr-xr-x   2 root root 4096 Oct  6 01:38 srv
dr-xr-xr-x  13 root root    0 Nov  7 01:08 sys
drwxrwxrwt   2 root root 4096 Nov  6 01:35 tmp
drwxr-xr-x  17 root root 4096 Nov  6 01:35 usr
drwxr-xr-x  16 root root 4096 Nov  6 00:50 var
```

cd, grep, find, touch, find, tab, cp, mkdir, rm, rmdir

symlinks
--------

chmod
-----

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
