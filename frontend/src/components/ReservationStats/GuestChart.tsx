import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

interface GuestData {
  date: string;
  guests: number;
}

interface GuestsChartProps {
  data: GuestData[];
}

const GuestsChart: React.FC<GuestsChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis allowDecimals={false} />
        <Tooltip
          formatter={(value: number) => `${value} guests`}
          labelFormatter={(label: any) => `Date: ${label}`}
        />
        <Legend />
        <Bar dataKey="guests" fill="#f59e0b" name="Guests" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default GuestsChart;
