import React from 'react';
import HomeAdm from './pages/HomeAdm';
import SignIn from './pages/SignIn';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import GuestRoute from './routes/GuestRoute';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
import './mock';

import authService from './services/authService';

function App() {
  const isAuthenticated = authService.isAuthenticated();
  console.log(isAuthenticated)
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeAdm />} />
          <Route path="/signin" element={
            isAuthenticated
            ? <HomeAdm />
            : <SignIn/>} />
            {/* <GuestRoute path="/signin" element={<SignIn />} /> */}
          <Route path="*" element={<div>Not Fount 404!</div>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
