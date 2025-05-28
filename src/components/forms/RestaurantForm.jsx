import React from 'react';
import { Calendar, ChevronDown } from 'lucide-react';

const RestaurantForm = () => {
  return (
    <div className="px-6 py-4 border-t bg-white">
      <div className="grid grid-cols-3 gap-4 mb-5">
        <div>
          <label className="block text-sm text-gray-600 mb-1 font-medium">Restaurant Name</label>
          <input
            type="text"
            placeholder="Enter restaurant name"
            className="w-full border rounded px-3 py-2 text-sm text-gray-600 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1 font-medium">Meal Type</label>
          <div className="flex items-center justify-between border rounded px-3 py-2 bg-white cursor-pointer hover:bg-gray-50">
            <span className="text-sm text-gray-400">Select meal type</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1 font-medium">Date</label>
          <div className="flex items-center justify-between border rounded px-3 py-2 bg-white cursor-pointer hover:bg-gray-50">
            <span className="text-sm text-gray-400">Select date</span>
            <Calendar className="w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-5">
        <div>
          <label className="block text-sm text-gray-600 mb-1 font-medium">Number of People</label>
          <input
            type="number"
            placeholder="Enter number of people"
            className="w-full border rounded px-3 py-2 text-sm text-gray-600 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1 font-medium">Price per Person</label>
          <input
            type="text"
            placeholder="Enter price per person"
            className="w-full border rounded px-3 py-2 text-sm text-gray-600 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1 font-medium">Special Requirements</label>
          <input
            type="text"
            placeholder="Enter special requirements"
            className="w-full border rounded px-3 py-2 text-sm text-gray-600 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1 font-medium">Total Price</label>
          <input
            type="text"
            placeholder="Calculate total price"
            className="w-full border rounded px-3 py-2 text-sm text-gray-600 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default RestaurantForm; 