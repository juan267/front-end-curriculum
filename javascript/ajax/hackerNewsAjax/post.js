var mongoClient = require('mongodb').MongoClient
var ObjectID = require("mongodb").ObjectID
var assert = require('assert')

function PostDAO(database) {
  'use strict';

  var posts = [
    {
      title: "Hola soy un post",
      body: "Body del post",
      author: "Juan gomez",
      created_at: new Date(),
      votes: 1,
      url: 'https://news.ycombinator.com/'
    },
    {
      title: "Hola soy el segundo Post",
      body: "Body del post",
      author: "Carolina Hernandez",
      created_at: new Date(),
      votes: 1,
      url: 'https://news.ycombinator.com/'
    }
  ]

  this.db = database

  this.getAllPosts = function(callback) {
    this.db.collection('posts').find().toArray(function(err, results){
      assert.equal(null, err)
      var posts = results
      callback(posts)
    })
  }

  this.getPost = function(id, callback) {
    this.db.collection('posts').findOne({_id: ObjectID(id)}, function(err, result){
      var postDoc = result
      callback(postDoc)
    })
  }

  this.addPost = function(title, author, url, callback) {
    var post = {
      title: title,
      author: author,
      url: url,
      created_at: new Date(),
      votes: 0
    }
    this.db.collection('posts').insertOne(post, function(err, result){
      var postDoc = result
      callback(postDoc)
    })
  }

  this.addPostVote = function(id, callback) {
    this.db.collection('posts').updateOne({_id: ObjectID(id)}, {$inc: {
      votes: 1
    }}, function(err, result){
      var postDoc = result
      callback(postDoc)
    })
  }

  this.updatePost = function(id, title, author, url, callback) {
    this.db.collection('posts').updateOne({_id: ObjectID(id)}, {$set: {
      title: title,
      author: author,
      url: url
    }}, function(err, result){
      assert.equal(null, err)
      var postDoc = result
      callback(postDoc)
    })
  }

  this.deletePost = function(id, callback) {
    console.log("Remove post id", id)
    this.db.collection('posts').remove({_id: ObjectID(id)}, 1, function(err, result){
      assert.equal(null, err)
      var postDoc = result
      callback(postDoc)
    })
  }

  this.insertMany = function(){
    this.db.collection('posts').insertMany(posts)
  }

  this.seedCollection = function(callback) {
    this.db.collection('posts').count(function(err, result){
      callback(result)
    })
  }
}

module.exports.PostDAO = PostDAO;
