import React from 'react';
import '../style.css';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, SvgIcon, Avatar, Button } from '@mui/material';
import { Bell } from 'react-feather';
import { useSelector } from 'react-redux';

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
  // const account = useSelector(state => state.account.user)
  const user = useSelector(state => state.user)
  return(
    <AppBar position="fixed" color="inherit" className={classes.root}>
      <Toolbar>
        <img src="/images/Condo-Mini.jpg" alt="logo" className={classes.img}/>
        <div className="grow">
          {/* <input></input> */}
        </div>
        <div className="userSection">
          <Button variant="contained" className="button">Post</Button>
        </div>
        <SvgIcon className="bell">
          <Bell></Bell>
        </SvgIcon>
        <Avatar alt="Remy Sharp" src={user && user.avatar} />
      </Toolbar>
    </AppBar>
  )
}

export default Header;
