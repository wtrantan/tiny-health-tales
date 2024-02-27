import React from "react";
import NavBar from "../../Components/NavBar/NavBar.tsx";
import Gallery from "../../Components/Gallery/Gallery.tsx";
import Footer from "../../Components/Footer/Footer.tsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Flyers.css";
import flu from "../../Assets/Flyers/Flu_Awareness_For_All.png";
import flu_es from "../../Assets/Flyers/Espanol_Flu_Awareness_For_All-1.png";
import diabetes from "../../Assets/Flyers/All About Diabetes.png";
import diabetes_es from "../../Assets/Flyers/All_About_Diabetes_Spanish-1.png";

export default function Flyers() {
  const flyers = [
    { src: flu, title: 'Flu Awareness', width: "100%", height: "100%" },
    { src: diabetes, title: 'Understanding Diabetes', width: "100%", height: "100%" },
    { src: flu_es, title: 'Conocimiento Sobre la Gripe', width: "100%", height: "100%" },
    { src: diabetes_es, title: 'Entendiendo la Diabetes', width: "100%", height: "100%" }
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
