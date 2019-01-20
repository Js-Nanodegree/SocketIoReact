import React from 'react'

export default class Layout extends React.Component{
    render(){
        const {title} =this.props
        return(
            <div>
                {title}
            </div>
        )
    }
}