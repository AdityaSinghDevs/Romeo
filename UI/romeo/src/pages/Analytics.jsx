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
 * Analytics page component
 * @returns {JSX.Element} Analytics component
 */
const Analytics = () => {
  return (
    <Box>
      <PageTitle variant="h4">Analytics</PageTitle>
      <Typography>View detailed analytics and insights for your social media performance.</Typography>
    </Box>
  );
};

export default Analytics; 