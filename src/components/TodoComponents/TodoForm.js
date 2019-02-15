import React from 'react';
// import { Component } from 'react';

function TodoForm(props) {
	return (
		<form onSubmit={props.addNewTodo} className='form-style'>
			<input value={props.task} type="text" name="task" placeholder="...todo" onChange={props.handleChanges} className='input-style'/>
			<button type="submit">Add Todo</button>
			<button onClick={props.clearCompleted}>Clear Todos</button>
		</form>
	);
}

export default TodoForm;
