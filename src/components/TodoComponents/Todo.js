import React from 'react';
import './Todo.css';

const Todo = (props) => {
	return (
		<div className={props.buttonStyle} onClick={props.onToggle}>
			{props.todoItem}
		</div>
	);
};

export default Todo;
