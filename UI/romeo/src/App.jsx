import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StyleSheetManager } from 'styled-components';
import router from './routes';
import theme from './theme';

/**
 * Main application component that sets up providers and global configuration
 * @returns {JSX.Element} App component
 */
const App = () => {
  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== 'active' && prop !== 'isMobile'}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          toastStyle={{
            background: '#111111',
            border: '1px solid rgba(0, 243, 255, 0.2)',
            boxShadow: '0 0 10px rgba(0, 243, 255, 0.1)',
            color: '#f0f0f0',
            fontFamily: '"Orbitron", sans-serif',
            borderRadius: '6px',
          }}
          progressStyle={{
            background: 'linear-gradient(to right, #00f3ff, #0099ff)',
          }}
        />
      </ThemeProvider>
    </StyleSheetManager>
  );
};

export default App;
