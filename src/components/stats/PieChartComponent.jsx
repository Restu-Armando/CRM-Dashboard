import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { generateFakePieChartData } from "../../data/fakerData";

const COLORS = ["#6366F1", "#00AD42", "#F59E0B", "#EF4444"];

export default function PieChartComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(generateFakePieChartData());
  }, []);

  return (
    <div className="bg-white shadow-md p-6 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">📊 Customer Distribution</h2>
      <div className="flex justify-center items-center">
        <ResponsiveContainer width={300} height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={100}
              paddingAngle={5}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "#f5f5f5",
                color: "#fff",
                borderRadius: "5px",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
