import React from 'react';
import axios from 'axios';
import ToDoItem from './component/ToDo/ToDoItem';
import './component/ToDo/ToDoItem.css';

function App() {
  let [todo, setTodo] = React.useState([]);

  let data = axios.get('http://localhost:8000/');
  data.then((res) => {
    console.log(res.data);
  });

  return (
    <div className="site__wrapper">
      <h1>TO DO LIST</h1>
      <div className="addTask__wrapper">
        <input placeholder="Введите текст" />
        <button>+</button>
      </div>
      <ToDoItem />
    </div>
  );
}

export default App;
