import React from "react";
import Navbar from "../components/Navbar";
import LoginC from "../components/LoginC";
import Footer from "../components/Footer";
import "../Styles/home.scss"
function Login() {
  return (
    <div className="home-container">
      <Navbar />
      <LoginC />
      <Footer />
    </div>
  );
}

export default Login;
