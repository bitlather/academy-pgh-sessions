`cd`
====

_This document assumes you are logged in as root._

The `cd` command lets you change the current working directory. In Windows or OSX, it's kind of like double-clicking a folder on your desktop, but on the command line.

First, let's make sure we're looking at our root directory. (For Windows users, this is like your C:\ drive). We can do that by just `cd`'ing into `/`.

```
root@af2e62e7233d:/# cd /
```

Let's look at what directories we have. In a previous tutorial we covered `ls`; we can also get a list of directories if we type `cd` followed by two tabs:

```
root@af2e62e7233d:/# cd 
.dockerenv  dev/        lib64/      proc/       srv/        var/
TEST.DAVE   etc/        media/      root/       sys/        
bin/        home/       mnt/        run/        tmp/        
boot/       lib/        opt/        sbin/       usr/        
root@af2e62e7233d:/# cd 
```

Also like in the `ls` tutorial, we can start typing a directory name and press tab twice to get an auto-complete list of potential matches:

```
root@af2e62e7233d:/# cd var/lo
local/ lock/  log/   
root@af2e62e7233d:/# cd var/lo
```

Let's look at `var/log`:
```
root@af2e62e7233d:/# cd var/log
root@af2e62e7233d:/var/log# ls
alternatives.log  bootstrap.log  dmesg     faillog  lastlog
apt               btmp           dpkg.log  fsck     wtmp
```

Let's go back up one directory to `var`:

```
root@af2e62e7233d:/var/log# cd ..
root@af2e62e7233d:/var#
```

The other special directory name is `.`, which just means current directory. When we cd into it, nothing changes:

```
root@af2e62e7233d:/var# cd .
root@af2e62e7233d:/var#
```

We can do that a few times. Why not?

```
root@af2e62e7233d:/var# cd ./././.
root@af2e62e7233d:/var# 
```

Remember suzy? We created her earlier. Let's log in as suzy now.

```
root@af2e62e7233d:/var# su suzy
suzy@af2e62e7233d:/var$ 
```

Another special symbol is `~`, which is the user's home directory.

```
suzy@af2e62e7233d:/var$ cd ~
suzy@af2e62e7233d:~$ 
```

This symbol is a shortcut; to get the true path, use the `pwd` command.

```
suzy@af2e62e7233d:~$ pwd
/home/suzy
```

Here's further proof that they are the same thing:

```
suzy@af2e62e7233d:~$ cd /home/suzy
suzy@af2e62e7233d:~$ 
```

If we want to get into the _var_ directory from earlier, we can get there by supplying its absolute path:

```
suzy@af2e62e7233d:~$ cd var
bash: cd: var: No such file or directory
suzy@af2e62e7233d:~$ cd /var
suzy@af2e62e7233d:/var$ 
```


Review
------

- What does `cd .` do?
- What does `cd ..` do?
- What does `cd /` do?
- What does `cd ~` do?
