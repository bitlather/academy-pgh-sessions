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
        "_id": ObjectId("59d2ee71f6e4b72b19d7b7cb"),
        "name" : "That 70s Show",
        "first_episode_date" : "1998-08-23",
        "theme_song" : "In the Street"
        })
    mongo.db.show.insert({
        "_id": ObjectId("59d2ee88f6e4b72b3fb0c7a5"),
        "name" : "Rick and Morty",
        "first_episode_date" : "2013-12-02",
        "theme_song" : "Rick and Morty Theme Song"
        })
    mongo.db.show.insert({
        "_id": ObjectId("59d2eef8f6e4b72bfbeba337"),
        "name" : "Bob's Burgers",
        "first_episode_date" : "2011-01-09",
        "theme_song" : "Bob's Burgers Theme"
        })
    return {'message' : 'Done. Note that this endpoint is just to make our lives easier, and is not a good practice. Not even a little bit.'}


@app.route('/show') # GET /show
def GET_show():
    """
    Return all shows.
    """
    show = list(mongo.db.show.find())
    return json.dumps(show, default=json_util.default), status.HTTP_200_OK


@app.route('/show/<show_id>') # GET /show/{id}
def GET_show_id(show_id):
    """
    Return a single show if the id is found; returns 404 otherwise.
    """
    show = mongo.db.show.find_one({ "_id" : ObjectId(show_id) })
    if show == None:
        return {'error' : 'show not found'}, status.HTTP_404_NOT_FOUND
    else:
        return json.dumps(show, default=json_util.default), status.HTTP_200_OK


@app.route('/show/<show_id>', methods=['DELETE']) # DELETE /show/{id}
def DELETE_show_id(show_id):
    """
    Deletes a single show if ID is found; returns 404 otherwise.
    """
    result = mongo.db.show.delete_one({ "_id" : ObjectId(show_id) })
    if result.deleted_count == 1:
        return '', status.HTTP_204_NO_CONTENT
    else:
        return {'error' : 'document not found'}, status.HTTP_404_NOT_FOUND


@app.route('/show', methods=['POST']) # POST /show
def POST_show():
    """
    Create a show.
    """
    data = request.json

    if not 'name' in data or len(data['name']) == 0:
        return {'error' : 'name is required'}, status.HTTP_400_BAD_REQUEST

    if not 'first_episode_date' in data or len(data['first_episode_date']) == 0:
        return {'error' : 'first_episode_date is required'}, status.HTTP_400_BAD_REQUEST

    if not 'theme_song' in data or len(data['theme_song']) == 0:
        return {'error' : 'theme_song is required'}, status.HTTP_400_BAD_REQUEST

    document = {
        'name' : data['name'],
        'first_episode_date' : data['first_episode_date'],
        'theme_song' : data['theme_song']
        }

    result = mongo.db.show.insert_one(document)

    document['_id'] = result.inserted_id

    return json.dumps(document, default=json_util.default), status.HTTP_201_CREATED


@app.route('/show/<show_id>', methods=['PUT']) # PUT /show/id
def PUT_show(show_id):
    """
    Edit a show.
    """
    show = mongo.db.show.find_one({ "_id" : ObjectId(show_id) })
    if show == None:
        return {'error' : 'show not found'}, status.HTTP_404_NOT_FOUND

    data = request.json

    update_set = {}

    if 'name' in data:
        if len(data['name']) == 0:
            return {'error' : 'name must have a value'}, status.HTTP_400_BAD_REQUEST
        update_set['name'] = data['name']

    if 'first_episode_date' in data:
        if len(data['first_episode_date']) == 0:
            return {'error' : 'first_episode_date must have a value'}, status.HTTP_400_BAD_REQUEST
        update_set['first_episode_date'] = data['first_episode_date']

    if 'theme_song' in data:
        if len(data['theme_song']) == 0:
            return {'error' : 'theme_song must have a value'}, status.HTTP_400_BAD_REQUEST
        update_set['theme_song'] = data['theme_song']

    mongo.db.show.update({'_id': ObjectId(show_id)}, {'$set': update_set})

    result = mongo.db.show.find_one({ "_id" : ObjectId(show_id) })

    return json.dumps(result, default=json_util.default), status.HTTP_200_OK