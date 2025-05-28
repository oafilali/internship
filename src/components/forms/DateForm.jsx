import React from 'react';
import { Calendar } from 'lucide-react';

const DateForm = () => {
  return (
    <div className="px-6 py-4 border-t bg-white">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1 font-medium">Date Title</label>
          <input
            type="text"
            placeholder="Enter a title"
            className="w-full border rounded px-3 py-2 text-sm text-gray-600 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1 font-medium">Date</label>
          <div className="flex items-center justify-between border rounded px-3 py-2 bg-white cursor-pointer hover:bg-gray-50">
            <span className="text-sm text-gray-400">Select a Date</span>
            <Calendar className="w-4 h-4 text-gray-400" />
          </div>
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1 font-medium">Description</label>
          <input
            type="text"
            placeholder="Enter a description"
            className="w-full border rounded px-3 py-2 text-sm text-gray-600 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default DateForm; 