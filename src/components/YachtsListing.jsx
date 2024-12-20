import React, { useState } from "react";
import img from "../assets/images/bg.png";
import useHandleNavigate from "../hooks/useHandleNavigate";

const YachtsList = () => {
  const [yachts, setYachts] = useState([
    {
      id: 1,
      image: img,
      name: "Mega Cruise",
      facilities: "24 ft. • 8 Guests • 3 Cabins",
      bookings: 1625,
    },
    {
      id: 2,
      image: img,
      name: "Mega Cruise",
      facilities: "24 ft. • 8 Guests • 3 Cabins",
      bookings: 1625,
    },
    {
      id: 3,
      image: img,
      name: "Mega Cruise",
      facilities: "24 ft. • 8 Guests • 3 Cabins",
      bookings: 1625,
    },
    {
        id: 4,
        image: img,
        name: "Mega Cruise",
        facilities: "24 ft. • 8 Guests • 3 Cabins",
        bookings: 1625,
      },
      {
        id: 5,
        image: img,
        name: "Mega Cruise",
        facilities: "24 ft. • 8 Guests • 3 Cabins",
        bookings: 1625,
      },
      {
        id: 6,
        image: img,
        name: "Mega Cruise",
        facilities: "24 ft. • 8 Guests • 3 Cabins",
        bookings: 1625,
      },
      {
        id: 7,
        image: img,
        name: "Mega Cruise",
        facilities: "24 ft. • 8 Guests • 3 Cabins",
        bookings: 1625,
      },
  ]);

  const [selectAll, setSelectAll] = useState(false);
  const [selected, setSelected] = useState([]);

  const handleSelectAll = () => {
    if (selectAll) {
      setSelected([]);
    } else {
      setSelected(yachts.map((yacht) => yacht.id));
    }
    setSelectAll(!selectAll);
  };

  const handleSelect = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((yachtId) => yachtId !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const handleNavigate = useHandleNavigate();

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Listed Yachts</h2>
        <button className="bg-[#BEA355] text-white px-6 md:px-14 py-2 rounded-full hover:bg-yellow-600" 
          onClick={()=>handleNavigate('/addnewyacht')}
        >
            Add New
        </button>
      </div>
      <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-black text-white text-sm font-medium text-left">
            <th className="py-3 px-4">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only" // hide default checkbox
                  checked={selectAll}
                  onChange={handleSelectAll}
                />
                <span
                  className={`w-[18px] h-[18px] border-2 rounded-sm transition-all ${
                    selectAll ? 'bg-[#BEA355] border-[#BEA355]' : 'bg-transparent border-gray-400'
                  }`}
                >
                  {selectAll && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="white"
                      className="w-full h-full absolute top-0 left-0"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </span>
              </label>
            </th>
            <th className="py-3 px-4 text-left">Image</th>
            <th className="py-3 px-4 text-left">Name</th>
            <th className="py-3 px-4 text-left">Facilities</th>
            <th className="py-3 px-4 text-left">Bookings</th>
            <th className="py-3 px-4 text-left"></th>
          </tr>
        </thead>
        <tbody>
          {yachts.map((yacht) => (
            <tr
              key={yacht.id}
              className={`border-b
                ${selected.includes(yacht.id) ? "bg-[#BEA35514]" : "hover:bg-[#BEA35514]"}  hover:cursor-pointer`              }
            >
               <td className="py-4 px-4">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only" // hide default checkbox
                    checked={selected.includes(yacht.id)}
                    onChange={() => handleSelect(yacht.id)}
                  />
                  <span
                    className={`w-[18px] h-[18px] border-2 rounded-sm transition-all ${
                      selected.includes(yacht.id) ? 'bg-[#BEA355] border-[#BEA355]' : 'bg-transparent border-gray-400'
                    }`}
                  >
                    {selected.includes(yacht.id) && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="white"
                        className="w-full h-full absolute top-0 left-0"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </span>
                </label>
              </td>
              <td className="py-3 px-4">
                <img
                  src={yacht.image}
                  alt={yacht.name}
                  className="w-20 h-12 object-cover rounded-md"
                />
              </td>
              <td className="py-3 px-4">{yacht.name}</td>
              <td className="py-3 px-4">{yacht.facilities}</td>
              <td className="py-3 px-4">{yacht.bookings}</td>
              <td className="py-3 px-4 text-right">
                <button className="text-gray-500 hover:text-gray-700 rotate-90">•••</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default YachtsList;
