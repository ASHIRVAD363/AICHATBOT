import React, { useState } from 'react';
import Chatbot from './Chatbot';
import botImage from './botimg.png'; // Replace with the correct path

const Dashboard = () => {
  const [chatbotVisible, setChatbotVisibility] = useState(false);

  const toggleChatbot = () => {
    setChatbotVisibility((prevVisibility) => !prevVisibility);
  };

  return (
    <div>
      <img
        src={botImage}
        alt="Bot"
        style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
      />

      {chatbotVisible && <Chatbot />}

      <button
        onClick={toggleChatbot}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          background: 'green',
          color: 'white',
          padding: '10px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
      Bot AI
      </button>
    </div>
  );
};

export default Dashboard;
