import React from "react";
import NavBar from "../../Components/NavBar/NavBar.tsx";
import Footer from "../../Components/Footer/Footer.tsx";
import "./Videos.css";
import YoutubeGallery from "../../Components/VideoItem/YoutubeGallery.tsx";
import Logo from "./THTLogoF.png";
export default function Videos() {
  return (
    <>
      <NavBar page="Videos" />
      <div className="vid-page">
        <img src={Logo}></img>
        <h4>Welcome to Tiny Health Tales!</h4>

      </div>
      <div className="App">
      <YoutubeGallery />
    </div>
      <Footer/>
    </>
  );
}
