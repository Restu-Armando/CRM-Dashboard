import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { customers } from "../data/fakerData";
import {
  FiArrowLeft,
  FiMail,
  FiPhone,
  FiBriefcase,
  FiMapPin,
  FiCalendar,
} from "react-icons/fi";

const CustomerDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const customer = customers.find((cust) => cust.id.toString() === id);

  if (!customer) {
    return (
      <div className="text-center text-gray-500 mt-10">Customer not found</div>
    );
  }

  return (
    <div className="w-full min-h-screen p-6 bg-gray-100">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-blue-500 hover:underline mb-6"
        >
          <FiArrowLeft className="mr-2" /> Back to Customers
        </button>

        {/* Header Section */}
        <div className="flex items-center space-x-6 border-b pb-6 mb-6">
          <div className="bg-blue-500 text-white w-20 h-20 flex items-center justify-center rounded-full text-3xl font-semibold">
            {customer.name.charAt(0)}
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              {customer.name}
            </h2>
            <p className="text-gray-500 text-lg">{customer.company}</p>
          </div>
        </div>

        {/* Detail Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left */}
          <div className="space-y-5">
            <div className="flex items-center text-gray-700 text-lg">
              <FiMail className="mr-3 text-blue-500" />
              <span>{customer.email}</span>
            </div>
            <div className="flex items-center text-gray-700 text-lg">
              <FiPhone className="mr-3 text-blue-500" />
              <span>{customer.phone}</span>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-5">
            <div className="flex items-center text-gray-700 text-lg">
              <FiMapPin className="mr-3 text-blue-500" />
              <span>{customer.location}</span>
            </div>
            <div className="flex items-center text-gray-700 text-lg">
              <FiCalendar className="mr-3 text-blue-500" />
              <span>Joined: {customer.createdAt}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetail;
