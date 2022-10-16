import React from 'react';
import ToDoItem from './component/ToDo/ToDoItem';
import './component/ToDo/ToDoItem.css';

function App() {
  return (
    <div className="site__wrapper">
      <h1>TO DO LIST</h1>
      <div className="addTask__wrapper">
        <input placeholder="Введите текст" />
        <button>Add Task</button>
      </div>
      <ToDoItem />
    </div>
  );
}

export default App;
