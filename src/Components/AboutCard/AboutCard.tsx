import React from "react";
import { useState } from "react"
import "./AboutCard.css";

interface Props {
  name: string;
  information: string;
  image: string;
}

export default function AboutCard(prop: Props) {
  const [active, setActive] = useState(false);

  return (
    <div className="all">
      <img className="picture" src={prop.image} />
      <h1 className="name">{prop.name}</h1>
      <a href="javascript:void(0)" className="activeCard" onClick={() => setActive(!active)}>
        <div className={active ? "rotateButton" : "activeCard"}>
          <p className="gt">&gt;</p>
        </div>
      </a>
      <p className={active ? "active" : "inactive"}>{prop.information}</p>
    </div>
  );
}
