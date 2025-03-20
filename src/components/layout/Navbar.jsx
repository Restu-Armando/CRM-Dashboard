import React, { useState, useRef, useEffect } from "react";
import { FiUser, FiLogOut, FiSettings } from "react-icons/fi";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Click outside the dropdown to close it
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-lg font-semibold">CRM</h1>

      {/* User Profile */}
      <div className="relative" ref={dropdownRef}>
        <div
          className="inline-flex items-center space-x-2 cursor-pointer"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <span className="text-gray-600">Hi, John Doe</span>
          <span className="bg-gray-200 p-2 rounded-full">
            <FiUser size={24} />
          </span>
        </div>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-50">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-2">
                <FiUser size={18} />
                <span>Profile</span>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-2">
                <FiSettings size={18} />
                <span>Settings</span>
              </li>
              <li className="px-4 py-2 hover:bg-red-100 text-red-600 cursor-pointer flex items-center space-x-2">
                <FiLogOut size={18} />
                <span>Logout</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
