import { Container, Row, Col } from "react-bootstrap";
import onelog from '../assets/img/onelog-logo-gray-ver.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} >
            <img src={onelog} alt="Logo" style={{ width: '15%', height: '15%'}} />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
