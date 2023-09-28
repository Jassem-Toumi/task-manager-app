// src/App.js
import React, { useEffect, useState } from "react";
import Todo from "./components/todoItem";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editlist, setEditlist] = useState([]);

  const addTodo = () => {
    if (todoText) {
      setTodos([...todos, todoText]);
      setTodoText("");
    }
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    //delete the todo task/item at the given index
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const onEdit = (index) =>{
    setIsEditing(true);
    if (!editlist.includes(index)) {
      setEditlist([...editlist, index]);
    }
  
  }

  useEffect(()=>{
    if(editlist.length > 0){
      console.log(editlist[0]);
    }
  }, [editlist])

  // useEffect(()=>{
  //   if(todos.length > 0){
  //     console.log(todos[0])
  //   }
  // }, [todos])


  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Enter a new task"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (

          <li key={index}>
            <Todo text={todo} index={index} editlist={editlist} onEdit={onEdit} onDelete={() => deleteTodo(index)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
