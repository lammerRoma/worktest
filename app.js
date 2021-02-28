const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');


const overviewRout = require('./routes/indexRoutes');
const postRout = require('./routes/postRoutes');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(overviewRout);  
app.use(postRout);

async function start() {
  try{
    app.listen(PORT, () => {
      console.log('Server has been started...');
    })

  }catch (err) {
    console.log(err)
  }
}

start();