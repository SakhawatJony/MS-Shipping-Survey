import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const theme = createTheme({
  palette: {
    primary: { main: '#2d30a1' },
    secondary: { main: '#fd7d18' },
    background: { default: '#f4f0e8' },
    text: { primary: '#142433', secondary: '#5d6b76' },
  },
  typography: {
    fontFamily: '"Manrope", "Segoe UI", sans-serif',
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
