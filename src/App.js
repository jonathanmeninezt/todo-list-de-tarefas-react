import React, { useState } from "react";
import { MdDelete } from 'react-icons/md';
import NewTodo from './components/New Todo'

import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  const onNewtodo = (value) => {
    setTodos([
      ...todos,
      {
      id: new Date().getTime(),
      title: value,
      checked: false,
      },
    ]);
  }


  const onToggle = (todo) => {
    setTodos(
      todos.map((obj) =>
       obj.id === todo.id ? { ...obj, checked: !todo.
       checked } : obj
       )
    );
  };

  const onRemove = (todo) => {
    setTodos(todos.filter((obj) => obj.id !== todo.id));
  };

  return (
    <section id="app" className="container">
      <header>
        <h1 className="title">tarefas</h1>
      </header>
      <section className="main">
        <NewTodo onNewTodo={onNewtodo} />
        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id.toString()}>
              <span className={["todo", todo.checked ? "checked" : ""].join(" ")} onClick={() => onToggle(todo)} onkeyPress={() => onToggle(todo)}
              role="button" tabIndex={0}>{todo.title}</span>
              <button type="button" className="remove" onClick={() => onRemove(todo)}>
                <MdDelete size={28} />
              </button>
            </li>

          ))}
        </ul>
      </section>
    </section>
  );
};

export default App;
