import axios from "axios";

const API_BASE_AUTH = "http://localhost:5000/api/auth";
const API_BASE_BOOKING = "http://localhost:5000/api/bookings";

export const registerUser = (data) =>
  axios.post(`${API_BASE_AUTH}/register`, data);
export const loginUser = (data) => axios.post(`${API_BASE_AUTH}/login`, data);
export const createBooking = (data) => axios.post(`${API_BASE_BOOKING}`, data);
