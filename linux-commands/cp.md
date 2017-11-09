`cp`
====

You can use `cp` to copy files.

If you're not already logged in as suzy, do so now:

```
root@af2e62e7233d:/# su suzy
suzy@af2e62e7233d:/$
```

And perform the following setup:

```
suzy@af2e62e7233d:/$ cd ~
suzy@af2e62e7233d:~$ mkdir stranger-things
suzy@af2e62e7233d:~$ cd stranger-things/
```

Let's create a file with a quote by Jim Hopper:

```
suzy@af2e62e7233d:~/stranger-things$ echo "Mornings are for coffee and contemplation." > jim_hopper.quotes
suzy@af2e62e7233d:~/stranger-things$ cat jim_hopper.quotes
Mornings are for coffee and contemplation.
```

Now let's duplicate the file it:

```
suzy@af2e62e7233d:~/stranger-things$ cp jim_hopper.quotes jim_hopper.quotes.backup

suzy@af2e62e7233d:~/stranger-things$ tail jim_hopper.quotes.backup
Mornings are for coffee and contemplation.

suzy@af2e62e7233d:~/stranger-things$ tail jim_hopper.quotes        
Mornings are for coffee and contemplation.

suzy@af2e62e7233d:~/stranger-things$ ls
jim_hopper.quotes  jim_hopper.quotes.backup
```

You can copy into other directories too:

```
suzy@af2e62e7233d:~/stranger-things$ mkdir archive

suzy@af2e62e7233d:~/stranger-things$ ls archive/

suzy@af2e62e7233d:~/stranger-things$ cp jim_hopper.quotes archive/jim_hopper.quotes

suzy@af2e62e7233d:~/stranger-things$ cat archive/jim_hopper.quotes
Mornings are for coffee and contemplation.

suzy@af2e62e7233d:~/stranger-things$ cat jim_hopper.quotes
Mornings are for coffee and contemplation.
```

Let's destroy our directory to keep things nice and tidy:

```
suzy@af2e62e7233d:~/stranger-things$ cd ~
suzy@af2e62e7233d:~$ rm -r stranger-things/
suzy@af2e62e7233d:~$ ls
suzy@af2e62e7233d:~$
```
