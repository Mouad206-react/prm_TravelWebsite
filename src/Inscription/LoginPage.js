import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './FormPage.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (formData.email === storedEmail && formData.password === storedPassword) {
      //alert("Connexion réussie !");
      navigate("/home");
    } else {
      alert("Email ou mot de passe incorrect.");
    }
  };

  return (
    <div className="form-container">
      <h1>Connexion</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe :</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Se connecter</button>
      </form>
      <p>Pas encore de compte ? <a href="/inscription">Inscrivez-vous</a></p>
    </div>
  );
};

export default Login;
