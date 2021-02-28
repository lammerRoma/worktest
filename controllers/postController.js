const fs = require('fs');

const showAllPost = require('../modules/replaceShowPost');
const showPost = require('../modules/replaceGetPost');
const createNewPost = require('../modules/replaceCreateNewPost');

exports.getAllPost = (req, res) => {
  res.status(200);
  showAllPost.getPost(req.query.page).then(function (result){
    res.send(result);
  });
};
  
exports.getPost = (req, res) => {
  res.status(200);
  showPost.getPost(req.params.id).then(function (result){
    res.send(result);
  });
};
  
exports.getCreatePage = (req, res) => {
  res.status(200)
  res.send(createNewPost.outputPage())
};

exports.postCreatePost = (req, res) => {
  res.status(200)
  console.log(req.body.title) 
  console.log(req.body.description)
  createNewPost.createPost(req.body.title, req.body.description).then(function (result) {
    res.send(result)
  })
}


exports.deletePost = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined'
  });
};