import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Private/Home";
import Login from "./Pages/Public/Login";
import Register from "./Pages/Public/Register";
import LandingPage from "./Pages/Public/LandingPage";
import About from "./Pages/Private/About";
import Contact from "./Pages/Private/Contact";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
