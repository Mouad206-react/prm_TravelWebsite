import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./Home/HomePage";
import Inscription from "./Inscription/InscriptionPage";
import Login from "./Inscription/LoginPage";
import Navbar from "./Navbar/Navbar";
import ReservationPage from "./Reservation/ReservationPage";
import ContactPage from "./Contact/ContactPage";

function App() {
  return (
    <Router>
      <ConditionalNavbar />
      <Routes>
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} /> {/* Redirection pour les chemins inconnus */}
      </Routes>
    </Router>
  );
}




function ConditionalNavbar() {
  const location = useLocation();

  const hideNavbarPaths = ["/inscription", "/login"];

  return !hideNavbarPaths.includes(location.pathname) ? <Navbar /> : null;
}

export default App;
