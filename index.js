var app = require('express')();
var http = require('http').Server(app);

var io = require('socket.io')(http);

const port =3000

app.get('/socketio', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

const getVisitors=()=>{
    let clients =io.sockets.clients().connected
    let sockets = Object.values(clients)
    let users = sockets.map(s=>s.user)
    return users
}

const emitVisitors =()=>{
    io.emit('visitors',getVisitors())
}


io.on('connection', function(socket){
    console.log('user connect')
    socket.on('chat message', function(msg){
      io.emit('chat message', msg);
    });
    socket.on("new_visitor", user => {
        console.log("new_visitor", user);
        socket.user = user;
        emitVisitors();
      });
    socket.on('disconnect',function(){
        emitVisitors();
        console.log('user disconnect');
    })
  });

  io.emit('some event', { for: 'everyone' });




app.get('*',function (req,res){
    res.send('<h1>PAGE DONT FIND </h1>')
})
app.get('/', function(req, res){
    res.send('<h1>Hello world</h1>');
  });

  http.listen(port, function() {
    console.log(`listening on *:${port}`);
  });