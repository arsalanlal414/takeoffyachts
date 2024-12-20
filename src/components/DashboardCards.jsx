import React from "react";
import { BsBoxFill } from "react-icons/bs";
import { FaClock } from "react-icons/fa";
import { FaChartLine, FaClockRotateLeft} from "react-icons/fa6";
import {  HiUsers } from "react-icons/hi2";
import { MdTrendingDown, MdTrendingUp } from "react-icons/md";
import { RiLineChartLine } from "react-icons/ri";

const stats = [
  {
    title: "Total User",
    value: "40,689",
    icon: <HiUsers className="text-yellow-600 text-3xl" />,
    percentage: "8.5%",
    trend: "Up from yesterday",
    trendClass: "text-[#00B69B]",
    trendIcon: <MdTrendingUp />
  },
  {
    title: "Total Order",
    value: "10,293",
    icon: <BsBoxFill className="text-yellow-600 text-3xl" />,
    percentage: "1.3%",
    trend: "Up from past week",
    trendClass: "text-[#00B69B]",
    trendIcon: <MdTrendingUp />
  },
  {
    title: "Total Sales",
    value: "$89,000",
    icon: <RiLineChartLine className="text-yellow-600 text-3xl" />,
    percentage: '4.3%',
    trend: "Down from yesterday",
    trendClass: "text-red-500",
    trendIcon: <MdTrendingDown />
  },
  {
    title: "Total Pending",
    value: "2,040",
    icon: <FaClockRotateLeft className="text-yellow-600 text-3xl" />,
    percentage: "1.8%",
    trend: "Up from yesterday",
    trendClass: "text-[#00B69B]",
    trendIcon: <MdTrendingUp />
  },
];

const DashboardCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-3">
              <h3 className="text-sm text-[#202224]">{stat.title}</h3>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
            <div className="p-3 bg-[#BEA3550F] rounded-2xl">{stat.icon}</div>
          </div>
          <p className={`text-sm mt-4 ${stat.trendClass} mt-2 flex items-center gap-2`}><span className="flex items-center gap-1">{stat.trendIcon} {stat.percentage}</span> <span className="text-[#202224]"> {stat.trend}</span></p>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
