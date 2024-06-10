import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaPhoneAlt, FaEnvelope, FaLinkedin, FaBloggerB } from "react-icons/fa";
import headshot from "../assets/img/headshot.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(200);
  const [index, setIndex] = useState(1);
  const toRotate = ["Hi! I'm Jiwon, \nBackend Developer."];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h1>
                    <span className="txt-rotate">
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p><br />안녕하세요. 저는 머물러 있지 않고 꾸준히 성장하고자 하는 백엔드 개발자 차지원입니다 🙂
                    <br />요구사항에 맞는 ERD 설계부터 RestAPI 개발, DB와 서버 구축까지 백엔드 개발 프로세스 전체를 이해하고 다룰 수 있습니다.
                    <br />주 포지션인 백엔드 개발자 포지션 이외에도 기획자, 프론트엔드, 안드로이드 개발자 포지션으로 활동했던 경험을 통해 얻은 다른 직무에 대한 이해도를 기반으로 원활한 소통과 협업을 할 수 있습니다.
                    <br />더 나은 비즈니스에 바탕이 되는 더 좋은 코드와 구현 방식을 고려해보며 계속해서 고민하고, 서비스를 만드는 사람으로서 서비스에 애정을 가지고 개발합니다.</p>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn custom-rounded" : "custom-rounded"}>
                  <img src={headshot} alt="Header Img" style={{ width: '70%', height: '70%' }} />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
        <Row className="contact-info mt-5">
          <Col xs={12}>
            <div className="d-flex justify-content-start">
              <div className="contact-item mr-3">
                <a href="https://github.com/wona825" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <div className="icon-box">
                    <FaGithub size={32} />
                    <div className="contact-tooltip">GitHub: github.com/wona825</div>
                  </div>
                </a>
              </div>
              <div className="contact-item mr-3">
                <a href="tel:010-5543-2490" className="contact-link">
                  <div className="icon-box">
                    <FaPhoneAlt size={32} />
                    <div className="contact-tooltip">Phone: 010-5543-2490</div>
                  </div>
                </a>
              </div>
              <div className="contact-item mr-3">
                <a href="mailto:wona825@naver.com" className="contact-link">
                  <div className="icon-box">
                    <FaEnvelope size={32} />
                    <div className="contact-tooltip">Email: wona825@naver.com</div>
                  </div>
                </a>
              </div>
              <div className="contact-item mr-3">
                <a href="https://linkedin.com/in/wona825" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <div className="icon-box">
                    <FaLinkedin size={32} />
                    <div className="contact-tooltip">LinkedIn: linkedin.com/in/wona825</div>
                  </div>
                </a>
              </div>
              <div className="contact-item mr-3">
                <a href="https://velog.io/@wona825" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <div className="icon-box">
                    <FaBloggerB size={32} />
                    <div className="contact-tooltip">Blog: https://velog.io/@wona825</div>
                  </div>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
