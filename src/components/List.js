import { useState } from "react";

function List() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleChange = function (event) {
    setNewTodo(event.target.value);
  };

  const addTodo = function (event) {
    event.preventDefault();
    setTodos([...todos, newTodo]);
    setNewTodo("");
    console.log(todos);
  };

  const removeTodo = (todoToRemove) => {
    const updatedTodos = todos.filter((todo) => {
      return todo !== todoToRemove;
    });

    setTodos(updatedTodos);
  };

  return (
    <div className="input-form">
      <form className="flex">
        <input
          className="border w-screen"
          type="text"
          value={newTodo}
          onChange={handleChange}
        />
        <button
          className="border rounded-md p-3 ml-2 w-32 bg-orange-500 text-white border-orange-600"
          type="submit"
          onClick={addTodo}
        >
          Add Todo
        </button>
      </form>
      <div>
        {todos.map((todo, index) => {
          return (
            <div key={index}>
              <span>{todo}</span>
              <button
                onClick={() => removeTodo(todo)}
                className="border rounded-md px-3 ml-2 bg-black text-white"
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default List;
