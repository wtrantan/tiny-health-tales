import React from "react";
import "./NavBar.css";
import logo from "./TinyHealthTalesLogo.png";

export default function NavBar() {
  const pages = ["Courses", "About", "Contact"];
  return (
    <div className="topBar">
      <a href="/Home">
        <img src={logo} alt="Logo" />
      </a>
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
