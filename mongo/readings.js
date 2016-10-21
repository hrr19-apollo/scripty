var mongoose = require('mongoose');
mongoose.connect('/config.js');

var readingSchema = mongoose.Schema({
  text: String
});

var Readings = mongoose.model("Readings", readingSchema);

module.exports = Readings;
//This is a test.