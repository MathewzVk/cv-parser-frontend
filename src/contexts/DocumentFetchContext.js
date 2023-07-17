import { useContext, createContext, useState } from "react";

export const DocumentFetchContext = createContext();


export const DocumentFetchContextProvider = ({children}) => {
    const [selectedFile, setSelectedFile] = useState(null);
  const [parsedData, setParsedData] = useState(null);

  const handleFileUpload = async (event) => {
    event.preventDefault();
    if (selectedFile) {
      console.log("Uploading file:", selectedFile);
      const formData = new FormData();
      formData.append("resume", selectedFile);
      try {
        const response = await fetch("https://cvparserbackend1-mathewskuriakose007.b4a.run/extract_resume", {
          method: "POST",
          body: formData,
        });
        if (response.ok) {
          const data = await response.json();
          console.log("Resume data:", data);
          setParsedData(data); // Set the parsed data in state
          window.alert("Upload complete!"); // Display an alert when upload is complete
        } else {
          console.error("Failed to extract resume data");
        }
      } catch (error) {
        console.error("Error during resume extraction:", error);
      }
    }
  };


    return (
        <DocumentFetchContext.Provider value={{setSelectedFile, setParsedData, handleFileUpload, parsedData, selectedFile}}>
            {children}
        </DocumentFetchContext.Provider>
    )
}

export const useDocumentFetch = () => {
    return useContext(DocumentFetchContext)
}