import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Paper, Button, MenuList, MenuItem } from '@mui/material';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     padding: theme.spacing(2), //8*2
//     // width: 275,
//     // marginLeft:38,
//   }
// }));
const useStyles = makeStyles({
  root: {
    padding:16,
    width: 275,
    marginLeft:38,
  },

  button: {
    width: '100%',
  }
});

function NavBar() {
  const classes = useStyles();

  return(
    <Paper className={classes.root}>
      <Button variant="outlined" color="secondary" className={classes.button}>Create User</Button>
      <MenuList variant="menu">Menu
        <MenuItem>Visitors</MenuItem>
        <MenuItem>Residents</MenuItem>
        <MenuItem>Guards</MenuItem>
      </MenuList>
    </Paper>
  )
}

export default NavBar;
