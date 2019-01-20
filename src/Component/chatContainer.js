import React from 'react'
import SideBar from './SideBar'

export default class extends React.Component{
    constructor(props){
        super(props)
        this.state={
            chats:[],
            activeChat:null
        }
    }

    sendMessage=(chatId,message)=>{
        const {socket} = this.props
        socket.emit(MESAGE_SEND, {chatId,message})

    }

    sendTyping=(chatId,isTyping)=>{
        const{socket}=this.props
        socket.emit(TYPING,{chatId,isTyping})

    }


    setActivechat =(activeChat)=>{
        this.setState({activeChat})
    }
    render(){
        const {user,logout} = this.props
        const {chats,activeChat} =this.state
        return(
            <div>
                <SideBar 
                    logout ={logout}
                    chats={chats}
                    user ={user}
                    activeChat ={activeChat}
                    setActivechat ={this.setActivechat}
                    />
            </div>
        )
    }
}