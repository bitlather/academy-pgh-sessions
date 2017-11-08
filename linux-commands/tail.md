`tail.md`
=========

You can use `tail` to read the end of the file, even as its being updated. This makes it ideal for watching error logs in real time.

If you're not already logged in as suzy, do so now:

```
root@af2e62e7233d:/# su suzy
suzy@af2e62e7233d:/$ cd ~
suzy@af2e62e7233d:~$ 
```

Create a bash script that will print a timestamp (in unix epoch format) every second:

```
suzy@af2e62e7233d:~$ printf "while true\ndo\n\tdate +\%%s >> error.log\n\tsleep 1\ndone\n\n" > sleepy.sh
```

`tail`ing the script will show everything, similar to `cat`, because it's short:

```
suzy@af2e62e7233d:~$ tail sleepy.sh 
while true
do
    date +\%s >> error.log
    sleep 1
done

```


Change the script's permissions so we can run it:

```
suzy@af2e62e7233d:~$ chmod u+rwx sleepy.sh
```

Run the script in the background:

```
suzy@af2e62e7233d:~$ ./sleepy.sh &
[1] 50
```

Write down the number that was output (50 in this case); we'll need it later.

Run `ls` and notice error.log has been created:

```
suzy@af2e62e7233d:~$ ls
error.log  sleepy.sh
```

Let it run for a little bit and then `tail` the file it's outputting to:

```
suzy@af2e62e7233d:~$ suzy@af2e62e7233d:~$ tail error.log
1510098897
1510098898
1510098899
1510098900
1510098901
1510098902
1510098903
1510098904
1510098905
1510098906
```

Now cat the file for comparison:

```
suzy@af2e62e7233d:~$ suzy@af2e62e7233d:~$ cat error.log
1510098870
1510098871
1510098872
1510098873
1510098874
1510098875
1510098876
1510098877
1510098878
1510098879
1510098880
1510098881
1510098882
1510098883
1510098884
1510098885
1510098886
1510098887
1510098888
1510098889
1510098890
1510098891
1510098892
1510098893
1510098894
1510098895
1510098896
1510098897
1510098898
1510098899
1510098900
1510098901
1510098902
1510098903
1510098904
1510098905
1510098906
1510098907
1510098908
1510098909  <== DEPENDING ON HOW LONG YOU WAITED THIS COULD BE REALLY LONG
```

You can watch the error log in real time with the `-f` flag:

```
suzy@af2e62e7233d:~$ tail -f error.log 
1510098954
1510098955
1510098956
1510098957
1510098958
1510098959
1510098960
1510098961
1510098962
1510098963
```

The last few lines of the file will be displayed, and as more text is added to the file, it will update on your screen.

This is incredibly useful in development; you could be running a web-app that logs errors to a file. In terminal, you could `tail` that error log. When something breaks, you have easy access to the error message.

Well, _sleepy.sh_ is still writing data, so let's stop it.

We can see our processes using `ps aux`:

```
suzy@af2e62e7233d:~$ ps aux
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root         1  0.0  0.0  18248  3184 ?        Ss   23:51   0:00 /bin/bash
root         9  0.0  0.0  46996  2824 ?        S    23:51   0:00 su suzy
suzy        10  0.0  0.0  18284  3308 ?        S    23:51   0:00 bash
suzy        50  0.1  0.0  18292  2540 ?        S    23:54   0:00 bash
suzy       462  0.0  0.0   4384   664 ?        S    23:57   0:00 sleep 1
suzy       463  0.0  0.0  34428  2876 ?        R+   23:57   0:00 ps aux
```

Unfortunately, in this example, we can't easily tell which one is _sleepy.sh_; however, its PID (process ID) was revealed when we ran it. Remember that number you wrote down?

```
suzy@af2e62e7233d:~$ kill 50
```

Let's look at our files:

```
suzy@af2e62e7233d:~$ ls
error.log  sleepy.sh
[1]+  Terminated              ./sleepy.sh
suzy@af2e62e7233d:~$ 
```

sweet; it happened to tell us that ./sleepy.sh was terminated.

If we delete _error.log_ then it shouldn't be re-created:

```
suzy@af2e62e7233d:~$ rm error.log 
suzy@af2e62e7233d:~$ ls
sleepy.sh
```

Wait a few seconds and look at your directory's contents again:

```
suzy@af2e62e7233d:~$ ls
sleepy.sh
```

Excellent; _sleepy.sh_ should be finished.



Cleanup
-------

Please do the following to keep things tidy:

```
suzy@af2e62e7233d:~$ rm sleepy.sh
```

