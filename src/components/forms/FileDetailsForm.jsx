// src/components/forms/FileDetailsForm.jsx
import React from 'react';
import { Calendar, ChevronDown, Folder } from 'lucide-react';

const FileDetailsForm = () => {
  return (
    <div className="space-y-4">
      {/* Header with Currency Selector */}
      <div className="flex items-center justify-between px-6 py-4 border-b">
        <div className="flex items-center space-x-3">
          <div className="w-5 h-5 border border-gray-400 rounded"></div>
          <Folder className="w-5 h-5 text-gray-500" />
          <h2 className="text-lg font-semibold text-gray-800">Files Details</h2>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Currency</span>
          <div className="flex items-center space-x-2 border rounded px-3 py-1 bg-white cursor-pointer hover:bg-gray-50">
            <span className="text-sm font-medium">DKK</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>
        </div>
      </div>

      {/* File Details Form */}
      <div className="px-6 grid grid-cols-2 gap-8">
        <div className="space-y-5">
          <div className="flex items-center">
            <label className="w-24 text-sm text-gray-600">File Number:</label>
            <span className="text-sm text-gray-800 font-medium">#44567787</span>
          </div>
          <div className="flex items-center">
            <label className="w-24 text-sm text-gray-600">Client:</label>
            <input
              type="text"
              placeholder="Placeholder Text"
              className="text-sm text-gray-600 bg-transparent border-none focus:outline-none"
            />
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <label className="w-24 text-sm text-gray-600">Destination:</label>
              <span className="text-sm text-gray-800 font-medium">SE</span>
            </div>
            <div className="flex items-center ml-8">
              <label className="text-sm text-gray-600 mr-2">No. of Nights:</label>
              <input
                type="number"
                value="0"
                className="w-12 text-sm text-gray-800 bg-transparent border-none focus:outline-none"
              />
            </div>
            <div className="flex items-center ml-8">
              <label className="text-sm text-gray-600 mr-2">No. of Pax:</label>
              <input
                type="number"
                value="0"
                className="w-12 text-sm text-gray-800 bg-transparent border-none focus:outline-none"
              />
            </div>
          </div>
        </div>
        <div className="space-y-5">
          <div className="flex items-center">
            <label className="w-24 text-sm text-gray-600">Arrival Date:</label>
            <div className="flex items-center justify-between w-full border rounded px-3 py-2 bg-gray-50 cursor-pointer hover:bg-gray-100">
              <span className="text-sm text-gray-400">Placeholder Text</span>
              <Calendar className="w-4 h-4 text-gray-400" />
            </div>
          </div>
          <div className="flex items-center">
            <label className="w-24 text-sm text-gray-600">Departure Date:</label>
            <div className="flex items-center justify-between w-full border rounded px-3 py-2 bg-gray-50 cursor-pointer hover:bg-gray-100">
              <span className="text-sm text-gray-400">Placeholder Text</span>
              <Calendar className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileDetailsForm;