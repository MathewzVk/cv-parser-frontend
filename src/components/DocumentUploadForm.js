import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Detailed from "./Detailed";
import "../Styles/DocumentUploadForm.css";
import "../Styles/home.scss";
import { useDocumentFetch } from "../contexts/DocumentFetchContext";

const DocumentUploadForm = () => {
  const {setSelectedFile, handleFileUpload, parsedData, selectedFile} = useDocumentFetch()

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };


  return (
    <div className="center-upload-form">
    <Card variant="outlined" className="document-upload-card">
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom style={{"padding":"40px"}}>
          Upload Resume
        </Typography>
        <form onSubmit={handleFileUpload}>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            id="contained-button-file"
            style={{ display: "none" }}
          />
          <label htmlFor="contained-button-file">
            <Button
              variant="contained"
              component="span"
              startIcon={<CloudUploadIcon />}
            >
              Select Document
            </Button>
          </label>
          {selectedFile && (
            <Typography variant="body1" gutterBottom style={{"padding":"10px"}}>
              Selected File: {selectedFile.name}
            </Typography>
          )}

          <Button
            type="submit"
            variant="contained"
            disabled={!selectedFile}
            startIcon={<CloudUploadIcon />}
            style={{"marginTop":"30px"}}
          >
            Upload
          </Button>
        </form>
      </CardContent>
      {parsedData && 
      <div className="right">
        <Detailed data={parsedData} />
      </div>} {/* Render the Detailed component when parsedData is available */}
    </Card>
    <div className="paragraph">
      <p>Upload your resume and we will parse it for you.</p>
      <p>Then you can view your resume in a more readable format.</p>
    </div>
    </div>
  );
};

export default DocumentUploadForm;
