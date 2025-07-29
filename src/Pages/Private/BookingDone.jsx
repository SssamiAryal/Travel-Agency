import React from "react";
import "../../Styles/BookingDone.css";

function BookingDone({ onClose, fullName, destination, travelDate }) {
  return (
    <div className="booking-popup-overlay">
      <div className="booking-popup-card">
        <div className="booking-checkmark">
          <svg
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="#2196F3"
              strokeWidth="2.5"
              fill="#2196F3"
            />
            <path d="M16 8l-5.5 7L8 12" stroke="#ffffff" />
          </svg>
        </div>
        <h2>Booking Confirmed</h2>
        <p>
          Thank you, <strong>{fullName}</strong>!
        </p>
        <p>
          Your trip to <strong>{destination}</strong> on{" "}
          <strong>{new Date(travelDate).toLocaleDateString()}</strong> has been
          successfully booked.
        </p>
        <button onClick={onClose}>Go to Dashboard</button>
      </div>
    </div>
  );
}

export default BookingDone;
