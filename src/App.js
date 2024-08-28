import List from "./components/List";

function App() {
  return (
    <div className="text-center font-sans mx-32">
      <h1 className="text-4xl font-bold text-orange-500 mb-5 mt-20">
        Todo List
      </h1>
      <div className="input-container"></div>
      <List />
    </div>
  );
}
export default App;
