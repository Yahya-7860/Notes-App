import React, { useState } from "react";
import "../CSS Folder/Navbar.css";
import { useNavigate } from "react-router-dom";
import UserProfileCard from "./UserProfileCard";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("username");
    navigate("/login");
  };
  const username = localStorage.getItem("username");
  const userId = localStorage.getItem("userId");

  const handleUserProfileCard = () => {
    setIsOpen(true);
  };
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="src/images/logo.png" className="logoImage" />
        <h1>Notes App</h1>
      </div>
      <div className="navbar-links">
        <h3 className="welcome-message">Hello, {username}</h3>
        <i
          className="fa-solid fa-user userProfile"
          onClick={handleUserProfileCard}
        ></i>
        <button className="navbar-button logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
      {isOpen && <UserProfileCard {...{ username, setIsOpen, userId }} />}
    </nav>
  );
};

export default Navbar;
