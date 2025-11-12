import React from "react";
import "../App.css";

export default function EmployeeModal({ employee, onClose }) {
  if (!employee) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="modal-close">✕</button>
        <div className="flex flex-col items-center mb-4">
          <img
            src={employee.photo}
            alt={employee.name}
            className="modal-photo"
          />
          <h2 className="text-2xl font-bold mt-2">{employee.name}</h2>
          <div className="flex gap-2 mt-1">
            <span className="badge">{employee.position}</span>
            <span className="badge">{employee.department}</span>
          </div>
        </div>
        <div className="modal-info">
          <div className="info-card"><strong>Email:</strong> {employee.email}</div>
          <div className="info-card"><strong>Phone:</strong> {employee.phone}</div>
          <div className="info-card"><strong>Address:</strong> {employee.address}</div>
          <div className="info-card"><strong>Salary:</strong> ${employee.salary}</div>
          <div className="info-card"><strong>Date Joined:</strong> {employee.dateJoined}</div>
        </div>
      </div>
    </div>
  );
}
