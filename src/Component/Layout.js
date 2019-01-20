import React from 'react'

export default class Layout extends React.Component{
    
    constructor(props){
        super(props)
        this.state ={}
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