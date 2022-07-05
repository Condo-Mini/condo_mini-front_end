import React from 'react';
import { Typography, Grid, Box, Avatar, TextField, Button, Link } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import { LockOutlined } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
  //   display: 'flex',
    height: '100vh',
  },

  image: {
    backgroundImage: 'url(/images/backgroundLogin2.jpg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundReapet: 'none',
  },

  avatar: {
    marginBottom: 8,
    background: '#146FD8',
  },

  button: {
    marginTop: 8,
  },

  form: {
   margin: '16px 32px',
  },
   
  // left: {
  //   background: 'blue',
  //   flexGrow: 0,
  //   flexBasis: '58%',

  //   display: 'flex',
  //   flexDirection: 'column',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },

  // right: {
  //   background: 'yellow',
  //   flexGrow: 0,
  //   flexBasis: '42%',
  // },

  // form:{
  //  display: 'flex',
  //  flexDirection: 'column',
  //  margin: '64px 32px',
  //  alignItems: 'center',
  // },
}));
function SignIn () {
  const classes = useStyles();
  return(
    <Grid container className={classes.root}>
      <Grid
        item 
        container
        md={7}
        direction="column"
        justifyContent="center"
        alignItems="center"
        className={classes.image}
    >
        <Typography 
          style={{ 
            color: '#fff',
            fontSize: 35,
            lineHeight: '45px',
          }}>
            <strong>
              Condo-Mini
            </strong>
          </Typography>
          <Typography
            variant="body2"
            style={{
              color: 'rgb(255,255,255, 0.7)',
              marginTop: 30,
              fontSize: 15,
              lineHeight: '30px',
            }}
        >
          Simplificando a forma de gerenciar condomínios
        </Typography>
      </Grid>
      <Grid item md={5}>
        <Box 
          display="flex"
          flexDirection="column"
          alignItems="center"
          mt={8}
        >
            <Avatar className={classes.avatar}>
              <LockOutlined/>
            </Avatar>
            <Typography variant="h5">
              Acesso
            </Typography>
            <form className={classes.form}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="E-mail"
                name="email"
                autoComplete="email"
                autoFocus
              >

              </TextField>

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="current-password"
              >

              </TextField>

              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.button}
                type="submit">
                  Entrar
              </Button>
              <Grid container>
                <Grid item>
                  <Link>Esqueceu sua senha?</Link>
                </Grid>
                <Grid item>
                  <Link>Não tem uma conta? Registre-se</Link>
                </Grid>
              </Grid>
            </form>
        </Box>
      </Grid>
    </Grid>
    
    // <div className={classes.root}>
      
    //   <div className={classes.left}>
      // <Typography 
      //   style={{ 
      //     color: '#fff',
      //     fontSize: 35,
      //     lineHeight: '45px',
      //   }}>
      //     <strong>
      //       Condo-Mini
      //     </strong>
      //   </Typography>
      //   <Typography
      //     variant="body2"
      //     style={{
      //       color: 'rgb(255,255,255, 0.7)',
      //       marginTop: 30,
      //       fontSize: 15,
      //       lineHeight: '30px',
      //     }}
      //   >
      //     Simplificando a forma de gerenciar condomínios
      //   </Typography>
    //   </div>
      
      
    //   <div className={classes.right}>
    //    <form className={classes.form}>
    //      <h4>Acesso</h4>
    //      <input type="text"></input>
    //      <input type="text"></input>
    //    </form>
    //   </div>

    // </div>
    )
};

export default SignIn