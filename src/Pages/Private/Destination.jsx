import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../../Styles/Destination.css";

const destinations = [
  {
    id: 1,
    name: "Paris, France",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Bali, Indonesia",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Kyoto, Japan",
    image:
      "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "New York, USA",
    image:
      "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Sydney, Australia",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Rome, Italy",
    image:
      "https://images.unsplash.com/photo-1505245208761-ba872912fac0?auto=format&fit=crop&w=800&q=80",
  },
];

function Destinations() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <main className="destinations-container">
        <h1 className="destinations-title">Explore Our Destinations</h1>
        <div className="destinations-grid">
          {destinations.map(({ id, name, image }) => (
            <div key={id} className="destination-card">
              <img src={image} alt={name} className="destination-image" />
              <div className="destination-info">
                <h3>{name}</h3>
                <button
                  className="book-now-btn"
                  onClick={() => navigate(`/book/${id}`)}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Destinations;
