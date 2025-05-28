// src/components/forms/TasksSection.jsx
import React from 'react';
import { Plus, ChevronDown, Calendar, Trash2, ClipboardList } from 'lucide-react';

const TaskRow = ({ task, onRemove }) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex-1">
        <div className="flex items-center space-x-1 border rounded px-3 py-2 bg-white cursor-pointer hover:bg-gray-50">
          <span className="text-sm text-gray-400">Select a Task</span>
          <ChevronDown className="w-4 h-4 text-gray-500 ml-auto" />
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center space-x-2 border rounded px-3 py-2 bg-white cursor-pointer hover:bg-gray-50">
          <span className="text-sm text-gray-400">Due Date</span>
          <Calendar className="w-4 h-4 text-gray-400 ml-auto" />
        </div>
      </div>
      <div className="flex-1">
        <input
          type="text"
          placeholder="Enter Your Remarks"
          className="w-full border rounded px-3 py-2 text-sm text-gray-600 focus:outline-none focus:border-blue-500"
        />
      </div>
      <button
        onClick={() => onRemove(task.id)}
        className="text-red-400 hover:text-red-600 transition-colors p-2"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
};

const TasksSection = ({ tasks, onAddTask, onRemoveTask }) => {
  return (
    <div className="border-t">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center space-x-3">
            <div className="w-5 h-5 border border-gray-400 rounded"></div>
            <ClipboardList className="w-5 h-5 text-gray-500" />
            <h3 className="text-lg font-semibold text-gray-800">Tasks</h3>
          </div>
          <button
            onClick={onAddTask}
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span className="text-sm font-medium">Add Task</span>
          </button>
        </div>

        <div className="space-y-3">
          {tasks.map((task) => (
            <TaskRow
              key={task.id}
              task={task}
              onRemove={onRemoveTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TasksSection;