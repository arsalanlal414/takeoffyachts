// import React from "react";
// import { IoIosNotificationsOutline } from "react-icons/io";
// import img from "../assets/images/login.png";

// const Header = () => {
//   return (
//     <header className="bg-white p-5 shadow flex items-center justify-between ">
//       <h1 className="text-2xl font-semibold font-sora">Hello, Alex 👋</h1>
//       <div className="flex items-center gap-4">
//       <div className="relative">
//         <input
//           type="text"
//           placeholder="Search..."
//           className="focus:ring-1 focus:ring-[#BEA355] text-[#BEA355] bg-[#F9F9F9] focus:outline-none rounded-md py-3 pl-12 pr-6 w-full md:w-[350px]"
//         />
//         <div className="absolute inset-y-0 left-4 flex items-center text-black">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={2}
//             stroke="currentColor"
//             className="w-5 h-5"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 6.65a7.5 7.5 0 010 10.6z"
//             />
//           </svg>
//         </div>
//       </div>

//         <div className="relative">
//             <div className="text-3xl p-2 rounded-full border-2 border-gray-200 relative hover:text-[#BEA355] hover:border-[#BEA355] hover:cursor-pointer">
//                 <IoIosNotificationsOutline />
//             </div>
//             <div className="absolute w-2.5 h-2.5 border-2 border-white bg-[#BEA355] rounded-full top-3 right-3"></div>
//         </div>
//         <img
//           src={img}
//           alt="User"
//           className="w-12 h-12  rounded-full"
//         />
//       </div>
//     </header>
//   );
// };

// export default Header;


import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import img from "../assets/images/login.png";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="bg-white p-5 shadow flex items-center justify-between">
      <div className="flex items-center gap-4">
        {/* Hamburger menu visible only on smaller screens */}
        <button className="text-2xl lg:hidden" onClick={toggleSidebar}>
          <FiMenu />
        </button>
        {/* User greeting only on larger screens */}
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold font-sora ">
          Hello, Alex 👋
        </h1>
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Notification icon */}
        <div className="relative">
          <div className="text-xl sm:text-3xl p-2 rounded-full border-2 border-gray-200 relative hover:text-[#BEA355] hover:border-[#BEA355] hover:cursor-pointer">
            <IoIosNotificationsOutline />
          </div>
          <div className="absolute w-2 h-2 sm:w-2.5 sm:h-2.5 border-2 border-white bg-[#BEA355] rounded-full top-3 right-3"></div>
        </div>
        {/* Profile icon */}
        <img src={img} alt="User" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full" />
      </div>
    </header>
  );
};

export default Header;
