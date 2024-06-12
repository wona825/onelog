import { Container, Row, Col } from "react-bootstrap";
import onelog from '../assets/img/onelog-logo-gray-ver.png';

// Footer 컴포넌트는 페이지 하단의 푸터 영역을 구성합니다.
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* 로고 이미지 */}
          <Col size={12} sm={6}>
            <img src={onelog} alt="Logo" style={{ width: '15%', height: '15%' }} />
          </Col>
          {/* 저작권 문구 */}
          <Col size={12} sm={6} className="text-center text-sm-end">
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
