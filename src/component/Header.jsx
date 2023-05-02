import React from "react";

export default function Header({ onChange }) {
  return (
    <header>
      <ul>
        {LIST.map((el, index) => (
          <li key={index} onClick={() => onChange(index)}>
            <button>{el}</button>
          </li>
        ))}
      </ul>
    </header>
  );
}

const LIST = ["all", "active", "completed"];
