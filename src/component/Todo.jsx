import React, { useState } from "react";
import { HiPencil, HiTrash } from "react-icons/hi";
import { FaCheck } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import styles from "./Todo.module.css";

export default function Todo({ todo, onUpdate, onDelete }) {
  const { id, text, checked, isEditing } = todo;
  const [newText, setNewText] = useState("");

  const updateCheck = () => {
    const newTodo = { ...todo, checked: !checked };
    onUpdate(id, newTodo);
  };

  const updateEdit = (isEditing) => {
    const newTodo = { ...todo, isEditing: isEditing };
    onUpdate(id, newTodo);
  };

  const deleteTodo = () => {
    onDelete(id);
  };

  const changeText = (e) => setNewText(e.target.value);

  const updateText = () => {
    const newTodo = { ...todo, text: newText, isEditing: false };
    onUpdate(id, newTodo);
    setNewText("");
  };

  return (
    <li className={styles.todo}>
      <div>
        <input
          className={styles.checkbox}
          type="checkbox"
          id={id}
          checked={checked}
          onChange={updateCheck}
        />
        {isEditing ? (
          <input
            className={styles.input}
            type="text"
            value={newText}
            onChange={changeText}
            required
          />
        ) : (
          <label htmlFor={id}>{text}</label>
        )}
      </div>
      {isEditing ? (
        <div className={styles.icons}>
          <span className={styles.icon}>
            <button className={styles.button}>
              <FaCheck onClick={updateText} />
            </button>
          </span>
          <span className={styles.icon}>
            <button className={styles.button}>
              <GiCancel onClick={() => updateEdit(false)} />
            </button>
          </span>
        </div>
      ) : (
        <div className={styles.icons}>
          <span className={styles.icon}>
            <button className={styles.button}>
              <HiPencil onClick={() => updateEdit(true)} />
            </button>
          </span>
          <span className={styles.icon}>
            <button className={styles.button}>
              <HiTrash onClick={deleteTodo} />
            </button>
          </span>
        </div>
      )}
    </li>
  );
}
