import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { styled, keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Drawer as MuiDrawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  IconButton, 
  Box, 
  useMediaQuery,
  Typography,
  Tooltip
} from '@mui/material';
import { 
  Dashboard as DashboardIcon, 
  Edit as ContentIcon, 
  Schedule as ScheduleIcon, 
  BarChart as AnalyticsIcon, 
  Settings as SettingsIcon, 
  AccountCircle as AccountIcon,
  Menu as MenuIcon
} from '@mui/icons-material';

const MIN_DRAWER_WIDTH = 100;
const DEFAULT_DRAWER_WIDTH = 250;

const gradientSlide = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Create the drawer directly with styled component
const StyledDrawer = styled(MuiDrawer)`
  .MuiDrawer-paper {
    width: ${props => props.isCollapsed ? MIN_DRAWER_WIDTH : DEFAULT_DRAWER_WIDTH}px;
    background-color: #111111;
    box-shadow: 0 0 7px rgba(97, 1, 148, 0.2);
    transition: width 0.3s ease;
    border-right: 1px solid rgba(97, 1, 148, 0.3);
  }
  
  .MuiBackdrop-root {
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(4px);
  }
`;

const StyledListItemButton = styled(ListItemButton)`
  margin: 8px;
  border-radius: 6px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    background-color: rgba(97, 1, 148, 0.15);
    box-shadow: 0 0 6px rgba(97, 1, 148, 0.4);
  }
  
  &.active {
    background: rgba(17, 17, 17, 0.9);
    box-shadow: 0 0 10px rgba(97, 1, 148, 0.5);
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        to right,
        rgba(97, 1, 148, 0.05) 0%,
        rgba(97, 1, 148, 0.3) 50%,
        rgba(97, 1, 148, 0.05) 100%
      );
      background-size: 200% 100%;
      animation: ${gradientSlide} 3s ease infinite;
      z-index: 0;
      border-radius: 6px;
    }
  }
`;

const StyledIcon = styled(Box)`
  color: ${props => props.active ? '#610194' : '#f0f0f0'};
  filter: ${props => props.active ? 'drop-shadow(0 0 5px #610194)' : 'none'};
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
  
  ${StyledListItemButton}:hover & {
    color: #610194;
    filter: drop-shadow(0 0 4px #610194);
  }
`;

const StyledText = styled(Typography)`
  font-family: 'Orbitron', sans-serif;
  color: ${props => props.active ? '#610194' : '#f0f0f0'};
  letter-spacing: ${props => props.sidebarWidth < 200 ? '0' : '0.5px'};
  font-weight: ${props => props.active ? '600' : '400'};
  text-shadow: ${props => props.active ? '0 0 5px rgba(97, 1, 148, 0.5)' : 'none'};
  transition: all 0.3s ease;
  white-space: nowrap;
  position: relative;
  z-index: 1;
`;

const LogoContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  margin-bottom: 16px;
  border-bottom: 1px solid rgba(97, 1, 148, 0.3);
  overflow: hidden;
  min-height: 60px;
`;

const LogoText = styled(Typography)`
  font-family: 'Orbitron', sans-serif;
  font-size: ${props => props.sidebarWidth < 150 ? '16px' : props.sidebarWidth < 200 ? '18px' : '20px'};
  font-weight: 700;
  color: #610194;
  text-shadow: 0 0 7px rgba(97, 1, 148, 0.6);
  letter-spacing: ${props => props.sidebarWidth < 200 ? '0' : '0.5px'};
  white-space: nowrap;
  margin-right: 8px;
  max-width: ${props => props.sidebarWidth - 45}px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledMenuIcon = styled(IconButton)`
  position: fixed;
  top: 16px;
  left: 16px;
  z-index: 1500;
  color: #610194;
  background-color: rgba(17, 17, 17, 0.95);
  border: 2px solid #610194;
  backdrop-filter: blur(4px);
  width: 48px;
  height: 48px;
  
  &:hover {
    background-color: rgba(97, 1, 148, 0.2);
    box-shadow: 0 0 10px rgba(97, 1, 148, 0.4);
  }
  
  .MuiSvgIcon-root {
    filter: drop-shadow(0 0 4px #610194);
    font-size: 28px;
  }
`;

const AnimatedCollapseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  padding: 0;
  width: 52px;
  height: 52px;
  margin-left: 8px;
  min-width: 52px;
  align-items: center;
  justify-content: center;
  background-color: rgba(17, 17, 17, 0.9);
  border: 2px solid #610194;
  border-radius: 50%;
  flex-shrink: 0;
  position: relative;
  z-index: 2;
  box-shadow: 0 0 8px rgba(97, 1, 148, 0.5);
  transition: all 0.3s ease;
  outline: none;
  
  &:focus-visible {
    box-shadow: 0 0 0 4px #610194, 0 0 16px #610194;
  }
  
  &:hover {
    background-color: rgba(97, 1, 148, 0.2);
    box-shadow: 0 0 16px #610194, 0 0 32px #610194;
  }
  
  svg {
    width: 36px;
    height: 36px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  
  .line {
    fill: none;
    stroke: white;
    stroke-width: 6;
    transition: stroke-dasharray 1200ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dashoffset 1200ms cubic-bezier(0.4, 0, 0.2, 1);
    filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.8)) 
           drop-shadow(0 0 6px rgba(97, 1, 148, 1));
  }
  
  .line1 {
    stroke-dasharray: 60 207;
    stroke-width: 6;
  }
  
  .line2 {
    stroke-dasharray: 60 60;
    stroke-width: 6;
  }
  
  .line3 {
    stroke-dasharray: 60 207;
    stroke-width: 6;
  }
  
  &.opened .line1 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 6;
  }
  
  &.opened .line2 {
    stroke-dasharray: 1 60;
    stroke-dashoffset: -30;
    stroke-width: 6;
  }
  
  &.opened .line3 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 6;
  }
`;

/**
 * Sidebar component for application navigation
 * @param {Object} props - Component props
 * @param {boolean} props.open - Whether the sidebar is open (mobile only)
 * @param {function} props.toggleDrawer - Function to toggle the drawer state
 * @param {function} props.onWidthChange - Function to handle width change
 */
const Sidebar = ({ open, toggleDrawer, onWidthChange }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery('(max-width:900px)');
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  // Calculate actual width based on collapsed state
  const sidebarWidth = isCollapsed ? MIN_DRAWER_WIDTH : DEFAULT_DRAWER_WIDTH;

  // Reset collapse state when switching between mobile and desktop
  useEffect(() => {
    if (isMobile) {
      setIsCollapsed(false);
    }
  }, [isMobile]);

  // Navigation items configuration
  const mainNavItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
    { text: 'Generate Content', icon: <ContentIcon />, path: '/content-generator' },
    { text: 'Schedule Post', icon: <ScheduleIcon />, path: '/scheduler' },
    { text: 'Analytics', icon: <AnalyticsIcon />, path: '/analytics' },
  ];
  
  const bottomNavItems = [
    { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
    { text: 'Account', icon: <AccountIcon />, path: '/account' },
  ];

  // Handle navigation click
  const handleNavClick = (path) => {
    navigate(path);
    if (isMobile) {
      toggleDrawer();
    }
  };

  // Check if route is active
  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  // Toggle collapse
  const handleToggleCollapse = () => {
    const newCollapsed = !isCollapsed;
    setIsCollapsed(newCollapsed);
    if (onWidthChange) {
      onWidthChange(newCollapsed ? MIN_DRAWER_WIDTH : DEFAULT_DRAWER_WIDTH);
    }
  };
  
  // Render navigation items with proper styling
  const renderNavItems = (items) => {
    return items.map((item) => (
      <ListItem key={item.text} disablePadding>
        <Tooltip 
          title={isCollapsed ? item.text : ''} 
          placement="right"
          arrow
        >
          <StyledListItemButton
            onClick={() => handleNavClick(item.path)}
            className={isActive(item.path) ? 'active' : ''}
            aria-label={`Navigate to ${item.text}`}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleNavClick(item.path);
              }
            }}
            sx={{
              justifyContent: isCollapsed ? 'center' : 'flex-start',
              minWidth: isCollapsed ? '48px' : 'auto',
            }}
          >
            <ListItemIcon sx={{ minWidth: isCollapsed ? 'auto' : '40px' }}>
              <StyledIcon active={isActive(item.path)}>
                {item.icon}
              </StyledIcon>
            </ListItemIcon>
            {!isCollapsed && (
              <StyledText 
                active={isActive(item.path)}
                sidebarWidth={sidebarWidth}
              >
                {item.text}
              </StyledText>
            )}
          </StyledListItemButton>
        </Tooltip>
      </ListItem>
    ));
  };
  
  // Create the drawer content
  const drawerContent = (
    <>
      <LogoContainer>
        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', overflow: 'hidden' }}>
          <LogoText 
            variant="h1" 
            sidebarWidth={sidebarWidth}
          >
            ROMEO
          </LogoText>
          <AnimatedCollapseButton
            onClick={handleToggleCollapse}
            className={isCollapsed ? '' : 'opened'}
            aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            aria-expanded={!isCollapsed}
          >
            <svg width="100" height="100" viewBox="0 0 100 100">
              <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
              <path className="line line2" d="M 20,50 H 80" />
              <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
            </svg>
          </AnimatedCollapseButton>
        </Box>
      </LogoContainer>
      
      <Box sx={{ display: 'flex', flexDirection: 'column', height: 'calc(100% - 60px)' }}>
        <List sx={{ padding: '8px' }}>
          <AnimatePresence>
            {renderNavItems(mainNavItems)}
          </AnimatePresence>
        </List>
        <Box sx={{ flexGrow: 1 }} />
        <List sx={{ padding: '8px' }}>
          <AnimatePresence>
            {renderNavItems(bottomNavItems)}
          </AnimatePresence>
        </List>
      </Box>
    </>
  );
  
  return (
    <>
      {isMobile && (
        <StyledMenuIcon
          onClick={toggleDrawer}
          size="large"
          edge="start"
          aria-label="open drawer"
        >
          <MenuIcon />
        </StyledMenuIcon>
      )}
      
      {/* For mobile: temporary drawer */}
      {isMobile && (
        <StyledDrawer
          variant="temporary"
          open={open}
          onClose={toggleDrawer}
          isCollapsed={isCollapsed}
          ModalProps={{ keepMounted: true }}
        >
          {drawerContent}
        </StyledDrawer>
      )}
      
      {/* For desktop: permanent drawer */}
      {!isMobile && (
        <StyledDrawer
          variant="permanent"
          open
          isCollapsed={isCollapsed}
        >
          {drawerContent}
        </StyledDrawer>
      )}
    </>
  );
};

Sidebar.propTypes = {
  open: PropTypes.bool,
  toggleDrawer: PropTypes.func.isRequired,
  onWidthChange: PropTypes.func,
};

Sidebar.defaultProps = {
  open: false,
  onWidthChange: () => {},
};

export default React.memo(Sidebar); 