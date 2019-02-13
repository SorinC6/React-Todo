// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo'

const TodoList = (props) => {
   return(
      <div>
      {
         props.todoData.map((todo,idx) => <Todo key={idx} todoItem={todo.task}/>)
      }
      </div>
   )
}

export default TodoList;
