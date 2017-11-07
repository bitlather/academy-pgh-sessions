Linux Commands
==============

Use the instructions provided in the session for building your own Ubuntu instance on Docker.

If you are following from home, look for instructions on how to install docker. I already had ubuntu, so I used this guide (which won't work on OSX or Windows):
- https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-16-04

Contents
--------

It's best to run through these in order your first time, as some sections may rely on what you learned in others.

1. [Create ubuntu container](Create_ubuntu_container.md)
2. [Installing software on ubuntu](Installing_software_on_ubuntu.md)
3. [Creating users & sudo](Creating_users_and_sudo.md)
4. File & directory commands:
    - [ls](ls.md) - list files and folders
    - [cd](cd.md) - change directory
    - [mkdir & rmdir](mkdir_and_rmdir.md) - make and delete directories


cp, touch, rm,

grep, find


symlinks
--------

chmod
-----

Redirecting command output to file
----------------------------------
TODO see https://askubuntu.com/questions/420981/how-do-i-save-terminal-output-to-a-file

Cat
---
TODO

curl
----
TODO

Vim
---
TODO curl a wikipedia article then use vim to find text in it.

Tail
----
TODO



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


