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
      <span className="flex py-4">Numero di Task: {todos.length}</span>
      <form className="flex mb-4">
        <input
          className="border w-screen"
          type="text"
          value={newTodo}
          onChange={handleChange}
        />
        <button
          className="border rounded-md p-3 w-40 bg-orange-500 text-white border-orange-600"
          type="submit"
          onClick={addTodo}
        >
          Add Todo
        </button>
      </form>
      <div>
        {todos.map((todo, index) => {
          return (
            <div
              className="w-100 bg-slate-50 flex justify-between text-l font-medium border-b content-center"
              key={index}
            >
              <div className="flex items-center">
                <input type="checkbox" />
                <span id="todo" className="text-left ml-2">
                  {todo}
                </span>
              </div>
              <button
                onClick={() => removeTodo(todo)}
                className="border rounded-md px-7 py-2 ml-2 bg-black text-white"
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
