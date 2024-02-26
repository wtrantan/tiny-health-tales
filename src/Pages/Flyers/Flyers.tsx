import React from "react";
import NavBar from "../../Components/NavBar/NavBar.tsx";
import Gallery from "../../Components/Gallery/Gallery.tsx";
import Footer from "../../Components/Footer/Footer.tsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Flyers.css";
import flu from "../../Assets/Flyers/Flu_Awareness_For_All_FLYER.png";
import diabetes from "../../Assets/Flyers/All About Diabetes.png"

export default function Flyers() {
  const flyers = [
    { src: flu, title: 'Flu', width: "100%", height: "100%" },
    { src: diabetes, title: 'Diabetes', width: "100%", height: "100%" }
  ];

  return (
    <>
      <NavBar page="Flyers" />
      <h1 className="Flyer title">Flyers</h1>

      <div className="Flyer body">
        {flyers.map((flyer) => (
          <Gallery src={flyer.src} title={flyer.title} width={flyer.width} height={flyer.height} />
        ))}
      </div>
      <Footer />
    </>
  );
}
