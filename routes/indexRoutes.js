const fs = require('fs');
const indexController = require('./../controllers/indexController.js');

const { Router } = require('express');
const router = Router();

router
    .route('/')
    .get(indexController.indexNav)

module.exports = router;