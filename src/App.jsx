import { useState } from "react";

import "./App.css";

import { Routes, Route } from "react-router-dom";
import Testimonials from "./Testimonials.jsx";
import Staff from "./Staff.jsx";
import Home from "./Home.jsx";
import ProgramsPage from "./Programs";
import JoinNowForm from "./JoinNowForm.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/programs" element={<ProgramsPage />} />
      <Route path="/join-now" element={<JoinNowForm />} />
      <Route path="/staff" element={<Staff />} />
      <Route path="/testimonials" element={<Testimonials />} />
    </Routes>
  );
}

export default App;

