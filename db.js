const thinky = require('thinky');
const config = require(`${__dirname}/config.js`);

module.exports = thinky(config.rethinkdb);
