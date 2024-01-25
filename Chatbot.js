import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: 'Hi! I am a virtual bot.', sender: 'bot', icon: faRobot },
    { text: 'What is your name?', sender: 'bot', icon: faRobot },
  ]);
  const [inputText, setInputText] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom of the messages when new messages are added
    if (inputRef.current) {
      inputRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (inputText.trim() === '') return;

    // Add user message
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: inputText, sender: 'user', icon: 'path/to/ai-generated.webp' },
    ]);
    setInputText('');

    // Simulate chatbot response (you can replace this with an API call)
    handleBotResponse(inputText);
  };

  const handleBotResponse = (userInput) => {
    switch (messages.length) {
      case 2:
        // Bot asks for the user's name
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: `Great! What is your age, ${userInput}?`, sender: 'bot', icon: faRobot },
        ]);
        break;
      case 4:
        // Bot acknowledges the age and asks for the user's gender
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: `Awesome! What is your gender?`, sender: 'bot', icon: faRobot },
        ]);
        break;
      case 6:
        // Bot acknowledges the gender and asks for the user's occupation
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: `Got it! What is your occupation?`, sender: 'bot', icon: faRobot },
        ]);
        break;
      case 8:
        // Bot acknowledges the occupation and asks about health concerns
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: `Interesting! Do you have any specific health concerns?`, sender: 'bot', icon: faRobot },
        ]);
        break;
      case 10:
        // Bot concludes the conversation
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: `Thanks for sharing! If you have any more questions or need assistance, feel free to ask.`, sender: 'bot', icon: faRobot },
        ]);
        break;
      default:
        // Default bot response for other stages
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'This is a chatbot response.', sender: 'bot', icon: faRobot },
        ]);
        break;
    }
  };

  const handleVoiceRecognition = () => {
    // ... (remaining code for voice recognition)
  };

  const handleImageCapture = (e) => {
    // ... (remaining code for image capture)
  };

  return (
    <div className="chatbot-container">
      <div style={{ height: '300px', overflowY: 'scroll' }} className="message-container">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.icon && (
              <FontAwesomeIcon icon={message.icon} className="message-icon" />
            )}
            {message.text}
          </div>
        ))}
        <div ref={inputRef}></div>
      </div>

      <div>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
        <button onClick={handleVoiceRecognition}>
          <FontAwesomeIcon icon={faMicrophone} />
        </button>
        <label htmlFor="imageUpload" className="file-upload-label">
          Upload Image
        </label>
        <input
          type="file"
          id="imageUpload"
          accept="image/*"
          onChange={handleImageCapture}
        />
      </div>
    </div>
  );
};

export default Chatbot;
