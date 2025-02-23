import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const navbarStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    background: "rgba(255, 255, 255, 0.1)", // Transparent background
    backdropFilter: "blur(10px)", // Glass effect
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Soft shadow
    padding: "15px 2px", // Added more padding for spacing
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between", // Logo on left, links on right
    zIndex: 1000,
  };

  const logoStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    color: "black",
    textDecoration: "none",
  };

  const navLinksStyle = {
    display: "flex",
    gap: "20px",
    marginRight: "30px", // Adds space at the end
  };

  const linkStyle = {
    color: "black",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "bold",
    transition: "color 0.3s ease-in-out",
  };

  return (
    <nav style={navbarStyle}>
      {/* LOGO */}
      <Link to="/" style={logoStyle}>My Company</Link>

      {/* NAVIGATION LINKS */}
      <div style={navLinksStyle}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/services" style={linkStyle}>Services</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
