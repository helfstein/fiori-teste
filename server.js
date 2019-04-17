var express = require('express');
var server = express(); 
server.configure(function(){
  //server.use('/media', express.static(__dirname + '/media'));
  server.use(express.static(__dirname + '/src'));
});

server.listen(process.env.PORT || 5000);

