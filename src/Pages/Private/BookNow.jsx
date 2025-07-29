import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../../Styles/BookNow.css";

const destinationsData = {
  paris: {
    name: "Paris",
    photo:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
    description:
      "The City of Light, known for its art, fashion, and iconic landmarks like the Eiffel Tower and Louvre Museum.",
  },
  tokyo: {
    name: "Tokyo",
    photo:
      "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=800&q=80",
    description:
      "Japan's bustling capital, famous for its modern skyline, traditional temples, and delicious cuisine.",
  },
  bali: {
    name: "Bali",
    photo:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    description:
      "An Indonesian island paradise known for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs.",
  },
};

function BookNow() {
  const { destinationId } = useParams();
  const navigate = useNavigate();
  const destination = destinationsData[destinationId];

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    travelDate: "",
    travelers: "1",
    requests: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!destination) {
      navigate("/");
    }
  }, [destination, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!destination) return null;

  return (
    <div className="booknow-container">
      <div className="destination-info">
        <img src={destination.photo} alt={destination.name} />
        <h1>{destination.name}</h1>
        <p>{destination.description}</p>
      </div>

      {!submitted ? (
        <form className="booking-form" onSubmit={handleSubmit}>
          <h2>Book Your Trip</h2>

          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
          />

          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />

          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Enter your phone number"
          />

          <label>Travel Date</label>
          <input
            type="date"
            name="travelDate"
            value={formData.travelDate}
            onChange={handleChange}
            required
          />

          <label>Number of Travelers</label>
          <select
            name="travelers"
            value={formData.travelers}
            onChange={handleChange}
          >
            {[...Array(10)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>

          <label>Special Requests</label>
          <textarea
            name="requests"
            value={formData.requests}
            onChange={handleChange}
            placeholder="Any special requests?"
          ></textarea>

          <button type="submit" className="btn-submit">
            Confirm Booking
          </button>
        </form>
      ) : (
        <div className="confirmation-message">
          <h2>Thank you, {formData.fullName}!</h2>
          <p>
            Your booking for {destination.name} on {formData.travelDate} has
            been received.
          </p>
          <button onClick={() => navigate("/home")} className="btn-back-home">
            Back to Home
          </button>
        </div>
      )}
    </div>
  );
}

export default BookNow;
