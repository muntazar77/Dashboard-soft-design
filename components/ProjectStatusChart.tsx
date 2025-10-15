import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'In Progress', value: 12 },
  { name: 'Completed', value: 35 },
  { name: 'On Hold', value: 4 },
  { name: 'Canceled', value: 2 },
];

const COLORS = ['#88A8F5', '#86D4A0', '#F2C88F', '#F29494'];

const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#e0e5ec] p-2 rounded-lg shadow-[5px_5px_10px_#a3b1c6,-5px_-5px_10px_#ffffff]">
          <p className="label text-sm text-slate-700">{`${payload[0].name} : ${payload[0].value}`}</p>
        </div>
      );
    }
  
    return null;
  };

const ProjectStatusChart: React.FC = () => {
  return (
    <div className="bg-[#e0e5ec] p-6 rounded-xl shadow-[8px_8px_16px_#a3b1c6,-8px_-8px_16px_#ffffff]">
      <h3 className="text-lg font-semibold text-slate-800 mb-4">Project Status</h3>
      <div style={{ width: '100%', height: 250 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: '14px', color: '#64748b' }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProjectStatusChart;