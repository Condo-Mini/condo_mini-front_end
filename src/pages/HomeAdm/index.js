import React from 'react';
import Header from './components/Header';
// import './style.css';
import { makeStyles } from '@material-ui/styles';
import NavBar from './components/NavBar';
import Feed from './components/Feed';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    height: '100vh',
    display: 'flex',
    width: '1200px',
    margin: '0 auto',
  },
  appBar: {
    backgroundColor: '#f9f9',
  }
})
function HomeAdm() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Header className={classes.appBar}/>
        <main className={classes.main}>
          <NavBar/>
          <Feed/>
        </main>
    </div>
  )
}

export default HomeAdm;