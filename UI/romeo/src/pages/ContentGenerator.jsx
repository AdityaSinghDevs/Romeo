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
 * Content Generator page component
 * @returns {JSX.Element} Content Generator component
 */
const ContentGenerator = () => {
  return (
    <Box>
      <PageTitle variant="h4">Content Generator</PageTitle>
      <Typography>Generate AI-powered content for your social media.</Typography>
    </Box>
  );
};

export default ContentGenerator; 