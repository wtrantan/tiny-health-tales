import React from "react";
import "./Gallery.css";
import x from "./Flu_Awareness_For_All_FLYER.png";
export default function Gallery(){
  // Array of flyers data (replace with your actual data)
  const flyers = [
    { id: 1, imageUrl: x, title: 'Flyer 1' },
    { id: 2, imageUrl: x, title: 'Flyer 2' },
    { id: 3, imageUrl: x, title: 'Flyer 3' },
    { id: 3, imageUrl: x, title: 'Flyer 4' },
    { id: 3, imageUrl: x, title: 'Flyer 5' },
    { id: 3, imageUrl: x, title: 'Flyer 6' },
    { id: 3, imageUrl: x, title: 'Flyer 7' },
  ];

  return (
    // Use a Bootstrap grid for layout
    <div className="container">
      <div className="row">
        {flyers.map((flyer) => (
          // Create individual flyer items using Bootstrap cards
          <div className="col-md-4" key={flyer.id}>
            <div className="card mb-4">
              <img src={flyer.imageUrl} className="dark card-img-top" alt={flyer.title} />
              <div className="card-body">
                <h5 className="card-title">{flyer.title}</h5>
                {/* Add more details or actions as needed */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

