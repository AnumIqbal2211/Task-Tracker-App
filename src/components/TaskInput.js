import React, { useState } from "react";

const TaskInput = ({addTask}) => {
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    // Prevent the form from refreshing the page
    e.preventDefault();
    if(task.trim() === "") {
      alert("Please enter a task. This field can't be empty.");
      return;
    }
    // Send task back to parent
    addTask(task);
    // Clear the input field
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your task here!"
        value={task}
        onChange={handleChange}
      />
      <button type="submit"> Add Task</button>
    </form>
  );
};

export default TaskInput;