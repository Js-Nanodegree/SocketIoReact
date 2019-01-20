import React from 'react'

export  default class LoginForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            nickname:'',
            error:''
        }
    }
    render(){
        const {nickname,error} = this.state

        return(

            <div>
                <form>
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