import React, { useState } from "react";
import { useDocumentFetch } from "../contexts/DocumentFetchContext";
import { saveAs } from 'file-saver';
import { jsPDF } from 'jspdf';
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../Styles/form-grp.css";

const DocumentDownload = () => {
  const { parsedData } = useDocumentFetch();

  const [name, setName] = useState(parsedData.name);
  const [email, setEmail] = useState(parsedData.email);
  const [phone, setPhone] = useState(parsedData.mobile_number);
  const [college, setCollege] = useState(parsedData.college_name);
  const [degree, setDegree] = useState(parsedData.degree);
  const [designation, setDesignation] = useState(parsedData.designation);
  const [experience, setExperience] = useState(parsedData.experience);
  const [company, setCompany] = useState(parsedData.company_names);
  const [pages, setPages] = useState(parsedData.no_of_pages);
  const [skills, setSkills] = useState(parsedData.skills);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      phone,
      college,
      degree,
      designation,
      experience,
      company,
      pages,
      skills,
    };

    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Set the font size and style
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');

    // Add content to the PDF document
    doc.text('Candidate Details', 10, 10);
    doc.text(`Name: ${name}`, 10, 20);
    doc.text(`Email: ${email}`, 10, 30);
    doc.text(`Phone: ${phone}`, 10, 40);
    doc.text(`College: ${college}`, 10, 50);
    doc.text(`Degree: ${degree}`, 10, 60);
    doc.text(`Designation: ${designation}`, 10, 70);
    doc.text(`Experience: ${experience}`, 10, 80);
    doc.text(`Company: ${company}`, 10, 90);
    doc.text(`Pages: ${pages}`, 10, 100);
    const skillsLines = doc.splitTextToSize(skills, 180);
    doc.text('Skills:', 10, 110) // Adjust the width as needed
    doc.text(skillsLines, 20, 120);

    const pdfBlob = doc.output('blob');
    saveAs(pdfBlob, 'form_information.pdf');

  };

  return (
    <div >
    <Navbar />
    <div className="formbold-main-wrapper">
    <div class="formbold-form-wrapper">
      <h1>Verify the Document and Download</h1>
      <form onSubmit={handleSubmit}>
        <div className = "formbold-input-group">
          <label className = 'formbold-form-label'>Name:</label>
          <input
            className = 'formbold-form-input'
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className = "formbold-input-group">
          <label className = 'formbold-form-label'>Email:</label>
          <input
            className = 'formbold-form-input'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className = "formbold-input-group">
          <label className = 'formbold-form-label'>Phone:</label>
          <input
            className = 'formbold-form-input'
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className = "formbold-input-group">
          <label className = 'formbold-form-label'>College:</label>
          <input
            className = 'formbold-form-input'
            type="text"
            value={college}
            onChange={(e) => setCollege(e.target.value)}
          />
        </div>
        <div className = "formbold-input-group">
          <label className = 'formbold-form-label'>Degree:</label>
          <input
            className = 'formbold-form-input'
            type="text"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
          />
        </div>
        <div className = "formbold-input-group">
          <label className = 'formbold-form-label'>Designation:</label>
          <input
            className = 'formbold-form-input'
            type="text"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
          />
        </div>
        <div className = "formbold-input-group">
          <label className = 'formbold-form-label'>Experience:</label>
          <input
            className = 'formbold-form-input'
            type="text"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </div>
        <div className = "formbold-input-group">
          <label className = 'formbold-form-label'>Company:</label>
          <input
            className = 'formbold-form-input'
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        <div className = "formbold-input-group">
          <label className = 'formbold-form-label'>Pages:</label>
          <input
            className = 'formbold-form-input'
            type="text"
            value={pages}
            onChange={(e) => setPages(e.target.value)}
          />
        </div>
        <div className = "formbold-input-group">
          <label className = 'formbold-form-label'>Skills:</label>
          <input
            className = 'formbold-form-input'
            type="text"
            value={skills.join(",")}
            onChange={(e) => setSkills(e.target.value)}
          />
        </div>
        <button className='formbold-btn' type="submit">Save as PDF</button>
      </form>
    </div>
    </div>
      <Footer />
    </div>
  );
};

export default DocumentDownload;
