import React, {useState} from "react";
import "./App.css";

const App = ()=>{
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = ()=>{
    if(inputValue.trim() !== ""){
      setTodos([...todos, {text: inputValue, completed: false}]);
      setInputValue("");
    }
  }

  const handleDeleteTodo = (index)=>{
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  const handleToggleCompleted = (index)=>{
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <div className="app-item">
         <h1>Todo List</h1>
       <div className="add-todo">
         <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
         <button onClick={handleAddTodo}>Add</button>
       </div>
       <ul className="todo-list">
         {todos.map((todo, index)=>(
           <li key={index} className={todo.completed ? "completed" : ""}>
             <span onClick={()=>handleToggleCompleted(index)}>{todo.text}</span>
             <button onClick={()=>handleDeleteTodo(index)}>X</button>
           </li>
         ))}
       </ul>
      </div>
      
    </div>
  )
}

export default App;