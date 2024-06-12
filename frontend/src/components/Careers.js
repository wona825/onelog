import React from "react";
import TrackVisibility from 'react-on-screen';
import 'animate.css';

// Careers 컴포넌트는 사용자의 경력을 타임라인 형식으로 보여줍니다.
export const Careers = () => {
  // 각 경력 항목을 정의하는 객체 배열
  const careerExamples = [
    {
      id: 1,
      title: "(주) 오픈갤러리",
      period: "2019.08 - 2023.09",
      description: `🔎 회사 소개:
        (주) 오픈갤러리는 고객과 작가를 중개하는 그림 렌탈 서비스 플랫폼입니다. 
        이 플랫폼은 고객이 그림을 렌탈하거나 구매할 수 있도록 하고, 작가들에게는 작품을 전시하고 판매할 기회를 제공합니다. 
        회사에서 저는 주로 Django 기반의 풀 스택 웹 개발을 총괄 담당하였으며, 신규 기술 스택(Next.js 등)과 관련한 개발 및 교육까지 전담했습니다. 
        이를 통해 플랫폼의 성능과 사용성을 크게 향상시켰습니다.

        💬 주요 업무 및 성과:
        - 복잡한 작업의 기술 검토를 통해 기획 보조
        - 동료 개발자의 코드 리뷰 및 신입 개발자의 멘토링
        - 백 오피스 전반적인 관리 및 기능 개발/기획
        - 고객 유입 흐름 파악을 위한 데이터 연동 (Funnel 분석)
        - PostgreSQL 및 Redis를 이용한 데이터베이스 관리 및 성능 최적화
        - 서비스 운영 및 유지보수를 위한 DevOps 작업 지원 (CI/CD 설정, 서버 모니터링 등)
        - 서비스의 가용성을 높이기 위해 마이크로서비스 아키텍처 도입
        - 사용자 경험(UX)을 개선하기 위한 UI 최적화 작업
      `
    },
    {
      id: 2,
      title: "(주) 코드랩",
      period: "2016.09 - 2019.08",
      description: `🔎 회사 소개:
        (주) 코드랩은 소프트웨어 개발 및 기술 컨설팅 서비스를 제공하는 회사로, 다양한 고객사에게 맞춤형 소프트웨어 솔루션을 제공합니다. 
        저는 주로 고객사의 요구에 맞춘 소프트웨어 개발 및 유지보수를 담당하였으며, 프로젝트 매니저로서 팀을 이끌고 기술 컨설팅을 제공했습니다. 
        이를 통해 고객의 비즈니스 요구를 충족시키고, 프로젝트의 성공적인 완료를 도왔습니다.

        💬 주요 업무 및 성과:
        - 고객 요구사항에 맞는 소프트웨어 개발 및 유지보수
        - 기존 소프트웨어 시스템의 분석 및 리팩토링
        - 기술 컨설팅 및 솔루션 제안
        - 프로젝트 매니저로서의 업무 수행
        - Spring Boot 및 Java를 활용한 백엔드 시스템 구축 및 최적화
        - 대규모 데이터 처리 및 분석을 위한 데이터 파이프라인 설계 및 구현
        - RESTful API 설계 및 개발, 문서화
        - JUnit을 이용한 단위 테스트 작성 및 테스트 자동화
        - 소프트웨어 성능 및 보안 최적화 작업
        - AWS를 이용한 클라우드 인프라 관리 및 배포 자동화
      `
    },
    {
      id: 3,
      title: "(주) 이노베이션랩",
      period: "2015.05 - 2016.08",
      description: `🔎 회사 소개:
        (주) 이노베이션랩은 다양한 산업 분야의 고객들에게 맞춤형 IT 솔루션을 제공하는 회사입니다. 
        회사는 최신 기술을 활용하여 혁신적인 제품과 서비스를 개발하며, 고객의 비즈니스 성장을 지원합니다. 
        저는 주로 Spring Boot와 Java를 이용한 백엔드 시스템 개발을 담당하였으며, 클라우드 기반의 인프라 설계와 구현에도 참여했습니다. 
        이를 통해 고객의 요구를 충족시키는 안정적이고 확장 가능한 시스템을 구축했습니다.

        💬 주요 업무 및 성과:
        - Spring Boot 및 Java를 이용한 웹 애플리케이션 개발
        - MySQL 및 MongoDB를 이용한 데이터베이스 설계 및 최적화
        - 고객 요구사항 분석 및 기술적 해결 방안 제시
        - Jenkins를 이용한 CI/CD 파이프라인 구축 및 관리
        - API 게이트웨이 및 마이크로서비스 아키텍처 설계 및 구현
        - 비동기 메시징 시스템(Kafka)을 이용한 이벤트 기반 아키텍처 구현
        - 성능 및 보안 최적화를 위한 코드 및 시스템 분석
        - Docker를 이용한 컨테이너화 및 배포 자동화
      `
    },
    {
      id: 4,
      title: "(주) 넥스트젠",
      period: "2013.03 - 2015.04",
      description: `🔎 회사 소개:
        (주) 넥스트젠은 클라우드 기반 솔루션 및 모바일 애플리케이션 개발을 전문으로 하는 회사입니다. 
        이 회사는 최신 기술을 활용하여 고객에게 효율적이고 혁신적인 IT 솔루션을 제공합니다. 
        저는 주로 Spring Boot와 Java를 이용한 백엔드 시스템 개발을 담당하였으며, 모바일 애플리케이션 백엔드 API 개발 및 통합 작업을 수행했습니다. 
        이를 통해 다양한 클라이언트 애플리케이션과 원활하게 통합되는 백엔드 시스템을 구축했습니다.

        💬 주요 업무 및 성과:
        - Spring Boot 및 Java를 이용한 클라우드 기반 백엔드 시스템 개발
        - NoSQL 데이터베이스 (Cassandra, Redis) 설계 및 관리
        - 모바일 애플리케이션 백엔드 API 개발 및 통합
        - 멀티스레드 환경에서의 동시성 문제 해결 및 성능 최적화
        - 지속적 통합 및 배포 환경 구축 (CI/CD) 및 관리
        - 사용자 인증 및 권한 관리 시스템 개발 (OAuth 2.0, JWT)
        - 분산 시스템 환경에서의 장애 대응 및 로깅 시스템 구축
        - Agile 방법론을 활용한 팀 협업 및 프로젝트 관리
        - 서버 사이드 렌더링 및 SEO 최적화를 위한 전략 수립 및 실행
      `
    },
  ];

  return (
    <section className="career" id="careers">
      <div className="container">
        {/* TrackVisibility 컴포넌트를 사용하여 섹션이 화면에 보일 때 애니메이션을 적용 */}
        <TrackVisibility partialVisibility>
          {({ isVisible }) => (
            <div className={`career-content ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
              <h2>Careers</h2>
              <div className="career-list">
                <div className="career-timeline">
                  {/* 각 경력 항목을 타임라인 형식으로 렌더링 */}
                  {careerExamples.map((example, index) => (
                    <TrackVisibility key={example.id} partialVisibility>
                      {({ isVisible }) => (
                        <div className={`timeline-item ${isVisible ? "animate__animated animate__fadeInUp" : ""}`}>
                          <div className="timeline-circle">{index + 1}</div>
                          <div className="timeline-content">
                            <h3 className="text-black font-weight-bold">{example.title}</h3>
                            <p className="text-black">{example.period}</p>
                            <div className="speech-bubble">
                              <p className="text-black description">{example.description}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </TrackVisibility>
                  ))}
                  <div className="timeline-line"></div>
                </div>
              </div>
            </div>
          )}
        </TrackVisibility>
      </div>
    </section>
  );
}
