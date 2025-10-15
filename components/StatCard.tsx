import React from 'react';

interface StatCardProps {
  icon: React.ReactNode;
  iconTextColor: string;
  title: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease';
}

const StatCard: React.FC<StatCardProps> = ({ icon, iconTextColor, title, value, change, changeType }) => {
  const isIncrease = changeType === 'increase';
  const changeColor = isIncrease ? 'text-emerald-500' : 'text-red-500';

  return (
    <div className="bg-[#e0e5ec] p-5 rounded-xl shadow-[8px_8px_16px_#a3b1c6,-8px_-8px_16px_#ffffff] flex items-center space-x-4">
      <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full ${iconTextColor} shadow-[inset_3px_3px_6px_#a3b1c6,inset_-3px_-3px_6px_#ffffff]`}>
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