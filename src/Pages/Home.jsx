import React from "react";
import Navbar from "../components/Navbar";
import DocumentUploadForm from "../components/DocumentUploadForm";
import Footer from "../components/Footer";
import "../Styles/home.scss";

function Home() {
  return (
    <div>
        <Navbar />
        <DocumentUploadForm />
        <Footer />
    </div>
  );
}

export default Home;
