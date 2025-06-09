import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/Home.css";


function Home() {
  const navigate = useNavigate();

  return (
    
    <div className="home">
      <div className="hero-section">
        <nav className="navbar">
          <div className="logo">JourneyTrekker</div>
          <ul className="nav-links">
            <li>Home</li>
            <li>Destinations</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <div className="nav-buttons">
            <button className="book-now-btn">Book Now</button>
            <button className="login-btn" onClick={() => navigate("/login")}>
              Login
            </button>
          </div>
        </nav>

        <div className="hero-content">
          <h1>Your Adventure Awaits</h1>
          <p>
            Discover extraordinary destinations and create unforgettable
            memories with JourneyTrekker's expertly crafted travel experiences.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Explore Destinations</button>
            <button className="btn-outline">Learn More</button>
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
