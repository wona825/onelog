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
import projImg11 from "../assets/img/project-img-11.jpg";
import projImg12 from "../assets/img/project-img-12.jpg";


import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const web = [
    {
      title: "SolarSaver",
      description: "A website that makes solar energy accessible",
      imgUrl: projImg1,
      introduction: `SolarSaver는 태양광 에너지 솔루션을 제공하는 플랫폼으로, 지속 가능한 에너지 사용을 촉진하고 탄소 발자국을 줄이기 위해 노력합니다. 
      이 플랫폼은 사용자에게 다양한 태양광 패널 옵션을 제공하며, 전문가와의 상담을 통해 최적의 설치 방법을 안내합니다. 
      또한, 사용자 리뷰와 평점을 통해 신뢰성을 높였습니다.`,
      mainFunction: `사용자가 자신의 집에 적합한 태양광 패널을 찾고 설치할 수 있는 온라인 마켓플레이스. 
      실시간 견적 비교 기능, 설치 후기 공유, 유지보수 예약 시스템을 포함하고 있습니다. 
      실시간 견적 비교는 WebSocket을 활용하여 실시간으로 업데이트 되며, 리뷰 시스템은 Elasticsearch를 사용하여 빠른 검색과 필터링을 구현했습니다.`,
      position: "Back-End Developer",
      usedSkills: "Django, PostgreSQL, Redis, WebSocket, Elasticsearch",
      link: "https://solarsaver.com",
      conclusion: `태양광 에너지 사용을 통해 환경 보호에 기여하고, 사용자들이 지속 가능한 에너지 솔루션을 쉽게 접할 수 있도록 도왔습니다. 
      이 프로젝트를 통해 친환경 에너지 시장의 확대에 기여했습니다. 
      또한, WebSocket과 Elasticsearch의 도입으로 시스템의 실시간성과 검색 효율성을 높였습니다.`
    },
    {
      title: "GreenThumb",
      description: "Gardening Tips and Tools",
      imgUrl: projImg2,
      introduction: `GreenThumb은 가드닝 애호가들을 위한 종합 정보 제공 플랫폼으로, 사용자들이 식물 재배에 필요한 모든 정보를 쉽게 찾을 수 있도록 돕습니다. 
      이 웹사이트는 사용자 간의 경험 공유를 장려하며, 전문가의 조언과 함께 다양한 가드닝 도구와 제품을 소개합니다.`,
      mainFunction: `식물 관리 및 재배에 관한 정보 제공, 사용자 리뷰 시스템, 온라인 상점 기능을 제공합니다. 
      사용자가 자신의 식물 재배 일기를 작성하고 공유할 수 있는 기능도 포함되어 있습니다. 
      사용자 리뷰 시스템은 MongoDB를 사용하여 대용량 데이터 처리를 최적화하였고, 일기 작성 기능은 Quill.js를 사용하여 풍부한 텍스트 에디터 환경을 제공했습니다.`,
      position: "Full Stack Developer",
      usedSkills: "React, Node.js, MongoDB, Quill.js",
      link: "https://greenthumb.com",
      conclusion: `사용자들이 더 나은 가드닝 경험을 할 수 있도록 지원하고, 가드닝 커뮤니티의 성장을 촉진했습니다. 
      플랫폼의 다양한 기능을 통해 사용자 참여를 높였습니다. 
      특히, MongoDB와 Quill.js의 활용으로 사용자 경험을 향상시켰습니다.`
    },
    {
      title: "EduTrack",
      description: "Educational Progress Tracking",
      imgUrl: projImg3,
      introduction: `EduTrack은 학생들의 학습 진행 상황을 추적하고, 교사와 학부모가 실시간으로 학업 성취도를 확인할 수 있도록 돕는 교육 플랫폼입니다. 
      이 플랫폼은 학생들의 성적 데이터를 시각화하여 제공하며, 맞춤형 학습 계획을 세울 수 있는 도구를 제공합니다.`,
      mainFunction: `학생 성적 관리, 학습 계획 수립, 실시간 성과 피드백 기능을 포함합니다. 
      학부모와 교사가 학생의 학업 진척도를 모니터링하고 지원할 수 있도록 합니다. 
      성적 데이터 시각화는 D3.js를 사용하여 구현하였으며, 실시간 피드백 시스템은 WebSocket을 통해 즉각적인 알림을 제공합니다.`,
      position: "Back-End Developer",
      usedSkills: "Spring Boot, Java, MySQL, D3.js, WebSocket",
      link: "https://edutrack.com",
      conclusion: `학생들의 학습 효과를 극대화하고, 교사와 학부모가 효과적으로 학생들을 지원할 수 있도록 했습니다. 
      데이터 기반의 학습 관리를 통해 교육의 질을 향상시켰습니다. 
      특히, D3.js와 WebSocket의 사용으로 실시간 데이터 시각화와 피드백 시스템을 구현하여 사용자 경험을 크게 향상시켰습니다.`
    },
    {
      title: "RecipeMaster",
      description: "Culinary Recipes and Tips",
      imgUrl: projImg4,
      introduction: `RecipeMaster는 요리 애호가들을 위한 레시피 공유 플랫폼으로, 다양한 요리법과 요리 팁을 제공합니다. 
      사용자는 자신의 요리 레시피를 공유하고, 다른 사용자와 요리 경험을 나눌 수 있습니다. 
      또한, 전문가의 요리 강좌와 팁을 통해 요리 실력을 향상시킬 수 있습니다.`,
      mainFunction: `레시피 검색 및 공유, 요리 팁 제공, 사용자 리뷰 시스템을 포함합니다. 
      맞춤형 요리 추천 기능과 요리 영상 강좌도 제공합니다. 
      레시피 검색 기능은 Elasticsearch를 활용하여 빠른 검색과 필터링을 지원하고, 영상 강좌는 AWS S3와 CloudFront를 통해 안정적이고 빠르게 제공됩니다.`,
      position: "Full Stack Developer",
      usedSkills: "Vue.js, Node.js, PostgreSQL, Elasticsearch, AWS S3, CloudFront",
      link: "https://recipemaster.com",
      conclusion: `요리 애호가들이 쉽게 레시피를 찾고 공유할 수 있도록 하여 커뮤니티를 활성화했습니다. 
      다양한 기능을 통해 사용자 경험을 향상시키고 요리 지식을 확산했습니다. 
      Elasticsearch와 AWS 서비스를 활용하여 검색 효율성과 콘텐츠 제공 속도를 높였습니다.`
    }
  ];
  
  const mobile = [
    {
      title: "FitTrack",
      description: "Fitness Tracking App",
      imgUrl: projImg5,
      introduction: `FitTrack은 사용자의 운동 기록과 건강 관리를 돕는 모바일 애플리케이션입니다. 
      이 앱은 운동 루틴을 추적하고, 식단 관리 기능을 제공하며, 사용자가 자신의 건강 목표를 달성할 수 있도록 지원합니다. 
      또한, 사용자 간의 운동 데이터를 비교하고 공유할 수 있는 소셜 기능을 포함하고 있습니다.`,
      mainFunction: `운동 루틴 추적, 식단 관리, 건강 목표 설정 및 추적, 소셜 피드 기능을 제공합니다. 
      사용자 맞춤형 운동 계획을 수립하고, 건강 지표를 시각화하여 제공합니다. 
      데이터베이스는 MariaDB를 사용하여 운동 및 식단 데이터를 효율적으로 저장하고, Spring Security를 사용하여 사용자 데이터를 보호했습니다.`,
      position: "Back-End Developer",
      usedSkills: "Spring Boot, Java, MariaDB, Spring Security",
      link: "https://fittrack.com",
      conclusion: `사용자가 건강한 생활 습관을 유지할 수 있도록 도와주었습니다. 
      이 앱을 통해 사용자들이 더욱 체계적으로 건강을 관리할 수 있었습니다. 
      특히, MariaDB와 Spring Security의 사용으로 데이터 관리와 보안성을 높였습니다.`
    },
    {
      title: "TravelMate",
      description: "Travel Planning App",
      imgUrl: projImg6,
      introduction: `TravelMate는 사용자의 여행 계획을 돕는 모바일 애플리케이션입니다. 
      이 앱은 여행 일정을 관리하고, 여행지 정보를 제공하며, 사용자 리뷰를 통해 신뢰성 있는 여행 정보를 제공합니다. 
      또한, 사용자 간의 경험 공유를 통해 더 나은 여행 계획을 수립할 수 있도록 합니다.`,
      mainFunction: `여행 일정 관리, 여행지 정보 제공, 사용자 리뷰 시스템, 경험 공유 기능을 포함합니다. 
      맞춤형 여행 추천 기능과 오프라인 지도 기능도 제공합니다. 
      MongoDB를 사용하여 사용자 리뷰와 여행 일정을 저장하며, 오프라인 지도 기능은 Mapbox를 사용하여 구현했습니다.`,
      position: "Back-End Developer",
      usedSkills: "Node.js, Express, MongoDB, Mapbox",
      link: "https://travelmate.com",
      conclusion: `사용자들이 더 나은 여행 경험을 할 수 있도록 지원하고, 여행 계획의 편의성을 높였습니다. 
      다양한 기능을 통해 사용자 만족도를 높였습니다. 
      특히, MongoDB와 Mapbox의 활용으로 데이터 저장과 지도 기능을 효율적으로 제공했습니다.`
    },
    {
      title: "HealthHub",
      description: "Personal Health Management",
      imgUrl: projImg7,
      introduction: `HealthHub는 개인의 건강 관리를 위한 종합 솔루션을 제공하는 모바일 애플리케이션입니다. 
      이 앱은 사용자에게 맞춤형 건강 관리 계획을 제공하며, 건강 상태를 실시간으로 모니터링하고 피드백을 제공합니다. 
      또한, 건강 관련 정보를 쉽게 접근할 수 있도록 돕습니다.`,
      mainFunction: `건강 상태 모니터링, 맞춤형 건강 관리 계획 수립, 실시간 피드백 기능을 포함합니다. 
      건강 관련 기사와 정보를 제공하고, 전문가 상담 기능도 지원합니다. 
      Firebase를 사용하여 실시간 데이터베이스를 구현하였으며, Flutter로 크로스플랫폼 지원을 통해 다양한 디바이스에서 원활한 사용 경험을 제공합니다.`,
      position: "Full Stack Developer",
      usedSkills: "Flutter, Firebase, Node.js",
      link: "https://healthhub.com",
      conclusion: `사용자가 자신의 건강을 효과적으로 관리할 수 있도록 지원했습니다. 
      실시간 데이터베이스와 크로스플랫폼 지원을 통해 사용자 경험을 크게 향상시켰습니다. 
      Firebase와 Flutter의 활용으로 실시간 데이터 처리와 다양한 디바이스 지원을 최적화했습니다.`
    },
    {
      title: "BudgetBuddy",
      description: "Personal Finance Management",
      imgUrl: projImg8,
      introduction: `BudgetBuddy는 사용자의 재정 관리를 돕는 모바일 애플리케이션입니다. 
      이 앱은 사용자가 자신의 지출과 수입을 추적하고, 예산을 설정하며, 재정 목표를 달성할 수 있도록 돕습니다.
       또한, 금융 전문가의 조언을 통해 더 나은 재정 관리를 할 수 있도록 지원합니다.`,
      mainFunction: `지출 및 수입 추적, 예산 설정, 재정 목표 관리, 금융 전문가 조언 기능을 포함합니다. 
      맞춤형 재정 보고서 생성 기능과 투자 포트폴리오 관리 기능도 제공합니다. 
      AWS DynamoDB를 사용하여 데이터를 효율적으로 저장하고, Lambda 함수를 이용하여 백엔드 로직을 서버리스로 구현했습니다.`,
      position: "Back-End Developer",
      usedSkills: "AWS DynamoDB, AWS Lambda, Python",
      link: "https://budgetbuddy.com",
      conclusion: `사용자가 재정을 체계적으로 관리할 수 있도록 지원하고, 재정 목표를 달성하는 데 도움을 주었습니다. 
      서버리스 아키텍처를 도입하여 백엔드 관리의 효율성을 높였습니다. 
      특히, AWS DynamoDB와 Lambda의 사용으로 데이터 처리 속도와 유연성을 향상시켰습니다.`
    }
  ];
  
  const etc = [
    {
      title: "AI Assistant",
      description: "Virtual Assistant using AI",
      imgUrl: projImg9,
      introduction: `AI Assistant는 인공지능을 활용한 가상 비서 서비스로, 사용자의 일정 관리, 정보 검색, 개인 맞춤형 알림 제공 등 다양한 기능을 제공합니다. 
      자연어 처리를 통해 사용자의 명령을 이해하고 실행하며, 일상 업무를 더욱 효율적으로 수행할 수 있도록 돕습니다.`,
      mainFunction: `일정 관리, 정보 검색, 개인 맞춤형 알림 기능을 포함합니다. 
      자연어 처리(NLP) 알고리즘을 사용하여 사용자의 음성 명령을 분석하고, 기계 학습 모델을 통해 사용자에게 최적의 결과를 제공합니다. 
      데이터 처리와 분석은 TensorFlow와 Python을 사용하여 구현하였으며, 사용자 데이터의 보호를 위해 강화된 보안 프로토콜을 적용했습니다.`,
      position: "AI Developer",
      usedSkills: "Python, TensorFlow, NLP",
      link: "https://aiassistant.com",
      conclusion: `효율적인 일정 관리와 신속한 정보 접근을 가능하게 하여 사용자의 만족도를 높였습니다. 
      사용자 경험을 개선하고, 일상 업무의 효율성을 크게 향상시켰습니다. 
      특히, NLP 알고리즘과 강화된 보안 프로토콜을 통해 데이터 처리와 보안성을 강화했습니다.`
    },
    {
      title: "SmartHome",
      description: "IoT Based Home Automation",
      imgUrl: projImg10,
      introduction: `SmartHome은 IoT 기술을 활용한 스마트 홈 자동화 솔루션입니다. 
      이 프로젝트는 사용자가 집안의 모든 기기를 스마트폰을 통해 제어할 수 있도록 하며, 에너지 효율성을 높이고, 생활의 편리함을 제공합니다. 
      사용자는 조명, 난방, 보안 시스템 등 다양한 기기를 원격으로 제어하고 모니터링할 수 있습니다.`,
      mainFunction: `조명, 난방, 보안 시스템 등의 원격 제어 및 모니터링, 에너지 사용 최적화 기능을 포함합니다. 
      사용자 맞춤형 자동화 시나리오를 제공합니다. 
      MQTT 프로토콜을 사용하여 IoT 기기 간의 통신을 구현하였으며, Node.js와 Raspberry Pi를 사용하여 서버와 클라이언트 간의 실시간 데이터 전송을 최적화했습니다.`,
      position: "IoT Developer",
      usedSkills: "Node.js, MQTT, Raspberry Pi",
      link: "https://smarthome.com",
      conclusion: `사용자가 더 편리하고 효율적인 생활을 할 수 있도록 돕고, 에너지 절약을 통해 환경 보호에 기여했습니다. 
      다양한 IoT 기기와의 연동을 통해 사용자 경험을 향상시켰습니다. 
      특히, MQTT와 Raspberry Pi의 사용으로 실시간 데이터 전송과 기기 간의 통신을 최적화했습니다.`
    },
    {
      title: "E-Learning Platform",
      description: "Comprehensive Online Education Platform",
      imgUrl: projImg11,
      introduction: `E-Learning Platform은 학생들이 온라인으로 다양한 과정을 학습할 수 있는 종합 교육 플랫폼입니다. 
      이 플랫폼은 다양한 과목의 강의를 제공하며, 학생들이 자기 주도적으로 학습할 수 있는 환경을 제공합니다. 
      또한, 학습 진도를 추적하고, 성과를 평가할 수 있는 도구를 포함하고 있습니다.`,
      mainFunction: `강의 제공, 학습 진도 추적, 성과 평가, 학생 간의 토론 기능을 포함합니다. 
      맞춤형 학습 경로와 피드백을 제공합니다. 
      실시간 데이터 처리와 사용자 맞춤형 학습 추천을 위해 AI 알고리즘을 도입하였으며, 데이터베이스는 PostgreSQL을 사용하여 학습 데이터를 관리했습니다.`,
      position: "Full Stack Developer",
      usedSkills: "React, Node.js, PostgreSQL, AI algorithms",
      link: "https://elearning.com",
      conclusion: `학생들이 언제 어디서나 학습할 수 있도록 지원하고, 학습의 질을 높였습니다. 
      다양한 기능을 통해 학습 경험을 개선하고, 학생들의 학업 성취도를 향상시켰습니다. 
      특히, AI 알고리즘을 통한 맞춤형 학습 추천으로 사용자 경험을 크게 향상시켰습니다.`
    },
    {
      title: "WeatherWizard",
      description: "Advanced Weather Forecasting",
      imgUrl: projImg12,
      introduction: `WeatherWizard는 사용자가 실시간으로 날씨 정보를 확인하고 예측할 수 있는 고급 기상 예보 서비스입니다. 
      이 서비스는 최신 기상 데이터를 수집하여 정확한 예보를 제공하며, 사용자에게 기상 경고와 날씨 관련 팁을 제공합니다. 
      또한, 사용자 맞춤형 날씨 정보를 통해 더 나은 일상 계획을 세울 수 있습니다.`,
      mainFunction: `실시간 날씨 정보 제공, 기상 경고, 맞춤형 날씨 예보 기능을 포함합니다. 
      사용자 위치 기반의 기상 데이터 제공 및 시각화를 지원합니다. 
      기상 데이터 수집 및 처리에는 Python과 Pandas를 사용하였으며, 시각화에는 D3.js를 활용하여 사용자 친화적인 인터페이스를 구현했습니다.`,
      position: "Full Stack Developer",
      usedSkills: "Angular, Node.js, PostgreSQL, D3.js, Python",
      link: "https://weatherwizard.com",
      conclusion: `사용자가 일상 생활에서 날씨에 대한 정보를 쉽게 얻고, 더 나은 계획을 세울 수 있도록 도왔습니다. 
      정확한 기상 데이터를 제공하여 사용자 신뢰도를 높였습니다. 
      특히, D3.js와 Python을 통한 데이터 시각화와 처리로 사용자 경험을 향상시켰습니다.`
    }
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
