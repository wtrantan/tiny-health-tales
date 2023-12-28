import React from "react";
import "./NavBar.css";
import iconFull from "./TinyHealthTalesLogo.png";
import iconMinimized from "./THT.png";
import { useState } from "react";

interface Props {
  page: string;
}

export default function NavBar(prop: Props) {
  let active = prop.page;
  const pages = [
    "Home",
    "About Us",
    "Videos",
    "Flyers",
    "Health Blog",
    "Contact Us",
  ];
  return (
    <>
      <div className="upper-bar">
        <img className="icon" src={iconMinimized} />
        <div className="name">
          <h1>Tiny Health Tales</h1>
          <h4>Tiny Narratives, Mighty Health Lessons</h4>
        </div>
      </div>
      <ul className="lower-bar">
        {pages.map((page) => (
          <li className={active === page ? "active" : ""}>
            <a href={`/${page}`}>{page}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
