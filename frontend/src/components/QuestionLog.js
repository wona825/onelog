import React, { useEffect, useState, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// QuestionLog 컴포넌트는 오늘의 질문 목록을 가져와서 화면에 표시합니다.
export const QuestionLog = () => {
  const [questions, setQuestions] = useState([]); // 질문 목록 상태
  const [animationDuration, setAnimationDuration] = useState('15s'); // 애니메이션 지속 시간 상태
  const marqueeRef = useRef(null); // 마키 요소 참조

  // 컴포넌트가 마운트될 때 오늘의 질문을 가져오는 함수
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const questionResponse = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/chat-gpt/questions/today/v1`);
        if (questionResponse.ok) {
          const questionData = await questionResponse.json();
          setQuestions(questionData);
        } else {
          console.error('Failed to fetch questions:', questionResponse.statusText);
        }
      } catch (error) {
        console.error('Error fetching site stats:', error);
      }
    };

    fetchStats();
  }, []);

  // 질문 목록이 업데이트될 때 마키 애니메이션 지속 시간을 설정하는 함수
  useEffect(() => {
    if (marqueeRef.current && questions.length > 0) {
      const totalWidth = marqueeRef.current.scrollWidth;
      const visibleWidth = marqueeRef.current.clientWidth;
      const duration = (totalWidth + visibleWidth) / 150; 
      setAnimationDuration(`${duration}s`);
    }
  }, [questions]);

  // 질문이 없을 때는 아무것도 렌더링하지 않음
  if (questions.length === 0) {
    return null;
  }

  return (
    <Container fluid className="question-log">
      <Row>
        <Col>
          <div className="marquee" ref={marqueeRef} style={{ animationDuration }}>
            <span className="question-item">🧐 Question Log</span>
            {questions.map((question, index) => (
              <span key={index} className="question-item">{question.content}</span>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};
