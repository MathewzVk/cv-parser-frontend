import React from "react";
import Navbar from "../components/Navbar";
import RegisterC from "../components/RegisterC";
import Footer from "../components/Footer";
import "../Styles/home.scss"
function Register() {
  return (
    <div className="home-container">
      <Navbar />
      <RegisterC />
      <Footer />
    </div>
  );
}

export default Register;
