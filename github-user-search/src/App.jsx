import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import { fetchGitHubUser } from './services/githubService';

const App = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async (username) => {
    setError('');
    setUser(null);
    try {
      const userData = await fetchGitHubUser(username);
      setUser(userData);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="app">
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {user && (
        <div>
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default App;
