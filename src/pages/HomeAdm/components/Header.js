import React from 'react';
import { Button } from '@mui/material';
import '../style.css';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SvgIcon from '@mui/material/SvgIcon';
import { Bell } from 'react-feather';
import Avatar from '@mui/material/Avatar'

const useStyles = makeStyles({
  root: {
    "&.MuiPaper-root": {
      boxShadow: 'none',
    "& img": {
      maxHeight: 100,
     },
    },
  },
});
function Header() {
const classes = useStyles();
  
  return(
    <AppBar position="fixed" color="inherit" className={classes.root}>
      <Toolbar>
        <img src="/images/Condo-Mini.jpg" alt="logo" className={classes.img}/>
        <div className="grow">
          {/* <input></input> */}
        </div>
        <div className="userSection">
          <Button variant="contained" className="button">create user</Button>
        </div>
        <SvgIcon className="bell">
          <Bell></Bell>
        </SvgIcon>
        <Avatar alt="Remy Sharp" src="/" />
      </Toolbar>
    </AppBar>
  )
}

export default Header;
