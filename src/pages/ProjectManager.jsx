// src/pages/ProjectManager.jsx
import React, { useState } from 'react';
import Header from '../components/common/Header';
import Sidebar from '../components/common/Sidebar';
import FileDetailsForm from '../components/forms/FileDetailsForm';
import ServicesSection from '../components/forms/ServicesSection';
import TasksSection from '../components/forms/TasksSection';
import TabNavigation from '../components/navigation/TabNavigation';
import ToolsSection from '../components/navigation/ToolsSection';
import HotelForm from '../components/forms/HotelForm';
import DateForm from '../components/forms/DateForm';
import RestaurantForm from '../components/forms/RestaurantForm';
import ActivityForm from '../components/forms/ActivityForm';
import TransportForm from '../components/forms/TransportForm';
import LibertyServicesForm from '../components/forms/LibertyServicesForm';
import { useServices } from '../hooks/useServices';
import { useTasks } from '../hooks/useTasks';
import { useLocation } from 'react-router-dom';

const ProjectManager = () => {
  const location = useLocation();
  const selectedFile = location.state?.selectedFile;
  const [activeTab, setActiveTab] = useState('Planning');
  const [activeTool, setActiveTool] = useState('Divider');
  
  const {
    services,
    addService,
    removeService
  } = useServices();

  const {
    tasks,
    addTask,
    removeTask
  } = useTasks();

  const [toolButtons, setToolButtons] = useState([
    { name: 'Divider', active: true },
    { name: 'Date', active: false },
    { name: 'Hotel', active: false },
    { name: 'Restaurant', active: false },
    { name: 'Activity', active: false },
    { name: 'Liberty Services', active: false },
    { name: 'Transport', active: false }
  ]);

  const handleToolClick = (toolName) => {
    setActiveTool(toolName);
    setToolButtons(toolButtons.map(tool => ({
      ...tool,
      active: tool.name === toolName
    })));
  };

  const renderToolContent = () => {
    switch (activeTool) {
      case 'Hotel':
        return <HotelForm />;
      case 'Date':
        return <DateForm />;
      case 'Restaurant':
        return <RestaurantForm />;
      case 'Activity':
        return <ActivityForm />;
      case 'Transport':
        return <TransportForm />;
      case 'Liberty Services':
        return <LibertyServicesForm />;
      default:
        return null;
    }
  };

  const handleSave = () => {
    // Handle save logic here
    console.log('Saving data...', { services, tasks, activeTool });
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <div className="flex-1 overflow-auto bg-gray-50">
          <div className="max-w-6xl mx-auto p-6">
            <div className="bg-white rounded-lg shadow-md">
              <FileDetailsForm />
              
              <ServicesSection
                services={services}
                onAddService={addService}
                onRemoveService={removeService}
              />
              
              <TasksSection
                tasks={tasks}
                onAddTask={addTask}
                onRemoveTask={removeTask}
              />

              {/* Save Button */}
              <div className="border-t px-6 py-4 bg-gray-50">
                <div className="flex justify-end">
                  <button
                    onClick={handleSave}
                    className="bg-blue-600 text-white px-8 py-2 rounded shadow-sm hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    Save
                  </button>
                </div>
              </div>

              <TabNavigation
                activeTab={activeTab}
                onTabChange={setActiveTab}
                tabs={['Planning', 'Revenue', 'Quotation', 'RoadBook', 'Proposal']}
              />
              
              <ToolsSection 
                toolButtons={toolButtons} 
                onToolClick={handleToolClick}
              />

              {/* Tool-specific content */}
              {renderToolContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectManager;