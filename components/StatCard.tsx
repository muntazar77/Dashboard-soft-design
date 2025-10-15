
import React from 'react';

interface StatCardProps {
  icon: React.ReactNode;
  iconBgColor: string;
  iconTextColor: string;
  title: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease';
}

const StatCard: React.FC<StatCardProps> = ({ icon, iconBgColor, iconTextColor, title, value, change, changeType }) => {
  const isIncrease = changeType === 'increase';
  const changeColor = isIncrease ? 'text-emerald-500' : 'text-red-500';

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200/50 flex items-center space-x-4">
      <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full ${iconBgColor} ${iconTextColor}`}>
        {icon}
      </div>
      <div>
        <p className="text-sm text-slate-500">{title}</p>
        <div className="flex items-baseline space-x-2">
          <p className="text-2xl font-semibold text-slate-800">{value}</p>
          <p className={`text-sm font-medium ${changeColor}`}>{change}</p>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
