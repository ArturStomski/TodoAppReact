import React from 'react'
import ReactDOM from 'react-dom'
import Todoitem from './todoitem.jsx'


class Calculator extends React.Component{
	constructor(props){
		super(props);
		this.state = {
				firstNumber: "0",
				operator: "0",
				secondNumber: "0"
			
		}

		this.appendNumber = this.appendNumber.bind(this)
		
	}

	appendNumber(){
		setState({firstNumber: this.props.value})
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
						<td value="1" onClick={this.appendNumber}>1</td>
						<td value="2" onClick={this.appendNumber}>2</td>
						<td value="3" onClick={this.appendNumber}>3</td>
						<td value="+">+</td>
					</tr>
					<tr>
						<td value="4" onClick={this.appendNumber}>4</td>
						<td value="5" onClick={this.appendNumber}>5</td>
						<td value="6" onClick={this.appendNumber}>6</td>
						<td value="-">-</td>
					</tr>
					<tr>
						<td value="7" onClick={this.appendNumber}> 7</td>
						<td value="8" onClick={this.appendNumber}>8</td>
						<td value="9" onClick={this.appendNumber}>9</td>
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
