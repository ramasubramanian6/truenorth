import { useState } from "react";

import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import ProgramsPage from "./Programs";
import JoinNowForm from "./JoinNowForm.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/programs" element={<ProgramsPage />} />
      <Route path="/join-now" element={<JoinNowForm />} />
    </Routes>
  );
}

export default App;

