import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';

const mrrData = [
  { month: 'Jan', value: 120 },
  { month: 'Feb', value: 140 },
  { month: 'Mar', value: 180 },
  { month: 'Apr', value: 210 },
  { month: 'May', value: 250 },
  { month: 'Jun', value: 320 },
  { month: 'Jul', value: 400 },
  { month: 'Aug', value: 480 },
  { month: 'Sep', value: 520 },
  { month: 'Oct', value: 580 },
  { month: 'Nov', value: 630 },
  { month: 'Dec', value: 700 },
];

const cacLtvData = [
  { name: 'CAC', value: 500 },
  { name: 'LTV', value: 3000 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-neutral-200 rounded shadow-md">
        <p className="font-medium">{`${label}`}</p>
        <p className="text-primary-600">{`$${payload[0].value}k`}</p>
      </div>
    );
  }

  return null;
};

const MarketDataChart: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<'mrr' | 'cacLtv'>('mrr');

  return (
    <div>
      <div className="flex border-b border-neutral-200 mb-4">
        <button
          className={`py-2 px-4 font-medium ${
            activeTab === 'mrr'
              ? 'text-primary-600 border-b-2 border-primary-600'
              : 'text-neutral-500 hover:text-neutral-800'
          }`}
          onClick={() => setActiveTab('mrr')}
        >
          MRR Growth
        </button>
        <button
          className={`py-2 px-4 font-medium ${
            activeTab === 'cacLtv'
              ? 'text-primary-600 border-b-2 border-primary-600'
              : 'text-neutral-500 hover:text-neutral-800'
          }`}
          onClick={() => setActiveTab('cacLtv')}
        >
          CAC vs LTV
        </button>
      </div>

      <div className="h-80">
        {activeTab === 'mrr' ? (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={mrrData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fill: '#6b7280' }} />
              <YAxis tickFormatter={(value) => `$${value}k`} tick={{ fill: '#6b7280' }} />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Line
                type="monotone"
                dataKey="value"
                name="Monthly Recurring Revenue"
                stroke="#4f46e5"
                strokeWidth={2}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={cacLtvData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" tick={{ fill: '#6b7280' }} />
              <YAxis tickFormatter={(value) => `$${value}`} tick={{ fill: '#6b7280' }} />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="value"
                name="Value ($)"
                fill="#4f46e5"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

export default MarketDataChart;