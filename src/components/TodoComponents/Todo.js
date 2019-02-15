import React from 'react';
import './Todo.css';

const Todo = (props) => {
	return (
		<div className={props.buttonStyle} onClick={props.onToggle}>
			<h1 className='todoStyle'>{props.todoItem}</h1>
		</div>
	);
};

export default Todo;
