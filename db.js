const r = require('rethinkdb');

let connection;

r.connect({
  db: 'seed_project',
  host: 'localhost'
}, (err, conn) => {
  if (err) throw err;

  connection = conn;
});

module.exports = connection;
