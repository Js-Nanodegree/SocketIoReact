import React from 'react'
import SideBar from './SideBar'

export default class extends React.Component{
    constructor(props){
        this.state={
            chats:[],
            activeChat:null
        }
    }
    setActivechat =(activeChat)=>{
        this.setState({activeChat})
    }
    render(){
        const {user,logout} = this.props
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