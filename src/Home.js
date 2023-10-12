import React from "react";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";

const Home = () => {
  return (
    <div
      className={`w-screen h-full flex flex-col justify-center items-center gap-9 py-12`}
    >
      <span>Task Manager</span>
      <AddTaskForm />
      <TaskList />
    </div>
  );
};

export default Home;
