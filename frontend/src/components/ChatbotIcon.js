import React from 'react';
import chatbotIcon from "../assets/img/chatbot-icon.png";

const ChatbotIcon = ({ onClick, isChatOpen }) => {
  return (
    <div className="chatbot-icon" onClick={onClick}>
      <img src={chatbotIcon} alt="Chatbot Icon" />
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
