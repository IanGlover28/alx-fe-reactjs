import React, { useState } from "react";
import Search from "./components/Search";
import axios from "axios";
import "tailwindcss"

const App = () => {
  const [user, setUser] = useState(null); // To store user data
  const [loading, setLoading] = useState(false); // To show loading state
  const [error, setError] = useState(""); // To show error messages

  const fetchUserData = async (username) => {
    setLoading(true);
    setError("");
    setUser(null);

    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUser(response.data);
    } catch (err) {
      setError("Looks like we can't find the user.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>GitHub User Search</h1>
      <Search onSearch={fetchUserData} />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {user && (
        <div style={{ marginTop: "20px" }}>
          <img
            src={user.avatar_url}
            alt={user.login}
            style={{ width: "150px", borderRadius: "50%" }}
          />
          <h2>{user.name || "No Name Available"}</h2>
          <p>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "blue", textDecoration: "underline" }}
            >
              Visit GitHub Profile
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
