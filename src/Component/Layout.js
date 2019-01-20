import React from 'react'
import io from 'socket.io-client'
import {USER_CONNECTED,LOGOUT} from '../UUID/Event'
import LoginForm from './LoginForm'
import Containers from './chatContainer'

const socketUrl = "http://localhost:4020/"
export default class Layout extends React.Component{
    
    constructor(props){
        super(props)
        this.state ={
            socket: null,
            user:null
        }
    }

    componentDidMount(){
        this.initSocket()
    }

    initSocket =() =>{
        const socket = io(socketUrl)
        socket.on('CONNECTED',()=>{
            console.log('connected')
        })
        this.setState({socket})
    }

    setUser =(user)=>{
        const {socket}=this.state
        socket.emit(USER_CONNECTED,user)
        this.setState({user})
    }

    logout =()=>{
        const {socket}=this.state
        socket.emit(LOGOUT)
        this.setState({user:null})
    }
    
    render(){
        const {socket,user} =this.state
        return(
            <div>
                {
                    !user?
                    <LoginForm socket={socket} setUser={this.setUser}/>
                    :
                    <Containers socket ={socket} user ={user} logout={this.logout}/>
                }
            </div>
        )
    }
}