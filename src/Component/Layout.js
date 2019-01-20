import React from 'react'
import io from 'socket.io-client'

const socketUrl = "http://localhost:4020/"
export default class Layout extends React.Component{
    
    constructor(props){
        super(props)
        this.state ={
            socket: null
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
    
    render(){
        const {title} =this.props
        return(
            <div>
                {title}
            </div>
        )
    }
}