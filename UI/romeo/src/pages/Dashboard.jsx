import React from 'react';
import { Typography, Box } from '@mui/material';
import { styled } from 'styled-components';

const PageTitle = styled(Typography)`
  font-family: 'Orbitron', sans-serif;
  color: #00f3ff;
  margin-bottom: 24px;
  text-shadow: 0 0 10px rgba(0, 243, 255, 0.6);
`;

/**
 * Dashboard page component
 * @returns {JSX.Element} Dashboard component
 */
const Dashboard = () => {
  return (
    <Box>
      <PageTitle variant="h4">Dashboard</PageTitle>
      <Typography>Welcome to your ROMEO dashboard.</Typography>
    </Box>
  );
};

export default Dashboard; 