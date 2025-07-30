import React, { useState, useEffect } from "react";
import "../../Styles/EditBooking.css";

function EditBooking({ booking, onClose, onConfirm }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [requests, setRequests] = useState("");
  const [destination, setDestination] = useState("");

  useEffect(() => {
    if (booking) {
      setFullName(booking.fullName);
      setEmail(booking.email);
      setPhone(booking.phone);
      setTravelDate(booking.travelDate?.slice(0, 10));
      setRequests(booking.requests || "");
      setDestination(booking.destination);
    }
  }, [booking]);

  const handleSubmit = () => {
    onConfirm({
      id: booking.id,
      fullName,
      email,
      phone,
      travelDate,
      requests,
      destination,
    });
    onClose();
  };

  return (
    <div className="overlay">
      <div className="popup">
        <h2>Edit Booking</h2>
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <input
          type="date"
          placeholder="Travel Date"
          value={travelDate}
          onChange={(e) => setTravelDate(e.target.value)}
          required
        />
        <textarea
          placeholder="Requests"
          value={requests}
          onChange={(e) => setRequests(e.target.value)}
        />
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
        />
        <div className="buttons">
          <button className="btn btn-cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="btn btn-add" onClick={handleSubmit}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditBooking;
