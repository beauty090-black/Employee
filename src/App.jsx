import React from "react";
import EmployeeTable from "./components/EmployeeTable";
import "./App.css";
import EmployeeModal from "./components/EmployeeModal";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar/>
      <EmployeeModal/>
      <EmployeeTable />
    </div>
  );
}
