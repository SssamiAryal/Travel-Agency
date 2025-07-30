import React from "react";
import "../../Styles/AdminDestination.css";
import Sidebar from "./Sidebar";

const destinations = [
  {
    id: 1,
    name: "Paris, France",
    price: 1200,
    description: "The city of love and lights.",
  },
  {
    id: 2,
    name: "Bali, Indonesia",
    price: 900,
    description: "Tropical paradise with beaches.",
  },
  {
    id: 3,
    name: "Kyoto, Japan",
    price: 1100,
    description: "Historical temples and gardens.",
  },
];

function AdminDestination() {
  return (
    <div className="admin-destination-layout">
      <Sidebar />
      <div className="admin-destination-container">
        <div className="admin-destination-header">
          <h2>Manage Destinations</h2>
          <button className="add-destination-button">Add Destination</button>
        </div>
        <table className="destination-table">
          <thead>
            <tr>
              <th>Destination Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {destinations.map((dest) => (
              <tr key={dest.id}>
                <td>{dest.name}</td>
                <td>${dest.price}</td>
                <td>{dest.description}</td>
                <td>
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminDestination;
