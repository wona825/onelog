import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import onelog from '../assets/img/onelog-logo-brown-ver.png';
import { BrowserRouter as Router } from "react-router-dom";

// NavBar 컴포넌트는 상단 네비게이션 바를 구성합니다.
export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home'); // 현재 활성화된 링크 상태 관리
  const [scrolled, setScrolled] = useState(false); // 스크롤 여부 상태 관리

  // 스크롤 이벤트를 감지하여 네비게이션 바의 스타일을 업데이트합니다.
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 활성화된 링크를 업데이트하는 함수
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          {/* 로고 */}
          <Navbar.Brand href="/">
            <img src={onelog} alt="Logo" />
          </Navbar.Brand>
          {/* 네비게이션 바 토글 버튼 */}
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          {/* 네비게이션 바 링크들 */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('home')}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('skills')}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#careers"
                className={activeLink === 'careers' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('careers')}
              >
                Careers
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('projects')}
              >
                Projects
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
