const Post = require('../models/post.js');

module.exports = (server) => {
    res.send('Posts');
  server.get('/api/posts', (req, res, next) => {
    next();
  });

  server.post('/api/posts/create', (req, res, next) => {
    const newPost = new Post({
      name: req.params.name,
      message: req.params.message
    });

    newPost.save().then(() => {
      res.redirect('/posts', next);
    });
  });
};
