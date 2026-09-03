import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, User, Bot, Loader2 } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';

interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
}



const SYSTEM_PROMPT = `You are the personal AI assistant for Soojal Bhardwaj's portfolio website. 
You are friendly, professional, and knowledgeable about Soojal's experience.
Key details to know about Soojal:
- He is an AI & Full-Stack Engineer who builds intelligent business systems and real-world digital products.
- Jarvis AI: A personal desktop assistant he built from scratch without external APIs using Python for voice interaction and system automation.
- Custom LLM: He explored the engineering behind language models by building a custom LLM (training, inference, tokenization).
- Admission CRM: Designed a full-stack CRM using Next.js and PostgreSQL to manage college admission workflows.
- Homeopathy CRM: Developed a specialized B2B CRM for a homeopathy practice.
- Skills: Python, LLMs, AI Agents, NLP, ReactJS, Next.js, TypeScript, NodeJS, PostgreSQL.
If someone asks something unrelated to Soojal, politely pivot back to his skills or projects. Keep responses concise (under 3 sentences).`;

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "welcome bro!",
      sender: 'bot'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;
    
    // Add user message
    const newUserMsg: Message = { id: Date.now(), text, sender: 'user' };
    setMessages(prev => [...prev, newUserMsg]);
    setInputValue('');
    setIsTyping(true);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("API key is missing");
      }

      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      // Construct history (excluding the first hardcoded greeting if you want, or map it)
      // Gemini's history expects user and model roles to alternate, but it's simpler to just send the conversation
      const history = messages.slice(1).map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }],
      }));

      const chat = model.startChat({
        systemInstruction: SYSTEM_PROMPT,
        history: history,
      });

      const result = await chat.sendMessage(text);
      const response = await result.response;
      const botReply = response.text();

      setMessages(prev => [...prev, { id: Date.now(), text: botReply, sender: 'bot' }]);
    } catch (error) {
      console.error(error);
      const errorMsg = import.meta.env.VITE_GEMINI_API_KEY 
        ? "Sorry, I'm having trouble connecting to my brain right now. Please try again." 
        : "Oops! My API key isn't set up yet. Please add VITE_GEMINI_API_KEY to your .env file.";
      setMessages(prev => [...prev, { id: Date.now(), text: errorMsg, sender: 'bot' }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 bg-orange text-black border-2 border-black shadow-[4px_4px_0_0_#050505] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0_0_#050505] transition-all z-50 ${isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'scale-100 opacity-100'}`}
      >
        <MessageSquare size={24} />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 w-80 sm:w-96 bg-cream border-[3px] border-black flex flex-col overflow-hidden transition-all duration-300 transform origin-bottom-right z-50 shadow-[8px_8px_0_0_#050505] ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
        }`}
        style={{ height: '500px', maxHeight: '80vh' }}
      >
        {/* Header */}
        <div className="p-4 bg-dark-green border-b-[3px] border-black flex justify-between items-center text-cream">
          <div className="flex items-center gap-2">
            <Bot size={24} className="text-orange" />
            <h3 className="font-display text-xl tracking-wide">Assistant</h3>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-black/20 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto bg-cream space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex gap-3 max-w-[85%] ${msg.sender === 'user' ? 'ml-auto flex-row-reverse' : ''}`}>
              <div className={`w-8 h-8 flex items-center justify-center shrink-0 border-[2px] border-black shadow-[2px_2px_0_0_#050505] ${
                msg.sender === 'user' ? 'bg-orange text-black' : 'bg-black text-cream'
              }`}>
                {msg.sender === 'user' ? <User size={16} /> : <Bot size={16} />}
              </div>
              
              <div className={`p-3 text-sm leading-relaxed border-[2px] border-black shadow-[2px_2px_0_0_#050505] ${
                msg.sender === 'user' 
                  ? 'bg-burnt-orange text-cream' 
                  : 'bg-white text-black'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isTyping && (
             <div className="flex gap-3 max-w-[85%]">
               <div className="w-8 h-8 flex items-center justify-center shrink-0 border-[2px] border-black shadow-[2px_2px_0_0_#050505] bg-black text-cream">
                 <Bot size={16} />
               </div>
               <div className="p-3 border-[2px] border-black shadow-[2px_2px_0_0_#050505] bg-white text-black flex items-center gap-2">
                 <Loader2 size={16} className="animate-spin text-orange" />
                 <span className="text-sm">Thinking...</span>
               </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>



        {/* Input */}
        <div className="p-3 bg-cream border-t-[3px] border-black">
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSendMessage(inputValue); }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={isTyping}
              placeholder="Ask anything..."
              className="flex-1 bg-white border-2 border-black px-4 py-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-orange shadow-[2px_2px_0_0_#050505] disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isTyping}
              className="p-2 bg-dark-green hover:bg-black disabled:opacity-50 disabled:hover:bg-dark-green text-cream border-2 border-black transition-colors shadow-[2px_2px_0_0_#050505]"
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
