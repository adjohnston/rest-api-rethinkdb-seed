const r = require('rethinkdb');
const config = require(`${__dirname}/config.js`);

let connection;

r.connect({
  db: config.rethinkdb.db,
  port: config.rethinkdb.port,
  host: config.rethinkdb.host
}, (err, conn) => {
  if (err) throw err;

  connection = conn;
});

module.exports = connection;
