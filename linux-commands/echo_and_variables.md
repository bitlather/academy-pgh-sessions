Echo and variables
==================

You can use `echo` to print text to the screen.

If you're not already logged in as suzy, do so now:

```
root@af2e62e7233d:/# su suzy
suzy@af2e62e7233d:/$ cd ~
suzy@af2e62e7233d:~$ 
```


`echo`
------

Let's output the typical hello world:

```
suzy@af2e62e7233d:~$ echo hello world
hello world
```

Call me a stickler, but I think strings should always have quotes around them:

```
suzy@af2e62e7233d:~$ echo "hello world"
hello world
suzy@af2e62e7233d:~$ echo 'hello world'
hello world
```


`echo` to a file
----------------

Perform the following setup:

```
suzy@af2e62e7233d:~$ mkdir stranger-things
suzy@af2e62e7233d:~$ cd stranger-things
suzy@af2e62e7233d:~/stranger-things$
```

You can write to a file using `echo` (and create the file if it doesn't already exist). The following example also uses `ls` to prove the file exists and `cat` to show the contents of the file. We'll talk about those more in a separate tutorial.

```
suzy@af2e62e7233d:~/stranger-things$ echo "Mornings are for coffee and contemplation." > jim_hopper.quotes

suzy@af2e62e7233d:~/stranger-things$ ls                    
jim_hopper.quotes

suzy@af2e62e7233d:~/stranger-things$ cat jim_hopper.quotes 
Mornings are for coffee and contemplation.

suzy@af2e62e7233d:~/stranger-things$ 
```

Doing it again will overwrite the data:
```
suzy@af2e62e7233d:~/stranger-things$ echo "Bike like this is like a Cadillac to these kids." > jim_hopper.quotes

suzy@af2e62e7233d:~/stranger-things$ ls
jim_hopper.quotes

suzy@af2e62e7233d:~/stranger-things$ cat jim_hopper.quotes 
Bike like this is like a Cadillac to these kids.
```

If you want to append to a file instead, you can use `>>`:

```
suzy@af2e62e7233d:~/stranger-things$ echo "Mornings are for coffee and contemplation." >> jim_hopper.quotes

suzy@af2e62e7233d:~/stranger-things$ cat jim_hopper.quotes 
Bike like this is like a Cadillac to these kids.
Mornings are for coffee and contemplation.
```

We can redirect the output from any command into a file:

```
suzy@af2e62e7233d:~/stranger-things$ ls -al /
total 72
drwxr-xr-x  42 root root 4096 Nov  7 15:10 .
drwxr-xr-x  42 root root 4096 Nov  7 15:10 ..
-rwxr-xr-x   1 root root    0 Nov  6 00:19 .dockerenv
drwxr-xr-x   2 root root 4096 Oct  6 01:38 bin
drwxr-xr-x   2 root root 4096 Apr 12  2016 boot
drwxr-xr-x   5 root root  380 Nov  7 15:10 dev
drwxr-xr-x  52 root root 4096 Nov  6 01:39 etc
drwxr-xr-x   5 root root 4096 Nov  6 01:36 home
drwxr-xr-x   9 root root 4096 Nov  6 00:50 lib
drwxr-xr-x   2 root root 4096 Oct  6 01:38 lib64
drwxr-xr-x   2 root root 4096 Oct  6 01:38 media
drwxr-xr-x   2 root root 4096 Oct  6 01:38 mnt
drwxr-xr-x   2 root root 4096 Oct  6 01:38 opt
dr-xr-xr-x 170 root root    0 Nov  7 15:10 proc
drwx------   2 root root 4096 Nov  6 00:19 root
drwxr-xr-x   7 root root 4096 Nov  6 01:36 run
drwxr-xr-x   2 root root 4096 Nov  4 09:45 sbin
drwxr-xr-x   2 root root 4096 Oct  6 01:38 srv
dr-xr-xr-x  13 root root    0 Nov  7 15:10 sys
drwxrwxrwt   2 root root 4096 Nov  6 01:35 tmp
drwxr-xr-x  17 root root 4096 Nov  6 01:35 usr
drwxr-xr-x  16 root root 4096 Nov  6 00:50 var

suzy@af2e62e7233d:~/stranger-things$ ls -al / > file_and_directory_list.txt

suzy@af2e62e7233d:~/stranger-things$ cat file_and_directory_list.txt 
total 72
drwxr-xr-x  42 root root 4096 Nov  7 15:10 .
drwxr-xr-x  42 root root 4096 Nov  7 15:10 ..
-rwxr-xr-x   1 root root    0 Nov  6 00:19 .dockerenv
drwxr-xr-x   2 root root 4096 Oct  6 01:38 bin
drwxr-xr-x   2 root root 4096 Apr 12  2016 boot
drwxr-xr-x   5 root root  380 Nov  7 15:10 dev
drwxr-xr-x  52 root root 4096 Nov  6 01:39 etc
drwxr-xr-x   5 root root 4096 Nov  6 01:36 home
drwxr-xr-x   9 root root 4096 Nov  6 00:50 lib
drwxr-xr-x   2 root root 4096 Oct  6 01:38 lib64
drwxr-xr-x   2 root root 4096 Oct  6 01:38 media
drwxr-xr-x   2 root root 4096 Oct  6 01:38 mnt
drwxr-xr-x   2 root root 4096 Oct  6 01:38 opt
dr-xr-xr-x 170 root root    0 Nov  7 15:10 proc
drwx------   2 root root 4096 Nov  6 00:19 root
drwxr-xr-x   7 root root 4096 Nov  6 01:36 run
drwxr-xr-x   2 root root 4096 Nov  4 09:45 sbin
drwxr-xr-x   2 root root 4096 Oct  6 01:38 srv
dr-xr-xr-x  13 root root    0 Nov  7 15:24 sys
drwxrwxrwt   2 root root 4096 Nov  6 01:35 tmp
drwxr-xr-x  17 root root 4096 Nov  6 01:35 usr
drwxr-xr-x  16 root root 4096 Nov  6 00:50 var
```

Note that some output in programs, like git, are considered "error stream." That requires special handling for it to write to a file, and will not be covered here - just be aware of it in case you ever go deeper with bash programming.


Variables
---------

You can create a variable with a simple equals sign and get its value using `$`:

```
suzy@af2e62e7233d:~/stranger-things$ BAD_PEOPLE=hawkins

suzy@af2e62e7233d:~/stranger-things$ echo $BAD_PEOPLE
hawkins
```

Again, I'm a stickler for quotes:

```
suzy@af2e62e7233d:~/stranger-things$ BAD_PEOPLE="hawkins lab"

suzy@af2e62e7233d:~/stranger-things$ echo $BAD_PEOPLE
hawkins lab
```

You can concatenate variables with other strings in double quotes:

```
suzy@af2e62e7233d:~/stranger-things$ echo "The bad people are in $BAD_PEOPLE"
The bad people are in hawkins lab
```

... but not with single quotes:

```
suzy@af2e62e7233d:~/stranger-things$ echo 'The bad people are in $BAD_PEOPLE'
The bad people are in $BAD_PEOPLE
```

This is a bit advanced, so don't worry too much about understanding it. If you want to make the variables available to sub processes, you have to use `EXPORT`. Here's an example:

```
suzy@af2e62e7233d:~/stranger-things$ cd ~

suzy@af2e62e7233d:/$ greeting="Hello, world"

suzy@af2e62e7233d:/$ echo $greeting
Hello, world

suzy@af2e62e7233d:/$ bye="Goodbye"

suzy@af2e62e7233d:/$ export greeting

suzy@af2e62e7233d:/$ bash
                                        <== WE'RE NOW IN A SUB PROCESS

suzy@af2e62e7233d:/$ echo $greeting
Hello, world

suzy@af2e62e7233d:/$ echo $bye
                                        <== NOTICE nothing happened

suzy@af2e62e7233d:/$ exit
exit                                    <== NO LONGER IN SUBPROCESS

suzy@af2e62e7233d:/$ echo $greeting
Hello, world

suzy@af2e62e7233d:/$ echo $bye
Goodbye

```

You can export a variable when you create it:

```
suzy@af2e62e7233d:/$ export inline="Combine export and variable declaration"

suzy@af2e62e7233d:/$ bash
                                        <== WE'RE NOW IN A SUB PROCESS

suzy@af2e62e7233d:/$ echo $inline
Combine export and variable declaration <== IT WORKED!

suzy@af2e62e7233d:/$ exit 
exit                                    <== NO LONGER IN SUBPROCESS

suzy@af2e62e7233d:/$ echo $inline
Combine export and variable declaration <== STILL WORKS
```


Cleanup
-------

Let's remove our directory to keep things clean for future tutorials. We'll cover this command in more detail in another tutorial:

```
suzy@af2e62e7233d:~/stranger-things$ cd ~

suzy@af2e62e7233d:~$ rm -r stranger-things/
```
