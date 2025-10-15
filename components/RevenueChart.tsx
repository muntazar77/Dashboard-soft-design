import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', revenue: 4000 },
  { name: 'Feb', revenue: 3000 },
  { name: 'Mar', revenue: 5000 },
  { name: 'Apr', revenue: 4500 },
  { name: 'May', revenue: 6000 },
  { name: 'Jun', revenue: 5500 },
  { name: 'Jul', revenue: 7000 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#e0e5ec] p-2 rounded-lg shadow-[5px_5px_10px_#a3b1c6,-5px_-5px_10px_#ffffff]">
          <p className="label font-semibold text-sm text-slate-700">{label}</p>
          <p className="intro text-sm text-indigo-500">{`Revenue : $${payload[0].value}`}</p>
        </div>
      );
    }
  
    return null;
};

const RevenueChart: React.FC = () => {
  return (
    <div className="bg-[#e0e5ec] p-6 rounded-xl shadow-[8px_8px_16px_#a3b1c6,-8px_-8px_16px_#ffffff]">
      <h3 className="text-lg font-semibold text-slate-800 mb-4">Revenue Overview</h3>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 20,
              left: -10,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(163, 177, 198, 0.3)" />
            <XAxis dataKey="name" tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} tickFormatter={(value) => `$${value / 1000}k`} />
            <Tooltip cursor={{fill: 'rgba(136, 168, 245, 0.2)'}} content={<CustomTooltip />} />
            <Bar dataKey="revenue" fill="#88A8F5" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;