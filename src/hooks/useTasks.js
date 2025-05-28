import { useState } from 'react';

export const useTasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, task: '', dueDate: '', remarks: '' }
  ]);

  const addTask = () => {
    setTasks([
      ...tasks,
      { id: Date.now(), task: '', dueDate: '', remarks: '' }
    ]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const updateTask = (id, field, value) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, [field]: value } : task
    ));
  };

  return {
    tasks,
    addTask,
    removeTask,
    updateTask
  };
};
