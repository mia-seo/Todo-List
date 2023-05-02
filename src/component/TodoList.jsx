import React, { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import Header from "./Header";
import Todo from "./Todo";
import styles from "./TodoList.module.css";

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodo);
  const [filter, setFilter] = useState(initialFilter);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem("filter", JSON.stringify(filter));
  });

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const updateTodo = (id, newTodo) => {
    setTodos(todos.map((todo) => (todo.id === id ? newTodo : todo)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const changeFilter = (index) => {
    setFilter(index);
  };

  const filtered = Filter(filter, todos);

  return (
    <section className={styles.container}>
      <Header selected={filter} onChange={changeFilter} />
      <ul className={styles.todos}>
        {filtered.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onUpdate={updateTodo}
            onDelete={deleteTodo}
          />
        ))}
      </ul>
      <AddTodo onSubmit={addTodo} />
    </section>
  );
}

const initialTodo = () => {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
};

const initialFilter = () => {
  const filter = localStorage.getItem("filter");
  return filter ? JSON.parse(filter) : 0;
};

const Filter = (index, todos) => {
  switch (index) {
    case 0: {
      return todos;
    }
    case 1: {
      return todos.filter((todo) => !todo.checked);
    }
    case 2: {
      return todos.filter((todo) => todo.checked);
    }
    default: {
      return todos;
    }
  }
};
