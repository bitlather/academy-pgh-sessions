`cat` and `sort`
================

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

You can use `cat` to echo the contents of a file.

Let's make some files.

```
suzy@af2e62e7233d:~/stranger-things$ echo "Mornings are for coffee and contemplation." > jim_hopper.1.quote

suzy@af2e62e7233d:~/stranger-things$ echo "Bike like this is like a Cadillac to these kids." > jim_hopper.2.quote

suzy@af2e62e7233d:~/stranger-things$ echo "Hey, you've reached Jim. I'm probably doing something incredible right now." > jim_hopper.3.quote

suzy@af2e62e7233d:~/stranger-things$ ls
jim_hopper.1.quote  jim_hopper.2.quote  jim_hopper.3.quote
```

Let's look at the contents of one of them:

```
suzy@af2e62e7233d:~/stranger-things$ cat jim_hopper.2.quote 
Bike like this is like a Cadillac to these kids.
```

Let's look at the contents of two of them:

```
suzy@af2e62e7233d:~/stranger-things$ cat jim_hopper.1.quote jim_hopper.2.quote 
Mornings are for coffee and contemplation.
Bike like this is like a Cadillac to these kids.
```

We can pass the output of two or more files into sort to alphabetize them:

```
suzy@af2e62e7233d:~/stranger-things$ cat jim_hopper.1.quote jim_hopper.2.quote | sort
Bike like this is like a Cadillac to these kids.
Mornings are for coffee and contemplation.
```

We can pass the output of all files using `*` into sort to alphabetize them:

```
suzy@af2e62e7233d:~/stranger-things$ cat jim_hopper.*.quote | sort
Bike like this is like a Cadillac to these kids.
Hey, you've reached Jim. I'm probably doing something incredible right now.
Mornings are for coffee and contemplation.
```

If we redirect the output to another filename, then it's basically the same as copying a file:

```
suzy@af2e62e7233d:~/stranger-things$ cat jim_hopper.1.quote > jim_hopper.1.quote.backup

suzy@af2e62e7233d:~/stranger-things$ cat jim_hopper.1.quote
Mornings are for coffee and contemplation.

suzy@af2e62e7233d:~/stranger-things$ cat jim_hopper.1.quote.backup 
Mornings are for coffee and contemplation.
```

We can combine all files into one:

```
suzy@af2e62e7233d:~/stranger-things$ cat jim_hopper.*.quote > compiled.jim_hopper.quotes

suzy@af2e62e7233d:~/stranger-things$ cat compiled.jim_hopper.quotes 
Mornings are for coffee and contemplation.
Bike like this is like a Cadillac to these kids.
Hey, you've reached Jim. I'm probably doing something incredible right now.
```

Notice how that differs from:

```
suzy@af2e62e7233d:~/stranger-things$ cat jim_hopper.* > test.txt

suzy@af2e62e7233d:~/stranger-things$ cat test.txt 
Mornings are for coffee and contemplation.
Mornings are for coffee and contemplation.
Bike like this is like a Cadillac to these kids.
Hey, you've reached Jim. I'm probably doing something incredible right now.
```

The first line was duplicated because the wildcard matches on:

- [jim_hopper.]1.quote.backup
- [jim_hopper.]1.quote
- [jim_hopper.]2.quote
- [jim_hopper.]3.quote

We can also sort the quotes and store them:

```
suzy@af2e62e7233d:~/stranger-things$ cat jim_hopper.*.quote | sort > compiled.sorted.jim_hopper.quotes 

suzy@af2e62e7233d:~/stranger-things$ cat compiled.sorted.jim_hopper.quotes 
Bike like this is like a Cadillac to these kids.
Hey, you've reached Jim. I'm probably doing something incredible right now.
Mornings are for coffee and contemplation.
```

In case you're unclear on how `sort` works, try this with a single file:

```
suzy@af2e62e7233d:~$ cd ~   
suzy@af2e62e7233d:~$ echo "Z" > alphabet.txt
suzy@af2e62e7233d:~$ echo "A" >> alphabet.txt
suzy@af2e62e7233d:~$ echo "D" >> alphabet.txt
suzy@af2e62e7233d:~$ cat alphabet.txt 
Z
A
D
suzy@af2e62e7233d:~$ cat alphabet.txt | sort
A
D
Z
suzy@af2e62e7233d:~$ rm alphabet.txt 
```


Additional Info
---------------

If you want to read even more about `cat`, see [linfo.org/cat](http://www.linfo.org/cat.html).


Cleanup
-------

Let's clear out the directory because we'll be using `stranger-things` in other tutorials:

```
suzy@af2e62e7233d:~/stranger-things$ cd ~
suzy@af2e62e7233d:~$ rm -r stranger-things/
suzy@af2e62e7233d:~$ ls
suzy@af2e62e7233d:~$ 
```
