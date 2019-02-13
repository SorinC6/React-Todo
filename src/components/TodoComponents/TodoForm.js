import React from 'react';
// import { Component } from 'react';

function TodoForm(props) {
	return (
		<form onSubmit={props.addNewTodo}>
			<input value={props.task} type="text" name="task" placeholder="...todo" onChange={props.handleChanges} />
			<button type="submit">Add Todo</button>
         <button onClick={props.clearCompleted}>Clear Todos</button>
		</form>
	);
}

export default TodoForm;
