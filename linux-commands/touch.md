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
suzy@af2e62e7233d:~/stranger-things$ touch will
suzy@af2e62e7233d:~/stranger-things$ touch dustin
suzy@af2e62e7233d:~/stranger-things$ touch jim.hopper
suzy@af2e62e7233d:~/stranger-things$ ls
dustin  jim.hopper  will
```

I don't normally have much use for the `touch` command, but sometimes it's nice for automation scripts. For example, some software might require a file exists or it fails, so you could write a script that installs the software and creates the empty file they need.
