import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from '@mui/material';
import Header from './components/Header';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
