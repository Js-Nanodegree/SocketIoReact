var app =require('http').createServer()
var io =require('socket.io')(app)



module.exports=function(socket){
    console.log("SocketID "+ socket.id)
}