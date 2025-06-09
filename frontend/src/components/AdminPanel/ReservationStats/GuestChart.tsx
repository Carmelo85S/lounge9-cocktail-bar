import React, { useState } from "react";
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
  aggregationType?: "day" | "month";
}

const aggregateByDay = (data: GuestData[]) => {
  const map: Record<string, number> = {};

  data.forEach(({ date, guests }) => {
    const day = new Date(date).toISOString().split("T")[0];
    map[day] = (map[day] || 0) + guests;
  });

  return Object.entries(map)
    .map(([date, guests]) => ({ date, guests }))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
};

const aggregateByMonth = (data: GuestData[]) => {
  const map: Record<string, number> = {};

  data.forEach(({ date, guests }) => {
    const d = new Date(date);
    const month = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
    map[month] = (map[month] || 0) + guests;
  });

  return Object.entries(map)
    .map(([date, guests]) => ({ date, guests }))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
};

const GuestsChart: React.FC<GuestsChartProps> = ({
  data,
  aggregationType = "day",
}) => {
  const aggregatedData =
    aggregationType === "month" ? aggregateByMonth(data) : aggregateByDay(data);

  const monthOptions = Array.from(
    new Set(
      aggregatedData.map((d) => d.date.slice(0, 7)) // YYYY-MM
    )
  );
  const [selectedMonth, setSelectedMonth] = useState(monthOptions[0] || "");

  const filteredData =
    aggregationType === "day"
      ? aggregatedData.filter((d) => d.date.startsWith(selectedMonth))
      : aggregatedData;

      const chartWidth = Math.max(filteredData.length * 60, 600);

  return (
    <section className="px-3">
      {aggregationType === "day" && (
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className="mb-4 p-2 border rounded"
        >
          {monthOptions.map((month) => (
            <option key={month} value={month}>
              {new Date(month + "-01").toLocaleDateString("it-IT", {
                month: "long",
                year: "numeric",
              })}
            </option>
          ))}
        </select>
      )}

      <div className="overflow-x-auto">
        <div style={{ width: chartWidth, height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={filteredData}
              margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="date"
                tickFormatter={(date) => {
                  const d = new Date(date);
                  return aggregationType === "month"
                    ? d.toLocaleDateString("it-IT", {
                        month: "short",
                        year: "2-digit",
                      })
                    : d.toLocaleDateString("it-IT", {
                        day: "2-digit",
                        month: "short",
                      });
                }}
              />
              <YAxis allowDecimals={false} />
              <Tooltip
                formatter={(value: number) => `${value} ospiti`}
                labelFormatter={(label: string) => {
                  const d = new Date(label);
                  return aggregationType === "month"
                    ? d.toLocaleDateString("it-IT", {
                        month: "long",
                        year: "numeric",
                      })
                    : d.toLocaleDateString("it-IT", {
                        weekday: "long",
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      });
                }}
              />
              <Legend />
              <Bar dataKey="guests" fill="#f59e0b" name="Guests" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default GuestsChart;
