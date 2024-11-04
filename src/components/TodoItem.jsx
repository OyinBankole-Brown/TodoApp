import React from "react";

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <div className="flex items-center justify-between p-2 bg-white rounded mb-2 shadow">
      <span
        onClick={() => toggleComplete(todo.id)}
        className={`flex-1 cursor-pointer ${
          todo.completed ? "line-through text-gray-500" : ""
        }`}
      >
        {todo.text}
      </span>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-red-500 font-bold"
      >
        X
      </button>
    </div>
  );
};

export default TodoItem;
