require('dotenv').config();
var express = require('express')
  , morgan = require('morgan')
  , bodyParser = require('body-parser')

var app = express();

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(require('./controllers'))


app.get('/', function (req, res) {
  res.send('API Server is live!');
  
});
  
app.listen(5000, function () {
  console.log('API Server listening on port 5000!');
});
