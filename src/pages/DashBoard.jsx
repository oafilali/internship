import React, { useState } from 'react';
import { Search, Plus, Eye, ChevronLeft, Calendar, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [showFileModal, setShowFileModal] = useState(false);
  const [activeSection, setActiveSection] = useState('Dashboard');
  const navigate = useNavigate();
  //

  const stats = [
    { label: 'Pending Files', count: 0, color: 'bg-orange-400', icon: '📄' },
    { label: 'Working Files', count: 0, color: 'bg-blue-400', icon: '📁' },
    { label: 'Completed Files', count: 0, color: 'bg-green-400', icon: '✅' },
    { label: 'Cancelled Files', count: 0, color: 'bg-red-400', icon: '❌' }
  ];

  const files = [
    { 
      fileNumber: '#3569235', 
      client: 'William Andersson', 
      destination: 'Sweden', 
      pax: 10, 
      arrivalDate: '19 May 2025', 
      status: 'Completed',
      statusColor: 'bg-green-500'
    },
    { 
      fileNumber: '#2569845', 
      client: 'Alice Johansson', 
      destination: 'Sweden', 
      pax: 45, 
      arrivalDate: '02 Mar 2025', 
      status: 'Working',
      statusColor: 'bg-blue-500'
    },
    { 
      fileNumber: '#2358655', 
      client: 'Noah Karlsson', 
      destination: 'Denmark', 
      pax: 57, 
      arrivalDate: '01 Jul 2025', 
      status: 'Pending',
      statusColor: 'bg-orange-500'
    },
    { 
      fileNumber: '#2524455', 
      client: 'Lucas Olsson', 
      destination: 'Finland', 
      pax: 35, 
      arrivalDate: '01 Sep 2025', 
      status: 'Cancelled',
      statusColor: 'bg-red-500'
    }
  ];

  const pendingTasks = [
    { fileNumber: '#2569235', client: 'William Andersson', task: 'Allocate transport' },
    { fileNumber: '#2569655', client: 'Noah Karlsson', task: 'Allocate hotels' },
    { fileNumber: '#2524455', client: 'Lucas Olsson', task: 'Cancel hotels' }
  ];

  const upcomingGroups = [
    { fileNumber: '#5570266', client: 'Elsa Gustafsson', arrivalDate: '16 Jul 2025' },
    { fileNumber: '#4526695', client: 'Lily Lindberg', arrivalDate: '20 Aug 2025' },
    { fileNumber: '#4422562', client: 'Hugo Eriksson', arrivalDate: '24 Aug 2025' }
  ];

  // Navigation function to redirect to your ProjectManager page
  const handleViewFile = (file) => {
  navigate('/src/pages/ProjectManager.jsx', { state: { selectedFile: file } });
};

  // If we're in project manager view, show that component
  if (currentView === '/src/pages/ProjectManager.jsx') {
    return <ProjectManager onBack={handleBackToDashboard} selectedFile={selectedFile} />;
  }

  const FileDetailsModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-96 max-h-[80vh] overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-semibold text-gray-800">📄 File Details</h3>
          <button 
            onClick={() => setShowFileModal(false)}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">File Number 📝</label>
            <input 
              type="text" 
              placeholder="Enter Input"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Client 👤</label>
            <input 
              type="text" 
              placeholder="Enter Input"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Number of Pax 👥</label>
            <input 
              type="text" 
              placeholder="Enter Input"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Departure Date 📅</label>
            <input 
              type="text" 
              placeholder="Enter Input"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Services 🔧</label>
            <input 
              type="text" 
              placeholder="Enter Input"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Input Label ≡</label>
              <input 
                type="text" 
                placeholder="Enter Input"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Input Label</label>
              <input 
                type="text" 
                placeholder="Enter Input"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <input type="radio" id="addService" name="action" className="text-blue-600" />
            <label htmlFor="addService" className="text-sm text-gray-700">Add Service</label>
          </div>
          
          <div className="flex items-center space-x-2">
            <input type="radio" id="addTask" name="action" className="text-blue-600" />
            <label htmlFor="addTask" className="text-sm text-gray-700">Add Task</label>
          </div>
        </div>
        
        <div className="flex justify-end space-x-3 p-4 border-t bg-gray-50">
          <button 
            onClick={() => setShowFileModal(false)}
            className="px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded hover:bg-gray-50"
          >
            Close
          </button>
          <button className="px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700">
            Save
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
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

      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-72 bg-white shadow-lg flex flex-col">
          <div className="bg-blue-600 text-white p-4">
            <div className="flex items-center space-x-2">
              <ChevronLeft className="w-5 h-5" />
              <span className="font-semibold text-lg">Project Manager</span>
            </div>
          </div>
          
          <div className="flex-1">
            <div 
              className={`px-4 py-3 border-b cursor-pointer ${activeSection === 'Dashboard' ? 'bg-blue-50' : ''}`}
              onClick={() => setActiveSection('Dashboard')}
            >
              <div className={`flex items-center space-x-2 ${activeSection === 'Dashboard' ? 'text-blue-600' : 'text-gray-600'}`}>
                <div className={`w-4 h-4 ${activeSection === 'Dashboard' ? 'bg-blue-600' : 'border border-gray-400'} rounded-sm flex items-center justify-center`}>
                  {activeSection === 'Dashboard' && <div className="w-2 h-2 bg-white rounded-sm"></div>}
                </div>
                <span className="font-medium">Dashboard</span>
              </div>
            </div>
            
            <div 
              className={`px-4 py-3 border-b cursor-pointer ${activeSection === 'Supplier List' ? 'bg-blue-50' : ''}`}
              onClick={() => setActiveSection('Supplier List')}
            >
              <div className={`flex items-center space-x-2 ${activeSection === 'Supplier List' ? 'text-blue-600' : 'text-gray-600'}`}>
                <div className={`w-4 h-4 ${activeSection === 'Supplier List' ? 'bg-blue-600' : 'border border-gray-400'} rounded-sm flex items-center justify-center`}>
                  {activeSection === 'Supplier List' && <div className="w-2 h-2 bg-white rounded-sm"></div>}
                </div>
                <span className="font-medium">Supplier List</span>
              </div>
            </div>
          </div>
          
          <div className="p-4 text-sm text-gray-500">
            Liberty Nordic V0.1
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 overflow-auto">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-1">Dashboard</h2>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border p-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center text-white text-xl`}>
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800">{stat.count}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-8">
            {/* Files Section */}
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-4 border-b">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-semibold text-gray-800">📁 Files</span>
                  </div>
                  <button 
                    onClick={() => setShowFileModal(true)}
                    className="flex items-center space-x-2 bg-blue-600 text-white px-3 py-1.5 rounded text-sm hover:bg-blue-700"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Create new file</span>
                  </button>
                </div>
                
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Search files, clients or destinations..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase">File Number</th>
                      <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase">Client</th>
                      <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase">Destination</th>
                      <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase">Pax</th>
                      <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase">Arrival Date</th>
                      <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {files.map((file, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="p-3 text-sm text-blue-600 font-medium">{file.fileNumber}</td>
                        <td className="p-3 text-sm text-gray-800">{file.client}</td>
                        <td className="p-3 text-sm text-gray-600">{file.destination}</td>
                        <td className="p-3 text-sm text-gray-600">{file.pax}</td>
                        <td className="p-3 text-sm text-gray-600">{file.arrivalDate}</td>
                        <td className="p-3">
                          <div className="flex items-center space-x-2">
                            <span className={`px-2 py-1 rounded-full text-xs text-white ${file.statusColor}`}>
                              {file.status}
                            </span>
                            <Eye 
                              className="w-4 h-4 text-gray-400 cursor-pointer hover:text-blue-600 transition-colors" 
                              onClick={() => handleViewFile(file)}
                              title="View file details"
                            />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Pending Tasks */}
              <div className="bg-white rounded-lg shadow-sm border">
                <div className="p-4 border-b">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold text-gray-800">📋 Pending Tasks</span>
                    <button className="bg-blue-600 text-white px-3 py-1.5 rounded text-sm hover:bg-blue-700">
                      Sort
                    </button>
                  </div>
                  
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input 
                      type="text" 
                      placeholder="Search files or tasks..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b">
                      <tr>
                        <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase">File Number</th>
                        <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase">Client</th>
                        <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase">Task</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pendingTasks.map((task, index) => (
                        <tr key={index} className="border-b">
                          <td className="p-3">
                            <div className="flex items-center space-x-2">
                              <input type="checkbox" className="w-4 h-4 text-blue-600" />
                              <span className="text-sm text-blue-600 font-medium">{task.fileNumber}</span>
                            </div>
                          </td>
                          <td className="p-3 text-sm text-gray-800">{task.client}</td>
                          <td className="p-3 text-sm text-gray-600">{task.task}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Upcoming Groups */}
              <div className="bg-white rounded-lg shadow-sm border">
                <div className="p-4 border-b">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold text-gray-800">📅 Upcoming Group</span>
                  </div>
                  
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input 
                      type="text" 
                      placeholder="Search files, clients or destinations..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b">
                      <tr>
                        <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase">File Number</th>
                        <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase">Client</th>
                        <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase">Arrival Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {upcomingGroups.map((group, index) => (
                        <tr key={index} className="border-b">
                          <td className="p-3 text-sm text-blue-600 font-medium">{group.fileNumber}</td>
                          <td className="p-3 text-sm text-gray-800">{group.client}</td>
                          <td className="p-3 text-sm text-gray-600">{group.arrivalDate}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* File Details Modal */}
      {showFileModal && <FileDetailsModal />}
    </div>
  );
};

export default Dashboard;