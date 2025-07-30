import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "../../Styles/AdminBookings.css";
import {
  fetchBookings,
  updateBooking,
  deleteBooking,
} from "../../Services/api";
import EditBooking from "./EditBooking"; // Create this popup form

function AdminBookings() {
  const [bookings, setBookings] = useState([]);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = async () => {
    try {
      const res = await fetchBookings();
      setBookings(res.data);
    } catch (error) {
      console.error("Failed to fetch bookings", error);
    }
  };

  const handleEditClick = (booking) => {
    setSelectedBooking(booking);
    setShowEditPopup(true);
  };

  const handleDeleteClick = async (id) => {
    if (!window.confirm("Are you sure you want to delete this booking?"))
      return;
    try {
      await deleteBooking(id);
      setBookings(bookings.filter((b) => b.id !== id));
    } catch (error) {
      console.error("Failed to delete booking", error);
    }
  };

  const handleUpdateBooking = async (updatedData) => {
    try {
      const res = await updateBooking(updatedData.id, updatedData);
      setBookings(bookings.map((b) => (b.id === res.data.id ? res.data : b)));
      setShowEditPopup(false);
      setSelectedBooking(null);
    } catch (error) {
      console.error("Failed to update booking", error);
    }
  };

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
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.fullName}</td>
                <td>{booking.email}</td>
                <td>{booking.phone}</td>
                <td>{booking.travelDate?.slice(0, 10)}</td>
                <td>{booking.requests}</td>
                <td>{booking.destination}</td>
                <td>
                  <button
                    className="edit-btn"
                    onClick={() => handleEditClick(booking)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDeleteClick(booking.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showEditPopup && selectedBooking && (
        <EditBooking
          booking={selectedBooking}
          onClose={() => setShowEditPopup(false)}
          onConfirm={handleUpdateBooking}
        />
      )}
    </div>
  );
}

export default AdminBookings;
