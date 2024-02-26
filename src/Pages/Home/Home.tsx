import React from "react";
import NavBar from "../../Components/NavBar/NavBar.tsx";
import "./Home.css";
import Carousels from "../../Components/Carousel/Carousel.tsx";
import Footer from "../../Components/Footer/Footer.tsx";
import Group1 from "./Group1.jpg";
import Gallery from "../../Components/Gallery/Gallery.tsx";
import "../Videos/Videos.css";
import "../Flyers/Flyers.css";
import Event from "../../Assets/THT_Event.jpg"
import flu from "../../Assets/Flyers/Flu_Awareness_For_All_FLYER.png";
import diabetes from "../../Assets/Flyers/All About Diabetes.png";

export default function Home() {
  const videos = [
    { width: "100%", height: "100%", src: 'TnQlUrk2vKM', title: 'Tiny Health Tales: Flu Awareness' },
    { width: "100%", height: "100%", src: '8SMLO9kCAH4', title: 'Tiny Health Tales: Understanding Diabetes' },
    { width: "100%", height: "100%", src: 'fUKM5fX8VZU', title: 'Tiny Health Tales Presents: Keeping our Mouths Clean and Healthy' },
  

  ];
  const flyers = [
    { src: flu, title: 'Flu', width: "100%", height: "100%" },
    { src: diabetes, title: 'Diabetes', width: "100%", height: "100%" },
    { src: diabetes, title: 'Diabetes', width: "100%", height: "100%" },
    { src: diabetes, title: 'Diabetes', width: "100%", height: "100%" },

  ];

  return (
    <>
      <NavBar page="Home" />
      <Carousels />
      <div className="Home">
        <div className="Content">Content for Main Page Here</div>
        <div className="Home block1">
          <div className="Home title">
            <h3>News<button className="Home see-more"><a href="/News">See More</a></button></h3>
            <hr className="Home divider" />
          </div>
          <div className="Home block1 image-grid">
          <img src={Event} alt="Image 1 Description"/>
          <img src={Event} alt="Image 2 Description"/>
          <img src={Event} alt="Image 3 Description"/>
          </div>
        </div>
        <div className="Home block2">
          <div className="Home title">
            <h3>Videos<button className="Home see-more"><a href="/Videos">See More</a></button></h3>

            <hr className="Home divider" />
            <div className="Home Videos body">
              {videos.map((video) => (
                <Gallery src={video.src} title={video.title} width={video.width} height={video.height} />
              ))}
            </div>
          </div>
        </div>
        <div className="Home block2">
          <div className="Home title">
            <h3>Flyers<button className="Home see-more"><a href="/Flyers">See More</a></button></h3>
            <hr className="Home divider" />
            <div className="Home Flyer body">
              {flyers.map((flyer) => (
                <Gallery src={flyer.src} title={flyer.title} width={flyer.width} height={flyer.height} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
