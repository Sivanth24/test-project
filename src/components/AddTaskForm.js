import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../slices/taskSlice";

const AddTaskForm = () => {
  const dispatch = useDispatch();
  const [taskText, setTaskText] = useState("");
  const date = new Date().toISOString();

  const handleInputChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() !== "") {
      dispatch(addTask({ id: date, task: taskText, completed: false }));
      setTaskText("");
    }
  };

  return (
    <div className={`flex gap-4`}>
      <input
        type="text"
        value={taskText}
        onChange={handleInputChange}
        placeholder="Add new task..."
        className={`border rounded-md px-3 py-1`}
      />
      <button
        className={`bg-orange-400 text-white px-3 py-1 rounded-md`}
        onClick={(e) => {
          handleFormSubmit(e);
        }}
        type="submit"
      >
        Add Task
      </button>
    </div>
  );
};

export default AddTaskForm;
