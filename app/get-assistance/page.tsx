'use client';

import { useEffect, useRef, useState } from 'react';
import Header from '../pages/components/Header';
import Footer from '../pages/components/Footer';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

export default function AssistancePage() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, typing]);

  const getBotResponse = (userInput: string): string => {
    const lower = userInput.toLowerCase();

    if (lower.includes('real estate') || lower.includes('course')) {
      return 'We offer expert-led Real Estate courses including Masterclasses, Property Management, and Investment strategies.';
    }
    if (lower.includes('how to enroll') || lower.includes('enroll')) {
      return 'To enroll, go to Course Programs and click "Enroll Now" on any course of your choice.';
    }
    if (lower.includes('help') || lower.includes('support')) {
      return 'You can contact support through the "Need Help?" page or email us at support@buynclose.com.';
    }
    if (lower.includes('buynclose')) {
      return 'BuyNClose is an educational platform helping you master Real Estate investment and management.';
    }
    if (lower.includes('who are you')) {
      return 'I am your AI Assistant, here to guide you through BuyNClose learning portal and answer all your questions.';
    }

    return "Ask me anything, let me assist you.";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { sender: 'user', text: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setTyping(true);

    const botReply = getBotResponse(input.trim());
    setInput('');

    let displayText = '';
    let i = 0;
    const interval = setInterval(() => {
      displayText += botReply[i];
      i++;
      if (i === botReply.length) {
        clearInterval(interval);
        setTyping(false);
      }
      if (i <= botReply.length) {
        const interimBotMessage: Message = { sender: 'bot', text: displayText };
        setMessages((prev) => [...prev.slice(0, -1), interimBotMessage]);
      }
    }, 20);

    // Set initial empty message for bot to animate
    setMessages((prev) => [...prev, { sender: 'bot', text: '' }]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1 px-4 py-6 max-w-xl mx-auto w-full">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-blue-600">
          I'm Barbara and I'll assist you with your doubts/queries – Ask Me Anything
        </h1>

        <div className="border rounded-lg bg-white shadow p-4 h-[500px] overflow-y-auto">
          {messages.length === 0 && (
            <p className="text-sm text-gray-400 text-center">
              👋 Hi! I'm your AI guide. Ask anything about courses, enrollment, or BuyNClose.
            </p>
          )}

          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`mb-3 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[75%] px-4 py-2 rounded-2xl text-sm ${
                  msg.sender === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-800'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {typing && (
            <div className="flex justify-start mb-3">
              <div className="bg-gray-200 px-3 py-2 rounded-2xl text-sm text-gray-600 animate-pulse">
                Typing...
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

  <center><form onSubmit={handleSubmit} className="mt-4 mr-3 w-full max-w-xl mx-auto flex gap-2">
  <input
    type="text"
    value={input}
    onChange={(e) => setInput(e.target.value)}
    placeholder="Type your question..."
    className="flex-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none text-sm"
  />
  <button
    type="submit"
    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 whitespace-nowrap text-sm"
  >
    Send
  </button>
</form></center>
      </main>

      <Footer />
    </div>
  );
}