import React from 'react'

export default class SideBar extends React.Component{
    render(){
        const {user,activeChat,chats,logout, setActivechat} =this.props
        return(
            <div>
                <div ref='users'
                 onClick = {(e)=>{
                    (e.target ===this.refs.user)&&setActivechat(null)
                }}>
                {
                    chats.map((chat)=>{
                        if(chat.name){
                            const lastMessage =chat.messages[chat.messages.length-1]
                            const user =chat.users.find(({name})=>{
                                return name !==this.props.name})||{name:'Community'}
                            const classNames=(activeChat&&activeChat.id ===chat.id)?'active':''
                                return(
                                    <div key={chat.id}
                                        className={`user ${classNames}`}
                                        onClick={()=>{setActivechat(chat)}}>
                                        <div>{user.name[0].toUpperCase()}</div>
                                        <div>
                                            <div>{user.name}</div>{lastMessage &&<div>lastMessage.message</div>}
                                        </div>

                                    </div>
                                )
                        }
                        return null
                    })
                }

                </div>
                <div>
                    <span>{user.name}</span>
                    <div onClick={()=>{logout()}} title='logout'>logout</div>
                </div>
            </div>
        )
    }
}