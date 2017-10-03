import json
from bson import json_util
from bson.objectid import ObjectId
from flask import Flask, request
from flask.ext.api import status
from flask_pymongo import PyMongo
from flask_api import FlaskAPI

app = FlaskAPI(__name__)
app.config['MONGO_DBNAME'] = 'tv'
mongo = PyMongo(app, config_prefix='MONGO')

@app.route('/seed') # GET /seed
def seed():
    #
    # `GET /seed` will clear your 'show' collection and add predefined data.
    # Normally this would be done in a seed script, not in a REST API
    # endpoint, but ... well ... we're being hacky today.
    #
    # Also it's weird that something that alters data is a GET endpoint.
    # Think of this as one of those "Do as I say, not as I do" moments.
    #
    mongo.db.show.delete_many({})
    mongo.db.show.insert({
        "_id" : '1',
        "name" : "That 70s Show",
        "first_episode_date" : "1998-08-23",
        "theme_song" : "In the Street"
        })
    mongo.db.show.insert({
        "_id" : '2',
        "name" : "Rick and Morty",
        "first_episode_date" : "2013-12-02",
        "theme_song" : "Rick and Morty Theme Song"
        })
    mongo.db.show.insert({
        "_id" : '3',
        "name" : "Bob's Burgers",
        "first_episode_date" : "2011-01-09",
        "theme_song" : "Bob's Burgers Theme"
        })
    return 'done'


@app.route('/show') # GET /show
def GET_show():
    show = list(mongo.db.show.find())
    return json.dumps(show, default=json_util.default)


@app.route('/show/<show_id>') # GET /show/{id}
def GET_show_id(show_id):
    show = list(mongo.db.show.find({ "_id" : str(show_id) }))
    return json.dumps(show, default=json_util.default)


@app.route('/show/<show_id>', methods=['DELETE']) # DELETE /show/{id}
def DELETE_show_id(show_id):
    result = mongo.db.show.delete_one({ "_id" : str(show_id) })
    if result.deleted_count == 1:
        return '', status.HTTP_204_NO_CONTENT
    else:
        return {'error' : 'document not found'}, status.HTTP_404_NOT_FOUND


@app.route('/show', methods=['POST'])
def POST_show():
    return 'done'