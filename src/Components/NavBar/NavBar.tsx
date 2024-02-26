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
     <nav>
      <ul className="NavBar lower">
        
        {pages.map((page) => (
          <li className={`NavBar lower page`} >
            <a className={`NavBar lower link ${active === page ? "active" : ""}`} href={`/${page}`}>{page}</a>
          </li>
        ))}
         <svg className="hamburger" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" stroke="#eee" stroke-width=".6" fill="rgba(0,0,0,0)" stroke-linecap="round" >
  <path d="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7">
    <animate dur="0.2s" attributeName="d" values="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7;M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7" fill="freeze" begin="start.begin" />
    <animate dur="0.2s" attributeName="d" values="M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7;M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7" fill="freeze" begin="reverse.begin" />
  </path>
  <rect width="10" height="10" stroke="none">
    <animate dur="2s" id="reverse" attributeName="width" begin="click" />
  </rect>
  <rect width="10" height="10" stroke="none">
    <animate dur="0.001s" id="start" attributeName="width" values="10;0" fill="freeze" begin="click" />
    <animate dur="0.001s" attributeName="width" values="0;10" fill="freeze" begin="reverse.begin" />
  </rect>
</svg>
      </ul >
     
    </nav>
   
    </>
  );
}
