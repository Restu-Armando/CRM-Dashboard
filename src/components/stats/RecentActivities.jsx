import React from "react";
import { FiClock } from "react-icons/fi";

const activities = [
  {
    id: 1,
    user: "Alice Johnson",
    action: "purchased a product",
    time: "2 mins ago",
  },
  {
    id: 2,
    user: "Mark Smith",
    action: "registered an account",
    time: "10 mins ago",
  },
  {
    id: 3,
    user: "Sarah Lee",
    action: "updated profile info",
    time: "30 mins ago",
  },
];

const RecentActivities = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-3">Recent Activities</h2>
      <ul className="space-y-3">
        {activities.map((activity) => (
          <li
            key={activity.id}
            className="flex items-center space-x-3 border-b pb-2 last:border-none"
          >
            <FiClock className="text-blue-500" size={20} />
            <div>
              <p className="text-gray-700">
                <span className="font-semibold">{activity.user}</span>{" "}
                {activity.action}
              </p>
              <span className="text-sm text-gray-500">{activity.time}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivities;
