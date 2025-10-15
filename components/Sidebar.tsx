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
  const baseClasses = "flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300";
  const activeClasses = "shadow-[inset_5px_5px_10px_#a3b1c6,inset_-5px_-5px_10px_#ffffff] text-indigo-500";
  const inactiveClasses = "text-slate-500 shadow-[5px_5px_10px_#a3b1c6,-5px_-5px_10px_#ffffff] hover:text-indigo-500 active:shadow-[inset_5px_5px_10px_#a3b1c6,inset_-5px_-5px_10px_#ffffff]";

  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
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
    <aside className="w-64 flex-shrink-0 bg-[#e0e5ec] flex flex-col">
      <div className="h-16 flex items-center px-6">
        <h1 className="text-xl font-bold text-slate-700 tracking-wider">SoftDash</h1>
      </div>
      <nav className="flex-1 px-4 py-6 space-y-3">
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
      <div className="px-4 py-6">
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