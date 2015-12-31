const restify = require('restify');
const server = restify.createServer({
  name: 'seed-api'
});

server.get('/', (req, res, next) => {
  res.send('Hello world');
  next();
});

server.listen(8080, () => {
  console.log(`${server.name} listening at ${server.url}`);
});
