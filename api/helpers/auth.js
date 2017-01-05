const jwt = require('jwt-simple');
const log = require('./log');

module.exports = secret => {  
  return (req, res, next) => {
    log.info('Auth service triggered.');
    next();
  };
};