import React from "react";
import { useState } from "react"
import "./AboutCard.css";

interface Props {
  name: string;
  information: string;
  image: string;
  title: string;
  email: string;
}

export default function AboutCard(prop: Props) {
  const [active, setActive] = useState(false);

  return (
    <div className="all">
      <img className="picture" src={prop.image} />
      <h1 className="name">{prop.name}</h1>
      <h1 className="title">{prop.title}</h1>
      <h1 className="email">{prop.email}</h1>
      
    </div>
  );
}
