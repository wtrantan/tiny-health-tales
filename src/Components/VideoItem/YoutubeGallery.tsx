
import React from 'react';
import "./YoutubeGallery.css";

interface Video {
  id: string;
  title: string;
}

const videos: Video[] = [
  { id: 'TnQlUrk2vKM', title: 'Tiny Health Tales: Flu Awareness' },
  { id: '8SMLO9kCAH4', title: 'Tiny Health Tales: Understanding Diabetes' },
  { id: '8SMLO9kCAH4', title: 'Tiny Health Tales: Understanding Diabetes' },
  { id: 'PlOZ8fD0740', title: 'Ninja Kamui Hospital fight' },
  { id: 'nOp57ck-1Rs', title: 'Excision Shrek Visual' },
  // ... more videos
];
  // Add more videos here


const YouTubeEmbedGallery: React.FC = () => {
  return (
    <div className="gallery">
      {videos.map((video) => (
        <div key={video.id} className="iframe-container ">
          <iframe
            src={`https://www.youtube.com/embed/${video.id}`}
            title={video.title}
            frameBorder="0"
            allowFullScreen
          ></iframe>
          
          <h4 className="">{video.title}</h4>
        </div>
        
      ))}
     
    </div>
  );
};

export default YouTubeEmbedGallery;