const db = require('../db.js');
const type = db.type;

const Post = db.createModel('post', {
  id: type.string(),
  title: type.string(),
  message: type.string()
});

module.exports = Post;
