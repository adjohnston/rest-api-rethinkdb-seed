const Post = require('../models/post.js');

module.exports = (server) => {
  server.get('/posts', (req, res, next) => {
    res.send('Posts');
    next();
  });

  server.post('/posts/create', (req, res, next) => {
    const newPost = new Post({
      name: req.params.name,
      message: req.params.message
    });

    newPost.save().then((res) => {
      console.log(res);
    });

    next();
  });
};
