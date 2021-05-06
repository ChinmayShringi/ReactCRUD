import React,{ useState,useEffect } from 'react';
import './App.css';
import Form from './components/Form'
import ToDoList from './components/TodoList'

function App() {
  const [inputText, setInputText]=useState("");
  const [status, setstatus]=useState("all");
  const [todos,setTodos]=useState([]);
  const [filteredTodos,setFilteredTodos]=useState([]);
    const filterHandler=()=>{
      switch(status){
        case 'completed':
        setFilteredTodos(todos.filter(todo=>todo.completed === true))
        break;
        case 'uncompleted':
        setFilteredTodos(todos.filter(todo=>todo.completed===false))
        break;
        default:
          setFilteredTodos(todos)
          break;

      }
    }
    useEffect(()=>{
      filterHandler()
    },[todos, status])
  return (
    <div className="App">
    <header>
      <h1>To Do</h1>
    </header>
    <Form todos={todos} status={status} setstatus={setstatus} setTodos={setTodos} inputText={inputText} setInputText={setInputText}/>
      <ToDoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
