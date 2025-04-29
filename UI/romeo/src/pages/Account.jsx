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
 * Account page component
 * @returns {JSX.Element} Account component
 */
const Account = () => {
  return (
    <Box>
      <PageTitle variant="h4">Account</PageTitle>
      <Typography>Manage your account details and preferences.</Typography>
    </Box>
  );
};

export default Account; 