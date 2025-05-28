// src/components/forms/ServicesSection.jsx
import React from 'react';
import { Plus, ChevronDown, Trash2, Briefcase } from 'lucide-react';

const ServiceRow = ({ service, onRemove }) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex-1">
        <div className="flex items-center space-x-1 border rounded px-3 py-2 bg-white cursor-pointer hover:bg-gray-50">
          <span className="text-sm text-gray-400">Select a Service Type</span>
          <ChevronDown className="w-4 h-4 text-gray-500 ml-auto" />
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center space-x-1 border rounded px-3 py-2 bg-white cursor-pointer hover:bg-gray-50">
          <span className="text-sm text-gray-400">Select a Supplier</span>
          <ChevronDown className="w-4 h-4 text-gray-500 ml-auto" />
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
        onClick={() => onRemove(service.id)}
        className="text-red-400 hover:text-red-600 transition-colors p-2"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
};

const ServicesSection = ({ services, onAddService, onRemoveService }) => {
  return (
    <div className="border-t">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center space-x-3">
            <div className="w-5 h-5 border border-gray-400 rounded"></div>
            <Briefcase className="w-5 h-5 text-gray-500" />
            <h3 className="text-lg font-semibold text-gray-800">Services</h3>
          </div>
          <button
            onClick={onAddService}
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span className="text-sm font-medium">Add Service</span>
          </button>
        </div>

        <div className="space-y-3">
          {services.map((service) => (
            <ServiceRow
              key={service.id}
              service={service}
              onRemove={onRemoveService}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;