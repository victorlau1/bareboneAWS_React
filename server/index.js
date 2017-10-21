const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

const db = require('../db');
const PORT = process.env.PORT || 8080;


const app = express();
const router = express.Router();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  //console.log(req)
  res.send('Hello!')
});

app.post('/', (req, res) => {
  //console.log(req)
  res.send('Bye!')
});


app.listen(PORT, function(){
   console.log('Listening on PORT: ', PORT);
});