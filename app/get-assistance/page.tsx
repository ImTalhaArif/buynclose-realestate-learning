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
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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
    return "I'm here to assist you with anything related to BuyNClose courses and platform.";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { sender: 'user', text: input.trim() };
    setMessages((prev) => [...prev, userMessage]);

    const botReply: Message = { sender: 'bot', text: getBotResponse(input.trim()) };
    setTimeout(() => {
      setMessages((prev) => [...prev, botReply]);
    }, 600);

    setInput('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1 p-4 max-w-4xl mx-auto w-full">
        <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">
          AI Assistance – Ask Us Anything
        </h1>

        <div className="border rounded-lg bg-white shadow p-4 h-[500px] overflow-y-auto">
          {messages.length === 0 && (
            <p className="text-sm text-gray-400 text-center">
              👋 Hi! I'm your AI guide. Ask anything about courses, enrollment, or real estate.
            </p>
          )}

          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`mb-3 flex ${
                msg.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
                  msg.sender === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-800'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your question..."
            className="flex-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
          >
            Send
          </button>
        </form>
      </main>

      <Footer />
    </div>
  );
}