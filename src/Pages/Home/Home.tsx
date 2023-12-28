import React from "react";
import NavBar from "../../Components/NavBar/NavBar.tsx";
import "./Home.css";

export default function Home() {
  return (
    <>
      <NavBar page="Home" />
      <div className="Content">Content for Main Page Here</div>
    </>
  );
}
