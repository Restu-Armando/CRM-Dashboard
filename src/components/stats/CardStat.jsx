import React from "react";

const CardStat = ({ title, value, icon: Icon, color, isMain }) => {
  return (
    <div
      className={`p-5 rounded-lg shadow-md flex items-center space-x-4 
      transition-transform duration-300 transform hover:scale-[1.05] hover:shadow-lg 
      ${
        isMain
          ? "bg-gradient-to-r from-green-500 to-green-600 text-white"
          : "bg-white text-gray-800 "
      } 
      min-w-[250px]`}
    >
      {/* Icon */}
      <div
        className={`p-3 rounded-full ${
          isMain ? "bg-green-700 bg-opacity-30" : "bg-gray-200"
        }`}
      >
        <Icon
          className={`text-3xl ${isMain ? "text-white" : "text-gray-600"}`}
        />
      </div>

      {/* Content */}
      <div>
        <h4
          className={`text-sm font-medium ${
            isMain ? "opacity-90" : "text-gray-600"
          }`}
        >
          {title}
        </h4>
        <h2 className="text-2xl font-bold">{value}</h2>
      </div>
    </div>
  );
};

export default CardStat;
