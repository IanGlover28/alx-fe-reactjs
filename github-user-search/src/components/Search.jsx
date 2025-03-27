import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onSearch(username.trim());
      setUsername("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
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
  );
};

export default Search;
