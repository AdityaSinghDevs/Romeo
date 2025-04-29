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
 * Settings page component
 * @returns {JSX.Element} Settings component
 */
const Settings = () => {
  return (
    <Box>
      <PageTitle variant="h4">Settings</PageTitle>
      <Typography>Configure your ROMEO preferences and application settings.</Typography>
    </Box>
  );
};

export default Settings; 