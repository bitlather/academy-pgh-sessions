`mkdir` and `rmdir`
===================

We use `mkdir` to create directories and `rmdir` to delete them (most of the time).

`mkdir`
-------

If you're not already logged in as suzy, do so now:

```
root@af2e62e7233d:/# su suzy
suzy@af2e62e7233d:/$ 
```

Go to suzy's home directory:

```
suzy@af2e62e7233d:/var$ cd ~
suzy@af2e62e7233d:~$ 
```

Let's make a directory called `stranger-things` and prove it worked with `ls`:

```
suzy@af2e62e7233d:~$ mkdir stranger-things
suzy@af2e62e7233d:~$ ls -l
total 4
drwxrwxr-x 2 suzy suzy 4096 Nov  7 03:13 stranger-things
```

Let's make another directory:

```
suzy@af2e62e7233d:~$ mkdir stranger-things/eleven
suzy@af2e62e7233d:~$ cd stranger-things/
suzy@af2e62e7233d:~/stranger-things$ ls
eleven
```

Let's try to make `chief` and `chief/hopper`:

```
suzy@af2e62e7233d:~/stranger-things$ mkdir chief/hopper
mkdir: cannot create directory 'chief/hopper': No such file or directory
```

... luckily there's a flag for that:

```
suzy@af2e62e7233d:~/stranger-things$ mkdir -p chief/hopper
suzy@af2e62e7233d:~/stranger-things$ ls chief/       
hopper
```

I don't expect you to remember this flag, it's just good to know that even the simplest linux commands have additional options:

Let's `cd` into eleven:

```
suzy@af2e62e7233d:~/stranger-things$ cd eleven/
```

... and create a few directories for the other characters in the _stranger-things_ folder:

```
suzy@af2e62e7233d:~/stranger-things/eleven$ mkdir ../will
suzy@af2e62e7233d:~/stranger-things/eleven$ mkdir ~/stranger-things/barb
suzy@af2e62e7233d:~/stranger-things/eleven$ mkdir /home/suzy/stranger-things/dustin
```

... and prove that it worked:

```
suzy@af2e62e7233d:~/stranger-things/eleven$ ls ..
barb  chief  dustin  eleven  will
```


`rmdir`
-------

Let's make sure we're in the _stranger-things_ directory:

```
suzy@af2e62e7233d:~$ cd ~/stranger-things/
suzy@af2e62e7233d:~/stranger-things$ 
```

The first season of Stranger Things has been out for a while, but I don't want to give any spoilers. So I won't say why, but ... we need to remove the barb directory.

```
suzy@af2e62e7233d:~/stranger-things$ ls
barb  chief  dustin  eleven  will
suzy@af2e62e7233d:~/stranger-things$ rmdir barb
suzy@af2e62e7233d:~/stranger-things$ ls
chief  dustin  eleven  will
```

Just for practice, here's a few more ways to delete directories. Some of them might be silly, but they're good practice:

```
suzy@af2e62e7233d:~/stranger-things$ rmdir will/../will
suzy@af2e62e7233d:~/stranger-things$ ls
chief  dustin  eleven
```

```
suzy@af2e62e7233d:~/stranger-things$ rmdir ~/stranger-things/eleven/
suzy@af2e62e7233d:~/stranger-things$ ls
chief  dustin
```

Chief Hopper isn't going to go down so easily, though.

```
suzy@af2e62e7233d:~/stranger-things$ rmdir chief/
rmdir: failed to remove 'chief/': Directory not empty
```

We can either `cd` into _chief_ and delete all of the contents and then `cd ..` to remove _chief_, but imagine if there's hundreds of files in there. The easier way doesn't use `rmdir` at all:

```
suzy@af2e62e7233d:~/stranger-things$ rm -r chief/
suzy@af2e62e7233d:~/stranger-things$ ls
dustin
```

... but, strangely enough, you can't just `rm` a directory:

```
suzy@af2e62e7233d:~/stranger-things$ rm dustin/
rm: cannot remove 'dustin/': Is a directory
```
