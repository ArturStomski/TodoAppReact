import React from 'react'
import ReactDOM	from 'react-dom'

class Calculator extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			question: "",
			answer
		};
		this.appendNumber = this.appendNumber.bind(this);	
	};

	appendNumber(){
		this.setState({number:this.props.value})
	}
	render(){
		return(
			<div>
				<table>
					<tbody>
					<tr>
						<td colSpan="4"></td>
					</tr>					
					<tr>
						<td value="1" onClick={this.appendNumber} >1</td>
						<td value="2" >2</td>
						<td value="3" >3</td>
						<td value="+">+</td>
					</tr>
					<tr>
						<td value="4" >4</td>
						<td value="5" >5</td>
						<td value="6" >6</td>
						<td value="-">-</td>
					</tr>
					<tr>
						<td value="7" > 7</td>
						<td value="8" >8</td>
						<td value="9" >9</td>
						<td value="*">*</td>
					</tr>	
					<tr>
						<td value=".">.</td>
						<td value="/">/</td>
						<td>C</td>
						<td>=</td>
					</tr>
					</tbody>
				</table>


			</div>

		)
	}
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Calculator />,
    document.body.appendChild(document.createElement('div')),
  )
})