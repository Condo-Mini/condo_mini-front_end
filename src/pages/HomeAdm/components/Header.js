import React from 'react';
import { Button } from '@mui/material';
// import '../style.css';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

const useStyles = makeStyles({
  appBar: {
    boxShadow: 'none',
    backgroundColor: '#f9f9',  
  },
  button: {
    color: '#f9f9',
  }
});
function Header() {
  const classes = useStyles();
  
  return(
    <AppBar position="fixed" color="inherit" className = { classes.appBar }>
      <Toolbar>
        <div className>
          <span>Admin</span>
        </div>
        <div className="">
          <Button variant="contained" className={ classes.button }>create user</Button>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header;
