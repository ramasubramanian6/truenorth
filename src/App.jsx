import { useState } from "react";

import "./App.css";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import ProgramsPage from "./Programs";
// src/App.jsx (Example)

import JoinNowForm from "./JoinNowForm"; // Import the new component

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/join-now" element={<JoinNowForm />} /> {/* New route */}
      </Routes>
    
  );
}

export default App;

