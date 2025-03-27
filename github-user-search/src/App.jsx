import React, { useState } from "react";
import Search from "./components/Search";
import { fetchUserData } from "./services/githubService";

const App = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async (username) => {
    setError("");
    setUser(null);
    setLoading(true);

    try {
      const userData = await fetchUserData(username);
      setUser(userData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>GitHub User Search</h1>
      <Search onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Looks like we can't find the user.</p>}
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
