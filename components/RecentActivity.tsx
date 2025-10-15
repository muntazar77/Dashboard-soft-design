import React from 'react';
import type { Activity } from '../types';

const activities: Activity[] = [
  {
    id: '1',
    user: { name: 'Alex Johnson', avatarUrl: 'https://picsum.photos/seed/alex/40/40' },
    action: 'completed project',
    target: 'E-commerce Platform',
    timestamp: '2 hours ago',
  },
  {
    id: '2',
    user: { name: 'Maria Garcia', avatarUrl: 'https://picsum.photos/seed/maria/40/40' },
    action: 'added a new client',
    target: 'Innovate Inc.',
    timestamp: '5 hours ago',
  },
  {
    id: '3',
    user: { name: 'James Smith', avatarUrl: 'https://picsum.photos/seed/james/40/40' },
    action: 'assigned to project',
    target: 'Mobile App Redesign',
    timestamp: '1 day ago',
  },
   {
    id: '4',
    user: { name: 'Elena Morgan', avatarUrl: 'https://picsum.photos/seed/admin/40/40' },
    action: 'updated project status to On Hold:',
    target: 'Marketing Website',
    timestamp: '2 days ago',
  },
];

const RecentActivity: React.FC = () => {
  return (
    <div className="bg-[#e0e5ec] p-6 rounded-xl shadow-[8px_8px_16px_#a3b1c6,-8px_-8px_16px_#ffffff]">
      <h3 className="text-lg font-semibold text-slate-800 mb-4">Recent Activity</h3>
      <ul className="space-y-4">
        {activities.map((activity) => (
          <li key={activity.id} className="flex items-center space-x-3">
            <img src={activity.user.avatarUrl} alt={activity.user.name} className="w-9 h-9 rounded-full p-0.5 bg-[#e0e5ec] shadow-[2px_2px_5px_#a3b1c6,-2px_-2px_5px_#ffffff]" />
            <div className="flex-1">
              <p className="text-sm text-slate-700">
                <span className="font-semibold">{activity.user.name}</span> {activity.action}{' '}
                <span className="font-semibold text-indigo-500">{activity.target}</span>
              </p>
              <p className="text-xs text-slate-400">{activity.timestamp}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;