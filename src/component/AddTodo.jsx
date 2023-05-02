import React, { useState } from "react";
import uuid from "react-uuid";

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Todo"
        value={text}
        onChange={handleChangeInput}
      />
      <button>Todo</button>
    </form>
  );
}
