// Destination.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../../Styles/Destination.css";
import { fetchDestinations } from "../../Services/api";

function Destination() {
  const navigate = useNavigate();
  const [destinations, setDestinations] = useState([]);
  const [sortOrder, setSortOrder] = useState("default");

  useEffect(() => {
    fetchDestinations()
      .then((res) => setDestinations(res.data))
      .catch((err) => console.error(err));
  }, []);

  const sortedDestinations = [...destinations].sort((a, b) => {
    if (sortOrder === "lowToHigh") return a.price - b.price;
    if (sortOrder === "highToLow") return b.price - a.price;
    return 0;
  });

  return (
    <>
      <Navbar />
      <main className="destinations">
        <header className="destinations__header">
          <h1 className="destinations__title">Explore Our Destinations</h1>
          <div className="destinations__sort">
            <label htmlFor="sort">Sort by price:</label>
            <select
              id="sort"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="lowToHigh">Low to High</option>
              <option value="highToLow">High to Low</option>
            </select>
          </div>
        </header>
        <section className="destinations__grid">
          {sortedDestinations.map(({ id, name, image, image_url, price }) => (
            <div key={id} className="destination">
              <span className="destination__price">${price}</span>
              <img
                src={`http://localhost:5000${
                  image_url ? image_url : `/${image}`
                }`}
                alt={name}
                className="destination__image"
              />
              <div className="destination__info">
                <h3>{name}</h3>
                <button onClick={() => navigate(`/book/${id}`)}>
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Destination;
