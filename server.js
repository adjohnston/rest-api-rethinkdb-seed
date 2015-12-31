const restify = require('restify');

const server = restify.createServer({
  name: 'seed-api'
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
server.listen(8000, () => {
  console.log(`${server.name} listening at ${server.url}`);
});
