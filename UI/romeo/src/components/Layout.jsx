import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, useMediaQuery } from '@mui/material';
import { styled, keyframes } from 'styled-components';
import Sidebar from './Sidebar';

// Simplified constant
const DEFAULT_DRAWER_WIDTH = 250;

// Add film grain animation
const grainAnimation = keyframes`
  0%, 100% { transform: translate(0, 0) }
  10% { transform: translate(-5%, -5%) }
  20% { transform: translate(-10%, 5%) }
  30% { transform: translate(5%, -10%) }
  40% { transform: translate(-5%, 15%) }
  50% { transform: translate(-10%, 5%) }
  60% { transform: translate(15%, 0%) }
  70% { transform: translate(0%, 10%) }
  80% { transform: translate(-15%, 0%) }
  90% { transform: translate(10%, 5%) }
`;

// Add film scratch animation
const scratchAnimation = keyframes`
  0% { transform: translateX(0) translateY(0) }
  10% { transform: translateX(100px) translateY(-70px) }
  20% { transform: translateX(-100px) translateY(70px) }
  30% { transform: translateX(200px) translateY(140px) }
  40% { transform: translateX(-200px) translateY(-140px) }
  50% { transform: translateX(0) translateY(0) }
  60% { transform: translateX(100px) translateY(-70px) }
  70% { transform: translateX(-100px) translateY(70px) }
  80% { transform: translateX(200px) translateY(140px) }
  90% { transform: translateX(-200px) translateY(-140px) }
  100% { transform: translateX(0) translateY(0) }
`;

// Film grain overlay
const FilmGrain = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.15'/%3E%3C/svg%3E");
  opacity: 0.07;
  pointer-events: none;
  z-index: 2000;
  mix-blend-mode: overlay;
  animation: ${grainAnimation} 8s steps(10) infinite;
`;

// Film scratches overlay
const FilmScratches = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: 
    linear-gradient(90deg, transparent 95%, rgba(255,255,255,0.05) 95.1%, transparent 95.2%),
    linear-gradient(90deg, transparent 80%, rgba(255,255,255,0.05) 80.1%, transparent 80.2%),
    linear-gradient(90deg, transparent 65%, rgba(255,255,255,0.1) 65.1%, transparent 65.2%);
  background-size: 300% 100%;
  opacity: 0.05;
  pointer-events: none;
  z-index: 2001;
  mix-blend-mode: overlay;
  animation: ${scratchAnimation} 10s linear infinite;
`;

/**
 * Main content container with responsive margin
 */
const MainContent = styled(Box)`
  flex: 1;
  padding: 24px;
  margin-left: ${props => props.isMobile ? '0' : `${props.sidebarWidth}px`};
  min-height: 100vh;
  position: relative;
  background: 
    radial-gradient(circle at 95% 95%, rgba(255, 140, 50, 0.25) 0%, transparent 35%),
    radial-gradient(circle at 90% 85%, rgba(255, 200, 50, 0.2) 0%, transparent 40%),
    radial-gradient(circle at 98% 98%, rgba(255, 100, 50, 0.1) 0%, transparent 20%),
    linear-gradient(to top left, rgba(97, 1, 148, 0.7) 0%, #2e0b45 25%, #180526 50%, #0a0312 75%, #000000 100%);
  color: #b388d1;
  transition: margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  h1, h2, h3, h4, h5, h6 {
    color: #d4b6ff;
  }
  
  a {
    color: #9c45e5;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
      color: #b06ef0;
    }
  }
  
  @media (max-width: 900px) {
    padding: 16px;
    padding-top: 72px; /* Extra space for mobile menu button */
    margin-left: 0;
  }
`;

/**
 * Layout component that wraps the application content with a sidebar
 * @returns {JSX.Element} Layout component
 */
const Layout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(DEFAULT_DRAWER_WIDTH);
  const isMobile = useMediaQuery('(max-width:900px)');

  // Reset sidebar width when switching between mobile and desktop
  useEffect(() => {
    if (isMobile) {
      setSidebarWidth(0);
    } else {
      setSidebarWidth(DEFAULT_DRAWER_WIDTH);
    }
  }, [isMobile]);

  // Toggle drawer state for mobile
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Handle sidebar width change - simplified
  const handleSidebarWidthChange = (width) => {
    if (!isMobile) {
      setSidebarWidth(width);
    }
  };

  return (
    <Box 
      sx={{ 
        display: 'flex',
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
        background: `
          radial-gradient(circle at 95% 95%, rgba(255, 140, 50, 0.25) 0%, transparent 35%),
          radial-gradient(circle at 90% 85%, rgba(255, 200, 50, 0.2) 0%, transparent 40%),
          radial-gradient(circle at 98% 98%, rgba(255, 100, 50, 0.1) 0%, transparent 20%),
          linear-gradient(to top left, rgba(97, 1, 148, 0.7) 0%, #2e0b45 25%, #180526 50%, #0a0312 75%, #000000 100%)
        `
      }}
    >
      <Sidebar 
        open={mobileOpen} 
        toggleDrawer={handleDrawerToggle}
        onWidthChange={handleSidebarWidthChange}
      />
      <MainContent 
        isMobile={isMobile}
        sidebarWidth={sidebarWidth}
      >
        <Outlet />
      </MainContent>
      <FilmGrain />
      <FilmScratches />
    </Box>
  );
};

export default Layout; 