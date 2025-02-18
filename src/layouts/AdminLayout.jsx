import React from "react";
import { Route, Routes } from "react-router-dom";
import AddCity from "../components/superAdmin/pages/AddCity";
import AddProduct from "../components/superAdmin/pages/AddProduct";
import AddServices from "../components/superAdmin/pages/AddServices";
import Banner from "../components/superAdmin/pages/Banner";
import AddTimeSlot from "../components/superAdmin/pages/AddTimeSlot";
import Header from "../components/superAdmin/header/Header";
import Sidebar from "../components/superAdmin/sidebar/Sidebar";
import Orders from "../components/superAdmin/pages/Orders";

const Dashboard = () => <h1>Dashboard</h1>

const AdminLayout = () => {
  return (
    <div className="flex bg-[#EBF2F1]">
    {/* Sidebar */}
    <Sidebar />

    {/* Main Content */}
    <div className="flex-grow ">
      {/* Header */}
      <Header />

      {/* Admin Routes */}
     <div className="p-5 ">
     <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/city" element={<AddCity />} />
        <Route path="/product" element={<AddProduct />} />
        <Route path="/services" element={<AddServices />} />
        <Route path="/time-slot" element={<AddTimeSlot />} />
        <Route path="/banner" element={<Banner />} />
        <Route path="/orders" element={<Orders/>} />
      </Routes>
     </div>
    </div>
  </div>
  );
};

export default AdminLayout;
