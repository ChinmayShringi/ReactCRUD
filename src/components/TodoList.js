import React from 'react';
import Todo from './Todo'

const ToDoList = ({todos,setTodos,filteredTodos})=>{
    return (
        <div className="todo-container">
        <ul className="todo-list">
            {filteredTodos.map((todo)=>{
               return( <Todo text={todo.text} todo={todo} setTodos={setTodos} todos={todos} key={todo.id} />);
            })}
        </ul>
      </div>
    );
}
export default ToDoList;