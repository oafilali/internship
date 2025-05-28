import React, { useState } from 'react';
import { ChevronDown, Plus } from 'lucide-react';

const HotelForm = () => {
  const [rooms, setRooms] = useState([
    { id: 1, hotelName: '', roomType: '', adults: 1, children: 1, nights: 0, cost: '', profit: '', totalInvoiced: '', marginValue: '' }
  ]);

  const addRoom = () => {
    setRooms([
      ...rooms,
      { id: Date.now(), hotelName: '', roomType: '', adults: 1, children: 1, nights: 0, cost: '', profit: '', totalInvoiced: '', marginValue: '' }
    ]);
  };

  return (
    <div className="px-6 py-4 border-t bg-white">
      {rooms.map((room, index) => (
        <div key={room.id} className={index > 0 ? 'mt-8 pt-6 border-t' : ''}>
          <div className="grid grid-cols-5 gap-4 mb-5">
            <div className="col-span-2">
              <input
                type="text"
                placeholder="Hotel Name"
                className="w-full border rounded px-3 py-2 text-sm text-gray-600 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <div className="flex items-center space-x-1 border rounded px-3 py-2 bg-white cursor-pointer hover:bg-gray-50">
                <span className="text-sm text-gray-400">Select Room</span>
                <ChevronDown className="w-4 h-4 text-gray-500 ml-auto" />
              </div>
            </div>
            <div>
              <input
                type="number"
                placeholder="1"
                defaultValue="1"
                className="w-full border rounded px-3 py-2 text-sm text-gray-600 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="1"
                defaultValue="1"
                className="w-full border rounded px-3 py-2 text-sm text-gray-600 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mb-5">
            <div>
              <input
                type="number"
                placeholder="0"
                defaultValue="0"
                className="w-full border rounded px-3 py-2 text-sm text-gray-600 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="30"
                defaultValue="30"
                className="w-full border rounded px-3 py-2 text-sm text-gray-600 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div></div>
          </div>
          
          <div className="grid grid-cols-4 gap-4">
            <div>
              <input
                type="text"
                placeholder="Cost + Markup"
                className="w-full border rounded px-3 py-2 text-sm text-gray-600 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Profit %"
                className="w-full border rounded px-3 py-2 text-sm text-gray-600 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Total Invoiced"
                className="w-full border rounded px-3 py-2 text-sm text-gray-600 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Margin Value"
                className="w-full border rounded px-3 py-2 text-sm text-gray-600 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      ))}
      
      <div className="mt-6 flex justify-end">
        <button
          onClick={addRoom}
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded shadow-sm hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span className="text-sm font-medium">Add Room</span>
        </button>
      </div>
    </div>
  );
};

export default HotelForm; 