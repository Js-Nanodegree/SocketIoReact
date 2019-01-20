var app =require('http').createServer()
var io =require('socket.io')(app)
const SocketManager=require('./SocketManager')

const PORT =process.envPort||4020

io.on('connection',SocketManager)

app.listen(PORT,()=>{
    console.log(`Connected socketio on port:${PORT}`)
})