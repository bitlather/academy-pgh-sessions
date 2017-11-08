Variables
=========

You can create variables just like you can in ruby, C#, python, javascript, etc.

If you're not already logged in as suzy, do so now:

```
root@af2e62e7233d:/# su suzy
suzy@af2e62e7233d:/$ cd ~
suzy@af2e62e7233d:~$ mkdir stranger-things
```

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
Hello, world                             <== IT WORKED!

suzy@af2e62e7233d:/$ echo $bye
                                        <== NOTICE NOTHING HAPPENED

suzy@af2e62e7233d:/$ exit
exit                                    <== NO LONGER IN SUBPROCESS

suzy@af2e62e7233d:/$ echo $greeting
Hello, world

suzy@af2e62e7233d:/$ echo $bye
Goodbye                                 <== NOTICE IT WORKS NOW

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
Combine export and variable declaration <== STILL WORKS!
```

The variables disappear when you log out:

```
suzy@af2e62e7233d:~$ echo $greeting
Hello, world

suzy@af2e62e7233d:~$ exit
exit

root@af2e62e7233d:/# su suzy

suzy@af2e62e7233d:/$ echo $greeting
                                        <== NO LONGER HAS A VALUE
```
