// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'React';
import Todo from './Todo'

const TodoList = (props) => {
   return(
      {
         props.todoData.map(todo => <Todo todoItem={todo.task}/>),
      }
   )
}
