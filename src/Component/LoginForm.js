import React from 'react'
import {VERIFY_USER} from '../UUID/Event'

export  default class LoginForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            nickname:'',
            error:''
        }
    }

    setUser=({user,isUser})=>{
        if(isUser){
            this.setError('User nameTaken')
        }else{
            this.props.setUser(user)
        }
    }

    handleChange =(e)=>{
        e.preventDefault()

        const {socket}=this.props
        const {nickname} =this.state
        socket.emit(VERIFY_USER,nickname,this.setUser)

    }

    handleSubmit =(e)=>{
        this.serState({nickname:e.target.value})
    }

    setError=(error)=>{
        this.setState({error})
    }

    render(){
        const {nickname,error} = this.state

        return(

            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Got a nickname?
                    </label>
                    <input ref={(input)=>{this.textInput = input}}
                    type='text'
                    id='nickname'
                    value={nickname}
                    onChange={this.handleChange}
                    placeholder={'MyCoolUserName'}/>
                    <div>{'error'?error:null}</div>
                </form>
            </div>
        )
    }
}