import React from "react";
import "./Gallery.css";
import x from "./Flu_Awareness_For_All_FLYER.png";
import y from "./All_About_Diabetes.pdf";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      fullscreen="xl-down"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <iframe src={y} width="100%" height="600px" />
    
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
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
  const [show, setShow] = React.useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    // Use a Bootstrap grid for layout
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    <div className="container">
      <div className="row">
        {flyers.map((flyer) => (
          // Create individual flyer items using Bootstrap cards
          <div  className="col-md-4" key={flyer.id}>
            <div className="card mb-4">
              <img variant="primary" onClick={() => setModalShow(true)} src={flyer.imageUrl} className="dark card-img-top" alt={flyer.title} />
              <div className="card-body">
                <h5 className="card-title">{flyer.title}</h5>
                {/* Add more details or actions as needed */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

