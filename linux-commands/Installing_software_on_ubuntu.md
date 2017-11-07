Installing software on ubuntu
=============================

We use `apt-get` in ubuntu to install software. First, we must update our repositories, so that we can then install the latest software. This is especially important for new Ubuntu containers in docker, as they come with practically nothing.
```
# apt-get update
```

Now, we can install software. Let's start with python:
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
