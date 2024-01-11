import React from "react";
import NavBar from "../../Components/NavBar/NavBar.tsx";
import "./Flyers.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Gallery from "../../Components/Gallery/Gallery.tsx";
export default function Flyers() {
  
  return (
    <>
      <NavBar page="Flyers" />
      <body>
      <hero>Flyers</hero>
      <div className="App">
      <Gallery/>
    </div>
    </body>
    </>
  );
}
