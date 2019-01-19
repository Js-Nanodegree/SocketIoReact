const io = require('socket.io')();

const port = 8000;
io.listen(port);
console.log('SocketIO listening on port ', port);

io.on('connection', (socketio) => {
  socketio.on('subscribeToTimer',(interval)=>{
    console.log("client was subscribe with"+interval)
    setInterval(() => {
      socketio.emit('timer', new Date());
    }, interval);
  }) 
});