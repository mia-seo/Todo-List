import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import TodoList from "./component/TodoList";
import { DarkmodeProvier } from "./context/DarkmodeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DarkmodeProvier>
    <TodoList />
  </DarkmodeProvier>
);
