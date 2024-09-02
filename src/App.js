import List from "./components/List";
import ColumnChart from "./components/ColumnChart";

function App() {
  return (
    <div className="font-sans mx-32">
      <h1 className="text-4xl font-bold text-orange-500 mb-12 mt-20">
        Todo List
      </h1>
      <div className="input-container"></div>
      <List />
    </div>
  );
}
export default App;
