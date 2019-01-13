var app = require('express')();
var http = require('http').Server(app);

var io = require('socket.io')(http);

app.get('/socketio', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
});


app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

app.get('*',function (req,res){
    res.send('<h1>PAGE DONT FIND </h1>')
})

http.listen(3000, function(){
  console.log('listening on *:3000');
});