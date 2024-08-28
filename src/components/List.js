import { useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { HiOutlinePencilAlt } from "react-icons/hi";

function List() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editTodoId, setEditTodoId] = useState(null);
  const [editTodoText, setEditTodoText] = useState("");

  const handleChange = function (event) {
    setNewTodo(event.target.value);
  };

  const addTodo = function (event) {
    event.preventDefault();
    const todoObject = {
      text: newTodo,
      id: Date.now(),
      isCompleted: false,
    };
    setTodos([...todos, todoObject]);
    setNewTodo("");
  };

  const removeTodo = (todoToRemove) => {
    const updatedTodos = todos.filter((todo) => {
      return todo.id !== todoToRemove.id;
    });

    setTodos(updatedTodos);
  };

  const handleEdit = (todo) => {
    setEditTodoId(todo.id);
    setEditTodoText(todo.text);
  };

  const saveTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: editTodoText };
      }
      return todo;
    });
    setTodos(updatedTodos);
    setEditTodoId(null);
    setEditTodoText("");
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
              <div className="flex items-center ml-2">
                <input type="checkbox" />
                {editTodoId === todo.id ? (
                  <input
                    className="border w-full ml-2"
                    type="text"
                    value={editTodoText}
                    onChange={(e) => setEditTodoText(e.target.value)}
                  />
                ) : (
                  <span className="text-left ml-2">{todo.text}</span>
                )}
              </div>

              {editTodoId === todo.id ? (
                <button
                  onClick={() => saveTodo(todo.id)}
                  className="border rounded-md px-7 py-2 ml-2 bg-green-500 text-white"
                >
                  Save
                </button>
              ) : (
                <>
                  <div>
                    <button onClick={() => handleEdit(todo)} className="px-7">
                      <HiOutlinePencilAlt />
                    </button>
                    <button
                      onClick={() => removeTodo(todo)}
                      className="px-2 py-4 mx-2"
                    >
                      <HiOutlineTrash />
                    </button>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default List;
