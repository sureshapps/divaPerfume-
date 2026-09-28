import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-group left">
        <a href="#">Collection</a>
        <a href="#">Heritage</a>
        <a href="#">Craft</a>
      </div>

      <div className="nav-logo">
    DIVA
      </div>

      <div className="nav-group right">
        <a href="#">Journal</a>
        <a href="#">Stores</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
