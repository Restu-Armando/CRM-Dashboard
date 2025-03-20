import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import CardStat from "../components/stats/CardStat";
import { generateStats, generateRevenueData } from "../data/fakerData";

const Reports = () => {
  const stats = generateStats();
  const revenueData = generateRevenueData();

  return (
    <div className="p-6 space-y-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-800">
          📊 Reports & Analytics
        </h1>
        <button
          className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md 
          hover:bg-blue-700 transition-opacity duration-300 opacity-90 hover:opacity-100"
        >
          Download Report
        </button>
      </div>

      {/* Revenue Chart */}
      <div
        className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 
        hover:shadow-xl transition-shadow duration-300"
      >
        <h2 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
          💰 Total Revenue
        </h2>
        <p className="text-gray-500 mb-4">
          Revenue trend over the past months.
        </p>

        {/* Chart */}
        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#4F46E5"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Statistik Cards */}
      <div className="flex flex-wrap gap-4 sm:gap-6 w-full justify-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="hover:shadow-lg transition-transform duration-200 transform hover:-translate-y-1"
          >
            <CardStat {...stat} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;
