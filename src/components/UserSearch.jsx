import React, { useState } from 'react';

const UserSearch = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error('Error fetching user data', error);
      setUserData(null);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {userData && (
        <div>
          <h2>{userData.login}</h2>
          <p>{userData.name}</p>
          <p>Followers: {userData.followers}</p>
          <p>Public Repositories: {userData.public_repos}</p>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
