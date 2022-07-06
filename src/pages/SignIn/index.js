import  React from 'react';
import { Typography, Grid, Box, Avatar, TextField, Button, Link, FormHelperText } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import { LockOutlined } from '@material-ui/icons';
import authService from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

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
   
}));

function SignIn () {
  
  const classes = useStyles();
  const navigate = useNavigate();
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  async function handleSignIn(){
    try {
     await authService.signIn(email, password)
     navigate('/')
    } catch (error){
        setErrorMessage(error.response.data.message)
      }
  }


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
                value={email}
                onChange={(event) => setEmail(event.target.value)}
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
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              >

              </TextField>

              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.button}
                type="submit"
                onClick={handleSignIn}
              >
                  Entrar
              </Button>
              { 
              
              errorMessage &&
              <FormHelperText error>
                { errorMessage }
              </FormHelperText>
              
              }
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
  )
};

export default SignIn