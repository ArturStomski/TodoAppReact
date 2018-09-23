import React from 'react'

class Todoitem extends React.Component{
	constructor(props){
		super(props);
		this.onClick = this.onClick.bind(this);
		this.onEdit = this.onEdit.bind(this);
		this.onSave = this.onSave.bind(this);
		this.onChange = this.onChange.bind(this);		
	};

	onClick() {
		this.props.onClick(this.props.deleteCount);
	};

	onEdit(){
		this.props.onEdit(this.props.name, this.props.id, this.props.shouldHide);
	};

	onSave(){
		this.props.onSave(this.props.name, this.props.id,);
	};
	onChange(event){
		this.props.onChange(event.target.value);
	}
		
	render(){
		return ( 
			<div className ="flex-container"> 
				<input 	className={this.props.shouldHide ? 'hidden' : 'flex-container-input'}
						onChange={this.onChange}
						placeholder={this.props.name}
						type="text" 
						value={this.props.value}
				/>				
				<h2 className={this.props.shouldHide ? 'flex-child-left' : 'hidden'}>
					{this.props.name}
				</h2>
				
				<button	disabled={this.props.shouldBlock ? 'disabled' : ''} 
						className={this.props.shouldHide ? 'flex-child-right' : 'hidden'}
						onClick={this.onEdit}>edit
				</button>
				<button onClick={this.onSave} 
						className={this.props.shouldHide ? 'hidden' : 'flex-child-right'}>
					save
				</button>
				<button onClick={this.onClick} 
						className='flex-child-right'
						disabled={this.props.shouldBlock ? 'disabled' : ''}>
						delete
				</button>
			</div>
		);
	};
};

export default Todoitem;