import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/images/logo_dashboard.png';
import { RxDashboard } from "react-icons/rx";
import { RiArrowUpDownLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { LuSettings } from "react-icons/lu";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", path: "/", icons: <RxDashboard /> }, 
    { name: "Transactions", path: "/transactions", icons: <RiArrowUpDownLine /> },
    { name: "Users", path: "/users", icons: <FaRegUser /> },
    { name: "Listings", path: "/listings", icons: <BsGraphUpArrow /> },
    { name: "Help", path: "/help", icons: <IoMdHelpCircleOutline /> },
    { name: "Settings", path: "/settings", icons: <LuSettings /> },

    { name: "Logout", path: "/login", icons: <FiLogOut /> },
  ];

  return (
    <div className="h-screen sticky top-0 w-64 bg-black text-white hidden lg:flex flex-col justify-between">
      <div>
        <div className="p-10">
            <img src={logo} alt="takeoff yachts" className="w-full h-full object-cover"/>
        </div>
        <nav className="px-6 flex flex-col gap-2">
          {menuItems.slice(0,4).map((item) => (
            <NavLink
              to={item.path}
              key={item.name}
              className={({ isActive }) =>
                `block py-2 px-4 w-full text-lg rounded-lg flex gap-2 items-center ${
                  isActive ? "bg-[#BEA355]" : "hover:bg-gray-700"
                }`
              }
            >
              {item.icons} {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="w-full">
        <nav className="px-6 flex flex-col gap-2 py-6">
            {menuItems.slice(4,7).map((item) => (
                <NavLink
              to={item.path}
              key={item.name}
              className={({ isActive }) =>
                `block py-2 px-4 w-full text-lg rounded-lg flex gap-2 items-center ${
                  isActive ? "bg-[#BEA355]" : "hover:bg-gray-700"
                }`
              }
            >
              {item.icons} {item.name}
            </NavLink>
          ))}
        </nav>
       
      </div>
    </div>
  );
};

export default Sidebar;
