import React from 'react';
import chatbotIcon from "../assets/img/chatbot-icon.png";

// ChatbotIcon 컴포넌트는 챗봇 아이콘을 렌더링합니다.
const ChatbotIcon = ({ onClick, isChatOpen }) => {
  return (
    <div className="chatbot-icon" onClick={onClick}>
      <img src={chatbotIcon} alt="Chatbot Icon" />
      {/* 챗봇이 열려 있지 않을 때만 말풍선을 표시합니다. */}
      {!isChatOpen && (
        <div className="bot-speech-bubble">
          안녕하세요, one입니다!<br />
          무엇이든 물어봐주세요 (۶•̀ᴗ•́)۶
        </div>
      )}
    </div>
  );
};

export default ChatbotIcon;
