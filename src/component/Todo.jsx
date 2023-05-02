import React, { useState } from "react";
import { HiPencil, HiTrash } from "react-icons/hi";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

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
    <li>
      <div>
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={updateCheck}
        />
        {isEditing ? (
          <input type="text" value={newText} onChange={changeText} />
        ) : (
          <label htmlFor={id}>{text}</label>
        )}
      </div>
      {isEditing ? (
        <div>
          <span>
            <button>
              <AiOutlineCheckCircle onClick={updateText} />
            </button>
          </span>
          <span>
            <button>
              <AiOutlineCloseCircle onClick={() => updateEdit(false)} />
            </button>
          </span>
        </div>
      ) : (
        <div>
          <span>
            <button>
              <HiPencil onClick={() => updateEdit(true)} />
            </button>
          </span>
          <span>
            <button onClick={deleteTodo}>
              <HiTrash />
            </button>
          </span>
        </div>
      )}
    </li>
  );
}
