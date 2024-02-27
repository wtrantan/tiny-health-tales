import React from "react";
import NavBar from "../../Components/NavBar/NavBar.tsx";
import Gallery from "../../Components/Gallery/Gallery.tsx";
import Footer from "../../Components/Footer/Footer.tsx";
import "./Videos.css";

export default function Videos() {
  const videos = [
    { width: "100%", height: "100%", src: 'TnQlUrk2vKM', title: 'Flu Awareness' },
    { width: "100%", height: "100%", src: '8SMLO9kCAH4', title: 'Understanding Diabetes' },
    { width: "100%", height: "100%", src: 'fUKM5fX8VZU', title: 'In Progress' },
    { width: "100%", height: "100%", src: 'Q4BGOZNXxkE', title: 'In Progress' },
  ];

  return (
    <>
      <NavBar page="Videos" />
      <h1 className="Videos title">Welcome to Tiny Health Tales!</h1>
      <div className="Videos body">
        {videos.map((video) => (
          <Gallery src={video.src} title={video.title} width={video.width} height={video.height}  />
        ))}
      </div>
      <Footer />
    </>
  );
}
