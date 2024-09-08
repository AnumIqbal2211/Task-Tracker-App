import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task}
          <button onClick={() => deleteTask(index)}>
            <FaTrashAlt />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
