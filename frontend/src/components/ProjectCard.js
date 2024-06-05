import React, { useState } from 'react';
import { Col, Modal, Button } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, introduction, mainFunction, position, usedSkills, link, conclusion }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Col size={12} sm={6} md={4} onClick={handleShow}>
        <div className="proj-imgbx">
          <img className="proj-img" src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </Col>

      <Modal className="custom-modal" show={show} onHide={handleClose} size="lg" scrollable>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>💬 Introduction</h5>
          <p>{introduction}</p>
          <h5>💥 Main Function</h5>
          <p>{mainFunction}</p>
          <h5>📎 Position</h5>
          <p>{position}</p>
          <h5>⚒️ Used Skills</h5>
          <p>{usedSkills}</p>
          <h5>🔗 Link</h5>
          <p>{link}</p>
          <h5>⭐ Conclusion</h5>
          <p>{conclusion}</p>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );
}
