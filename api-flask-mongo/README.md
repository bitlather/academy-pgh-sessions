API Using Flask and Mongo
=========================

In this lab, we will create an API using Python's Flask framework and Mongo as our NoSQL database. It is assumed you are running these instructions with the Ubuntu instances that John Lange has set up.

A mongo database can be interacted with like an API, so we'll start there. Once we are comfortable calling an API, we will create our own API endpoints in Flask.

Skills used:

- SSH
- Linux (ubuntu)
- Curl
- Postman
- Mongo
- Python
- Flask
- REST APIs (GET, PUT, POST, DELETE)


Setup Your Docker Container
---------------------------

```
ssh academy@minecraft.lfgpgh.com
    Password: academypgh

# STOP: Ask dave for IP address here

sudo docker run -it -p 192.168.1.220:27017:27017 -p 192.168.1.220:28017:28017 -p 192.168.1.220:5000:5000 -p 192.168.1.220:8022:22 --name davebuntu ubuntu

adduser dave

usermod -aG sudo dave

apt-get update

apt-get install sudo

apt-get install nano

apt-get install ssh

apt-get install git

apt-get install curl

nano /etc/ssh/sshd_config
    Add this line:
    AllowUsers dave

service ssh restart

su - dave
```


Install Mongo
-------------

We will install mongo for the purpose of learning how to use it. There are steps you should take to secure mongo if this were a real app. We are ignoring those steps for this session, just please be aware that what we do here isn't production-ready.

- SSH in to your Ubuntu 14 instance.

- Type `mongod` in the terminal. It should not be installed, so instructions are provided. **Notice it's mongod and not mongodb.**

- Run `sudo apt-get install mongodb-server` and, if asked if you want to install, press `Y`.

- Run `mongod --version`. v2.4.9 was used at the time this article was written; if your version differs drastically then we might face issues later.

- Run `mongod`. You should get an error. Read all of the instructions. Notice this portion:

```
*********************************************************************
 ERROR: dbpath (/data/db/) does not exist.
 Create this directory or give existing directory in --dbpath.
 See http://dochub.mongodb.org/core/startingandstoppingmongo
*********************************************************************
```

- Let's do what it says: 

```
sudo mkdir /data
sudo mkdir /data/db
```

- Run `mongod`. You should get another error. Read all of the instructions. Notice this portion:

```
Sat Sep 30 20:05:16.354 [initandlisten] exception in initAndListen: 10309 Unable to create/open lock file: /data/db/mongod.lock errno:13 Permission denied Is a mongod instance already running?, terminating
```

_What's going on?_ We had to create `/data` using sudo, since it's in `/`. When we ran mongod, we did not run it as the root user or with sudo, so there is a permission issue. We might as well get comfortable with these because they come up a lot in Linux.

I simply googled `/data/db/mongod.lock errno:13 Permission denied Is a mongod instance already running?, terminating` and came up with the following steps to fix it (comments are prefixed with #):

```
sudo service mongodb stop
# Notice we used mongodb this time, not mongod

sudo nano /etc/mongodb.conf
# set:
#     dbpath=/data/db
# and save.
# Mongo databases are now stored in /data/db.

sudo chown -R `id -u` /data/db
# this changes permissions of the /data/db folder
```

- Now run `mongod`. _If you get an insufficient memory error, run `mongod --smallfiles`_

- Notice you are not prompted to enter anything else. After a few seconds, you should be good to go.




### Explore Mongo's Admin Console

- Re-run mongo with `mongod --rest` (if you needed --smallfiles, run `mongod --rest --smallfiles`)

- Get the IP address of your ubuntu instance and visit `http://###.###.###.###:27017`, where ### is replaced with your IP address. You should see:

```
You are trying to access MongoDB on the native driver port. For http diagnostic access, add 1000 to the port number
```

- Now visit `http://###.###.###.###:28017`. You should see something that looks more like a dashboard.

- Click _List all commands_ in the top-left. You should get an error:

```
REST is not enabled.  use --rest to turn on.
check that port 28017 is secured for the network too.
```

- Go back to your terminal. Press CTRL+C. This turns off mongo. _As proof, refresh your browser. It should say the site cannot be reached._

- Refresh your browser again. There should be a list of commands. _Notice how this became available when we ran mongod with the `--rest` flag._

- Press back in the browser, so that you are on `http://###.###.###.###:28017` again.

- Click _List Databases_. Only one database, "local", should be listed, and it's details are in JSON format. Welcome to mongo.





Create a Mongo Database via Terminal
------------------------------------

- Open a new terminal window and SSH in to your Ubuntu 14 instance: _One terminal must have `mongod` running for this to work, that's why we now have two terminals!_

```
ssh academy@minecraft.lfgpgh.com
    Password: academypgh
ssh -p 8022 dave@192.168.1.###
```

- Run `mongo`. You should see a greater-than sign with a prompt.

- Run `use testdb`. This command will either make all further commands run on testdb and, if testdb does not exist, create it.

- Run `show dbs`. Notice testdb isn't listed. Oops, it wasn't created yet - in fact, it won't actually be created until we add data to it.

- Run `db.movie.insert({"name":"lets give this a test run"})`.

- Run `show dbs` again. This time, your database is listed.

- Visit http://###.###.###.###:28017 and click _List Databases_. Your new database should be listed there.

- Let's destroy the database. In your terminal, run `db.dropDatabase()`. It should be removed. Verify by checking it's not listed in `show dbs`.



### Intro to Mongo Commands & Creating a TV Database

- In the window running the mongo shell, type the following to create the `tv` database, which has the `show` collection, and three documents:

```
use tv
db.show.insert({
    "name" : "That 70s Show",
    "first_episode_date" : "1998-08-23",
    "theme_song" : "In the Street"
})
db.show.insert({
    "name" : "Rick and Morty",
    "first_episode_date" : "2013-12-02",
    "theme_song" : "Rick and Morty Theme Song"
})
db.show.insert({
    "name" : "Bob's Burgers",
    "first_episode_date" : "2011-01-09",
    "theme_song" : "Bob's Burgers Theme"
})
```

- Prove the data exists by finding it:

```
db.show.find()
```

- Filter data:

```
db.show.find({"name" : "Bob's Burgers"})
```

- Let's add a new field to just two existing documents:

```
db.show.update(
    { name: "Bob's Burgers" },
    { $set : { seasons: 7 } }
)
db.show.update(
    { name: "Rick and Morty" },
    { $set : { seasons: 3 } }
)
```

_Note: If you forget $set then it completely replaces the document with just the "seasons" field._

- Prove our data looks good: `db.show.find()` Notice that "That 70's Show" does not have seasons. This would be impossible in a MySQL table, but Mongo's NoSQL structure lets you do things like that.

- Now let's just get data that has more than 4 seasons:

```
db.show.find({ seasons: { $gt : 4 } })
```

_For more information on how to query data in Mongo, see the documentation here: https://docs.mongodb.com/manual/reference/method/db.collection.find/_



### Mongo REST Commands from the Command Line

If you google "mongo api" you might not find what you expect. An API means "Application Programming Interface" and so it's not always a web API. Instead, you need to search for "mongo REST". It's kind of like how all squares are a rectangle but all rectangles aren't squares.

We'll use mongo's native REST API, which only allows for fetching data. So, we need to create some data, first.

- You should still have `mongod --rest` or `mongod --rest --smallfiles` running in a terminal window; if not, SSH in and run it now.

- You should still have `mongo` running in a terminal window; if not, SSH in and run it now.

- You should have the tv database with the show collection created in a previous step.

- We will use a program called `curl` to hit mongo's API endpoints from the commandline. If the following fails, there should be on-screen commands to follow in order to install curl. But, before we hit the mongo's REST endpoint, run this and compare the output to the source for google.com:

```
curl www.google.com
```

_Notice that it loads HTML, which is the same as google.com's source. You can also use curl to download files from the command line._

- Now let's curl mongo's REST endpoint:

```
# (you're SSH'd in, right?)
curl http://localhost:28017/tv/show/
# Note: this may fail if you don't include the final slash
```

- API endpoints can accept arguments in the url after a `?`. Try the following, and be careful to include the final slash and quotes (when specified):

```
curl http://localhost:28017/tv/show/?limit=2
```
```
curl "http://localhost:28017/tv/show/?limit=2&skip=1"
```
```
curl "http://localhost:28017/tv/show/?filter_seasons=7"
```
```
curl "http://127.0.0.1:28017/tv/show/?filter_seasons=3"
```

- **The more you know:** `localhost` is the same as `127.0.0.1`.



### Mongo REST Commands from Postman

All of the requirements listed for _Mongo REST Commands from the Command Line_ still apply here; if you just finished that section then you shouldn't need to start any servers.

- Open the Chrome browser.

- Install the Postman plugin.

- Go to your Chrome apps. This can usually be found by opening a new tab and clicking _Apps_ in the top-left corner of the page.

- Click _Postman_ to open it.

- Select `GET` from the drop down box.

- Enter the following URLs, one at a time, replacing `###.###.###.###` with your IP address, and press the `Send` button:

```
http://###.###.###.###:28017/tv/show/?limit=2
```
```
http://###.###.###.###:28017/tv/show/?limit=2&skip=1
```
```
http://###.###.###.###:28017/tv/show/?filter_seasons=7
```


Installing Our Flask API
------------------------

The following instructions assume you have python 2.7. You can check with `python --version`.

Flask is the lightest web app framework I know, and probably the easiest to get up and running, so that's why we're using it today.

This is a lesson on REST APIs, not the Flask framework, so I'll try to keep it as slim as possible.

Run the following commans while SSH'd in to your instance of Ubuntu:

```
cd ~
mkdir github
cd github
git clone https://github.com/bitlather/academy-pgh-sessions.git
```
```
sudo apt-get install python-virtualenv
```
```
cd ~/github/academy-pgh-sessions/api-flask-mongo
. venv/bin/activate
pip install -r requirements.txt
```
```
deactivate
```


Running our Flask API
---------------------

In this step, we will run the application in this folder's `my_api.py`.

- SSH into your ubuntu instance and run the following:

```
cd ~/github/academy-pgh-sessions/api-flask-mongo
. venv/bin/activate
export FLASK_APP=my_api.py
flask run
```

- Once you see the following, your API is ready:

```
 * Serving Flask app "my_api"
 * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
```



### Interacting With Our Flask API Endpoints

- Open Postman from the Chrome browser.

- Set Headers to:

```
KEY            VALUE
============   ================
Content-Type   application/json
```

- Call this endpoint to destroy the database collection and load it with pre-defined data.

```
GET http://###.###.###.###:5000/seed
```

- View all TV shows:

```
GET http://###.###.###.###:5000/show
```

- Get a single show by its mongo Object ID:

```
http://###.###.###.###:5000/show/59d2ee71f6e4b72b19d7b7cb
```
```
http://###.###.###.###:5000/show/59d2ee88f6e4b72b3fb0c7a5
```

- Create a new show by setting URL to:
```
POST http://###.###.###.###:5000/show
```
... then click Body tab, select the _raw_ radio button, and supply this in the textarea:
```
{}
```
Notice the error.

- Try to post again with:
```
POST http://###.###.###.###:5000/show
```
```
{
    "name" : "Teenage Mutant Ninja Turtles"
}
```
Rats; we still get an error.

- Try again:
```
POST http://###.###.###.###:5000/show
```
```
{
    "name" : "Teenage Mutant Ninja Turtles",
    "first_episode_date" : "1987-12-28",
    "theme_song" : "TMNT Theme Song"
}
```
... success!

- Press the send button again.

- Now get all the results:
```
GET http://###.###.###.###:5000/show
```

- Oops teenage mutant ninja turtles is in there twice; let's delete one of them. Copy one of the `$oid` values and run the following, where $oid is replaced with the id:
```
DELETE http://###.###.###.###:5000/show/$oid
```
... success, we got a 204 status code.

- Press send again. Since we already deleted it, we get a 404 status code.

- Get all results to prove _Teenage Mutant Ninja Turtles_ only exists once:
```
GET http://###.###.###.###:5000/show
```

- Now let's edit one of the shows to make Dave famous and change the theme song (remember to paste the JSON into the body and ensure that the _raw_ radio option is selected):
```
PUT http://###.###.###.###:5000/show/59d2ee88f6e4b72b3fb0c7a5
```
```
{
    "name" : "Dave and Morty",
    "theme_song" : "Wake Me Up Before You Go-Go"
}
```

- Let's look at everything one more time:
```
GET http://###.###.###.###:5000/show
```
