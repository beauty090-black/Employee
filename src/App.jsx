import React from "react";
import EmployeeTable from "./components/EmployeeTable";
import "./App.css";
import EmployeeModal from "./components/EmployeeModal";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <EmployeeModal/>
      <EmployeeTable />
    </div>
  );
}
