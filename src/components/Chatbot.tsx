import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, User, Bot } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
}

const QA_DATABASE: Record<string, string> = {
  "my journey": "My journey started with a deep passion for technology. Over the years, I've honed my skills in Full-Stack Development and UI/UX design, transitioning from simple static sites to complex, scalable web applications and AI integrations.",
  "aria ai": "Aria AI is an advanced artificial intelligence project I worked on. It focuses on integrating modern machine learning capabilities to solve real-world problems efficiently and intelligently.",
  "crm": "I developed a comprehensive CRM (Customer Relationship Management) system designed to streamline business operations, improve client tracking, and boost sales efficiency.",
  "yp edu tech": "YP Edu Tech is an innovative educational technology platform I contributed to. It aims to make learning more accessible and engaging through interactive digital tools and platforms."
};

const SUGGESTIONS = [
  "Tell me about your journey",
  "What is Aria AI?",
  "Tell me about the CRM project",
  "What is YP Edu Tech?"
];

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm Soojal's AI assistant. Ask me about his journey, or projects like Aria AI, CRM, and YP Edu Tech!",
      sender: 'bot'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;
    
    // Add user message
    const newUserMsg: Message = { id: Date.now(), text, sender: 'user' };
    setMessages(prev => [...prev, newUserMsg]);
    setInputValue('');

    // Simulate thinking and bot response
    setTimeout(() => {
      let response = "I'm not quite sure about that. Try asking me about Soojal's journey, Aria AI, CRM, or YP Edu Tech!";
      
      const lowerText = text.toLowerCase();
      if (lowerText.includes('journey')) {
        response = QA_DATABASE['my journey'];
      } else if (lowerText.includes('aria') || lowerText.includes('ai')) {
        response = QA_DATABASE['aria ai'];
      } else if (lowerText.includes('crm')) {
        response = QA_DATABASE['crm'];
      } else if (lowerText.includes('yp') || lowerText.includes('edu')) {
        response = QA_DATABASE['yp edu tech'];
      }

      setMessages(prev => [...prev, { id: Date.now(), text: response, sender: 'bot' }]);
    }, 600);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 bg-gradient-to-r from-teal-500 to-accent text-white rounded-full shadow-lg hover:shadow-neon-accent transition-all duration-300 transform hover:scale-110 z-50 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
      >
        <MessageSquare size={24} />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 w-80 sm:w-96 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-500 transform origin-bottom-right z-50 ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
        }`}
        style={{ height: '500px', maxHeight: '80vh' }}
      >
        {/* Header */}
        <div className="p-4 bg-gradient-to-r from-teal-500 to-accent flex justify-between items-center text-white">
          <div className="flex items-center gap-2">
            <Bot size={20} />
            <h3 className="font-bold">Soojal's Assistant</h3>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-white/20 rounded-md transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto bg-gray-50 dark:bg-gray-950/50 space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex gap-3 max-w-[85%] ${msg.sender === 'user' ? 'ml-auto flex-row-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                msg.sender === 'user' ? 'bg-teal-100 text-teal-600' : 'bg-gradient-to-br from-teal-400 to-accent text-white'
              }`}>
                {msg.sender === 'user' ? <User size={16} /> : <Bot size={16} />}
              </div>
              
              <div className={`p-3 rounded-2xl text-sm leading-relaxed ${
                msg.sender === 'user' 
                  ? 'bg-teal-500 text-white rounded-tr-none' 
                  : 'bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-gray-800 dark:text-gray-200 rounded-tl-none shadow-sm'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggestions */}
        <div className="p-3 bg-gray-50 dark:bg-gray-950/50 border-t border-gray-200 dark:border-gray-800 flex flex-wrap gap-2">
          {SUGGESTIONS.map((suggestion, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(suggestion)}
              className="px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs text-gray-600 dark:text-gray-300 hover:text-teal-500 hover:border-teal-500 transition-colors shadow-sm text-left"
            >
              {suggestion}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="p-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSendMessage(inputValue); }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask anything..."
              className="flex-1 bg-gray-100 dark:bg-gray-800 border-none rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-teal-500 dark:text-white outline-none"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="p-2 bg-teal-500 hover:bg-teal-600 disabled:opacity-50 disabled:hover:bg-teal-500 text-white rounded-full transition-colors"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
