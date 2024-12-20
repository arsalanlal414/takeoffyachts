import React from "react";
import img from "../assets/images/login.png";
import { Link } from "react-router-dom";

const yachts = [
  {
    name: "Mega Cruise",
    price: "$195/hr",
    bookings: "8 bookings",
    image: img, // Replace with actual images
  },
  {
    name: "Mega Cruise",
    price: "$195/hr",
    bookings: "8 bookings",
    image: img, // Replace with actual images
  },
  {
    name: "Mega Cruise",
    price: "$195/hr",
    bookings: "8 bookings",
    image: img, // Replace with actual images
  },
  {
    name: "Mega Cruise",
    price: "$195/hr",
    bookings: "8 bookings",
    image: img, // Replace with actual images
  },
];

const YachtList = () => {
  return (
    <div className="bg-white px-6  py-3 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4 pb-4">
        <h2 className="text-2xl font-bold">Listed Yachts</h2>
        <Link to="/listings" className="text-[#BEA355] font-semibold">
          View All
        </Link>
      </div>
      {yachts.map((yacht, index) => (
        <div
          key={index}
          className="flex items-center justify-between mb-4 border-b last:border-b-0 pb-4"
        >
          <img
            src={yacht.image}
            alt={yacht.name}
            className="w-14 h-14 rounded-md"
          />
          <div className="flex-1 px-4">
            <h3 className="text-lg font-semibold">{yacht.name}</h3>
            <p className="text-sm text-gray-500">{yacht.price}</p>
          </div>
          <p className="text-sm text-[#BEA355] bg-[#BEA3550F] p-2 rounded-xl">{yacht.bookings}</p>
        </div>
      ))}
    </div>
  );
};

export default YachtList;
