const express = require('express');
const postController = require('./../controllers/postController');
const router = express.Router();

router
.route('/post')
.get(postController.getAllPost)

router
  .route("/post/:id")
  .get(postController.getPost)
  .delete(postController.deletePost);

router
  .route('/createPost')
  .get(postController.getCreatePage)
  .post(postController.postCreatePost)

module.exports = router;

