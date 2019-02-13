import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todoData = [
	{
		task: 'Organize Garage',
		id: 1528817077286,
		completed: false
	},
	{
		task: 'Bake Cookies',
		id: 1528817084358,
		completed: false
	}
];

class App extends React.Component {
	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state

	constructor(props) {
		super(props);

		this.state = {
			todoList: todoData,
			task: ''
		};
	}

	handleChanges = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	addNewTodo = (event) => {
		event.preventDefault();
		this.setState({
			todoList: [
				...this.state.todoList,
				{
					task: this.state.task,
					id: Date.now(),
					completed: false
				}
			],
			task: ''
		});

		console.log(this.state.todoList);
	};

	render() {
		return (
			<div>
				<h2>Welcome to your Todo App!</h2>

				<TodoList todoData={this.state.todoList} />

				<TodoForm addNewTodo={this.addNewTodo} handleChanges={this.handleChanges} task={this.state.task} />
			</div>
		);
	}
}

export default App;
