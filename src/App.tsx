import React from "react";
import "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.tsx";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="Courses" element={<></>} />
        <Route path="About" element={<></>} />
        <Route path="Contact" element={<></>} />
      </Routes>
    </BrowserRouter>
  );
}
