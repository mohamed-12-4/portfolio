import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hi there! I'm your portfolio assistant. Ask me anything about my skills, experience, or projects!", sender: 'bot' }
  ]);
  const [input, setInput] = useState<string>('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (input.trim() === '') return;
    
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: 'user'
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    
    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(input);
      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        sender: 'bot'
      };
      
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('experience') || input.includes('work')) {
      return "I have over 8 years of experience in web development, specializing in React, TypeScript, and Node.js. I've worked with companies ranging from startups to large enterprises.";
    } else if (input.includes('skill') || input.includes('tech')) {
      return "My core skills include React, TypeScript, Node.js, and AWS. I'm also proficient in database technologies like MongoDB and PostgreSQL.";
    } else if (input.includes('project')) {
      return "I've worked on various projects including e-commerce platforms, content management systems, and real-time applications. Check out the Projects section for more details!";
    } else if (input.includes('education') || input.includes('study')) {
      return "I have a Bachelor's degree in Computer Science and have completed various certifications in web development and cloud technologies.";
    } else if (input.includes('contact') || input.includes('hire') || input.includes('email')) {
      return "You can contact me through the Contact form on this site, or directly via email at example@example.com.";
    } else if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return "Hello! How can I help you today?";
    } else {
      return "I'm not sure I understand. Could you ask about my experience, skills, projects, education, or how to contact me?";
    }
  };

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div className="chatbot-panel">
          <div className="chatbot-header">
            <h3>Portfolio Assistant</h3>
          </div>
          <div className="chatbot-messages">
            {messages.map(message => (
              <div key={message.id} className={`message ${message.sender}-message`}>
                {message.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type your question..."
            />
            <button onClick={handleSendMessage}>
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
      <div className="chatbot-button" onClick={() => setIsOpen(!isOpen)}>
        <MessageCircle size={24} />
      </div>
    </div>
  );
};

export default ChatBot;