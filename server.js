const restify = require('restify');
const config = require(`${__dirname}/config.js`);

const server = restify.createServer({
  name: config.restify.name
});

//  index
//  ---------------------------------------------------------------------------
server.get('/', (req, res, next) => {
  res.send('Hello world');
  next();
});

//  named routes
//  ---------------------------------------------------------------------------
const posts = require(`${__dirname}/routes/posts`)(server);

//  start server
//  ---------------------------------------------------------------------------
server.listen(config.restify.port, () => {
  console.log(`${server.name} listening at ${server.url}`);
});
