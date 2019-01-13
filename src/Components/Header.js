import React, { Component } from 'react';
import {Collapse, Navbar, NavbarToggler,  NavbarBrand, Nav} from 'reactstrap'

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
        return (<div>
        <Navbar color = 'light' light expand='md'>
            <NavbarBrand href='/'>ChatApp</NavbarBrand>
            <NavbarToggler onclick={this.toggle}>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar />
                </Collapse>
            </NavbarToggler>
        </Navbar>
        </div>)
    }
}

export default Header