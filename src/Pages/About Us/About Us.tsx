import React from "react";
import NavBar from "../../Components/NavBar/NavBar.tsx";
import AboutCard from "../../Components/AboutCard/AboutCard.tsx";
import Footer from "../../Components/Footer/Footer.tsx";
import unknown from "./THTlogo.png";
import Sahil from "../../Assets/About/Founders/Sahil_THT_Square.jpg";
import Vinh from "../../Assets/About/Founders/Vinh_THT.jpg";
import SA from "./SA.png";

import "./About Us.css";

export default function About_Us() {
  return (
    <div className="About background">
      <NavBar page="About Us" />
      <div>
        <h1 className="About">Mission Statement</h1>
        <p className="About">At Tiny Health Tales, our mission is to elevate health literacy and enhance public awareness of prevalent health issues, particularly within the medically underserved San Joaquin Valley of California. By leveraging innovative approaches inspired by KidzMedEd and guided by the vision of Dr. Renee Kinman at UCSF Fresno School of Medicine, our mission is to create accessible, engaging, and interactive content. We aim to dismantle barriers by simplifying intricate medical and science concepts through animated tools, fostering enjoyable and informative learning experiences for all. Our goal is to empower students and families with essential medical knowledge, enabling them to serve as catalysts for positive change within their communities. By fostering a culture of health awareness and preventive care through education, we aim to contribute to community well-being and bridge the healthcare gap. Through our initiatives, we aspire to provide valuable insights to educators and policymakers, advocating for the effective use of innovative interventions in underserved regions lacking adequate medical representation.
</p>
      </div>
      <div className="About cardRows">
        
        <AboutCard
          image={Sahil}
          name="Sahil Malhi"
          title="Founders of Tiny Health Tales"
          email="malhi.sahil19@gmail.com"
          information="Hello! I'm Ahmadzakaria Arjmand, a recent UC Merced graduate with a Bachelor of Science in Human Biology. Proudly from Merced, I'm committed to addressing health disparities in the San Joaquin Valley, focusing on underrepresented communities. My academic journey has provided me with insights into health intricacies. Beyond studies, I'm an avid reader and nature enthusiast, finding fulfillment in outdoor activities. With a passion for addressing health disparities and a local-rooted, academic background, I'm dedicated to contributing meaningfully to community well-being. I am excited about the prospect of leveraging my education and experiences to make a positive impact on the health outcomes of underrepresented populations."
        />
        
        <AboutCard
          image={Vinh}
          name="Vinh-Dan Bao"
          title="Founders of Tiny Health Tales"
          email="vinhdan5005@gmail.com"
          information="Hello! I'm Ahmadzakaria Arjmand, a recent UC Merced graduate with a Bachelor of Science in Human Biology. Proudly from Merced, I'm committed to addressing health disparities in the San Joaquin Valley, focusing on underrepresented communities. My academic journey has provided me with insights into health intricacies. Beyond studies, I'm an avid reader and nature enthusiast, finding fulfillment in outdoor activities. With a passion for addressing health disparities and a local-rooted, academic background, I'm dedicated to contributing meaningfully to community well-being. I am excited about the prospect of leveraging my education and experiences to make a positive impact on the health outcomes of underrepresented populations."
        />
      </div>
      
      <Footer/>
    </div>
  );
}
