// src/components/common/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <div className="bg-white shadow-sm border-b">
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-yellow-300 rotate-45 flex items-center justify-center shadow-sm">
            <span className="text-xs font-bold text-black -rotate-45">Liberty</span>
          </div>
          <h1 className="text-xl font-semibold text-gray-800">Liberty Nordic</h1>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium text-gray-700">Welcome John</span>
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200">
            <img 
              src="https://randomuser.me/api/portraits/men/32.jpg" 
              alt="User" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><rect width="40" height="40" fill="%23374151"/><text x="50%" y="50%" font-size="20" text-anchor="middle" fill="%23FFFFFF" dy=".3em">J</text></svg>';
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;