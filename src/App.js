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
		//this.setState({ [event.target.name]: event.target.value });
		this.setState({
			task: event.target.value
		});

		//    this.setState({
		//       todoList: this.state.todoList.task=event.target.value
		// 	// this.setState({
		// 	// 	todoList: [
		// 	// 		...this.state.todoList,
		// 	// 		{
		// 	// 			task: event.target.value,
		// 	// 			id: Date.now(),
		// 	// 			completed: false
		// 	// 		}
		// 	// 	],
		// 	// });
		// });
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

		// this.setState((st) =>({
		//    todoList: st.todoList.concat({
		//       task: this.state.task,
		// 	 	id: Date.now(),
		// 		completed: false
		//    }),
		// })
		// );

		// this.setState(st=>({
		//    todoList:st.todoList.task=''
		// }))

		// console.log(this.state.todoList);
	};

	onToggle = (id) => {
		//console.log(id, ' idddd');
		this.setState({
			todoList: this.state.todoList.map((todo) => {
				if (id !== todo.id) {
					return todo;
				} else {
					return {
						...todo,
						completed: !todo.completed
					};
				}
			})
		});
		//console.log(this.state.todoList);
	};

	clearCompleted = (event) => {
		event.preventDefault();
		this.setState({
			todoList: this.state.todoList.filter((todo) => todo.completed === false)
		});

		//console.log(this.state.todoList);
	};

	render() {
		return (
			<div>
				<h2 className='app-title' >Welcome to your Todo App!</h2>

				<TodoForm
					addNewTodo={this.addNewTodo}
					handleChanges={this.handleChanges}
					task={this.state.task}
					clearCompleted={this.clearCompleted}
				/>

				<TodoList todoData={this.state.todoList} onToggle={this.onToggle} />
			</div>
		);
	}
}

export default App;
