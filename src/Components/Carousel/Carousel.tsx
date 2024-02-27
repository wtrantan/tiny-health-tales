import React from "react";
import { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import Group1 from "../../Assets/News/Group1.jpg";
import THT from "../../Assets/News/THT_Event.jpg";
import Group2 from "../../Assets/News/Group1.jpg";
import FluImage from './Flu.png';
import WoundImage from './healing-owies.png';
import './Carousel.css';
export default function Carousels() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <div className="back">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img id='firstImage' className="" src={FluImage} text="First slide" />
            <Carousel.Caption>
              <h3>Flu Awareness For All</h3>
              <text>Nulla vitae elit libero, a pharetra augue mollis interdum.</text>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img id='firstImage' className="" src={WoundImage} text="Second slide" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</text>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img id='firstImage' className="" src={FluImage} text="Third slide" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <text>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </text>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}
