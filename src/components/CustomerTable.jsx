import React, { useState } from "react";
import {
  FiArrowDown,
  FiArrowUp,
  FiEdit,
  FiTrash,
  FiPlus,
} from "react-icons/fi";
import { customers as initialCustomers } from "../data/fakerData"; // Save initial data
import { Link } from "react-router-dom";
import Modal from "./Modal";

const CustomerTable = () => {
  const [customers, setCustomers] = useState(initialCustomers); // Save customer state
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(""); // "add" | "edit" | "delete"
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const rowsPerPage = 5;

  // Filter by Search
  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sorting Function
  const sortedCustomers = [...filteredCustomers].sort((a, b) => {
    if (!sortField) return 0;
    return sortOrder === "asc"
      ? a[sortField].localeCompare(b[sortField])
      : b[sortField].localeCompare(a[sortField]);
  });

  // Pagination
  const totalPages = Math.ceil(sortedCustomers.length / rowsPerPage);
  const paginatedCustomers = sortedCustomers.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  // Toggle Sorting
  const handleSort = (field) => {
    setSortField(field);
    setSortOrder(sortField === field && sortOrder === "asc" ? "desc" : "asc");
  };

  // Open Modal
  const openModal = (type, customer = null) => {
    setModalType(type);
    setSelectedCustomer(customer);
    setIsModalOpen(true);
  };

  // Add Customer
  const handleAddCustomer = (newCustomer) => {
    setCustomers([...customers, { id: Date.now(), ...newCustomer }]);
    setIsModalOpen(false);
  };

  // Update Customer
  const handleUpdateCustomer = (updatedCustomer) => {
    setCustomers(
      customers.map((cust) =>
        cust.id === updatedCustomer.id ? updatedCustomer : cust
      )
    );
    setIsModalOpen(false);
  };

  // Delete Customer
  const handleDeleteCustomer = () => {
    setCustomers(customers.filter((cust) => cust.id !== selectedCustomer.id));
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
        <h2 className="text-lg font-semibold mb-3 md:mb-0">Customer List</h2>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search customer..."
            className="border rounded-md px-3 py-2 w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            onClick={() => openModal("add")}
            className="bg-blue-500 text-white px-3 py-2 rounded-md flex items-center space-x-1"
          >
            <FiPlus />
            <span>Add</span>
          </button>
        </div>
      </div>

      {/* Table - Desktop */}
      <div className="overflow-x-auto w-full hidden md:block">
        <table className="w-full border-collapse rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-100 text-gray-700 border-b border-gray-300">
              {[
                "name",
                "email",
                "phone",
                "company",
                "createdAt",
                "actions",
              ].map((col) => (
                <th
                  key={col}
                  className="p-3 cursor-pointer hover:bg-gray-300 transition duration-200"
                  onClick={() => col !== "actions" && handleSort(col)}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">
                      {col.charAt(0).toUpperCase() + col.slice(1)}
                    </span>
                    {sortField === col ? (
                      sortOrder === "asc" ? (
                        <FiArrowUp className="ml-2 text-blue-500" />
                      ) : (
                        <FiArrowDown className="ml-2 text-blue-500" />
                      )
                    ) : (
                      col !== "actions" && (
                        <FiArrowDown className="ml-2 text-gray-800 opacity-50" />
                      )
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedCustomers.map((customer) => (
              <tr
                key={customer.id}
                className="border-b border-gray-200 hover:bg-gray-100 transition duration-300"
              >
                <td className="p-3">
                  <Link
                    to={`/customers/${customer.id}`}
                    className="hover:underline"
                  >
                    {customer.name}
                  </Link>
                </td>
                <td className="p-3">{customer.email}</td>
                <td className="p-3">{customer.phone}</td>
                <td className="p-3">{customer.company}</td>
                <td className="p-3">{customer.createdAt}</td>
                <td className="p-3 flex gap-2">
                  <button
                    className="text-blue-500 hover:text-blue-700"
                    onClick={() => openModal("edit", customer)}
                  >
                    <FiEdit />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => openModal("delete", customer)}
                  >
                    <FiTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Table - Mobile (Scroll Horizontal) */}
      <div className="overflow-x-auto md:hidden">
        <table className="w-full min-w-[600px] border-collapse rounded-lg overflow-hidden">
          {/* Header */}
          <thead>
            <tr className="bg-gray-100 text-gray-700 border-b border-gray-300">
              {["Name", "Email", "Phone", "Company", "Joined", "Actions"].map(
                (col) => (
                  <th key={col} className="p-3 text-left font-semibold">
                    {col}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {paginatedCustomers.map((customer) => (
              <tr key={customer.id} className="border-b border-gray-200">
                <td className="p-3">
                  <Link
                    to={`/customers/${customer.id}`}
                    className="hover:underline"
                  >
                    {customer.name}
                  </Link>
                </td>
                <td className="p-3">{customer.email}</td>
                <td className="p-3">{customer.phone}</td>
                <td className="p-3">{customer.company}</td>
                <td className="p-3">{customer.createdAt}</td>
                <td className="p-3 flex gap-2">
                  <button
                    className="text-blue-500 hover:text-blue-700"
                    onClick={() => openModal("edit", customer)}
                  >
                    <FiEdit />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => openModal("delete", customer)}
                  >
                    <FiTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="mt-4 md:mt-6 flex flex-col md:flex-row md:justify-between items-center gap-2">
        {/* Info Halaman */}
        <div className="text-gray-600 text-sm md:text-base">
          Page {currentPage} of {totalPages}
        </div>

        {/* Tombol Pagination */}
        <div className="flex items-center gap-2 mb-3">
          {/* Prev Button */}
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-md text-sm font-semibold transition ${
              currentPage === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            Prev
          </button>

          {/* Go To Page */}
          <input
            type="number"
            min="1"
            max={totalPages}
            value={currentPage}
            onChange={(e) => {
              const page = Number(e.target.value);
              if (page >= 1 && page <= totalPages) setCurrentPage(page);
            }}
            className="w-14 h-10 text-center border rounded-md p-2 text-sm md:w-16 md:h-auto"
          />

          {/* Next Button */}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-md text-sm font-semibold transition ${
              currentPage === totalPages
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            Next
          </button>
        </div>
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={
            modalType === "add"
              ? "Add Customer"
              : modalType === "edit"
              ? "Edit Customer"
              : "Delete Customer"
          }
          onSave={
            modalType === "delete"
              ? handleDeleteCustomer
              : modalType === "edit"
              ? handleUpdateCustomer
              : handleAddCustomer
          }
          customer={selectedCustomer}
          type={modalType}
        />
      )}
    </div>
  );
};

export default CustomerTable;
