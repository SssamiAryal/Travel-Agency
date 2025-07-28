import React from "react";
import "../../Styles/Home.css";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="hero-section">
        <Navbar />
        <div className="hero-content">
          <h1 className="animated-heading">Your Adventure Awaits</h1>
          <p>
            Discover extraordinary destinations and create unforgettable
            memories with JourneyTrekker's expertly crafted travel experiences.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary animated-btn">
              Explore Destinations
            </button>
            <button className="btn-outline animated-btn">Learn More</button>
          </div>
        </div>
      </div>

      <div className="trip-search-box">
        <h3>Plan Your Perfect Trip</h3>
        <div className="search-fields">
          <input type="text" placeholder="Where to?" />
          <input type="date" />
          <select>
            <option>1 Traveler</option>
            <option>2 Travelers</option>
            <option>3 Travelers</option>
          </select>
          <button className="search-btn">Search Trips</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
