import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useAuth } from "../contexts/AuthContext";
import "../Styles/navbar.scss";

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const { authUser, handleSignOut } = useAuth();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="navbar">
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuOpen}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          {authUser && <MenuItem onClick={handleMenuClose} component={Link} to="/">
            Home
          </MenuItem>}
          {!authUser && [
          <MenuItem onClick={handleMenuClose} component={Link} to="/login" key={1}>
            Login
          </MenuItem>,
          <MenuItem onClick={handleMenuClose} component={Link} to="/register" key={2}>
            Register
          </MenuItem>]
          }
          {authUser && <MenuItem onClick={handleSignOut}>Logout</MenuItem>}
        </Menu>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          CV Wizard
        </Typography>
        <Typography variant="body2" component="div">
          {authUser ? authUser.email : ""}
        </Typography>
      </Toolbar>
    </AppBar>
    </div>
  );
}

export default Navbar;
