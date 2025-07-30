import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "../../Styles/Customer.css";

function Customer() {
  const [customers, setCustomers] = useState([
    { id: 1, fullName: "John Doe", email: "john@example.com" },
    { id: 2, fullName: "Jane Smith", email: "jane@example.com" },
    { id: 3, fullName: "Alice Johnson", email: "alice@example.com" },
  ]);

  const handleDelete = (id) => {
    setCustomers(customers.filter((customer) => customer.id !== id));
  };

  return (
    <div>
      <Sidebar />
      <div className="customer-container">
        <h2>Customers</h2>
        <table className="customer-table">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.fullName}</td>
                <td>{customer.email}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(customer.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Customer;
