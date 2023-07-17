import React, {useEffect} from 'react';
import {
  Avatar,
  Button,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
  Checkbox,
  Snackbar,
  Alert,
  Paper,
} from "@mui/material";
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useAuth } from '../contexts/AuthContext';

const defaultTheme = createTheme();

const Login = () => {

  const { setEmail, setPassword, handleSignIn, authUser} = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if(authUser != null) {
      navigate('/')
    }
  }, [authUser, navigate])

  

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7}>
          <Paper
            sx={{
              backgroundImage:
                "url(https://source.unsplash.com/random?wallpapers)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100%",
            }}
          />
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Container
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form onSubmit={handleSignIn}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </form>
            <Typography>
              Click here to  <Link
                style={{'color': 'blue'}}
                to={{
                  pathname: "/register",
                  state: { foo: "bar" },
                }}
              >
                register
              </Link>
            </Typography>
           
            {/* <Snackbar
              open={showAlert}
              autoHideDuration={4000}
              onClose={handleAlertClose}
            >
              <Alert
                onClose={handleAlertClose}
                severity={
                  alertMessage.includes("successful") ? "success" : "error"
                }
              >
                {alertMessage}
              </Alert>
            </Snackbar> */}
          </Container>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Login;
