
import React from 'react';
import type { ViewType } from '../App';
import { ChartBarIcon, FolderIcon, UsersIcon, DocumentChartBarIcon, Cog6ToothIcon } from '../constants';

interface SidebarProps {
  activeView: ViewType;
  setActiveView: (view: ViewType) => void;
}

const NavItem: React.FC<{
  icon: React.ReactNode;
  label: ViewType;
  isActive: boolean;
  onClick: () => void;
}> = ({ icon, label, isActive, onClick }) => {
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${
        isActive
          ? 'bg-indigo-600 text-white shadow-lg'
          : 'text-slate-500 hover:bg-slate-100 hover:text-slate-800'
      }`}
    >
      {icon}
      <span className="ml-3">{label}</span>
    </a>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView }) => {
  const navItems: { label: ViewType, icon: React.ReactNode }[] = [
    { label: 'Dashboard', icon: <ChartBarIcon className="w-5 h-5" /> },
    { label: 'Projects', icon: <FolderIcon className="w-5 h-5" /> },
    { label: 'Clients', icon: <UsersIcon className="w-5 h-5" /> },
    { label: 'Team', icon: <UsersIcon className="w-5 h-5" /> },
    { label: 'Reports', icon: <DocumentChartBarIcon className="w-5 h-5" /> },
  ];

  return (
    <aside className="w-64 flex-shrink-0 bg-white border-r border-slate-200 flex flex-col">
      <div className="h-16 flex items-center px-6 border-b border-slate-200">
        <h1 className="text-xl font-bold text-indigo-600">SoftDash</h1>
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map((item) => (
          <NavItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            isActive={activeView === item.label}
            onClick={() => setActiveView(item.label)}
          />
        ))}
      </nav>
      <div className="px-4 py-6 border-t border-slate-200">
        <NavItem
          icon={<Cog6ToothIcon className="w-5 h-5" />}
          label="Settings"
          isActive={activeView === 'Settings'}
          onClick={() => setActiveView('Settings')}
        />
      </div>
    </aside>
  );
};

export default Sidebar;
