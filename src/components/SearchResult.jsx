import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const SearchResult = ({ result }) => {
  return (
    <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
      {result && (
        <div>
          <Link to={`/details/${result.id}`}>
            <Typography variant="h6">Repository: {result.name}</Typography>
          </Link>
          <Typography>Description: {result.description}</Typography>
          <Typography>Stars: {result.stargazers_count}</Typography>
          <Typography>Forks: {result.forks}</Typography>
        </div>
      )}
    </Paper>
  );
};

export default SearchResult;
