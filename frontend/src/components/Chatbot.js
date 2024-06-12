import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaPaperPlane } from 'react-icons/fa'; 

// UserMessage 컴포넌트는 사용자가 보낸 메시지를 렌더링합니다.
const UserMessage = ({ text }) => {
  const messageRef = useRef(null);
  const [marginLeft, setMarginLeft] = useState('auto');

  // 메시지 텍스트의 길이에 따라 왼쪽 마진을 동적으로 조절합니다.
  useEffect(() => {
    if (messageRef.current) {
      const baseMargin = 260;
      const textWidth = messageRef.current.offsetWidth;
      const calculatedMargin = baseMargin - textWidth;

      setMarginLeft(`${calculatedMargin > 0 ? calculatedMargin : 0}px`);
    }
  }, [text]);

  return (
    <div className="message user" style={{ marginLeft }} ref={messageRef}>
      {text}
    </div>
  );
};

// BotResponse 컴포넌트는 봇의 응답 메시지를 렌더링합니다.
const BotResponse = ({ text }) => {
  return (
    <div className="message bot">
      {text}
    </div>
  );
};

// Chatbot 컴포넌트는 전체 챗봇 UI를 관리합니다.
export const Chatbot = ({ isOpen }) => {
  const [messages, setMessages] = useState([]); // 메시지 상태 관리
  const [input, setInput] = useState(''); // 입력 필드 상태 관리
  const messagesEndRef = useRef(null); // 메시지 리스트 끝을 참조
  const messagesContainerRef = useRef(null); // 메시지 리스트 컨테이너를 참조

  // 메시지 리스트의 끝으로 스크롤합니다.
  const scrollToBottom = (smooth = true) => {
    messagesContainerRef.current?.scrollTo({
      top: messagesContainerRef.current.scrollHeight,
      behavior: smooth ? 'smooth' : 'auto'
    });
  };

  // 입력 필드의 변경을 처리합니다.
  const handleUserInput = (e) => {
    setInput(e.target.value);
  };

  // 메시지를 전송합니다.
  const sendMessage = async () => {
    if (input.trim() === '') return;

    const newMessage = { sender: 'user', text: input };
    setMessages(prevMessages => [...prevMessages, newMessage]);

    setInput('');
    scrollToBottom(false);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/chat-gpt/ask-stream/v1`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: input })
      });

      if (response.ok) {
        const reader = response.body.getReader();
        const decoder = new TextDecoder('utf-8');
        let partialResponse = '';

        const processText = async ({ done, value }) => {
          if (done) {
            return;
          }

          const chunk = decoder.decode(value);
          console.log(chunk);
          const cleanChunk = chunk.replace(/data:/g, '').replace(/\n/g, ''); 
          const cleanText = cleanChunk.replace(/"([^"]*?)"/g, '$1').replace(/\\/g, '');                    

          partialResponse += cleanText;

          setMessages(prevMessages => {
            const lastMessage = prevMessages[prevMessages.length - 1];
            if (lastMessage && lastMessage.sender === 'bot') {
              return [...prevMessages.slice(0, -1), { sender: 'bot', text: partialResponse }];
            } else {
              return [...prevMessages, { sender: 'bot', text: partialResponse }];
            }
          });

          scrollToBottom(false);
          reader.read().then(processText);
        };

        reader.read().then(processText);
      } else {
        console.error('Response not ok:', response.statusText);
        setMessages(prevMessages => [...prevMessages, { sender: 'bot', text: '죄송합니다. 서버 오류가 발생하였습니다. 잠시 후에 다시 시도해주세요 🤢' }]);
      }
    } catch (error) {
      console.error('Error while sending message:', error);
      setMessages(prevMessages => [...prevMessages, { sender: 'bot', text: '죄송합니다. 현재 서버 오류가 발생하였습니다. 잠시 후에 다시 시도해주세요 🤢' }]);
    }
  };

  // 메시지가 업데이트될 때마다 맨 아래로 스크롤합니다.
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  if (!isOpen) return null; // 챗봇이 열려있지 않으면 null 반환

  return (
    <Container>
      <Row>
        <Col>
          <div className="chatbox">
            <div className="messages" ref={messagesContainerRef} style={{ overflowY: 'auto', maxHeight: '400px' }}>
              {messages.map((msg, index) => (
                <div key={index}>
                  {msg.sender === 'user' ? (
                    <UserMessage text={msg.text} />
                  ) : (
                    <BotResponse text={msg.text} />
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} /> {/* 맨 아래로 스크롤 */}
            </div>
            {/* 메시지 입력 폼 */}
            <Form onSubmit={(e) => {
              e.preventDefault();
              sendMessage();
            }} style={{ display: 'flex', alignItems: 'center' }}>
              <Form.Group controlId="formMessage" style={{ flex: 1 }}>
                <Form.Control
                  type="text"
                  placeholder="one에게 질문해주세요 💭"
                  value={input}
                  onChange={handleUserInput}
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="send-button">
                <FaPaperPlane />
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
