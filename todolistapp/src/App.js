import "./App.css";
import Header from "./components/Header.js";
import ToDoList from "./components/ToDoList.js";

export default function App() {
  return (
    <div className="App">
      <Header />
      <br />
      <ToDoList />
    </div>
  );
}
