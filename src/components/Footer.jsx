import React from "react";
import { Box, Link, Typography } from "@mui/material";
import '../Styles/home.scss'

const Footer = () => {
  return (
    <div className="footer-bottom">
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f5f5f5",
        py: 2,
        width: "100%",
        textAlign: "center",
      }}
    >
      <Box
        component="ul"
        sx={{
          listStyle: "none",
          p: 0,
          m: 0,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box component="li" sx={{ mx: 2 }}>
          <Link href="/" color="inherit">
            Terms and Conditions
          </Link>
        </Box>
        <Box component="li" sx={{ mx: 2 }}>
          <Link href="/reviews" color="inherit">
            Reviews
          </Link>
        </Box>
        <Box component="li" sx={{ mx: 2 }}>
          <Link href="/" color="inherit">
            Support
          </Link>
        </Box>
        <Box component="li" sx={{ mx: 2 }}>
          <Link href="/" color="inherit">
            FAQ
          </Link>
        </Box>
        <Box component="li" sx={{ mx: 2 }}>
          <Link href="/" color="inherit">
            Contact Us
          </Link>
        </Box>
      </Box>

      <Box mt={2}>
        <Typography variant="body2" color="text.secondary">
          &copy; {new Date().getFullYear()}, PwNΞvΞrY7h1nG. All rights reserved.
        </Typography>
      </Box>
    </Box>
    </div>
  );
};

export default Footer;
