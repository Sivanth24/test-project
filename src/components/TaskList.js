import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeCompletedTasks,
  removeTask,
  toggleStatus,
} from "../slices/taskSlice";

const TaskList = () => {
  const [selectOption, setSelectOption] = useState("All");

  const tasks = useSelector((state) => state.tasks.tasks);
  const activeCount = useSelector((state) => state.tasks.activeCount);
  const dispatch = useDispatch();

  const [newTasks, setNewTasks] = useState(tasks);
  const [newTasks1, setNewTasks1] = useState(tasks);

  const handleRemoveTask = (taskId) => {
    dispatch(removeTask(taskId));
  };

  const handleToggleStatus = (taskId) => {
    dispatch(toggleStatus(taskId));
  };

  const handleRemoveCompletedTasks = () => {
    dispatch(removeCompletedTasks());
  };

  const handleSelectChange = (e) => {
    setSelectOption(e.target.value);
  };

  useEffect(() => {
    setNewTasks(tasks);
    setNewTasks1(tasks);
  }, [tasks]);

  useEffect(() => {
    if (selectOption === "All") {
      setNewTasks(newTasks1);
    } else if (selectOption === "Active") {
      let activeArr = newTasks1.filter((task) => task.completed === false);
      setNewTasks(activeArr);
    } else if (selectOption === "Completed") {
      let completedArr = newTasks1.filter((task) => task.completed !== false);
      setNewTasks(completedArr);
    }
  }, [selectOption]);

  return (
    <div className={`w-screen flex flex-col items-center gap-6`}>
      <div
        className={`px-12 flex flex-col gap-3 md:flex-row md:gap-16  justify-between items-center`}
      >
        <div>
          <select
            className={`border rounded-md`}
            value={selectOption}
            onChange={(e) => handleSelectChange(e)}
          >
            <option value="All">All</option>
            <option value="Active">Active</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <div>Active tasks: {activeCount}</div>
        <button
          className={`bg-orange-400 text-white px-2 py-1 rounded-md`}
          onClick={handleRemoveCompletedTasks}
        >
          Clear completed tasks
        </button>
      </div>
      <div className={`flex flex-col md:grid md:grid-cols-4 gap-6`}>
        {newTasks?.map((task) => {
          return (
            <div
              key={task.id}
              className={`flex flex-col gap-2 justify-center items-center bg-orange-400 text-white p-3 rounded-md`}
            >
              <span
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task.task}
              </span>
              <button
                className={`bg-slate-500 px-2 py-1 rounded-md`}
                onClick={() => handleRemoveTask(task.id)}
              >
                Delete
              </button>
              <button
                className={`bg-slate-500 px-2 py-1 rounded-md`}
                onClick={() => handleToggleStatus(task.id)}
              >
                {task.completed ? "Mark as Incomplete" : "Mark as Complete"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TaskList;
