import React, { Component } from 'react';

class Header extends Component{
    //устанавливаем начальное состояние
    state ={
        isOpen:false
    }

    //прописываем функцию для изменения состояния
    toggle= () =>{
        this.setState({
            isOpen:!this.state.isOpen
        })
    }
    render(){
        return <div>
            <p> Header</p>
        </div>
    }
}

export default Header