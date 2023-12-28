import React from "react";
import "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.tsx";
import About_Us from "./Pages/About Us/About Us.tsx";
import Videos from "./Pages/Videos/Videos.tsx";
import Flyers from "./Pages/Flyers/Flyers.tsx";
import Health_Blog from "./Pages/Health Blog/Health Blog.tsx";

import "./App.css";
import Contact_Us from "./Pages/Contact Us/Contact Us.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="About Us" element={<About_Us />} />
        <Route path="Videos" element={<Videos />} />
        <Route path="Flyers" element={<Flyers />} />
        <Route path="Health Blog" element={<Health_Blog />} />
        <Route path="Contact Us" element={<Contact_Us />} />
      </Routes>
    </BrowserRouter>
  );
}
