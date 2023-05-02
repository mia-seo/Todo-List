import React, { useState } from "react";
import uuid from "react-uuid";
import styles from "./AddTodo.module.css";

export default function AddTodo({ onSubmit }) {
  const [text, setText] = useState("");

  const handleChangeInput = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      id: uuid(),
      text: text,
      checked: false,
      isEditing: false,
    };
    onSubmit(todo);
    setText("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Add Todo"
        value={text}
        onChange={handleChangeInput}
        required
      />
      <button className={styles.button}>Add</button>
    </form>
  );
}
