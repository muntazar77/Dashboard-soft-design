import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

export type ViewType = 'Dashboard' | 'Projects' | 'Clients' | 'Team' | 'Reports' | 'Settings';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<ViewType>('Dashboard');

  const renderView = () => {
    switch (activeView) {
      case 'Dashboard':
        return <Dashboard />;
      // Other cases would render different components
      default:
        return (
          <div className="flex items-center justify-center h-full">
            <div className="text-center p-8 bg-[#e0e5ec] rounded-xl shadow-[8px_8px_16px_#a3b1c6,-8px_-8px_16px_#ffffff]">
              <h2 className="text-2xl font-bold text-slate-700 mb-2">Page not built</h2>
              <p className="text-slate-500">The '{activeView}' page is for demonstration purposes.</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="bg-[#e0e5ec] font-sans text-slate-800 min-h-screen flex">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      <div className="flex-1 flex flex-col">
        <Header activeView={activeView} />
        <main className="flex-1 p-6 lg:p-8 overflow-y-auto">
          {renderView()}
        </main>
      </div>
    </div>
  );
};

export default App;