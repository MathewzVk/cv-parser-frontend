import React from "react";
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
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../Styles/login.scss";
import { useAuth } from "../contexts/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const defaultTheme = createTheme();

const RegisterC = () => {
  const { setEmail, setPassword, handleRegister, authUser } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (authUser != null) {
      navigate("/");
    }
  }, [authUser, navigate]);

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
            <Typography variant="h4" component="h1" gutterBottom>
              User Registration
            </Typography>
            <form onSubmit={handleRegister}>
              <TextField
                type="email"
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
                fullWidth
                margin="normal"
              />
              <TextField
                type="password"
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
                fullWidth
                margin="normal"
              />
              <Button type="submit" variant="contained" fullWidth style = {{'margin-top': '30px'}}>
                Register
              </Button>
            </form>
            {/* <Snackbar open={showAlert} autoHideDuration={4000} onClose={handleAlertClose}>
        <Alert onClose={handleAlertClose} severity={alertMessage.includes("successful") ? "success" : "error"}>
          {alertMessage}
        </Alert>
      </Snackbar> */}
          </Container>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default RegisterC;
