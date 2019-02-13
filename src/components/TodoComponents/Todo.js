import React from 'react';

const Todo = (props) => {
   return <div
      // className={props.todos.completed ? 'completed' : ''} .........??
      onClick={() => props.onToggle(props.todoItem.id)} 
      >
      
      {props.todoItem}</div>;
};

export default Todo;
