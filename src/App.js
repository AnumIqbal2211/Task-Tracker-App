import "./App.css";
import React, {useState} from "react";
import TaskInput from "./components/TaskInput";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="App">
      <h1>Task Tracker App</h1>
      <TaskInput addTask={addTask} />
    </div>
  );
}

export default App;
