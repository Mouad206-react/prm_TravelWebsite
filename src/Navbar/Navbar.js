import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ handleLogout }) => {
  return (
    <nav>
      <h1>Travelo.</h1>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/reservation">Reservation</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <button onClick={handleLogout} className="logout-button">Déconnexion</button>
    </nav>
  );
};

export default Navbar;
