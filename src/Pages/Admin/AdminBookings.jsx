import React from "react";
import Sidebar from "./Sidebar";
import "../../Styles/AdminBookings.css";

const bookingsData = [
  {
    id: 1,
    fullName: "John Doe",
    email: "john@example.com",
    phone: "1234567890",
    travelDate: "2025-08-15",
    requests: "Vegetarian meals",
    destination: "Pokhara",
  },
  {
    id: 2,
    fullName: "Jane Smith",
    email: "jane@example.com",
    phone: "9876543210",
    travelDate: "2025-09-01",
    requests: "Window seat",
    destination: "Chitwan",
  },
];

function AdminBookings() {
  return (
    <div className="admin-bookings-container">
      <Sidebar />
      <div className="admin-bookings-content">
        <h2>All Bookings</h2>
        <table className="bookings-table">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Travel Date</th>
              <th>Requests</th>
              <th>Destination</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookingsData.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.fullName}</td>
                <td>{booking.email}</td>
                <td>{booking.phone}</td>
                <td>{booking.travelDate}</td>
                <td>{booking.requests}</td>
                <td>{booking.destination}</td>
                <td>
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminBookings;
