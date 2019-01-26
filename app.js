// Version 2.0

var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

/*

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('message', function(msg) {
    io.emit('message', msg);
  });
});

http.listen(httpPort, function(){
  console.log('Server Started on httpPort: '+httpPort);
});
*/

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/about', function(req, res){
  res.sendFile(__dirname + '/about.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log(msg);
    io.emit('chat message', msg);
  });
  socket.on('joined', function(msg){
    console.log(msg + " joined the chat");
    io.emit('chat message', "NodeChat System: " + msg + " has joined the chat");
  });
});

http.listen(port, function(){
  console.log('Started Server On Port: ' + port);
});