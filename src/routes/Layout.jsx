// import React from "react";
// import Sidebar from "../components/Sidebar";
// import Header from "../components/Header";

// const Layout = ({ children }) => {
//   return (
//     <div className="flex bg-[#F9F9F9]">
//       <Sidebar />
//       <div className="flex-1">
//         <Header />
//         <div className="p-6">{children}</div>
//       </div>
//     </div>
//   );
// };

// export default Layout;



import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const Layout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex bg-[#F9F9F9]">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1">
        <Header toggleSidebar={toggleSidebar} />
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
