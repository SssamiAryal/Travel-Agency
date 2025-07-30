import React from "react";
import "../../Styles/AdminHome.css";

import Sidebar from "./Sidebar";

function AdminHome() {
  return (
    <div className="admin-container">
      <Sidebar />
      <div className="admin-dashboard">
        <div className="dashboard-header">
          <h1>JourneyTrekker Admin Dashboard</h1>
          <p>Manage your travel agency with ease</p>
        </div>
        <div className="dashboard-stats">
          <div className="stat-card">
            <h2>Total Revenue</h2>
            <p className="stat-value">$234,567</p>
            <span className="stat-change green">+12.5% from last month</span>
          </div>
          <div className="stat-card">
            <h2>Active Bookings</h2>
            <p className="stat-value">1,234</p>
            <span className="stat-change green">+8.2% from last month</span>
          </div>
          <div className="stat-card">
            <h2>Travel Packages</h2>
            <p className="stat-value">89</p>
            <span className="stat-change green">+5.4% from last month</span>
          </div>
          <div className="stat-card">
            <h2>Total Customers</h2>
            <p className="stat-value">5,678</p>
            <span className="stat-change green">+15.3% from last month</span>
          </div>
        </div>
        <div className="dashboard-bottom">
          <div className="recent-bookings">
            <h3>Recent Bookings</h3>
            <div className="booking-item">
              <div>
                <p className="customer-name">John Smith</p>
                <p className="trip-name">Paris Adventure</p>
              </div>
              <div className="booking-status confirmed">
                $2,500 <span>confirmed</span>
              </div>
            </div>
            <div className="booking-item">
              <div>
                <p className="customer-name">Emma Johnson</p>
                <p className="trip-name">Tokyo Explorer</p>
              </div>
              <div className="booking-status pending">
                $3,200 <span>pending</span>
              </div>
            </div>
            <div className="booking-item">
              <div>
                <p className="customer-name">Michael Brown</p>
                <p className="trip-name">Bali Retreat</p>
              </div>
              <div className="booking-status confirmed">
                $1,800 <span>confirmed</span>
              </div>
            </div>
          </div>
          <div className="quick-actions">
            <h3>Quick Actions</h3>
            <div className="action-buttons">
              <button className="action-btn blue">Add Destination</button>
              <button className="action-btn orange">Add Customer</button>
              <button className="action-btn green">New Booking</button>
              <button className="action-btn darkblue">Add Flight</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
