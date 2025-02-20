import React from 'react';
import { createRoot } from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './views/Home';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    background: {
      default: '#121212',
      paper: '#1d1d1d',
    },
  },
});

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <Home />
  </ThemeProvider>
);