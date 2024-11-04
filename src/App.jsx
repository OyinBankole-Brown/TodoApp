import React, { useState } from "react";
// import components
import TodoInput from "./components/TodoInput.jsx";
import TodoList from "./components/TodoList.jsx";

function App() {
  // State to keep track of todos
  const [todos, setTodos] = useState([]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white w-96 p-5 rounded shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Todo App</h1>
        {/* TodoInput component for adding todos */}
        <TodoInput setTodos={setTodos} todos={todos} />
        {/* TodoList component to display todos */}
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
