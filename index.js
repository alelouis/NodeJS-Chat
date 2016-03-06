var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  //User join channel
  socket.on('notification', function(msg){
    io.emit('notification', msg)
  });
  //Message
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(8081, function(){
  console.log('listening on *:8081');
});
