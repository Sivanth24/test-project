import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    activeCount: 0,
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks = [...state.tasks, action.payload];
      state.activeCount += 1;
    },
    removeTask: (state, action) => {
      const id = action.payload;
      state.tasks = state.tasks.filter((task) => task.id !== id);
      if (state.activeCount === 0) {
        state.activeCount = 0;
      } else {
        state.activeCount -= 1;
      }
    },
    toggleStatus: (state, action) => {
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
      const activeArr = state.tasks.filter((task) => task.completed === false);
      const newCount = activeArr.length;
      state.activeCount = newCount;
    },
    removeCompletedTasks: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.completed === false);
      const newCount = state.tasks.length;
      state.activeCount = newCount;
    },
  },
});

export const { addTask, removeTask, toggleStatus, removeCompletedTasks } =
  taskSlice.actions;
export default taskSlice.reducer;
