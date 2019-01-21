import React from 'react'
import ManageApi from './ManageApi'
import GenereticApi from './GenericApi'


export default class Layout extends React.Component{
        constructor(props) {
        super(props);
        this.state = {isToggleOn: null};
        }
        GapiClick=()=> {
            this.setState({
                isToggleOn: false});
        }     
        MapiClick=()=> {
            this.setState({
                isToggleOn: true});
        }
            
          render(){
            return(
                <div>
                    <div id='ButtonSelect'>
                    <button onClick={this.GapiClick}> Управление ключами Api</button>
                    <button onClick={this.MapiClick}>Сгенерировать ключи Api</button>
                    <div>
                        { this.state.isToggleOn  ?
                          <GenereticApi/>: <ManageApi/>}
                    </div>
                    </div>

                </div>
            )
        }
    }
