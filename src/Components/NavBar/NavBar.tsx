import React from "react";
import "./NavBar.css";
import logo from './TinyHealthTalesLogo.png'

export default function NavBar() {
  const pages = ["Home", "Courses", "About", "Contact"];
  return (
    <div className="topBar">
      <h1><img src={logo} alt="Logo" /></h1>
      <ul>
        {pages.map((page) => (
          <li key={page}>
            <a href={`/${page}`}>{page}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
