// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import Todoitem from './todoitem.jsx'
import Calculator from './calculator.jsx'

class Todolist extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			buttonName: "nacisk",
			text: "",
			items: [],
			calcSpace: 0,
		}

		this.onChange = this.onChange.bind(this);
		this.onButtonClick = this.onButtonClick.bind(this);
		this.onClickDelete = this.onClickDelete.bind(this)
		
	}

	onButtonClick(){
		let newitems = this.state.items.slice()
		newitems[this.state.items.length++] = ({name: this.state.text.toUpperCase() })
		this.setState({items: newitems, text: ""}) 

	}

	onChange(event){
		this.setState({text: event.target.value})
	}

	renderItems(){
		return this.state.items.map(function(item, i) {
			return (<Todoitem name={item.name}/>) 
		})
	}
	
	onClickDelete(){
		let newitems = this.state.items.splice(0, this.state.items.length--)
		this.setState({items: newitems})
		}
	





	render(){

		

		return (
			<div>To do list
				<input type="text" value={this.state.text} onChange={this.onChange}/>
				<button onClick={this.onButtonClick}>{this.state.buttonName}</button>
				<button onClick={this.onClickDelete}>delete</button>
				{this.renderItems()} <br/><br/><br/><br/>
				<Calculator/>
			</div>
		)
	}
};


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Todolist />,
    document.body.appendChild(document.createElement('div')),
  )
})
