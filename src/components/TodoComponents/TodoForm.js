import React from 'react';
import { Component } from 'react';

class TodoForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todoValue: ''
		};
	}

	clearInput = () => {
		this.setState({
			todoValue: ''
		});
	};

	onChangeHandler = (event) => {
		this.setState({
			todoValue: event.target.value
		});
		console.log(this.state.todoValue);
	};

	onButtonClick = () => {
		if (this.state.todoValue.length) {
			this.props.addTodo(this.state.todoValue);
		}
	};

	render() {
		return (
			<form>
				<input placeholder="...todo" onChange={this.onChangeHandler} />
				<button onClick={this.onButtonClick}>Add Todo</button>
			</form>
		);
	}
}

export default TodoForm;
