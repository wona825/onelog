import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Careers } from "./components/Careers";
import { Projects } from "./components/Projects";
import { Chatbot } from "./components/Chatbot";
import ChatbotIcon from "./components/ChatbotIcon";
import { Footer } from "./components/Footer";
import { QuestionLog } from "./components/QuestionLog";


function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChatbotIconClick = () => {
    setIsChatOpen(prev => !prev);
  };

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Careers />
      <Projects />
      <Chatbot isOpen={isChatOpen} />
      <ChatbotIcon onClick={handleChatbotIconClick} isChatOpen={isChatOpen} />
      <QuestionLog />
      <Footer />

    </div>
  );
}

export default App;
