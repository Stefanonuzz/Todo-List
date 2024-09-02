import { useState } from "react";
import ColumnChart from "./ColumnChart";
import InputForm from "./InputForm";
import { HiOutlineTrash, HiOutlinePencilAlt } from "react-icons/hi";

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

  const handleIsCompleted = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;
  const todosCount = todos.filter((todo) => todo.isCompleted === false).length;

  return (
    <div className="grid grid-cols-2">
      <div className="input-form">
        <InputForm
          newTodo={newTodo}
          handleChange={handleChange}
          addTodo={addTodo}
        />
        <div>
          {todos.map((todo, index) => {
            return (
              <div
                className="w-100 bg-slate-50 flex justify-between text-l font-medium border-b content-center"
                key={index}
              >
                <div className="flex items-center ml-2">
                  <input
                    type="checkbox"
                    onClick={() => handleIsCompleted(todo.id)}
                  />
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
      <div className="col-start-2 w-100">
        <ColumnChart
          completedTodosCount={completedTodosCount}
          todosCount={todosCount}
        />
      </div>
    </div>
  );
}

export default List;
