import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Transactions from "../pages/Transactions";
import Users from "../pages/Users";
import Listings from "../pages/Listings";
import NotFound from "../pages/NotFound";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Settings from "../pages/Settings";
import Help from "../pages/Help";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Layout from "./Layout";
import AddNewYacht from "../pages/AddNewYacht";

const AppRoutes = () => {

  // Route Configuration
  const routes = [
    // Unauthenticated Routes
    { path: "/login", element: <Login />, layout: false },
    { path: "/signup", element: <Signup />, layout: false },

    // Authenticated Routes
    { path: "/", element: <Dashboard />, layout: true },
    { path: "/transactions", element: <Transactions />, layout: true },
    { path: "/users", element: <Users />, layout: true },
    { path: "/listings", element: <Listings />, layout: true },
    { path: "/addnewyacht", element: <AddNewYacht />, layout: true },
    { path: "/help", element: <Help />, layout: true },
    { path: "/settings", element: <Settings />, layout: true },
  ];

  return (
    <Router>
      <Routes>
        {routes.map(({ path, element, layout }, index) => (
          <Route
            key={index}
            path={path}
            element={layout ? <Layout>{element}</Layout> : element}
          />
        ))}

        {/* Fallback Route */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
