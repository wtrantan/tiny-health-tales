import React from "react";
import NavBar from "../../Components/NavBar/NavBar.tsx";
import AboutCard from "../../Components/AboutCard/AboutCard.tsx";
import Footer from "../../Components/Footer/Footer.tsx";
import unknown from "./THTlogo.png";
import Sahil from "../../Assets/About/Founders/Sahil_THT_Square_centered_300px.jpg";
import Vinh from "../../Assets/About/Founders/Vinh_THT_Square_300px.jpg";
import SA from "./SA.png";

import "./About Us.css";
import { Tab } from "react-bootstrap";

export default function About_Us() {
  return (
    <>
      <NavBar page="About Us" />
      <div className="About">
        <p className="About statement">
          <h1 className="About title">Mission Statement</h1>
          At Tiny Health Tales, our mission is to elevate health literacy and enhance public
          awareness of prevalent health issues, particularly within the medically underserved
          San Joaquin Valley of California. By leveraging innovative approaches inspired by
          KidzMedEd and guided by the vision of Dr. Renee Kinman at UCSF Fresno School of Medicine,
          our mission is to create accessible, engaging, and interactive content. We aim to dismantle
          barriers by simplifying intricate medical and science concepts through animated tools,
          fostering enjoyable and informative learning experiences for all.
          <br></br>
          Our goal is to empower students and families with essential medical knowledge, enabling
          them to serve as catalysts for positive change within their communities. By fostering a
          culture of health awareness and preventive care through education, we aim to contribute
          to community well-being and bridge the healthcare gap. Through our initiatives, we aspire
          to provide valuable insights to educators and policymakers, advocating for the effective
          use of innovative interventionsin underserved regions lacking adequate medical representation.
        </p>
        <h1 className="About foundertitle">Founders of Tiny Health Tales</h1>
        <div className="About founders">
          <AboutCard
            image={Sahil}
            name="Sahil Malhi"
            email="malhi.sahil19@gmail.com"
          />

          <AboutCard
            image={Vinh}
            name="Vinh-Dan Bao"
            email="vinhdan5005@gmail.com"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
