
import React from 'react';
import type { ViewType } from '../App';

interface HeaderProps {
    activeView: ViewType;
}

const Header: React.FC<HeaderProps> = ({ activeView }) => {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 lg:px-8 flex-shrink-0">
      <h2 className="text-xl font-semibold text-slate-800">{activeView}</h2>
      
      <div className="flex items-center space-x-4">
        <div className="relative hidden md:block">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <input 
            type="text" 
            placeholder="Search..." 
            className="pl-10 pr-4 py-2 w-64 text-sm bg-slate-100 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        <button className="p-2 rounded-full hover:bg-slate-100 text-slate-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
          </svg>
        </button>

        <div className="flex items-center space-x-2">
            <img src="https://picsum.photos/seed/admin/40/40" alt="Admin" className="w-9 h-9 rounded-full"/>
            <div className="hidden sm:block">
                <div className="text-sm font-semibold text-slate-800">Elena Morgan</div>
                <div className="text-xs text-slate-500">Admin</div>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
