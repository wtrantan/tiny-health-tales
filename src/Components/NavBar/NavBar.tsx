import React from "react";
import "./NavBar.css";
import logoimage from "./THT_logo_v1.png";
import { useState } from "react";

interface Props {
  page: string;
}

export default function NavBar(prop: Props) {
  let active = prop.page;
  const pages = [
    "Home",
    "Videos",
    "Flyers",
    "About Us"
  ];
  return (
    <>
      <div className="NavBar upper">
        <img className="NavBar upper logo" src={logoimage} />
      </div>

      <ul className="NavBar lower">
        {pages.map((page) => (
          <li className={`NavBar lower page`} >
            <a className={`NavBar lower link ${active === page ? "active" : ""}`} href={`/${page}`}>{page}</a>
          </li>
        ))}
      </ul >
    </>
  );
}
