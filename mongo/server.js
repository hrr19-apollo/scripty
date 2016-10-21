var express = require("express");
var app = express();
var mongoose = require("mongoose");
var mongojs = require("mongojs")
var bodyParser = require("bodyParser");

//Name of our database
var db = mongojs("config", ["config"]);

app.get('/config', function(req, res) {
  db.config.find(function(err, docs) {
    res.json(docs);
  });
});


app.post("/config", function(req, res) {
  db.config.insert(req.body, function(err, doc) {
    res.json(doc);
  });
});

app.get('/config/:id', function(req, res) {
  var id = req.params.id;
  db.config.findOne({_id: mongojs.ObjectId(id)}, function(err, doc) {
    res.json(doc);
  });
});

app.listen(process.env.PORT || 8000);