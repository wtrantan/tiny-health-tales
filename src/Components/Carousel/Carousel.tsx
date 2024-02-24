import React from "react";
import { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import FluImage from './Flu.png';
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
            <img id='firstImage' className="" src='./Flu.png' text="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <text>Nulla vitae elit libero, a pharetra augue mollis interdum.</text>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img id='firstImage' className="" src='' text="Second slide" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</text>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img id='firstImage' className="" src='' text="Third slide" />
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
