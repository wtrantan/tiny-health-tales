import React from "react";
import NavBar from "../../Components/NavBar/NavBar.tsx";
import AboutCard from "../../Components/AboutCard/AboutCard.tsx";
import Footer from "../../Components/Footer/Footer.tsx";
import unknown from "./THTlogo.png";
import AA from "./AA.png";
import SA from "./SA.png";

import "./About Us.css";

export default function About_Us() {
  return (
    <>
      <NavBar page="About Us" />
      <div className="cardRows">
        <AboutCard
          image={AA}
          name="Ahmadzakaria Arjmand"
          information="Hello! I'm Ahmadzakaria Arjmand, a recent UC Merced graduate with a Bachelor of Science in Human Biology. Proudly from Merced, I'm committed to addressing health disparities in the San Joaquin Valley, focusing on underrepresented communities. My academic journey has provided me with insights into health intricacies. Beyond studies, I'm an avid reader and nature enthusiast, finding fulfillment in outdoor activities. With a passion for addressing health disparities and a local-rooted, academic background, I'm dedicated to contributing meaningfully to community well-being. I am excited about the prospect of leveraging my education and experiences to make a positive impact on the health outcomes of underrepresented populations."
        />

        <AboutCard
          image={AA}
          name="Ahmadzakaria Arjmand"
          information="Hello! I'm Ahmadzakaria Arjmand, a recent UC Merced graduate with a Bachelor of Science in Human Biology. Proudly from Merced, I'm committed to addressing health disparities in the San Joaquin Valley, focusing on underrepresented communities. My academic journey has provided me with insights into health intricacies. Beyond studies, I'm an avid reader and nature enthusiast, finding fulfillment in outdoor activities. With a passion for addressing health disparities and a local-rooted, academic background, I'm dedicated to contributing meaningfully to community well-being. I am excited about the prospect of leveraging my education and experiences to make a positive impact on the health outcomes of underrepresented populations."
        />
        <AboutCard
          image={AA}
          name="Ahmadzakaria Arjmand"
          information="Hello! I'm Ahmadzakaria Arjmand, a recent UC Merced graduate with a Bachelor of Science in Human Biology. Proudly from Merced, I'm committed to addressing health disparities in the San Joaquin Valley, focusing on underrepresented communities. My academic journey has provided me with insights into health intricacies. Beyond studies, I'm an avid reader and nature enthusiast, finding fulfillment in outdoor activities. With a passion for addressing health disparities and a local-rooted, academic background, I'm dedicated to contributing meaningfully to community well-being. I am excited about the prospect of leveraging my education and experiences to make a positive impact on the health outcomes of underrepresented populations."
        />

        <AboutCard
          image={AA}
          name="Ahmadzakaria Arjmand"
          information="Hello! I'm Ahmadzakaria Arjmand, a recent UC Merced graduate with a Bachelor of Science in Human Biology. Proudly from Merced, I'm committed to addressing health disparities in the San Joaquin Valley, focusing on underrepresented communities. My academic journey has provided me with insights into health intricacies. Beyond studies, I'm an avid reader and nature enthusiast, finding fulfillment in outdoor activities. With a passion for addressing health disparities and a local-rooted, academic background, I'm dedicated to contributing meaningfully to community well-being. I am excited about the prospect of leveraging my education and experiences to make a positive impact on the health outcomes of underrepresented populations."
        />
      </div>
      <Footer/>
    </>
  );
}
