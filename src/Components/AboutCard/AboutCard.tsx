import React from "react";
import "./AboutCard.css";

interface Props {
  name: string;
  information: string;
  image: string;
  direction: string;
}

export default function AboutCard(prop: Props) {
  return (
    <>
      <div className="full-card">
        <div className={prop.direction === "left" ? "left" : "inactive"}>
          <div className="card">
            <img src={prop.image}></img>
            <div className="name">{prop.name}</div>
          </div>
        </div>
        <p>{prop.information}</p>
        <div className={prop.direction === "right" ? "right" : "inactive"}>
          <div className="card">
            <img src={prop.image}></img>
            <div className="name">{prop.name}</div>
          </div>
        </div>
      </div>
    </>
  );
}
