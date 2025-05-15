import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="/src/assets/Images/Icon.jpeg"
          alt="Task Management Logo"
          className="logo"
        />
        <h1>TaskManager</h1>
      </div>

      <ul className="navbar-menu">
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#pricing">Pricing</a>
        </li>
        <li>
          <a href="#resources">Resources</a>
        </li>
      </ul>

      <div className="navbar-right">
        <Link to="/log-in" className="sign-in-btn">
          SIGN IN
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
