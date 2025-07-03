'use client';

import { useState, useEffect, useRef } from 'react'; import Header from '../pages/components/Header'; import Footer from '../pages/components/Footer';

interface Message { sender: 'user' | 'bot'; text: string; }

export default function GetAssistance() { const [messages, setMessages] = useState<Message[]>([]); const [input, setInput] = useState(''); const chatEndRef = useRef<HTMLDivElement>(null);

const scrollToBottom = () => { chatEndRef.current?.scrollIntoView({ behavior: 'smooth' }); };

useEffect(() => { scrollToBottom(); }, [messages]);

const sendMessage = async () => { if (!input.trim()) return; const userMessage: Message = { sender: 'user', text: input }; setMessages((prev) => [...prev, userMessage]); setInput('');

const response = await getBotResponse(userMessage.text);
const botMessage: Message = { sender: 'bot', text: response };
setMessages((prev) => [...prev, botMessage]);

};

const getBotResponse = async (query: string): Promise<string> => { // Simulate an AI response for now. Replace this with a real API call if needed. if (query.toLowerCase().includes('course')) { return 'We offer programs in Real Estate Investment, Property Management, and Finance. Would you like to know more about any specific one?'; } else if (query.toLowerCase().includes('enroll')) { return 'You can enroll in any course from the Course Programs page. Simply click "Enroll Now" next to the course you're interested in.'; } else if (query.toLowerCase().includes('buynclose')) { return 'BuyNClose is a real estate learning platform designed to train students in property investment, sales, and management.'; } else if (query.toLowerCase().includes('help')) { return 'Sure! You can ask me about your course, how to navigate the portal, or anything related to real estate learning.'; } else { return 'I'm here to help with anything related to real estate education or this portal. Please rephrase your question or ask about a course!'; } };

const handleKeyDown = (e: React.KeyboardEvent) => { if (e.key === 'Enter') { e.preventDefault(); sendMessage(); } };

return ( <div className="min-h-screen flex flex-col"> <Header />

<main className="flex-1 p-4 bg-gray-50">
    <div className="max-w-3xl mx-auto bg-white shadow rounded-lg p-4 h-[75vh] flex flex-col">
      <h2 className="text-xl font-bold mb-4 text-blue-600">AI Assistance - Ask Me Anything</h2>

      <div className="flex-1 overflow-y-auto border rounded p-3 bg-gray-100">
        {messages.map((msg, i) => (
          <div key={i} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <div
              className={`inline-block px-4 py-2 rounded-lg max-w-xs ${
                msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={chatEndRef}></div>
      </div>

      <div className="mt-4 flex items-center">
        <input
          type="text"
          className="flex-1 border rounded-l px-4 py-2 focus:outline-none focus:ring"
          placeholder="Type your question here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  </main>

  <Footer />
</div>

); }


