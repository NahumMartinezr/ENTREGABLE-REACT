import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

const UserDetails = ({ user }) => {
  return (
    <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
      {user && (
        <div>
          <Avatar alt={user.login} src={user.avatar_url} style={{ marginRight: '10px' }} />
          <Typography variant="h6">User: {user.login}</Typography>
          <Typography>Name: {user.name}</Typography>
          <Typography>Followers: {user.followers}</Typography>
          <Typography>Public Repositories: {user.public_repos}</Typography>
        </div>
      )}
    </Paper>
  );
};

export default UserDetails;
