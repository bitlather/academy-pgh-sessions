Linux Commands
==============

Use the instructions provided in the session for building your own Ubuntu instance on Docker.

If you are following from home, look for instructions on how to install docker. I already had ubuntu, so I used this guide (which won't work on OSX or Windows):
- https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-16-04

Most of these documents should work in OSX's terminal, too. You should follow this tutorial with ubuntu, since some things, like installing software, will differ. Just keep this in mind if you typically develop on a Mac.


Contents
--------

It's best to run through these in order your first time, as some sections may rely on what you learned in others.

1. [Create ubuntu container](Create_ubuntu_container.md) - also how to log back in to your container in case you get logged out
2. [Installing software on ubuntu](Installing_software_on_ubuntu.md) - using `apt-get install`
3. [Creating users & sudo](Creating_users_and_sudo.md)
4. [echo and write output to file](echo_and_write_output_to_file.md)
5. [Variables](Variables.md)
6. File & directory commands:
    - [ls](ls.md) - list files and folders
    - [cd](cd.md) - change directory
    - [cat](cat.md) - display file contents
    - [touch](touch.md) - create an empty file
    - [rm](rm.md) - delete files
    - [mkdir & rmdir](mkdir_and_rmdir.md) - make and delete directories
    - [cp](cp.md) - copy a file
    - tail TODO

grep, find



symlinks
--------

chmod
-----

curl
----
TODO

suzy@af2e62e7233d:~$ sudo apt-get install curl
[sudo] password for suzy: 

Future:
- bash scripting
- vim
- cron
- killing processes
- tar / zip
