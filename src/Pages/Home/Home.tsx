import React from "react";
import NavBar from "../../Components/NavBar/NavBar.tsx";
import "./Home.css";
import Carousels from "../../Components/Carousel/Carousel.tsx";
import Footer from "../../Components/Footer/Footer.tsx";
import Group1 from "./Group1.jpg";
export default function Home() {
  return (
    <>
      <NavBar page="Home" />
      <Carousels />
      <div  className="Home">
      <div className="Content">Content for Main Page Here</div>
        <div className="Home block1">
          <div className="Home title">          
            <h3>News<button className="Home see-more"><a href="/News">See More</a></button></h3>
            <hr className="Home divider"/>
          </div>   
          <div className="Home block1 image-grid">
          <img src={Group1} alt="Image 1 Description"/>
          <img src={Group1} alt="Image 2 Description"/>
          <img src={Group1} alt="Image 3 Description"/>
          </div>
        </div>
        <div className="Home block2">
          <div className="Home title">          
            <h3>Videos<button className="Home see-more"><a href="/Videos">See More</a></button></h3>
          
            <hr className="Home divider"/>
          </div>   
        </div>
        <div className="Home block2">
          <div className="Home title">          
            <h3>Flyers<button className="Home see-more"><a href="/Flyers">See More</a></button></h3>
          
            <hr className="Home divider"/>
          </div>   
        </div>
      </div>
    
      <Footer />
    </>
  );
}
