// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResult';
import UserDetails from './components/UserDetails';
import DetailsPage from './components/DetailsPage';
import Pagination from '@mui/material/Pagination';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [currentQuery, setCurrentQuery] = useState('');

  const handleSearch = async (query, page = 1) => {
    try {
      const perPage = 10;
      const userResponse = await fetch(`https://api.github.com/search/users?q=${query}&page=${page}&per_page=${perPage}`);
      const repoResponse = await fetch(`https://api.github.com/search/repositories?q=${query}&page=${page}&per_page=${perPage}`);

      const userData = await userResponse.json();
      const repoData = await repoResponse.json();

      setSearchResults([...userData.items, ...repoData.items]);
      setTotalPages(Math.ceil(Math.max(userData.total_count, repoData.total_count) / perPage));
      setCurrentPage(page);
      setCurrentQuery(query);
    } catch (error) {
      console.error('Error fetching data', error);
      setSearchResults([]);
    }
  };

  const handlePageChange = (page) => {
    handleSearch(currentQuery, page);
  };

  return (
    <Router>
      <Container maxWidth="md" style={{ marginTop: '20px' }}>
        <Typography variant="h4" align="center" style={{ marginBottom: '20px' }}>
          Busqueda de Github
        </Typography>
        <SearchBar onSearch={handleSearch} />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Typography variant="h5" style={{ marginTop: '20px' }}>
                  Search Results:
                </Typography>
                {searchResults.map((result) => (
                  <div key={result.id}>
                    {result.type === 'User' ? (
                      <UserDetails user={result} />
                    ) : (
                      <SearchResult result={result} />
                    )}
                  </div>
                ))}
                {searchResults.length > 0 && (
                  <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={(event, page) => handlePageChange(page)}
                  />
                )}
              </div>
            }
          />
          <Route path="/details/:id" element={<DetailsPage />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
