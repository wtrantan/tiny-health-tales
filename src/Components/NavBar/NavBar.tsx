import React from "react";
import "./NavBar.css";

export default function NavBar() {
  const pages = ["Home", "Courses", "About", "Contact"];
  return (
    <div className="topBar">
      <h1>Logo Here</h1>
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
