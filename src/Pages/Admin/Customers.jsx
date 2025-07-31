import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "../../Styles/Customer.css";
import { getAllUsers, deleteUser } from "../../Services/api";

function Customer() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const res = await getAllUsers();
      setCustomers(res.data);
    } catch (err) {}
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setCustomers(customers.filter((customer) => customer.id !== id));
    } catch (err) {}
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
                <td>{customer.name}</td> {/* fixed here */}
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
