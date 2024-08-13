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

  return (
    <div className="todo">
      <form>
        <input type="text" value={newTodo} onChange={handleChange} />
        <button type="submit" onClick={addTodo}>
          Add Todo
        </button>
      </form>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              <span>{todo}</span>
              <button>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default List;
