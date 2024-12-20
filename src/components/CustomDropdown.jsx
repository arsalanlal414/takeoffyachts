import { useState } from "react";

const CustomDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("October");
  const months = ["October", "November"];

  const handleSelect = (month) => {
    setSelected(month);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Selected Item */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="border border-gray-300 p-2 rounded-md min-w-full text-left flex items-center gap-2"
      >
        {selected}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-4 h-4 ml-2 text-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Options */}
      {isOpen && (
        <ul className="absolute w-full min-w-fit mt-1 bg-white border border-gray-300 rounded-md shadow-md z-10">
          {months.map((month) => (
            <li
              key={month}
              onClick={() => handleSelect(month)}
              className="p-2 hover:bg-[#BEA355] hover:cursor-pointer"
            >
              {month}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
