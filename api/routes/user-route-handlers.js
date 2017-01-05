const mongoose = require('mongoose');
const User = require('../data/models/user');

const ObjId = mongoose.Types.ObjectId;

const log = require('../helpers/log');
const send500 = require('../helpers/send500');
const send404 = require('../helpers/send404');

exports.getUsers = (req, res) => {
  User.find({})
    .then((err, res) => {
      if (err) {
        log.error(err);
        res.status(500).send(err);
      } else {
        res.status(200).send(users);
      }
    });
};

exports.getUserById = (req, res) => {
  User.findById(req.params.id)
    .then(user => { res.status(200).send(user); });
};

exports.createUser = (req, res) => {
  const {username, password, email} = req.body;

  User.findOne({name})
    .then(user => {
      if (!user) {
        //TODO: Insertion code
      } else {
        res.status(403).send(`Name collision with username \`${name}\``);
      }
    });
};

exports.updateUserById = (req, res) => {
  const id = req.params.id;

};

exports.deleteUserById = (req, res) => {
  const id = req.params.id;

};

exports.signinUser = (req, res) => {
  const {username, password} = req.body;

  User.findOne({name: username})
    .then(user => {
      if (user) {
        
      } else {
        send404(res, '');
      }
    });
};