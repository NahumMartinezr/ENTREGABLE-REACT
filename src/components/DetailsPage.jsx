// src/components/DetailsPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';

const DetailsPage = ({ details }) => {
  return (
    <div>
      <Link to="/">Back to Search Results</Link>
      <Typography variant="h4">{details.name}</Typography>
      <Typography>{details.description}</Typography>
      {/* Mostrar más detalles según sea necesario */}
    </div>
  );
};

export default DetailsPage;
