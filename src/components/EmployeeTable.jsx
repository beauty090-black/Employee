import React, { useState, useEffect } from "react";
import EmployeeModal from "./EmployeeModal";
import employeesData from "../data/employees.json";
import "../App.css";

export default function EmployeeTable() {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);
  const [paginationType, setPaginationType] = useState("offset");

  useEffect(() => {
    setEmployees(employeesData);
  }, []);
  const filtered = employees.filter((emp) =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
 const totalPages = Math.ceil(filtered.length / pageSize);
  const offset = (currentPage - 1) * pageSize;
  const offsetPageData = filtered.slice(offset, offset + pageSize);
  const cursorStart = (currentPage - 1) * pageSize;
  const cursorEnd = cursorStart + pageSize;
  const cursorPageData = filtered.slice(cursorStart, cursorEnd);

  const currentData =
    paginationType === "offset" ? offsetPageData : cursorPageData;

  return (
    <div className="dashboard-container">
      <h1>Employee Management Dashboard</h1>

      <input
        type="text"
        placeholder="Search employee..."
        className="search-input"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setCurrentPage(1);
        }}
      />
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "0.5rem" }}>
        <label style={{ marginRight: "0.5rem" }}>Pagination Type:</label>
        <select
          value={paginationType}
          onChange={(e) => setPaginationType(e.target.value)}
          style={{ padding: "0.25rem", borderRadius: "4px", border: "1px solid #d1d5db" }}
        >
          <option value="offset">Offset</option>
          <option value="cursor">Cursor</option>
        </select>
      </div>
      <div style={{ overflowX: "auto" }}>
        <table className="employee-table">
          <thead>
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Position</th>
              <th>Department</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((emp) => (
              <tr
                key={emp.id}
                onClick={() => setSelectedEmployee(emp)}
                className="hover-row"
              >
                <td>
                  <img src={emp.photo} alt={emp.name} className="employee-photo" />
                </td>
                <td>{emp.name}</td>
                <td>
                  <span className="badge">{emp.position}</span>
                </td>
                <td>
                  <span className="badge">{emp.department}</span>
                </td>
                <td>{emp.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>


      <EmployeeModal
        employee={selectedEmployee}
        onClose={() => setSelectedEmployee(null)}
      />
    </div>
  );
}
