const Post = require('../models/post.js');

module.exports = (server) => {
  server.get('/api/posts', (req, res, next) => {
    Post.run().then((posts) => {
      res.send(posts);
    });
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
