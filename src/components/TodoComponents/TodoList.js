// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
	return (
		<div>
			{props.todoData.map((todo) => {
				return (
               <Todo 
                  key={todo.id} 
                  todoItem={todo.task}
                  onToggle={props.onToggle}    
               />
            );
			})}
		</div>
	);
};

export default TodoList;
