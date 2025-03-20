import React, { useState } from "react";
import {
  FiPlus,
  FiEdit,
  FiTrash,
  FiCheckCircle,
  FiXCircle,
  FiClock,
} from "react-icons/fi";
import AutomationCard from "../components/AutomationCard";

const AutomationPage = () => {
  const [automations, setAutomations] = useState([
    { id: 1, name: "Send Welcome Email", status: "Active" },
    { id: 2, name: "Lead Follow-Up", status: "Inactive" },
    { id: 3, name: "Invoice Reminder", status: "Active" },
    { id: 4, name: "Task Notification", status: "Inactive" },
  ]);

  const [activityLogs] = useState([
    {
      id: 1,
      message: "Welcome Email sent to John Doe",
      time: "2 mins ago",
      type: "success",
    },
    {
      id: 2,
      message: "Failed to send invoice reminder",
      time: "5 mins ago",
      type: "error",
    },
    {
      id: 3,
      message: "Follow-up email scheduled",
      time: "1 hour ago",
      type: "info",
    },
  ]);

  return (
    <div className="p-6 space-y-6">
      {/* Header & Actions */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Automations</h2>
        <button
          className="bg-blue-500 text-white px-3 py-2 rounded-md flex items-center justify-center hover:bg-blue-600 transition 
      w-auto min-w-max h-auto"
        >
          <FiPlus className="text-lg" />
          <span className="hidden md:inline ml-2">Add Automation</span>
        </button>
      </div>

      {/* List Automations */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {automations.map((automation) => (
          <div key={automation.id} className="relative group">
            <AutomationCard name={automation.name} status={automation.status} />

            {/* Quick Actions */}
            <div className="absolute top-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition">
              <button className="text-blue-500 hover:text-blue-700">
                <FiEdit />
              </button>
              <button className="text-red-500 hover:text-red-700">
                <FiTrash />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity Logs */}
      <div className="bg-white shadow-md rounded-lg p-5">
        <h3 className="font-semibold text-lg mb-3">Recent Activity</h3>
        <ul className="space-y-3">
          {activityLogs.map((log) => (
            <li
              key={log.id}
              className="flex justify-between items-center text-sm p-3 rounded-md"
            >
              <div className="flex items-center space-x-3">
                {log.type === "success" ? (
                  <FiCheckCircle className="text-green-500" />
                ) : log.type === "error" ? (
                  <FiXCircle className="text-red-500" />
                ) : (
                  <FiClock className="text-gray-500" />
                )}
                <span>{log.message}</span>
              </div>
              <span className="text-gray-400">{log.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AutomationPage;
