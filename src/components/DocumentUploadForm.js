import React, { useState } from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Detailed from "./Detailed";
import "../Styles/DocumentUploadForm.css";
import "../Styles/home.scss";
import { useDocumentFetch } from "../contexts/DocumentFetchContext";

const DocumentUploadForm = () => {
  const { setSelectedFile, handleFileUpload, parsedData, selectedFile } = useDocumentFetch();
  const [uploadComplete, setUploadComplete] = useState(false);
  const [fileParsing, setFileParsing] = useState(false);
  const [fileParsed, setFileParsed] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUploadComplete = () => {
    setUploadComplete(true);
    setTimeout(() => {
      setFileParsing(true);
      setTimeout(() => {
        setFileParsing(false);
        setFileParsed(true);
      }, 20000); // 20 seconds
    }, 1000); // 1 second
  };

  return (
    <div className="center-upload-form">
      <Card variant="outlined" className="document-upload-card">
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom style={{ padding: "40px" }}>
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
              <Typography variant="body1" gutterBottom style={{ padding: "10px" }}>
                Selected File: {selectedFile.name}
              </Typography>
            )}

            <Button
              type="submit"
              variant="contained"
              disabled={!selectedFile}
              startIcon={<CloudUploadIcon />}
              style={{ marginTop: "30px" }}
              onClick={handleUploadComplete}
            >
              Upload
            </Button>
          </form>
        </CardContent>
        {fileParsing && <Typography variant="body1" gutterBottom style={{ padding: "10px" }}>
          Your file is parsing. Please wait...
        </Typography>}
        {fileParsed && <Typography variant="body1" gutterBottom style={{ padding: "10px" }}>
          Almost ready...
        </Typography>}
        {parsedData && (
          <div className="right">
            <Detailed data={parsedData} />
          </div>
        )} {/* Render the Detailed component when parsedData is available */}
      </Card>
      {!uploadComplete && <div className="paragraph">
        <p>Upload your resume and we will parse it for you.</p>
        <p>Then you can view your resume in a more readable format.</p>
      </div>}
    </div>
  );
};

export default DocumentUploadForm;
