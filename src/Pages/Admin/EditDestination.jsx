// EditDestination.jsx
import React, { useState, useEffect } from "react";
import "../../Styles/EditDestination.css";

function EditDestination({ destination, onClose, onConfirm }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (destination) {
      setName(destination.name);
      setPrice(destination.price);
      setDescription(destination.description);
      setImage(null);
    }
  }, [destination]);

  const handleSubmit = () => {
    const updatedData = {
      id: destination.id,
      name,
      price,
      description,
      image,
    };
    onConfirm(updatedData);
  };

  return (
    <div className="overlay">
      <div className="popup">
        <h2>Edit Destination</h2>
        <input
          type="text"
          placeholder="Destination Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          min="0"
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <div className="buttons">
          <button type="button" className="btn btn-cancel" onClick={onClose}>
            Cancel
          </button>
          <button type="button" className="btn btn-add" onClick={handleSubmit}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditDestination;
