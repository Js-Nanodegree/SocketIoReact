var io =require('./index').io
const {VERIFY_USER,USER_CONNECTED,USER_DISCONNECTED}=require('../src/UUID/Event')
const {createChat,createMessage,createUser}=require('../src/UUID/Factoria')

let connectedUser ={}


module.exports=function(socket){
    console.log("SocketID "+ socket.id)

    socket.on(VERIFY_USER,(nickname,callback)=>{
        if(isUser(connectedUser,nickname)){
            callback({isUser:true,user:null})
        }else{
            callback({isUser:false,user:createUser({name:nickname})})
    }
})
    socket.on(USER_CONNECTED,(user)=>{
        connectedUser =addUser(connectedUser,user)
        socket.user =user
        
        io.emit(USER_CONNECTED,connectedUser)

        console.log(connectedUser)
    })

}

function addUser(userList,user){
    let newList =Object.assign({},userList)
    newList[user.name] =user
    return newList
}

function RemoveUser(userList,username){
    let newList = Object.assign({},userList)
    delete newList[username]
    return newList
}

function isUser(userList,username){
    return username in userList
}
