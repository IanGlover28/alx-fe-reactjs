import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onSearch(username.trim());
      setUsername(""); // Clear the input after submission
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter GitHub username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{
          padding: "10px",
          fontSize: "16px",
          marginRight: "10px",
          width: "250px",
        }}
      />
      <button type="submit" style={{ padding: "10px 20px", fontSize: "16px" }}>
        Search
      </button>
    </form>
  );
};

export default Search;
