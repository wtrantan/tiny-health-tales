import React from "react";
import { useState } from 'react';
import Modal, { ModalProps } from 'react-bootstrap/Modal';
import "./Gallery.css";

interface Props {
  title: string;
  src: string;
  width: string;
  height: string;
}

function MyVerticallyCenteredModal(prop) {
  return (
    <Modal
      {...prop}
      dialogClassName={`modal-size ${prop.identifier ? "normal" : "large"}`}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title >
          {prop.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body">
        {prop.identifier ?
          <img src={prop.source} className={`modal-content ${prop.identifier ? "image" : "video"}`} />
          :
          <iframe
            className={`modal-content ${prop.identifier ? "image" : "video"}`}
            src={`https://www.youtube.com/embed/${prop.source}?autoplay=1`}
            title={prop.title}
          ></iframe>
        }
      </Modal.Body>
    </Modal >
  );
}

export default function Gallery(prop: Props) {
  const [modalShow, setModalShow] = useState(false);
  const [modalName, setModalName] = useState("");
  const sourceType = prop.src.indexOf(".png") > -1;

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        title={modalName}
        onHide={() => [setModalShow(false), setModalName("")]}

        identifier={sourceType}
        source={prop.src}
      />

      <div className="Gallery card" onClick={() => [setModalShow(true), setModalName(prop.title)]} style={{ width: `${prop.width}`, height: `${prop.height}` }}>
        {sourceType ?
          <img src={prop.src} className="Gallery image" />
          :
          <iframe
            className="Gallery video"
            src={`https://www.youtube.com/embed/${prop.src}#autohide=0`}
            title={prop.title}
            allowFullScreen
            width="100%" height="100%"

          ></iframe>
        }
        <h5 className="Gallery title">{prop.title}</h5>
      </div>
    </>
  );
};

