`rm`
====

You can use `rm` to delete files.

If you're not already logged in as suzy, do so now:

```
root@af2e62e7233d:/# su suzy
suzy@af2e62e7233d:/$
```

Go to suzy's home directory:

```
suzy@af2e62e7233d:/$ cd ~
```


Create and change into the _stranger-things_ directory:

```
suzy@af2e62e7233d:~$ mkdir stranger-things
suzy@af2e62e7233d:~$ cd stranger-things/
suzy@af2e62e7233d:~/stranger-things$
```

Let's create some files:

```
suzy@af2e62e7233d:~/stranger-things$ echo "" > jim_hopper.quotes
suzy@af2e62e7233d:~/stranger-things$ echo "" > eleven.quotes
suzy@af2e62e7233d:~/stranger-things$ echo "" > dustin.quotes
suzy@af2e62e7233d:~/stranger-things$ echo "" > lucas.quotes
suzy@af2e62e7233d:~/stranger-things$ echo "" > barb.fanfic
suzy@af2e62e7233d:~/stranger-things$ ls
barb.fanfic dustin.quotes  eleven.quotes  jim_hopper.quotes  lucas.quotes
```

Now let's delete eleven. Start by typing `rm e` and tab twice to autocomplete:

```
suzy@af2e62e7233d:~/stranger-things$ rm eleven.quotes
suzy@af2e62e7233d:~/stranger-things$ ls
barb.fanfic dustin.quotes  jim_hopper.quotes  lucas.quotes
```

Let's get a bit more interesting. First, create a few more files with a different extension:

```
suzy@af2e62e7233d:~/stranger-things$ touch s1_episode1.script
suzy@af2e62e7233d:~/stranger-things$ touch s1_episode2.script
suzy@af2e62e7233d:~/stranger-things$ touch s1_episode3.script
suzy@af2e62e7233d:~/stranger-things$ touch s2_episode1.script
suzy@af2e62e7233d:~/stranger-things$ touch s2_episode2.script
suzy@af2e62e7233d:~/stranger-things$ ls
barb.fanfic        lucas.quotes        s1_episode3.script
dustin.quotes      s1_episode1.script  s2_episode1.script
jim_hopper.quotes  s1_episode2.script  s2_episode2.script
```

Let's delete all of the season 1 episode scripts:

```
suzy@af2e62e7233d:~/stranger-things$ rm s1_episode*.script   
suzy@af2e62e7233d:~/stranger-things$ ls
barb.fanfic    jim_hopper.quotes  s2_episode1.script
dustin.quotes  lucas.quotes       s2_episode2.script
```

Let's delete the quotes files:

```
suzy@af2e62e7233d:~/stranger-things$ rm *.quotes
suzy@af2e62e7233d:~/stranger-things$ ls
barb.fanfic  s2_episode1.script  s2_episode2.script
```

Let's just delete everything:

```
suzy@af2e62e7233d:~/stranger-things$ rm *
suzy@af2e62e7233d:~/stranger-things$ ls
suzy@af2e62e7233d:~/stranger-things$
```

For this reason, be careful using `*` with `rm`.


Cleanup
-------

Please do the following to keep things tidy:

```
suzy@af2e62e7233d:~/stranger-things$ cd ~
suzy@af2e62e7233d:~$ rmdir stranger-things/
```
