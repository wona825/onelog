import React, { useEffect, useState, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const QuestionLog = () => {
  const [questions, setQuestions] = useState([]);
  const [animationDuration, setAnimationDuration] = useState('15s');
  const marqueeRef = useRef(null);

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

  useEffect(() => {
    if (marqueeRef.current && questions.length > 0) {
      const totalWidth = marqueeRef.current.scrollWidth;
      const visibleWidth = marqueeRef.current.clientWidth;
      const duration = (totalWidth + visibleWidth)/150; 
      setAnimationDuration(`${duration}s`);
    }
  }, [questions]);

  if (questions.length === 0) {
    return null; // 질문이 없을 때는 아무것도 렌더링하지 않음
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
