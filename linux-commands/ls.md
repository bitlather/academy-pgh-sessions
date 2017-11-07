`ls`
====

_This document assumes you are logged in as root. To make sure you're in the right folder in order to follow along, run the following:_

```
root@af2e62e7233d:/# cd /
```

Type `ls` to list files and folders.

```
root@af2e62e7233d:/# ls
bin   dev  home  lib64  mnt  proc  run   srv  tmp  var
boot  etc  lib   media  opt  root  sbin  sys  usr
```

Use the `-a` flag to list hidden files (of note is `.dockerenv`; we'll talk more about `.` and `..` later):

```
root@af2e62e7233d:/# ls -a
.   .dockerenv  boot  etc   lib    media  opt   root  sbin  sys  usr
..  bin         dev   home  lib64  mnt    proc  run   srv   tmp  var
```

Hidden files are (usually) prefixed with a dot.

Use the `-l` flag to list more details:

```
root@af2e62e7233d:/# ls -l
total 64
drwxr-xr-x   2 root root 4096 Oct  6 01:38 bin
drwxr-xr-x   2 root root 4096 Apr 12  2016 boot
drwxr-xr-x   5 root root  380 Nov  7 01:08 dev
drwxr-xr-x  52 root root 4096 Nov  6 01:39 etc
drwxr-xr-x   5 root root 4096 Nov  6 01:36 home
drwxr-xr-x   9 root root 4096 Nov  6 00:50 lib
drwxr-xr-x   2 root root 4096 Oct  6 01:38 lib64
drwxr-xr-x   2 root root 4096 Oct  6 01:38 media
drwxr-xr-x   2 root root 4096 Oct  6 01:38 mnt
drwxr-xr-x   2 root root 4096 Oct  6 01:38 opt
dr-xr-xr-x 170 root root    0 Nov  7 01:08 proc
drwx------   2 root root 4096 Nov  6 00:19 root
drwxr-xr-x   7 root root 4096 Nov  6 01:36 run
drwxr-xr-x   2 root root 4096 Nov  4 09:45 sbin
drwxr-xr-x   2 root root 4096 Oct  6 01:38 srv
dr-xr-xr-x  13 root root    0 Nov  7 01:08 sys
drwxrwxrwt   2 root root 4096 Nov  6 01:35 tmp
drwxr-xr-x  17 root root 4096 Nov  6 01:35 usr
drwxr-xr-x  16 root root 4096 Nov  6 00:50 var
```

The `d` in the first column means directory, the `rwx-` values are permissions (which will be discussed in the `chmod` tutorial), the file belongs to the `root` user, the column with values like `4096` is the size in bytes, then comes the date/time and name of the file/folder.

If you want to see hidden files with more details you can do `ls -a -l` or `ls -al`:

```
root@af2e62e7233d:/# ls -al
total 72
drwxr-xr-x  42 root root 4096 Nov  7 02:43 .
drwxr-xr-x  42 root root 4096 Nov  7 02:43 ..
-rwxr-xr-x   1 root root    0 Nov  6 00:19 .dockerenv
drwxr-xr-x   2 root root 4096 Oct  6 01:38 bin
drwxr-xr-x   2 root root 4096 Apr 12  2016 boot
drwxr-xr-x   5 root root  380 Nov  7 01:08 dev
drwxr-xr-x  52 root root 4096 Nov  6 01:39 etc
drwxr-xr-x   5 root root 4096 Nov  6 01:36 home
drwxr-xr-x   9 root root 4096 Nov  6 00:50 lib
drwxr-xr-x   2 root root 4096 Oct  6 01:38 lib64
drwxr-xr-x   2 root root 4096 Oct  6 01:38 media
drwxr-xr-x   2 root root 4096 Oct  6 01:38 mnt
drwxr-xr-x   2 root root 4096 Oct  6 01:38 opt
dr-xr-xr-x 170 root root    0 Nov  7 01:08 proc
drwx------   2 root root 4096 Nov  6 00:19 root
drwxr-xr-x   7 root root 4096 Nov  6 01:36 run
drwxr-xr-x   2 root root 4096 Nov  4 09:45 sbin
drwxr-xr-x   2 root root 4096 Oct  6 01:38 srv
dr-xr-xr-x  13 root root    0 Nov  7 01:08 sys
drwxrwxrwt   2 root root 4096 Nov  6 01:35 tmp
drwxr-xr-x  17 root root 4096 Nov  6 01:35 usr
drwxr-xr-x  16 root root 4096 Nov  6 00:50 var
```

If you want to list files from a different directory, type `ls v` and press tab. In the example below, _var_ is the only file/folder that starts with an "o" so it autocompletes to `ls var/`:

```
root@af2e62e7233d:/# ls var/
backups  cache  lib  local  lock  log  mail  opt  run  spool  tmp
```

Type `ls v` and press tab three times. The first time, it will autocomplete to `ls var/`; the third time, it will show everything you can choose from in _var/_:

```
root@af2e62e7233d:/# ls var/
backups/ lib/     lock/    mail/    run/     tmp/     
cache/   local/   log/     opt/     spool/   
root@af2e62e7233d:/# ls var/
```

The next command already starts with `ls var/` for your convenience, so just type `lo` and press tab twice. You will see all files/folders in _var/_ that starts with _lo_:

```
root@af2e62e7233d:/# ls var/lo
local/ lock/  log/   
root@af2e62e7233d:/# ls var/lo
```
