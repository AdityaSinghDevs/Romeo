import { createTheme } from '@mui/material/styles';

/**
 * Cyberpunk-themed Material-UI theme configuration
 */
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00f3ff',
      light: '#33f5ff',
      dark: '#00a9b3',
      contrastText: '#000000',
    },
    secondary: {
      main: '#ff3d00',
      light: '#ff6333',
      dark: '#b22a00',
      contrastText: '#ffffff',
    },
    background: {
      default: '#0a0a0a',
      paper: '#111111',
    },
    text: {
      primary: '#f0f0f0',
      secondary: '#a0a0a0',
    },
    error: {
      main: '#ff0033',
    },
    warning: {
      main: '#ffcc00',
    },
    info: {
      main: '#0099ff',
    },
    success: {
      main: '#00ff99',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif',
    h1: {
      fontFamily: '"Orbitron", sans-serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Orbitron", sans-serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: '"Orbitron", sans-serif',
      fontWeight: 600,
    },
    h4: {
      fontFamily: '"Orbitron", sans-serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Orbitron", sans-serif',
      fontWeight: 500,
    },
    h6: {
      fontFamily: '"Orbitron", sans-serif',
      fontWeight: 500,
    },
    button: {
      fontFamily: '"Orbitron", sans-serif',
      fontWeight: 500,
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          textTransform: 'none',
          padding: '8px 16px',
          transition: 'all 0.3s ease',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
            transition: 'all 0.6s ease',
          },
          '&:hover::before': {
            left: '100%',
          },
        },
        containedPrimary: {
          boxShadow: '0 0 10px rgba(0, 243, 255, 0.6)',
          '&:hover': {
            boxShadow: '0 0 20px rgba(0, 243, 255, 0.8)',
          },
        },
        containedSecondary: {
          boxShadow: '0 0 10px rgba(255, 61, 0, 0.6)',
          '&:hover': {
            boxShadow: '0 0 20px rgba(255, 61, 0, 0.8)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          borderRadius: 8,
          border: '1px solid rgba(0, 243, 255, 0.1)',
        },
        elevation1: {
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.8)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          borderBottom: '1px solid rgba(0, 243, 255, 0.3)',
          boxShadow: '0 0 15px rgba(0, 243, 255, 0.2)',
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid rgba(0, 243, 255, 0.1)',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          '&.Mui-focused': {
            boxShadow: '0 0 8px rgba(0, 243, 255, 0.4)',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(0, 243, 255, 0.2)',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(0, 243, 255, 0.3)',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#00f3ff',
          },
        },
      },
    },
  },
});

export default theme; 