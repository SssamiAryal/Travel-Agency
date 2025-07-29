import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "../../Styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const [showLogout, setShowLogout] = useState(false);
  const popupRef = useRef();

  const toggleLogout = () => setShowLogout(!showLogout);

  const handleLogout = () => {
    setShowLogout(false);
    navigate("/login");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowLogout(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => navigate("/")}>
        JourneyTrekker
      </div>

      <div className="nav-right">
        <ul className="nav-links">
          <li onClick={() => navigate("/Home")}>Home</li>
          <li onClick={() => navigate("/destination")}>Destinations</li>
          <li onClick={() => navigate("/about")}>About</li>
          <li onClick={() => navigate("/contact")}>Contact</li>
        </ul>

        <div className="nav-buttons">
          <div className="user-icon-wrapper" ref={popupRef}>
            <FaUserCircle
              className="user-icon"
              size={28}
              onClick={toggleLogout}
            />
            {showLogout && (
              <div className="logout-popup" onClick={handleLogout}>
                <div className="logout-box">
                  <span>Are you sure you want to logout?</span>
                  <button className="logout-confirm-btn">Logout</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
