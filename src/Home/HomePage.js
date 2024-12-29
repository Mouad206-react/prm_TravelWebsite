import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import travelDestinations from "./TravelDestinations"; 
import "./HomePage.css";
import Navbar from "../Navbar/Navbar"; 

function HomePage() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const firstName = localStorage.getItem("firstName");
    const lastName = localStorage.getItem("lastName");
    const email = localStorage.getItem("email");

    if (!email) {
      navigate("/login"); 
    } else {
      setUser({ firstName, lastName, email });
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("currentSession");
    navigate("/login");
  };

  const handleReserveClick = (destination) => {
    navigate("/reservation", { state: { destination } }); 
  };

  return (
    <div className="home-page">
      <Navbar handleLogout={handleLogout} />
      {user ? (
        <>
          <main>
            <h2>Bienvenue, {user.firstName} {user.lastName}</h2>
            <p>Découvrez nos meilleures destinations de voyage :</p>

            <div className="destinations">
              {travelDestinations.map((destination) => (
                <div className="destination-card" key={destination.id}>
                  <img src={destination.image} alt={destination.name} />
                  <h3>{destination.name}</h3>
                  <p>{destination.description}</p>
                  <p><strong>Prix:</strong> {destination.price}</p>
                  <button onClick={() => handleReserveClick(destination)}>Réserver</button>
                </div>
              ))}
            </div>
          </main>

          <footer>
            <p>&copy; 2024 Travel Explorer. Tous droits réservés.</p>
          </footer>
        </>
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  );
}

export default HomePage;
