import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaUsers,
  FaStickyNote,
} from "react-icons/fa";
import "../../Styles/BookNow.css";

const destinationsData = {
  paris: {
    name: "Paris",
    photo:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1000&q=80",
    description:
      "The City of Light, known for its art, fashion, and iconic landmarks like the Eiffel Tower and Louvre Museum.",
  },
  bali: {
    name: "Bali",
    photo:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
    description:
      "An Indonesian island paradise known for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs.",
  },
  tokyo: {
    name: "Tokyo",
    photo:
      "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=1000&q=80",
    description:
      "Japan's bustling capital, famous for its modern skyline, traditional temples, and delicious cuisine.",
  },
  newyork: {
    name: "New York",
    photo:
      "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=1000&q=80",
    description:
      "The city that never sleeps, known for its iconic skyline, Broadway shows, and diverse culture.",
  },
  sydney: {
    name: "Sydney",
    photo:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1000&q=80",
    description:
      "Famous for its Sydney Opera House and beautiful harbor, offering stunning beaches and vibrant city life.",
  },
  rome: {
    name: "Rome",
    photo:
      "https://images.unsplash.com/photo-1505245208761-ba872912fac0?auto=format&fit=crop&w=1000&q=80",
    description:
      "The Eternal City, rich in history, with ancient ruins, art, and delicious Italian cuisine.",
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
      <button className="btn-back" onClick={() => navigate(-1)}>
        <FaArrowLeft /> Back
      </button>

      <div className="destination-info">
        <img src={destination.photo} alt={destination.name} />
        <h1>{destination.name}</h1>
        <p>{destination.description}</p>
      </div>

      {!submitted ? (
        <form className="booking-form" onSubmit={handleSubmit}>
          <h2>Book Your Trip</h2>

          <label>
            <div className="input-icon-wrapper">
              <FaUser className="input-icon" />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="Full Name"
              />
            </div>
          </label>

          <label>
            <div className="input-icon-wrapper">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email Address"
              />
            </div>
          </label>

          <label>
            <div className="input-icon-wrapper">
              <FaPhone className="input-icon" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Phone Number"
              />
            </div>
          </label>

          <label>
            <div className="input-icon-wrapper">
              <FaCalendarAlt className="input-icon" />
              <input
                type="date"
                name="travelDate"
                value={formData.travelDate}
                onChange={handleChange}
                required
              />
            </div>
          </label>

          <label>
            <div className="input-icon-wrapper">
              <FaUsers className="input-icon" />
              <select
                name="travelers"
                value={formData.travelers}
                onChange={handleChange}
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1} Traveler{i > 0 ? "s" : ""}
                  </option>
                ))}
              </select>
            </div>
          </label>

          <label>
            <div className="input-icon-wrapper">
              <FaStickyNote className="input-icon" />
              <textarea
                name="requests"
                value={formData.requests}
                onChange={handleChange}
                placeholder="Special Requests (optional)"
              />
            </div>
          </label>

          <button type="submit" className="btn-submit">
            Confirm Booking
          </button>
        </form>
      ) : (
        <div className="confirmation-message">
          <h2>Thank you, {formData.fullName}!</h2>
          <p>
            Your booking for <strong>{destination.name}</strong> on{" "}
            <strong>{formData.travelDate}</strong> has been received.
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
