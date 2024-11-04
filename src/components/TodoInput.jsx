import { useState } from "react";

function TodoInput({ setTodos, todos }) {
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput("");
    }
  };

  return (
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Add a new task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="p-2 border rounded"
      />
      <button
        onClick={handleAddTodo}
        className="p-2 bg-blue-500 text-white rounded"
      >
        Add Task
      </button>
    </div>
  );
}

export default TodoInput;
