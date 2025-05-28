// src/components/navigation/ToolsSection.jsx
import React from 'react';
import { Calendar, Hotel, Utensils, Activity, Bus, Plus } from 'lucide-react';

const ToolButton = ({ name, active, icon: Icon, onClick }) => (
  <button
    onClick={() => onClick(name)}
    className={`flex items-center space-x-1 px-3 py-1.5 rounded text-xs font-medium transition-colors ${
      active
        ? 'bg-blue-600 text-white'
        : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
    }`}
  >
    {Icon && <Icon className="w-3.5 h-3.5 mr-1" />}
    <span>{name}</span>
  </button>
);

const ToolsSection = ({ toolButtons, onToolClick }) => {
  const getIcon = (name) => {
    switch (name) {
      case 'Divider':
        return Plus;
      case 'Date':
        return Calendar;
      case 'Hotel':
        return Hotel;
      case 'Restaurant':
        return Utensils;
      case 'Activity':
        return Activity;
      case 'Transport':
        return Bus;
      case 'Liberty Services':
        return null;
      default:
        return null;
    }
  };

  return (
    <div className="px-6 py-3 bg-gray-100 border-t">
      <div className="flex items-center flex-wrap gap-2">
        <span className="text-sm text-gray-600 font-medium mr-1">Tools</span>
        {toolButtons.map((tool) => (
          <ToolButton
            key={tool.name}
            name={tool.name}
            active={tool.active}
            icon={getIcon(tool.name)}
            onClick={onToolClick}
          />
        ))}
      </div>
    </div>
  );
};

export default ToolsSection;