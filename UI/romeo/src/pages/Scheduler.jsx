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
 * Scheduler page component
 * @returns {JSX.Element} Scheduler component
 */
const Scheduler = () => {
  return (
    <Box>
      <PageTitle variant="h4">Schedule Post</PageTitle>
      <Typography>Schedule your social media posts for optimal engagement.</Typography>
    </Box>
  );
};

export default Scheduler; 