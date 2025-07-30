import React, { useState } from "react";
import "../../Styles/AddDestination.css";

function AddDestination({ onClose, onAdd }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price || !description || !image) return;
    const newDestination = { name, price: Number(price), description, image };
    onAdd(newDestination);
    onClose();
  };

  return (
    <div className="overlay">
      <div className="popup">
        <h2>Add Destination</h2>
        <form onSubmit={handleSubmit} className="destination-form">
          <label>Destination Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label>Price</label>
          <input
            type="number"
            min="0"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <label>Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
          <div className="buttons">
            <button type="submit" className="btn btn-add">
              Add
            </button>
            <button type="button" className="btn btn-cancel" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddDestination;
