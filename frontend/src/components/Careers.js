import React from "react";
import TrackVisibility from 'react-on-screen';
import 'animate.css';

export const Careers = () => {
  const careerExamples = [
    {
      id: 1,
      title: "(주) 오픈갤러리",
      period: "2019.08 - 2023.09",
      description: `그림을 렌탈하려는 고객들과 그림을 그리는 작가들을 중개하는 그림 렌탈 서비스 플랫폼입니다.
기본적으로는 Django 기반의 풀 스택 웹 개발을 총괄 담당하고 있으며, 신규 기술 스택(Next.js 등)과 관련한 개발 및 교육까지 전담하고 있습니다.
주로 복잡하고 어려운 작업에 관한 기술 검토를 통해 기획을 보조하며, 동료 개발자의 작업에 대한 코드 리뷰나 신입 개발자의 사수 역할과 같은 기타 업무까지 함께 담당하고 있습니다.
백 오피스의 전반적인 관리 및 각종 기능 개발/기획
고객 유입 흐름 파악을 위한 업무 프로세스 관련 데이터 대규모 연동 (Funnel)`
    },
    {
      id: 2,
      title: "(주) 더코드",
      period: "2018.04 - 2019.07",
      description: `프로그래밍 교육 사업을 운영하는 스타트업 기업으로, 온라인 코딩 교육 및 코딩 부트캠프를 주요 사업으로 운영하고 있습니다.
React 및 Django를 활용한 온라인 코딩 교육 플랫폼 개발
코딩 부트캠프 진행을 위한 커리큘럼 개발 및 운영
신규 프로그램 개발 및 고도화
온라인 광고 캠페인 기획 및 실행`
    },
    {
      id: 3,
      title: "(주) 코드랩",
      period: "2016.09 - 2018.03",
      description: `소프트웨어 개발 및 컨설팅 회사로, 다양한 고객사에게 소프트웨어 개발 및 기술 컨설팅 서비스를 제공하고 있습니다.
주요 고객사의 요구에 맞는 소프트웨어 개발 및 유지보수
기존 소프트웨어 시스템의 분석 및 리팩토링
기술 컨설팅 및 솔루션 제안
프로젝트 매니저로서의 업무 수행`
    },
  ];

  return (
    <section className="career" id="careers">
      <div className="container">
        <TrackVisibility partialVisibility>
          {({ isVisible }) => (
            <div className={`career-content ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
              <h2>Careers</h2>
              <div className="career-list">
                <div className="career-timeline">
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
