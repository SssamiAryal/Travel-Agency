import React, { useState } from "react";
import "../../Styles/AdminDestination.css";
import Sidebar from "./Sidebar";
import AddDestination from "./AddDestinationss";

const initialDestinations = [
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
  const [destinations, setDestinations] = useState(initialDestinations);
  const [showAddPopup, setShowAddPopup] = useState(false);

  const handleAddClick = () => {
    setShowAddPopup(true);
  };

  const handleClosePopup = () => {
    setShowAddPopup(false);
  };

  const handleAddDestination = (newDest) => {
    const id = destinations.length
      ? destinations[destinations.length - 1].id + 1
      : 1;
    setDestinations([...destinations, { id, ...newDest }]);
  };

  return (
    <div className="admin-destination-layout">
      <Sidebar />
      <div className="admin-destination-container">
        <div className="admin-destination-header">
          <h2>Manage Destinations</h2>
          <button className="add-destination-button" onClick={handleAddClick}>
            Add Destination
          </button>
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
      {showAddPopup && (
        <AddDestination
          onClose={handleClosePopup}
          onAdd={handleAddDestination}
        />
      )}
    </div>
  );
}

export default AdminDestination;
