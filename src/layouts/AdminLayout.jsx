import React from "react";
import { Route, Routes } from "react-router-dom";
import AddCity from "../components/superAdmin/pages/AddCity";
import AddProduct from "../components/superAdmin/pages/AddProduct";
import AddServices from "../components/superAdmin/pages/AddServices";
import Banner from "../components/superAdmin/pages/Banner";
import AddTimeSlot from "../components/superAdmin/pages/AddTimeSlot";
import Header from "../components/superAdmin/header/Header";
import Sidebar from "../components/superAdmin/sidebar/Sidebar";

const Dashboard = () => <h1>Dashboard</h1>

const AdminLayout = () => {
  return (
    <div className="flex">
    {/* Sidebar */}
    <Sidebar />

    {/* Main Content */}
    <div className="flex-grow">
      {/* Header */}
      <Header />

      {/* Admin Routes */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/city" element={<AddCity />} />
        <Route path="/product" element={<AddProduct />} />
        <Route path="/services" element={<AddServices />} />
        <Route path="/time-slot" element={<AddTimeSlot />} />
        <Route path="/banner" element={<Banner />} />
      </Routes>
    </div>
  </div>
  );
};

export default AdminLayout;
