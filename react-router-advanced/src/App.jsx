// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile"; // Ensure this file exists
import BlogPost from "./components/BlogPost"; 
import NotFound from "./components/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        
        {/* Protected Profile Route */}
        <Route 
          path="/profile" 
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } 
        />

     
        <Route path="/blog/:id" element={<BlogPost />} />

       
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
