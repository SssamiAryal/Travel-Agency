import React, { useEffect, useState } from "react";
import "../../Styles/AdminDestination.css";
import Sidebar from "./Sidebar";
import AddDestination from "./AddDestinationss";
import { fetchDestinations, addDestination } from "../../Services/api";

function AdminDestination() {
  const [destinations, setDestinations] = useState([]);
  const [showAddPopup, setShowAddPopup] = useState(false);

  useEffect(() => {
    fetchDestinations()
      .then((res) => setDestinations(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleAddClick = () => {
    setShowAddPopup(true);
  };

  const handleClosePopup = () => {
    setShowAddPopup(false);
  };

  const handleAddDestination = async (newDest) => {
    const formData = new FormData();
    formData.append("name", newDest.name);
    formData.append("price", newDest.price);
    formData.append("description", newDest.description);
    formData.append("image", newDest.image);

    try {
      const response = await addDestination(formData);
      setDestinations([...destinations, response.data]);
      setShowAddPopup(false);
    } catch (error) {
      console.error("Failed to add destination", error);
    }
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
              <th>Image</th>
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
                  <img
                    src={`http://localhost:5000${
                      dest.image_url ? dest.image_url : `/${dest.image}`
                    }`}
                    alt={dest.name}
                    style={{
                      width: "100px",
                      height: "60px",
                      objectFit: "cover",
                    }}
                  />
                </td>
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
