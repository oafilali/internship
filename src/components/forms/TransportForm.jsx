import React from 'react';
import { Calendar, ChevronDown } from 'lucide-react';

const TransportForm = () => {
  return (
    <div className="mt-4 border-t pt-4">
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <div className="flex items-center space-x-1 border rounded px-3 py-2 bg-white cursor-pointer hover:bg-gray-50">
            <span className="text-sm text-gray-400">Transport Type</span>
            <ChevronDown className="w-4 h-4 text-gray-500 ml-auto" />
          </div>
        </div>
        <div>
          <input
            type="text"
            placeholder="From"
            className="w-full border rounded px-3 py-2 text-sm text-gray-600 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="To"
            className="w-full border rounded px-3 py-2 text-sm text-gray-600 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <div className="flex items-center space-x-2 border rounded px-3 py-2 bg-white cursor-pointer hover:bg-gray-50">
            <span className="text-sm text-gray-400">Departure Date</span>
            <Calendar className="w-4 h-4 text-gray-400 ml-auto" />
          </div>
        </div>
        <div>
          <input
            type="text"
            placeholder="Departure Time"
            className="w-full border rounded px-3 py-2 text-sm text-gray-600 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Number of Passengers"
            className="w-full border rounded px-3 py-2 text-sm text-gray-600 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            placeholder="Carrier Name"
            className="w-full border rounded px-3 py-2 text-sm text-gray-600 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Total Price"
            className="w-full border rounded px-3 py-2 text-sm text-gray-600 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default TransportForm; 