const express = require('express');
const postController = require('./../controllers/postController');
const route = express.Router();

route
.route('/post')
.get(postController.getAllPost)
.post(postController.createPost);

route
  .route("/:id")
  .get(postController.getPost)
  .patch(postController.updatePost)
  .delete(postController.deletePost);

module.exports = route;

