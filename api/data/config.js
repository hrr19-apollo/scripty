/* Config.js
 *
 * This file handles connecting to the database and loads dummy data.
 **/

const mongoose = require('mongoose');
const log = require('../helpers/log');

mongoose.connect('mongodb://localhost/scripty');

const connection = mongoose.connection;

connection.on(
  'error', log.error.bind(null, 'Error connecting to MongoDB:'));

connection.once(
  'open', () => log.info('Connected to MongoDB.'));

module.exports = connection;

// Import dummy data provided by dummy-data/index.js
// For debug and testing purposes only
const dummyData = require('./dummy-data');