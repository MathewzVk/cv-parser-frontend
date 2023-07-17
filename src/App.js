import React from "react";
import { AuthContextProvider } from "./contexts/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Protected from "./components/Protected";
import "./App.css";
import DocumentDownload from "./components/DocumentDownload";
import { DocumentFetchContextProvider } from "./contexts/DocumentFetchContext";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <DocumentFetchContextProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Protected>
                  <Home />
                </Protected>
              }
            />
            <Route
              path="/document-download"
              element={
                <Protected>
                  <DocumentDownload />
                </Protected>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
        </DocumentFetchContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
