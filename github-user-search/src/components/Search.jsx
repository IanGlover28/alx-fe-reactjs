import React, { useState } from "react";
import axios from "axios";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    setUser(null);
    setLoading(true);

    try {
      const response = await axios.get(`https://api.github.com/users/${username.trim()}`);
      setUser(response.data);
    } catch {
      setUser(null); // Reset user data to indicate no match found
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <form onSubmit={handleSearch} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            padding: "10px",
            fontSize: "16px",
            width: "250px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            marginLeft: "10px",
          }}
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}

      {!loading && user && (
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

      {!loading && !user && username && <p>"Looks like we can't find the user"</p>}
    </div>
  );
};

export default Search;
