import React from "react";
import { useNavigate } from "react-router-dom";
import "../../Styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  return (
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
  );
}

export default Navbar;
