import React from 'react';
import Header from './components/Header';
import './style.css';
import NavBar from './components/NavBar';
import Feed from './components/Feed';
import { Container } from '@mui/material';
import { Box } from '@material-ui/core';


function HomeAdm() {
  
  return (
    <div className="header2">
      <Header />
        <div className="toolbar"></div>
        <main className="main">
          <Container maxWidth="lg">
            <Box className="box">
              <NavBar/>
              <Feed/>
            </Box>
          </Container>
        </main>
    </div>
  )
}

export default HomeAdm;