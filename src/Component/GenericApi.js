import React from 'react'
import {encrypt} from 'crypty'


const secret = 'P10PJY1ckcMEeZxWHfVzsiOktuXf8O8O'
// проверить секретку
//нужно добавить сокет


export default class Sum extends React.Component{
    constructor(props) {
		super();
		this.state = {
            nickname:'',
            isToggleOn:true,
			items: [
				{label: "Account Info", checked: false},
				{label: "Account History", checked: true},
				{label: "Orders", checked: false},
				{label: "Withdraw", checked: false},
                {label: "Wallets", checked: false},			
			],
		};
	}
	handleSubmit =(e)=>{
        e.preventDefault()
        console.log(this.state)
        const data= encrypt(JSON.stringify(this.state),secret)
        console.log(data)
       

    }
    handleChange =(e)=>{
        this.setState({nickname:e.target.value})
    }

MapiClick=()=> {
            this.setState({
                TimeCreate: Date.now()});
        }

    onChangeFavorite=(event)=>{
        // event.preventDefault()
        console.log(event.target.name, event.target.checked);
        this.setState({[event.target.name]:event.target.checked})
        
    };
    render(){
        const {nickname} =this.state
        return (
			<div><form onSubmit={this.handleSubmit}>
				<p>
					<label>
						<input type="checkbox" checked={false} />
						{' '}
						Toggle all
					</label>
				</p>
				<ul>
				{this.state.items.map(item => {
					return (
						<li key={item.label}>
                            <label>
                                <input type="checkbox" name={item.label} onChange={this.onChangeFavorite} defaultChecked={this.checked} /> {item.label}
                            </label>
						</li>
					);
				})}
				</ul>
                <input ref={(input)=>{this.textInput = input}}
                    type='text'
                    id='nickname'
                    value={nickname}
                    onChange={this.handleChange}
                    placeholder={'Enter Token Name'} />
                    <button onClick={this.MapiClick}>Submit</button>
				</form>
			</div>
		);
  }
}