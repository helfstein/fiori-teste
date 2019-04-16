var express = require('express');

var app = express()
  .use(express.static(__dirname + '/index.html'))
  .listen(process.env.PORT || 5000);