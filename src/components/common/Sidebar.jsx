// src/components/common/Sidebar.jsx
import React from 'react';
import { ChevronLeft } from 'lucide-react';

const NavItem = ({ label, active }) => (
  <div className={`px-4 py-3 border-b ${active ? 'bg-blue-50' : ''}`}>
    <div className={`flex items-center space-x-2 ${active ? 'text-blue-600' : 'text-gray-600'}`}>
      <div className={`w-4 h-4 ${active ? 'bg-blue-600' : 'border border-gray-400'} rounded-sm flex items-center justify-center`}>
        {active && <div className="w-2 h-2 bg-white rounded-sm"></div>}
      </div>
      <span className="font-medium">{label}</span>
    </div>
  </div>
);

const Sidebar = () => {
  return (
    <div className="w-72 bg-white shadow-lg flex flex-col h-full">
      {/* Header */}
      <div className="bg-blue-600 text-white p-4">
        <div className="flex items-center space-x-2">
          <ChevronLeft className="w-5 h-5" />
          <span className="font-semibold text-lg">Project Manager</span>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1">
        <NavItem label="Dashboard" active={true} />
        <NavItem label="Supplier List" active={false} />
      </div>

      {/* Version */}
      <div className="p-4 text-sm text-gray-500">
        Liberty Nordic V0.1
      </div>
    </div>
  );
};

export default Sidebar;