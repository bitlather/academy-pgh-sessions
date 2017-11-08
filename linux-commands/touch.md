`touch`
=======

You can use `touch` to create an empty file.

If you're not already logged in as suzy, do so now:

```
root@af2e62e7233d:/# su suzy
suzy@af2e62e7233d:/$ 
```

Go to suzy's home directory:

```
suzy@af2e62e7233d:/$ cd ~
suzy@af2e62e7233d:~$ 
```

Create and change into the _stranger-things_ directory:

```
suzy@af2e62e7233d:~$ mkdir stranger-things
suzy@af2e62e7233d:~$ cd stranger-things/
suzy@af2e62e7233d:~/stranger-things$ 
```

Let's create some files:

```
suzy@af2e62e7233d:~/stranger-things$ touch will.quotes
suzy@af2e62e7233d:~/stranger-things$ touch dustin.quotes
suzy@af2e62e7233d:~/stranger-things$ touch jim_hopper.quotes
suzy@af2e62e7233d:~/stranger-things$ ls
dustin.quotes  jim_hopper.quotes  will.quotes
```

I don't normally have much use for the `touch` command, but sometimes it's nice for automation scripts. For example, some software might require a file exists or it fails, so you could write a script that installs the software and creates the empty file they need.

Or, maybe you want to write a script that appends text to a file. The file must exist first. You can use `touch` before appending to ensure the file exists; it will not throw an error or alter the file if it already exists (see the Jim Hopper example above).

Cleanup
-------

Let's clear out the directory because we'll be using `stranger-things` in other tutorials:

```
suzy@af2e62e7233d:~/stranger-things$ cd ~
suzy@af2e62e7233d:~$ rm -r stranger-things/
suzy@af2e62e7233d:~$ ls
suzy@af2e62e7233d:~$ 
```
