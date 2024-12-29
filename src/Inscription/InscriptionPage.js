import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './FormPage.css';

const Inscription = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState(""); 
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingEmail = localStorage.getItem("email");
    if (existingEmail === formData.email) {
      setErrorMessage("Cette adresse email est déjà utilisée. Veuillez vous connecter.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Les mots de passe ne correspondent pas.");
      return;
    }

    const [firstName, lastName] = formData.fullName.split(" ");

    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("email", formData.email);
    localStorage.setItem("password", formData.password);

    setErrorMessage(""); 
    navigate("/home"); 
  };

  return (
    <div className="form-container">
      <h1>Inscription</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Nom complet :</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            placeholder="Prénom Nom"
          />
        </div>
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
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirmez le mot de passe :</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">S'inscrire</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <p>Déjà un compte ? <a href="/login">Connectez-vous</a></p>
    </div>
  );
};

export default Inscription;
