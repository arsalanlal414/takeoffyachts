import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Area,
} from "recharts";
import CustomDropdown from "../CustomDropdown";

const SalesChart = () => {
  const data = [
    { name: "5k", value: 20 },
    { name: "10k", value: 35 },
    { name: "15k", value: 50 },
    { name: "20k", value: 64 },
    { name: "25k", value: 40 },
    { name: "30k", value: 55 },
    { name: "35k", value: 30 },
    { name: "40k", value: 45 },
    { name: "45k", value: 60 },
    { name: "50k", value: 50 },
    { name: "55k", value: 30 },
    { name: "60k", value: 40 },
  ];

  return (
    <div className="w-full h-[445px] bg-white rounded-lg shadow-md p-5">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Sales Details</h2>
        <div className="w-fit">
          <CustomDropdown />
        </div>
       </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 0, right: 30, left: -30, bottom: 50 }}>
          {/* Gradient Definition for Shadow */}
          <defs>
            <linearGradient id="goldenShadow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(212, 175, 55, 0.4)" />
              <stop offset="80%" stopColor="rgba(212, 175, 55, 0)" />
            </linearGradient>
          </defs>

          {/* Shadow Effect */}
          <Area
            type="monotone"
            dataKey="value"
            stroke="none"
            fill="url(#goldenShadow)"
          />

          {/* Main Line */}
          <Line
            type="monotone"
            dataKey="value"
            stroke="#D4AF37"
            strokeWidth={2}
            dot={{
              stroke: "#D4AF37",
              strokeWidth: 2,
              fill: "#FFF",
              r: 5,
            }}
            activeDot={{
              r: 8,
              fill: "#D4AF37",
              stroke: "#FFF",
              strokeWidth: 2,
            }}
          />

          <XAxis dataKey="name" tick={{ fill: "#8A8A8A" }} />
          <YAxis tick={{ fill: "#8A8A8A" }} />
          <CartesianGrid stroke="#F3F4F6" strokeDasharray="3 3" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#000",
              borderColor: "#D4AF37",
              color: "#FFF",
            }}
            itemStyle={{ color: "#FFF" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;

