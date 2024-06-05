import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img-1.jpg";
import projImg2 from "../assets/img/project-img-2.jpg";
import projImg3 from "../assets/img/project-img-3.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const web = [
    {
      "title": "SolarSaver",
      "description": "A website that makes solar energy accessible",
      "imgUrl": projImg1,
      "introduction": "SolarSaver는 태양광 에너지 솔루션을 제공하는 플랫폼으로, 지속 가능한 에너지 사용을 촉진하고 탄소 발자국을 줄이기 위해 노력합니다.",
      "mainFunction": "사용자가 자신의 집에 적합한 태양광 패널을 찾고 설치할 수 있는 온라인 마켓플레이스.",
      "position": "Back-End Developer",
      "usedSkills": "Angular, Bootstrap, Google Cloud Platform",
      "link": "https://solarsaver.com",
      "conclusion": "태양광 에너지 사용을 통해 환경 보호에 기여하고, 사용자들이 지속 가능한 에너지 솔루션을 쉽게 접할 수 있도록 도왔습니다."
    },
  ];
  const mobile = [
    {
      title: "FitTrack",
      description: "Fitness Tracking App",
      imgUrl: projImg2,
      introduction: "운동 기록과 건강 관리를 위한 모바일 애플리케이션입니다.",
      mainFunction: "사용자의 운동 루틴과 식단을 추적합니다.",
      position: "Back-end Developer",
      usedSkills: "Flutter, Dart, Firebase",
      link: "https://fittrack.com",
      conclusion: "사용자가 건강한 생활 습관을 유지할 수 있도록 도와주었습니다."
    },
  ];
  const etc = [
    {
      title: "AI Assistant",
      description: "Virtual Assistant using AI",
      imgUrl: projImg3,
      introduction: "인공 지능을 활용한 가상 비서 서비스 개발 프로젝트입니다.",
      mainFunction: "사용자의 일정 관리와 정보 검색을 돕습니다.",
      position: "AI Developer",
      usedSkills: "Python, TensorFlow, NLP",
      link: "https://aiassistant.com",
      conclusion: "효율적인 일정 관리와 신속한 정보 접근을 가능하게 하여 사용자의 만족도를 높였습니다."
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Mobile</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">etc.</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {web.map((project, index) => (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {mobile.map((project, index) => (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {etc.map((project, index) => (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        ))}
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
