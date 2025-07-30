import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Private/Home";
import Login from "./Pages/Public/Login";
import Register from "./Pages/Public/Register";
import LandingPage from "./Pages/Public/LandingPage";
import About from "./Pages/Private/About";
import Contact from "./Pages/Private/Contact";
import Destination from "./Pages/Private/Destination";
import BookNow from "./Pages/Private/BookNow";
import PrivateRoute from "./Pages/Private/PrivateRoutes";
import AdminHome from "./Pages/Admin/AdminHome";
import AdminBookings from "./Pages/Admin/AdminBookings";
import Customers from "./Pages/Admin/Customers";
import AdminDestination from "./Pages/Admin/AdminDestination";

function App() {
  return (
    <Routes>
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/about"
        element={
          <PrivateRoute>
            <About />
          </PrivateRoute>
        }
      />
      <Route
        path="/contact"
        element={
          <PrivateRoute>
            <Contact />
          </PrivateRoute>
        }
      />
      <Route
        path="/destination"
        element={
          <PrivateRoute>
            <Destination />
          </PrivateRoute>
        }
      />
      <Route
        path="/book/:destinationId"
        element={
          <PrivateRoute>
            <BookNow />
          </PrivateRoute>
        }
      />
      <Route path="/adminhome" element={<AdminHome />} />
      <Route path="/adminBookings" element={<AdminBookings />} />
      <Route path="/adminCustomer" element={<Customers />} />
      <Route path="/adminDestination" element={<AdminDestination />} />
    </Routes>
  );
}

export default App;
