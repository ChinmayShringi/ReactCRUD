import React from 'react';


const Form = ({setInputText,todos,setTodos,inputText,status,setstatus})=>{
    const inputTextHandler=(e)=>{
        setInputText(e.target.value)
    }
    const submitTodo=(e)=>{
        e.preventDefault()
        if(inputText!=="" && inputText!==" "){
        setTodos([
            ...todos, {text:inputText, completed:false, id:Math.random() *100}
        ]);
        setInputText("");
        }
    }
    const statusHandle=(e)=>{
        setstatus(e.target.value)
    }
    return (
        <form>
        <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
        <button onClick={submitTodo} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={statusHandle} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    );
}
export default Form;