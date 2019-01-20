import React from 'react'
import io from 'socket.io-client'
import {USER_CONNECTED,USER_DISCONNECTED,LOGOUT} from '../Event'

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
        socket.on('connect',()=>{
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
        const {title} =this.props
        return(
            <div>
                {title}
            </div>
        )
    }
}