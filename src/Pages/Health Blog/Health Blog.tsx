import React from "react";
import NavBar from "../../Components/NavBar/NavBar.tsx";
import Footer from "../../Components/Footer/Footer.tsx";
import "./Health Blog.css";

export default function Health_Blog() {
  return (
    <>
      <NavBar page="News" />
      <div className="Content">Content for Health Blog Page Here</div>
      <Footer/>
    </>
  );
}
