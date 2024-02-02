import React from "react";
import "./NavBar.css";
import iconFull from "./THTLogoDraft.png";
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
    "News",
    "Contact Us",
  ];
  return (
    <>
      <div className="upper-bar">
        <img className="icon" src={iconFull} />
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
