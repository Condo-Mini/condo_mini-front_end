import React from 'react';
import HomeAdm from './pages/HomeAdm';
import SignIn from './pages/SignIn';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
// import GuestRoute from './routes/GuestRoute';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
import './mock';
import authService from './services/authService';
import store from './store';

function App() {
  const isAuthenticated = authService.isAuthenticated();
  return (
    <Provider store={store}> 
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
    </Provider>
    
  );
}

export default App;
