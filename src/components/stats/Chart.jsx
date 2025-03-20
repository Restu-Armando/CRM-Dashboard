import React from "react";

import PieChartComponent from "./PieChartComponent";
import BarChartComponent from "./BarChartComponent";
import LineChartComponent from "./LineChartComponent";
import RecentActivities from "./RecentActivities";

export default function Chart() {
  return (
    <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
      <div className="lg:col-span-1">
        <PieChartComponent />
      </div>
      <div className="lg:col-span-1">
        <BarChartComponent />
      </div>
      <div className="lg:col-span-1">
        <LineChartComponent />
      </div>
    </div>
  );
}
