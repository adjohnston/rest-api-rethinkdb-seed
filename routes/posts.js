module.exports = (server) => {
  server.get('/posts', (req, res, next) => {
    res.send('Posts');
    next();
  });
};
