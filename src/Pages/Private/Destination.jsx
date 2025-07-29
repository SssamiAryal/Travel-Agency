import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../../Styles/Destination.css";

const destinations = [
  {
    id: 1,
    name: "Paris, France",
    price: 1200,
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
    key: "paris",
  },
  {
    id: 2,
    name: "Bali, Indonesia",
    price: 900,
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    key: "bali",
  },
  {
    id: 3,
    name: "Kyoto, Japan",
    price: 1100,
    image:
      "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=800&q=80",
    key: "tokyo",
  },
  {
    id: 4,
    name: "New York, USA",
    price: 1400,
    image:
      "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=80",
    key: "newyork",
  },
  {
    id: 5,
    name: "Sydney, Australia",
    price: 1300,
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80",
    key: "sydney",
  },
  {
    id: 6,
    name: "Rome, Italy",
    price: 1000,
    image:
      "https://images.unsplash.com/photo-1505245208761-ba872912fac0?auto=format&fit=crop&w=800&q=80",
    key: "rome",
  },
];

function Destination() {
  const navigate = useNavigate();
  const [sortOrder, setSortOrder] = useState("default");

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
          {sortedDestinations.map(({ id, name, image, price, key }) => (
            <div key={id} className="destination">
              <span className="destination__price">${price}</span>
              <img src={image} alt={name} className="destination__image" />
              <div className="destination__info">
                <h3>{name}</h3>
                <button onClick={() => navigate(`/book/${key}`)}>
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
