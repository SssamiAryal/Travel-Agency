import axios from "axios";

const API_BASE_AUTH = "http://localhost:5000/api/auth";
const API_BASE_BOOKING = "http://localhost:5000/api/bookings";
const API_BASE_DESTINATION = "http://localhost:5000/api/destinations";
const API_BASE_ADMIN_BOOKING = "http://localhost:5000/api/admin-bookings";

export const registerUser = (data) =>
  axios.post(`${API_BASE_AUTH}/register`, data);

export const loginUser = (data) => axios.post(`${API_BASE_AUTH}/login`, data);

export const createBooking = (data) => axios.post(`${API_BASE_BOOKING}`, data);

export const fetchDestinations = () => axios.get(`${API_BASE_DESTINATION}`);

export const addDestination = (formData) =>
  axios.post(`${API_BASE_DESTINATION}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const deleteDestination = (id) =>
  axios.delete(`${API_BASE_DESTINATION}/${id}`);

// Booking APIs for admin
export const fetchBookings = () => axios.get(`${API_BASE_ADMIN_BOOKING}`);

export const updateBooking = (id, data) =>
  axios.put(`${API_BASE_ADMIN_BOOKING}/${id}`, data);

export const deleteBooking = (id) =>
  axios.delete(`${API_BASE_ADMIN_BOOKING}/${id}`);
