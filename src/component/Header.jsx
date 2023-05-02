import React, { useContext } from "react";
import { DarkmodeContext } from "../context/DarkmodeContext";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import styles from "./Header.module.css";

export default function Header({ selected, onChange }) {
  const { darkmode, toggleDarkmode } = useContext(DarkmodeContext);

  return (
    <header className={styles.header}>
      <span>
        <button className={styles.toggle} onClick={toggleDarkmode}>
          {darkmode ? <BsFillMoonFill /> : <BsFillSunFill />}
        </button>
      </span>
      <ul className={styles.filters}>
        {LIST.map((el, index) => (
          <li key={index} onClick={() => onChange(index)}>
            <button
              className={`${styles.filter} ${
                selected === index && styles.selected
              }`}
            >
              {el}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}

const LIST = ["all", "active", "completed"];
