import React, { useState } from 'react';
import { Col, Modal, Button } from "react-bootstrap";

// ProjectCard 컴포넌트는 개별 프로젝트 카드를 렌더링하고, 클릭 시 모달로 상세 정보를 표시합니다.
export const ProjectCard = ({ title, description, imgUrl, introduction, mainFunction, position, usedSkills, link, conclusion }) => {
  const [show, setShow] = useState(false); // 모달의 표시 여부를 관리하는 상태

  const handleClose = () => setShow(false); // 모달 닫기 함수
  const handleShow = () => setShow(true); // 모달 열기 함수

  return (
    <>
      {/* 프로젝트 카드 */}
      <Col size={12} sm={6} md={4} onClick={handleShow}>
        <div className="proj-imgbx">
          <img className="proj-img" src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </Col>

      {/* 모달 */}
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
          <p><a href={link} target="_blank" rel="noopener noreferrer">{link}</a></p>
          <h5>⭐ Conclusion</h5>
          <p>{conclusion}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
