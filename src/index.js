import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
=======
>>>>>>> 046ae668174e85270d93384364173162040c96f1
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

<<<<<<< HEAD
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

=======
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
>>>>>>> 046ae668174e85270d93384364173162040c96f1
reportWebVitals();
