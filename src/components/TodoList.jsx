import React from "react";

// TodoList Component: takes in todos (array of tasks) and setTodos (function to update tasks)
const TodoList = ({ todos, setTodos }) => {
  // Function to toggle the completion status of a todo
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Function to delete a todo by its id
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="mt-5 space-y-3">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex items-center justify-between bg-gray-100 p-3 rounded shadow"
        >
          <span
            onClick={() => toggleComplete(todo.id)}
            className={`cursor-pointer ${
              todo.completed ? "line-through text-gray-400" : ""
            }`}
          >
            {todo.text}
          </span>
          <button
            onClick={() => deleteTodo(todo.id)}
            className="text-red-500 hover:text-red-700"
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
