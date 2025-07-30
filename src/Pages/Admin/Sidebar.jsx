import React, { useState, useRef, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../../Styles/Sidebar.css";

function Sidebar() {
  const [showLogout, setShowLogout] = useState(false);
  const popupRef = useRef();
  const navigate = useNavigate();

  const toggleLogout = () => setShowLogout(!showLogout);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
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
    <div className="sidebar">
      <div className="sidebar-header">Admin Dashboard</div>
      <div className="sidebar-menu-container">
        <ul className="sidebar-menu">
          <li onClick={() => navigate("/adminBookings")}>Bookings</li>
          <li>Destination</li>
          <li>Customer</li>
        </ul>
      </div>
      <div className="sidebar-logout-container">
        <FaUserCircle
          className="sidebar-user-icon"
          onClick={toggleLogout}
          style={{ marginLeft: "1.5rem" }}
        />
        {showLogout && (
          <div className="sidebar-logout-popup" ref={popupRef}>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
