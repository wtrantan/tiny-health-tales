import React from "react";
import NavBar from "../../Components/NavBar/NavBar.tsx";
import "./Home.css";
import Carousels from "../../Components/Carousel/Carousel.tsx";
import Footer from "../../Components/Footer/Footer.tsx";
export default function Home() {
  return (
    <>
      <NavBar page="Home" />
      <Carousels />
      <div className="Content">Content for Main Page Here</div>
      <Footer />
    </>
  );
}
