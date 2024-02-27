import React from "react";
import { useState } from "react"
import "./AboutCard.css";

interface Props {
  image: string;
  name: string;
  email: string;
}

export default function AboutCard(prop: Props) {
  const [active, setActive] = useState(false);

  return (
    <div className="AboutCard">
      <img className="AboutCard picture" src={prop.image} />
      <h1 className="AboutCard name">{prop.name}</h1>
      <h1 className="AboutCard email">{prop.email}</h1>

    </div>
  );
}
