import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiHome,
  FiUsers,
  FiBarChart,
  FiSettings,
  FiCpu,
} from "react-icons/fi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 768);
  const location = useLocation();

  const menuItems = [
    { path: "/", name: "Dashboard", icon: <FiHome size={20} /> },
    { path: "/customers", name: "Customers", icon: <FiUsers size={20} /> },
    { path: "/reports", name: "Reports", icon: <FiBarChart size={20} /> },
    { path: "/automation", name: "Automation", icon: <FiCpu size={20} /> },
  ];

  // Effect untuk handle perubahan ukuran layar
  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth >= 768); // Tutup sidebar jika ukuran < 768px
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener saat komponen unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-48" : "w-16"
        } bg-white min-h-screen shadow-md flex flex-col transition-all duration-300`}
      >
        {/* Toggle Button */}
        <button
          className="p-4 text-gray-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Sidebar Menu */}
        <nav className="flex-1 px-3">
          <ul className="space-y-3 mt-4">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center p-3 rounded-lg transition-all duration-200 ${
                    location.pathname === item.path
                      ? "bg-blue-500 text-white shadow-md"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  {item.icon}
                  {isOpen && <span className="ml-3">{item.name}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
