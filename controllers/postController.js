const fs = require('fs');
const postTemplate = require('../modules/replaceShowPost');


exports.getAllPost = (req, res) => {
  res.status(200);
  postTemplate.getPost(req.query.page).then(function (result){
    res.send(result);
  });
};
  
exports.getPost = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined'
  });
};
  
exports.createPost = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined'
  });
};

exports.updatePost = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined'
  });
};

exports.deletePost = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined'
  });
};