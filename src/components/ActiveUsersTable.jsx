import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import avatar from "../assets/images/Avatar.png";

const ActiveUsersTable = ({limit}) => {
  const users = [
    {
      id: 1,
      name: "Olivia Rhye",
      email: "olivia@takeoff",
      phone: "+1 (472) 2140613",
      country: "United States",
      address: "St.22, Federal...",
      status: "Active",
    },
    {
      id: 2,
      name: "Albert Juan",
      email: "olivia@takeoff",
      phone: "+1 (831) 2140613",
      country: "Italy",
      address: "St.22, Federal...",
      status: "Archived",
    },
    {
      id: 3,
      name: "Warren Daniel",
      email: "olivia@takeoff",
      phone: "+1 (722) 2140613",
      country: "United States",
      address: "St.22, Federal...",
      status: "Active",
    },
    {
      id: 4,
      name: "Olivia Rhye",
      email: "olivia@takeoff",
      phone: "+1 (472) 2140613",
      country: "United States",
      address: "St.22, Federal...",
      status: "Active",
    },
    {
      id: 5,
      name: "Kim Armstrong",
      email: "olivia@takeoff",
      phone: "+1 (941) 2140613",
      country: "Pakistan",
      address: "St.22, Federal...",
      status: "Active",
    },
    {
      id: 6,
      name: "James David",
      email: "olivia@takeoff",
      phone: "+1 (943) 2140613",
      country: "Russia",
      address: "St.22, Federal...",
      status: "Disabled",
    },
    {
      id: 7,
      name: "Olivia Rhye",
      email: "olivia@takeoff",
      phone: "+1 (472) 2140613",
      country: "United States",
      address: "St.22, Federal...",
      status: "Active",
    },
    {
      id: 8,
      name: "Mary Cruz",
      email: "olivia@takeoff",
      phone: "+1 (843) 2140613",
      country: "United States",
      address: "St.22, Federal...",
      status: "Active",
    },
    {
      id: 9,
      name: "James David",
      email: "olivia@takeoff",
      phone: "+1 (943) 2140613",
      country: "Russia",
      address: "St.22, Federal...",
      status: "Disabled",
    },
    {
      id: 10,
      name: "James David",
      email: "olivia@takeoff",
      phone: "+1 (943) 2140613",
      country: "Russia",
      address: "St.22, Federal...",
      status: "Disabled",
    },
    {
      id: 11,
      name: "James David",
      email: "olivia@takeoff",
      phone: "+1 (943) 2140613",
      country: "Russia",
      address: "St.22, Federal...",
      status: "Disabled",
    },
  ];

  const [selectAll, setSelectAll] = useState(false); // Tracks the state of the top checkbox
  const [checkedUsers, setCheckedUsers] = useState([]); // Tracks the state of individual checkboxes

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    if (!selectAll) {
      // Select all user IDs
      setCheckedUsers(users.slice(0, limit).map((user) => user.id));
    } else {
      // Deselect all user IDs
      setCheckedUsers([]);
    }
  };

  const handleCheckboxChange = (userId) => {
    if (checkedUsers.includes(userId)) {
      setCheckedUsers(checkedUsers.filter((id) => id !== userId));
    } else {
      setCheckedUsers([...checkedUsers, userId]);
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700";
      case "Archived":
        return "bg-orange-100 text-orange-700";
      case "Disabled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };
  return (
    <div className="w-full">
      <h2 className="text-xl font-bold mb-4">Active Users</h2>
      <table className="w-full text-left border-collapse rounded-lg overflow-hidden shadow-sm bg-white">
        <thead className="bg-black text-white text-sm uppercase font-medium text-gray-600 rounded-t-lg">
          <tr>
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
            <th className="py-3 px-4">Name</th>
            <th className="py-3 px-4">Email</th>
            <th className="py-3 px-4">Phone</th>
            <th className="py-3 px-4">Country</th>
            <th className="py-3 px-4">Address</th>
            <th className="py-3 px-4">Status</th>
            <th className="py-3 px-4"></th>
          </tr>
        </thead>
        <tbody className="text-sm text-gray-800 rounded-b-lg font-bold">
          {users.slice(0, limit && limit).map((user, index) => (
            <tr
              key={index}
              className={`${checkedUsers.includes(user.id) ? "bg-[#BEA35514]" : "hover:bg-[#BEA35514]"}  hover:cursor-pointer `}
            >
             <td className="py-4 px-4">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only" // hide default checkbox
                    checked={checkedUsers.includes(user.id)}
                    onChange={() => handleCheckboxChange(user.id)}
                  />
                  <span
                    className={`w-[18px] h-[18px] border-2 rounded-sm transition-all ${
                      checkedUsers.includes(user.id) ? 'bg-[#BEA355] border-[#BEA355]' : 'bg-transparent border-gray-400'
                    }`}
                  >
                    {checkedUsers.includes(user.id) && (
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

              <td className="py-4 px-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-200 rounded-full">
                  <img src={avatar} alt="avatar" className="w-full h-full object-cover"/>
                </div>
                {user.name}
              </td>
              <td className="py-4 px-4">{user.email}</td>
              <td className="py-4 px-4">{user.phone}</td>
              <td className="py-4 px-4">{user.country}</td>
              <td className="py-4 px-4">{user.address}</td>
              <td className="py-4 px-4">
                <span
                  className={`flex items-center justify-center gap-1 w-fit px-3 py-1 rounded-full text-xs font-semibold ${getStatusClass(
                    user.status
                  )}`}
                >
                  <GoDotFill />{user.status} 
                </span>
              </td>
              <td className="py-3 px-4 text-right">
                <button className="text-gray-500 hover:text-gray-700 rotate-90">
                  •••
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActiveUsersTable;
