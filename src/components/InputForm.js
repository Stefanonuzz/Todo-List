function InputForm({ newTodo, handleChange, addTodo }) {
  return (
    <form className="flex mb-4">
      <input
        className="border w-screen"
        type="text"
        value={newTodo}
        onChange={handleChange}
      />
      <button
        className="border rounded-md text-nowrap p-4 bg-orange-500 text-white border-orange-600"
        type="submit"
        onClick={addTodo}
      >
        Add ToDo
      </button>
    </form>
  );
}

export default InputForm;
