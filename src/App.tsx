import React from "react";
import "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.tsx";
import About from "./Pages/About/About.tsx";
import Courses from "./Pages/Courses/Courses.tsx";
import Contact from "./Pages/Contact/Contact.tsx";

import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="Courses" element={<Courses />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
