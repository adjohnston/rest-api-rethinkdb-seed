const restify = require('restify');
const server = restify.createServer();

server.get('/', (req, res, next) => {
  res.send('Hello world');
  next();
});

server.listen(8080, () => {
  console.log(`${server.name} listening at ${server.url}`);
});
