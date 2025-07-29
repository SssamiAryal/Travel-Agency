import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Private/Home";
import Login from "./Pages/Public/Login";
import Register from "./Pages/Public/Register";
import LandingPage from "./Pages/Public/LandingPage";
import About from "./Pages/Private/About";
import Contact from "./Pages/Private/Contact";
import Destination from "./Pages/Private/Destination";
import PrivateRoute from "./Pages/Private/PrivateRoutes";

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
    </Routes>
  );
}

export default App;
