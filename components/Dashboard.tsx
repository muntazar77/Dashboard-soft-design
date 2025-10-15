
import React from 'react';
import StatCard from './StatCard';
import ProjectStatusChart from './ProjectStatusChart';
import RevenueChart from './RevenueChart';
import RecentActivity from './RecentActivity';
import UpcomingDeadlines from './UpcomingDeadlines';
import { FolderIcon, UsersIcon } from '../constants';

const CurrencyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);

const CheckCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);

const Dashboard: React.FC = () => {
    return (
        <div className="space-y-6">
            {/* Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard 
                    title="Total Revenue" 
                    value="$72,430" 
                    change="+2.5%" 
                    changeType="increase"
                    icon={<CurrencyIcon />} 
                    iconBgColor="bg-green-100" 
                    iconTextColor="text-green-600" 
                />
                <StatCard 
                    title="Active Projects" 
                    value="12" 
                    change="-1.2%" 
                    changeType="decrease"
                    icon={<FolderIcon className="w-6 h-6"/>} 
                    iconBgColor="bg-blue-100" 
                    iconTextColor="text-blue-600" 
                />
                <StatCard 
                    title="Clients" 
                    value="28" 
                    change="+5" 
                    changeType="increase"
                    icon={<UsersIcon className="w-6 h-6"/>} 
                    iconBgColor="bg-indigo-100" 
                    iconTextColor="text-indigo-600" 
                />
                <StatCard 
                    title="Completed This Month" 
                    value="5" 
                    change="+1" 
                    changeType="increase"
                    icon={<CheckCircleIcon />} 
                    iconBgColor="bg-emerald-100" 
                    iconTextColor="text-emerald-600" 
                />
            </div>

            {/* Main content grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <RevenueChart />
                    <RecentActivity />
                </div>
                <div className="lg:col-span-1 space-y-6">
                    <ProjectStatusChart />
                    <UpcomingDeadlines />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
