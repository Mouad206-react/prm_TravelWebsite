import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './ReservationPage.css';
import Navbar from '../Navbar/Navbar'; 

function ReservationPage() {
  const [user, setUser] = useState(null);
  const [destination, setDestination] = useState(null);
  const [date, setDate] = useState('');
  const [numPeople, setNumPeople] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [paymentInfo, setPaymentInfo] = useState({ cardNumber: '', expiryDate: '', cvv: '' });
  const navigate = useNavigate();
  const location = useLocation(); 

  useEffect(() => {
    const firstName = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName');
    const email = localStorage.getItem('email');

    if (!email) {
      navigate('/login'); 
    } else {
      setUser({ firstName, lastName, email });
      setFirstName(firstName);
      setLastName(lastName);
      setEmail(email);
    }

    if (location.state) {
      setDestination(location.state.destination);
    }
  }, [navigate, location.state]);

  const handleLogout = () => {
    localStorage.removeItem("currentSession");
    navigate("/login");
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleReservationSubmit = (event) => {
    event.preventDefault();
    alert("Réservation réussie!");
  };

  return (
    <div className="reservation-page">
      <Navbar handleLogout={handleLogout} />

      {user && destination ? (
        <>
          <main>
            <h1>Réservez votre voyage</h1>
            <h3>Destination: {destination.name}</h3>
            <form className="reservation-form" onSubmit={handleReservationSubmit}>
              <div>
                <label>Destination</label>
                <input type="text" value={destination.name} disabled />
              </div>

              <div>
                <label>Date de départ</label>
                <input 
                  type="date" 
                  value={date} 
                  onChange={(e) => setDate(e.target.value)} 
                  required 
                />
              </div>

              <div>
                <label>Nombre de personnes</label>
                <input
                  type="number"
                  value={numPeople}
                  onChange={(e) => setNumPeople(e.target.value)}
                  required
                />
              </div>

              <h3>Informations personnelles</h3>
              <div>
                <label>Prénom</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label>Nom</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <h3>Informations de paiement</h3>
              <div>
                <label>Numéro de carte</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={paymentInfo.cardNumber}
                  onChange={handlePaymentChange}
                  required
                  placeholder="XXXX XXXX XXXX XXXX"
                />
              </div>

              <div>
                <label>Date d'expiration</label>
                <input
                  type="month"
                  name="expiryDate"
                  value={paymentInfo.expiryDate}
                  onChange={handlePaymentChange}
                  required
                />
              </div>

              <div>
                <label>CVV</label>
                <input
                  type="text"
                  name="cvv"
                  value={paymentInfo.cvv}
                  onChange={handlePaymentChange}
                  required
                  placeholder="XXX"
                />
              </div>

              <button type="submit">Réserver maintenant</button>
            </form>
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

export default ReservationPage;
