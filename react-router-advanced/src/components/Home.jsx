// src/components/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../components/AuthContext";

function Home() {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <nav>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/blog/1">Blog Post 1</Link></li>
        </ul>
      </nav>
      
      {/* Login and Logout Buttons */}
      {isAuthenticated ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
}

export default Home;
