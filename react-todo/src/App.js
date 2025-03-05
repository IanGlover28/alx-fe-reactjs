import React from "react";
import TodoList from "./components/TodoList"; // ✅ Ensuring import exists

function App() {
  return (
    <div>
      <h1>React Todo App</h1>
      <TodoList /> {/* ✅ Ensuring TodoList is used */}
    </div>
  );
}

export default App;
