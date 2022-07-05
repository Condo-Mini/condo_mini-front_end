import React from 'react';
import HomeAdm from './pages/HomeAdm';
import SignIn from './pages/SignIn';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
import './mock';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeAdm />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="*" element={<div>Not Fount 404!</div>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
