import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img-1.jpg";
import projImg2 from "../assets/img/project-img-2.jpg";
import projImg3 from "../assets/img/project-img-3.jpg";
import projImg4 from "../assets/img/project-img-4.jpg";
import projImg5 from "../assets/img/project-img-5.jpg";
import projImg6 from "../assets/img/project-img-6.jpg";
import projImg7 from "../assets/img/project-img-7.jpg";
import projImg8 from "../assets/img/project-img-8.jpg";
import projImg9 from "../assets/img/project-img-9.jpg";
import projImg10 from "../assets/img/project-img-10.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

// Projects 컴포넌트는 다양한 프로젝트를 탭 형식으로 보여줍니다.
export const Projects = () => {
  // 모바일 프로젝트 목록
  const mobile = [
    {
      title: "쉼표",
      description: "도심 속 쉼터 추천 서비스",
      imgUrl: projImg6,
      introduction: `쉼표는 공공데이터를 활용한 도심 속 쉼터 추천 서비스입니다.`,
      mainFunction: `1. 거리/리뷰 기반 오늘의 쉼터 추천
                     2. 다양한 쉼터 상세 조회 
                     3. 쉼터 즐겨찾기 및 리뷰 작성`,
      position: "Back-End Developer",
      usedSkills: "Spring Boot, Java, MySQL, AWS, Flutter, Dart",
      link: "https://github.com/wminsoo1/commas"
    },
    {
      title: "어슬렁",
      description: "산책 기록 저장소",
      imgUrl: projImg7,
      introduction: `어슬렁은 산책 순간을 보다 생생하고 정확하게 남길 수 있는 산책 기록 저장소입니다.`,
      mainFunction: `1. 산책하는 동안 실시간으로 산책 경로, 시간, 날짜, 거리 기록 가능
                     2. 산책 기록 저장소에서 지난 산책 기록에 관한 상세 정보 조회 
                     3. 친구들과의 산책 기록 공유 가능`,
      position: "Backend Developer",
      usedSkills: "Android, Kotlin, SpringBoot, Java, MariaDB, AWS",
      link: "https://github.com/wona825/madcamp_week2"
    },
    {
      title: "bridge",
      description: "크리에이터와 팬 사이의 1:1 통화 연결 서비스",
      imgUrl: projImg8,
      introduction: `bridge는 크리에이터와 팬 사이의 1:1 통화 연결 서비스입니다.`,
      mainFunction: `1. 크리에이터 조회 및 팔로우 기능
                     2. 팔로우 및 팔로잉 확인 
                     3. 통화 가능 상태, 통화권 가격, 통화 규칙 지정 기능
                     4. 통화권 구매 및 통화 연결`,
      position: "Back-End Developer",
      usedSkills: "Spring Boot, Java, PostgreSQL, AWS, Flutter, Dart",
      link: "https://github.com/ApptiveDev/apptive-19th-bridge-backend"
    },
    {
      title: "Easywine",
      description: "와인 입문자를 위한 와인 구매 도움 서비스",
      imgUrl: projImg4,
      introduction: `Easywine은 와인 입문자의 와인 구매 도움 서비스입니다.`,
      mainFunction: `1. 맛, 상황, 기타 카테고리 별 설문조사를 통해 오늘의 와인 추천
                     2. 추천받은 와인 목록을 확인할 수 있는 와인 창고 기능 
                     3. 와인 상세 정보 조회 및 즐겨찾기 기능`,
      position: "Android Developer",
      usedSkills: "Android, Jetpack compose, Kotlin, Spring Boot, MariaDB, AWS",
      link: "https://github.com/ApptiveDev/EasyWine"
    },
    {
      title: "photour",
      description: "사진여행을 통한 국적없는 어울림 서비스",
      imgUrl: projImg5,
      introduction: `photour는 사진여행을 통한 국적없는 어울림 서비스입니다.`,
      mainFunction: `1. 여행지에 관한 오디오 가이드 및 포즈추천 가이드
                     2. 공공데이터를 활용한 여행지 상세 정보
                     3. 여행 소모임 모집 및 참가 기능`,
      position: "Android Developer",
      usedSkills: "Android, Jetpack compose, Kotlin, Spring Boot, Java, MariaDB, AWS"
    }
  ];


  // 웹 프로젝트 목록
  const web = [
    {
      title: "yay",
      description: "예의 있는 메일 작성 및 전송 서비스",
      imgUrl: projImg1,
      introduction: `yay는 예의 있는 메일 작성 및 전송이 가능한 메일 작성 도우미 서비스입니다.`,
      mainFunction: `1. 기본 메일 양식, 언어, 이모지, 어투로 구성된 간단한 옵션 체크 및 입력을 통한 쉬운 메일 작성
                     2. 작성된 메일 초안을 쉽게 수정 가능 
                     3. 수신자 이메일 입력 만으로 편리한 메일 전송
                     4. 반응형 웹 구성을 통해 모바일, 테블릿, PC에서 편리하게 이용 가능`,
      position: "Backend Developer",
      usedSkills: "Spring Boot, Java, AWS, MariaDB, Flutter, Dart",
      link: "https://github.com/wona825/yay"
    },
    {
      title: "ONELOG",
      description: "개발자 포트폴리오 웹사이트",
      imgUrl: projImg2,
      introduction: `ONELOG는 개발자 포트폴리오 웹사이트입니다. 
                     현재는 제 포트폴리오만 존재하며, 추후 모든 개발자가 사용 가능하게끔 확장 예정입니다.`,
      mainFunction: `1. 자기소개 및 연락처, 기술 스택, 경력 사항, 프로젝트 등 개발자의 정보를 시각적으로 제시
                     2. 챗봇과의 대화를 통해 해당 개발자에 관하여 원하는 정보에 쉽게 접근 가능
                     3. Question Log 기능을 통해 다른 방문자들이 남긴 질문 확인 가능.`,
      position: "Full Stack Developer",
      usedSkills: "React, Spring Boot, Java, AWS, OpenAI, MariaDB",
      link: "https://github.com/wona825/onelog"
    },
    {
      title: "스케줄, 알빠임?!",
      description: "스케줄 근무제 자동화 서비스",
      imgUrl: projImg3,
      introduction: `스케줄, 알빠임?!은 스케줄 근무제를 시행하는 매장의 매니저를 위한, 스케줄링 자동화 서비스입니다.`,
      mainFunction: `1. 자동 스케줄링, 실시간 신청 현황 확인 가능
                     2. 스케줄링 알고리즘을 통한 스케줄 추천 및 확정 기능 제공 
                     3. 알바생을 위한 달력 UI 기반 스케줄 확인 `,
      position: "Backend Developer",
      usedSkills: "React, Spring Boot, Java, MariaDB",
      link: "https://github.com/Step3-kakao-tech-campus/Team1_BE"
    }
  ];

  
  
  // 기타 프로젝트 목록
  const etc = [
    {
      title: "CharE",
      description: "인공지능을 활용한 의료 초음파 영상 개발",
      imgUrl: projImg9,
      introduction: `본 연구에서는 초음파 데이터만을 활용하여 스캔 궤적을 예측하는 딥 러닝 프레임워크를 제안합니다.
                     이를 통해 외부 추적 장치의 의존성을 줄이고, 3D로 복원된 초음파 볼륨을 제공할 수 있습니다.
                     Verasonics Ventage 64LE 기기와 전자기 센서를 통해 획득한 2D 초음파 데이터, 위치 데이터를 각각 입력, 정답 데이터로 사용하였습니다.`,
      mainFunction: `1. 모델은 인코더(ResNet의 Residual Block을 사용해 디자인), 어텐션(채널 어텐션과 공간 어텐션을 직렬로 적용하여 피처맵을 가공), 디코더(피처맵을 입력으로 받아 스캔 모션인 6차원 벡터 출력)로 구성되어 있습니다.
                     2. 2D 초음파 데이터를 위치 데이터에 따라 3차원 공간으로 보내어 볼륨을 습득하였고, 3D 초음파 영상으로 복원하였습니다.
                     3. 딥러닝 프레임워크를 통해 2D 초음파 데이터에서 스캔 모션을 추정하였고, 추정된 모션을 바탕으로 스캔 궤적을 복원하였습니다. 구현한 딥러닝 모델은 어느 정도 이상의 궤적 예측 성능을 보였습니다. 
 `,
      position: "AI Developer",
      usedSkills: "Python, PyTorch",
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <div className="col-12">
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Mobile</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Web</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">etc.</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {/* 모바일 프로젝트 카드 렌더링 */}
                        {mobile.map((project, index) => (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {/* 웹 프로젝트 카드 렌더링 */}
                        {web.map((project, index) => (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {/* 기타 프로젝트 카드 렌더링 */}
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
          </div>
        </Row>
      </Container>
    </section>
  );
}
