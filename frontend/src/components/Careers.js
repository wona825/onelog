import React from "react";
import TrackVisibility from 'react-on-screen';
import 'animate.css';

// Careers 컴포넌트는 사용자의 경력을 타임라인 형식으로 보여줍니다.
export const Careers = () => {
  const education = [
    {
      id: 1,
      title: "부산대학교 의생명융합공학부 데이터사이언스전공",
      period: "2021.03. ~"
    }
  ];

  const activities = [
    {
      id: 1,
      title: "앱개발 동아리 ‘APPTIVE’",
      period: "2022.03. ~"
    },
    {
      id: 2,
      title: "카카오테크캠퍼스 1기 ‘BACKEND’",
      period: "2023.03. ~ 2023.12."
    },
    {
      id: 3,
      title: "카이스트 2023 겨울학기 몰입캠프",
      period: "2023.12. ~ 2023.01."
    },
  ];

  const awards = [
    {
      id: 1,
      title: "2023 관광데이터 활용 공모전",
      details: "우수상, 부산관광공사 시장상"
    },
    {
      id: 2,
      title: "카카오테크캠퍼스 아이디어톤",
      details: "최우수상"
    }
  ];

  return (
    <section className="career" id="careers">
      <div className="container">
        <TrackVisibility partialVisibility>
          {({ isVisible }) => (
            <div className={`career-content ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
              <h2>Careers</h2>
              
              <div className="career-section">
                <h3>🎓 EDUCATION</h3>
                <div className="career-list">
                  {education.map((item) => (
                    <TrackVisibility key={item.id} partialVisibility>
                      {({ isVisible }) => (
                        <div className={`career-item-box ${isVisible ? "animate__animated animate__fadeInUp" : ""}`}>
                          <div className="career-item">
                            <p>🖋️ {item.title} <span>{item.period}</span></p>
                          </div>
                        </div>
                      )}
                    </TrackVisibility>
                  ))}
                </div>
              </div>

              <div className="career-section">
                <h3>✈️ ACTIVITIES</h3>
                <div className="career-list">
                  {activities.map((item) => (
                    <TrackVisibility key={item.id} partialVisibility>
                      {({ isVisible }) => (
                        <div className={`career-item-box ${isVisible ? "animate__animated animate__fadeInUp" : ""}`}>
                          <div className="career-item">
                            <p>🗯️ {item.title} <span>{item.period}</span></p>
                          </div>
                        </div>
                      )}
                    </TrackVisibility>
                  ))}
                </div>
              </div>

              <div className="career-section">
                <h3>🏆 AWARDS</h3>
                <div className="career-list">
                  {awards.map((item) => (
                    <TrackVisibility key={item.id} partialVisibility>
                      {({ isVisible }) => (
                        <div className={`career-item-box ${isVisible ? "animate__animated animate__fadeInUp" : ""}`}>
                          <div className="career-item">
                            <p>⭐ {item.title} <span>{item.details}</span></p>
                          </div>
                        </div>
                      )}
                    </TrackVisibility>
                  ))}
                </div>
              </div>
              
            </div>
          )}
        </TrackVisibility>
      </div>
    </section>
  );
}