import React from 'react'
import ReactDOM from 'react-dom'
import Todoitem from './todoitem.jsx'

class Todolist extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			buttonName: "ADD",
			edit: "",
			lastedit: "",
			active: false,
			disable: false,
			hidden: true,
			items: [],
			lastid: 0,
			text: ""						
		};
		this.handleEditChange = this.handleEditChange.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onButtonClick = this.onButtonClick.bind(this);		
		this.onClickDelete = this.onClickDelete.bind(this);
		this.onClickEdit = this.onClickEdit.bind(this);
		this.onClickSave = this.onClickSave.bind(this);	
	};

	onButtonClick(event){		     
			let newitems = this.state.items.slice()
			newitems[this.state.items.length++] = {name: this.state.text, id: this.state.lastid, 
													hidden: this.state.hidden, active: this.state.active }
			this.setState({items: newitems, text: "", lastid: this.state.lastid + 1});
		
	};

	onChange(event){
		this.setState({text: event.target.value});
	};
		////////renderowanie dodaktowego komponentu
	renderItems(){
		return this.state.items.map((item, i) =>{			
			return (<Todoitem 									
								name={item.name} 
								onClick={this.onClickDelete} 
								id={i}
								deleteCount={item.id}
								key={item.id}
								shouldBlock={this.state.disable}
								shouldHide={item.hidden}
								onEdit={this.onClickEdit}
								onSave={this.onClickSave}
								onChange={this.handleEditChange}/>
					);											
		});
	};	
	
	onClickSave(x,y){
		let saved = this.state.items			
		saved[y] = {name: this.state.edit, id: y, hidden: true}
		this.setState({items: saved, edit: "", disable: false});
	};
	
	onClickEdit(x,y,z){
		let edited = this.state.items
		edited[y] = {name: x, id: y, hidden: false}
		
		this.setState({items: edited, edit: x, lastedit: this.state.edit, disable: true});
	};
		
	handleEditChange(edit){
		this.setState({edit});		
	};
		
	onClickDelete(x){		
		let deleted = this.state.items.filter(
							function (item){
								return (item.id !== x) 
							}
						);
    	this.setState({items: deleted, disable: false});
	};
	
	render(){
		return (
			<div className="main-container">
				<h1 className="flex-child-center">To do list</h1>
				<div className="flex-container">
					<input 	
						className="input-style-none" 
						type="text" 
						value={this.state.text} 
						onChange={this.onChange}
					/>
					<button  onClick={this.onButtonClick}>{this.state.buttonName}</button>
				</div>
				{this.renderItems()} 
			</div>
		);
	};
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Todolist />,
    document.body.appendChild(document.createElement('div')),
  )
})