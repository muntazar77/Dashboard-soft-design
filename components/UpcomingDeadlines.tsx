
import React from 'react';
import type { Deadline, TeamMember } from '../types';

const deadlines: Deadline[] = [
    {
        id: '1',
        projectName: 'Mobile App Redesign',
        clientName: 'Creative Solutions',
        daysLeft: 3,
        team: [
            { id: 't1', name: 'A', avatarUrl: 'https://picsum.photos/seed/user1/24/24' , role: 'dev'},
            { id: 't2', name: 'B', avatarUrl: 'https://picsum.photos/seed/user2/24/24' , role: 'dev'},
            { id: 't3', name: 'C', avatarUrl: 'https://picsum.photos/seed/user3/24/24' , role: 'dev'},
        ]
    },
    {
        id: '2',
        projectName: 'Marketing Website',
        clientName: 'LaunchPad',
        daysLeft: 10,
        team: [
            { id: 't4', name: 'D', avatarUrl: 'https://picsum.photos/seed/user4/24/24', role: 'dev' },
            { id: 't5', name: 'E', avatarUrl: 'https://picsum.photos/seed/user5/24/24', role: 'dev' },
        ]
    },
    {
        id: '3',
        projectName: 'Analytics Dashboard',
        clientName: 'Data Insights',
        daysLeft: 15,
        team: [
            { id: 't1', name: 'A', avatarUrl: 'https://picsum.photos/seed/user1/24/24', role: 'dev' },
            { id: 't6', name: 'F', avatarUrl: 'https://picsum.photos/seed/user6/24/24', role: 'dev' },
            { id: 't7', name: 'G', avatarUrl: 'https://picsum.photos/seed/user7/24/24', role: 'dev' },
            { id: 't8', name: 'H', avatarUrl: 'https://picsum.photos/seed/user8/24/24', role: 'dev' },
        ]
    }
];

const AvatarStack: React.FC<{ members: TeamMember[] }> = ({ members }) => (
    <div className="flex -space-x-2">
      {members.slice(0, 3).map(member => (
        <img key={member.id} className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src={member.avatarUrl} alt={member.name} />
      ))}
      {members.length > 3 && (
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-200 text-xs font-medium text-slate-600 ring-2 ring-white">
          +{members.length - 3}
        </div>
      )}
    </div>
  );

const UpcomingDeadlines: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200/50">
      <h3 className="text-lg font-semibold text-slate-800 mb-4">Upcoming Deadlines</h3>
      <ul className="space-y-4">
        {deadlines.map(deadline => (
          <li key={deadline.id}>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-semibold text-slate-800">{deadline.projectName}</p>
                <p className="text-xs text-slate-500">{deadline.clientName}</p>
              </div>
              <span className={`text-sm font-semibold ${deadline.daysLeft <= 5 ? 'text-red-500' : 'text-slate-600'}`}>
                {deadline.daysLeft}d left
              </span>
            </div>
            <div className="mt-2">
                <AvatarStack members={deadline.team} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingDeadlines;
