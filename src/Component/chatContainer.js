import React from 'react'
import SideBar from './SideBar'
import {COMMUNITY_CHAT,TYPING,MESSAGE_SEND} from '../UUID/Event'

export default class extends React.Component{
    constructor(props){
        super(props)
        this.state={
            chats:[],
            activeChat:null
        }
    }


    componentDidMount(){
        const{socket} =this.props
        socket.emit(COMMUNITY_CHAT,this,resetChat)

    }

    resetChat=(chat)=>{
        return this.addChat(chat,true)
    }

    addChat=(chat,reset)=>{
        const {socket} =this.props
        const{chats} = this.state
        const newChats =reset?[chat]:[...chats,chat]
        this.setState({chats:newChats})


    }


    sendMessage=(chatId,message)=>{
        const {socket} = this.props
        socket.emit(MESSAGE_SEND, {chatId,message})

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
                    /><div>
                        {activeChat !== null?[
                            <div>{activeChat.name}</div>
                            <div messages={activeChat.messages}
                            user={user}
                            typingUsers={activeChat.typingUsers}/>
                            <input 
                            sendMessage={(message)=>{this.sendMessage(activeChat.id,message)}}
                            sendTyping={(isTyping)=>{this.sendTyping(activeChat.id,isTyping)}}
                            />
                        ]:<>sdas</>}
                    </div>
            </div>
        )
    }
}