import React from "react";
import CardStat from "../components/stats/CardStat";
import Chart from "../components/stats/Chart";
import CustomerTable from "../components/CustomerTable";
import { generateStats } from "../data/fakerData";

const Dashboard = () => {
  const stats = generateStats();

  return (
    <div className="grid gap-6 grid-cols-1 lg:grid-cols-6 p-4">
      {/* Card Stats */}
      <div className="col-span-full overflow-x-auto scrollbar-hide p-2">
        <div className="flex gap-4 snap-x snap-mandatory">
          {stats.map((stat, index) => (
            <div key={index} className="snap-start">
              <CardStat {...stat} />
            </div>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="col-span-full">
        <Chart />
      </div>

      {/* Customer Table */}
      <div className="col-span-full w-full">
        <CustomerTable />
      </div>
    </div>
  );
};

export default Dashboard;
