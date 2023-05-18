import logo from './logo.svg';
import './App.css';
import React, { useState} from 'react'
import Header from './Header'
import TodoList from './TodoList'
import data from './data.json'




function App() {
  const [todoList, setTodoList] = useState(data);

// Toggle function to change complete status of todo item
  const handleToggle = (id) => {
    let mapped = todoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setTodoList(mapped);
  };

// function to delete complete tasks
  const handleFilter = () => {
    let filtered = todoList.filter(task => {
      return !task.complete;
    });
    console.log(filtered);
    setTodoList(filtered);
  }

  return (
    <div className="App">
      {/* <h1>React App</h1> */}
      {/* test data */}
      {/* {data.map((todo) => (
        <ul>
          <li>{todo.task}</li>
          <li>{todo.id}</li>
        </ul>
      ))} */}

      <Header />
      <TodoList todoList={todoList} handleToggle={handleToggle} handleFilter={handleFilter} />
    </div>
  );
}

export default App;
