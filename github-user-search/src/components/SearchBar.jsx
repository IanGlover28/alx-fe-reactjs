import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleSearch = () => {
    if (input.trim()) {
      onSearch(input.trim());
      setInput('');
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search GitHub username..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
