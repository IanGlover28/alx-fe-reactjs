import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      backgroundColor: 'rgba(51, 51, 51, 0.8)', // Glassy effect with transparency
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 2px',
      width: '100%',
      position: 'fixed', // Fix to the top
      top: 0,
      left: 0,
      backdropFilter: 'blur(10px)' // Adds glassy blur effect
    }}>
      {/* Logo on the left */}
      <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>
        MyLogo
      </div>

      {/* Links on the right */}
      <div style={{ display: 'flex', gap: '15px' }}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/services" style={linkStyle}>Services</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
      </div>
    </nav>
  );
}

// Reusable link styles
const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  padding: '8px 12px',
  borderRadius: '5px',
  transition: 'background 0.3s ease',
};

export default Navbar;

