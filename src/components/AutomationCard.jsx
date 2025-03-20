import React from "react";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";

const AutomationCard = ({ name, status }) => {
  const isActive = status === "Active";

  return (
    <div
      className="p-5 bg-white shadow-md  rounded-lg flex justify-between items-center 
      transition-transform duration-300 transform hover:scale-[1.03] hover:shadow-lg"
    >
      {/* Content */}
      <div>
        <h3 className="font-semibold text-gray-800">{name}</h3>
        <div className="flex items-center space-x-2 mt-1">
          {/* Badge Status */}
          <span
            className={`px-2 py-1 text-xs font-medium rounded-full 
            ${
              isActive
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {status}
          </span>
        </div>
      </div>

      {/* Icon Status */}
      {isActive ? (
        <FiCheckCircle
          size={22}
          className="text-green-500 transition-opacity duration-300"
        />
      ) : (
        <FiXCircle
          size={22}
          className="text-red-500 transition-opacity duration-300"
        />
      )}
    </div>
  );
};

export default AutomationCard;
