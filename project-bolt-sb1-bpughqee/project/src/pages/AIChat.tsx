import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, MessageCircle } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  type: 'user' | 'ai';
  timestamp: Date;
}

const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm your AI fitness coach. I'm here to help you with workout questions, form tips, nutrition advice, and motivation. How can I assist you today?",
      type: 'ai',
      timestamp: new Date(),
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Mock AI responses based on keywords
  const getAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('form') || message.includes('technique')) {
      return "Proper form is crucial for both safety and effectiveness! Here are some key points:\n\n• Keep your core engaged throughout the movement\n• Control the weight on both the lifting and lowering phases\n• Breathe properly - exhale on exertion, inhale on release\n• Start with lighter weights to master the technique\n• Focus on full range of motion\n\nWhich specific exercise would you like form tips for?";
    }
    
    if (message.includes('diet') || message.includes('nutrition') || message.includes('protein')) {
      return "Great question about nutrition! Here's what I recommend:\n\n• Aim for 1.6-2.2g of protein per kg of body weight daily\n• Eat a balanced mix of complex carbs, lean proteins, and healthy fats\n• Stay hydrated - aim for 8-10 glasses of water daily\n• Time your meals around workouts when possible\n• Consider a post-workout meal within 30-60 minutes\n\nWhat are your current fitness goals? I can provide more specific nutrition advice!";
    }
    
    if (message.includes('motivation') || message.includes('tired') || message.includes('lazy')) {
      return "I understand those feelings - they're completely normal! Here's how to push through:\n\n• Remember your 'why' - what made you start this journey?\n• Start small - even 10 minutes of movement is better than nothing\n• Focus on how great you feel AFTER working out\n• Set mini-goals and celebrate small wins\n• Find a workout buddy or community for accountability\n\nYou've got this! What's one small step you can take today?";
    }
    
    if (message.includes('rest') || message.includes('recovery') || message.includes('sleep')) {
      return "Recovery is just as important as the workout itself! Here's what you need to know:\n\n• Aim for 7-9 hours of quality sleep per night\n• Take at least 1-2 full rest days per week\n• Listen to your body - soreness is normal, pain is not\n• Stay hydrated and eat nutrient-dense foods\n• Consider light activities like walking or yoga on rest days\n\nHow has your recovery been lately?";
    }
    
    if (message.includes('beginner') || message.includes('start')) {
      return "Welcome to your fitness journey! Here's my beginner-friendly advice:\n\n• Start with bodyweight exercises (push-ups, squats, planks)\n• Aim for 3 workouts per week initially\n• Focus on learning proper form before adding weight\n• Don't compare yourself to others - everyone starts somewhere\n• Be patient and consistent - results take time\n\nWould you like me to suggest a specific beginner workout routine?";
    }
    
    // Default responses
    const defaultResponses = [
      "That's a great question! Fitness is a journey, and I'm here to support you every step of the way. Can you tell me more about your specific situation?",
      "I'd love to help you with that! Could you provide a bit more detail so I can give you the most relevant advice?",
      "Excellent question! Every fitness journey is unique. What are your current goals and fitness level?",
      "I'm here to help! Whether it's about workouts, nutrition, or motivation, I've got you covered. What would you like to know more about?"
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      type: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getAIResponse(inputMessage),
        type: 'ai',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const quickQuestions = [
    "How do I improve my squat form?",
    "What should I eat after a workout?",
    "I'm feeling unmotivated, help!",
    "How much rest do I need between workouts?",
  ];

  const handleQuickQuestion = (question: string) => {
    setInputMessage(question);
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            AI Fitness Coach
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Get instant answers to your fitness questions, form guidance, nutrition tips, 
            and motivation from our AI-powered coach.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-primary-100 h-[600px] flex flex-col">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white p-4 rounded-t-2xl">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold">AI Fitness Coach</h3>
                <p className="text-sm text-primary-100">Always here to help</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-2 max-w-[80%] ${
                  message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    message.type === 'user' 
                      ? 'bg-primary-500 text-white' 
                      : 'bg-secondary-100 text-secondary-600'
                  }`}>
                    {message.type === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>
                  <div className={`rounded-2xl px-4 py-3 ${
                    message.type === 'user'
                      ? 'bg-primary-500 text-white'
                      : 'bg-secondary-100 text-secondary-900'
                  }`}>
                    <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed">
                      {message.content}
                    </pre>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 bg-secondary-100 text-secondary-600 rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-secondary-100 rounded-2xl px-4 py-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-secondary-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-secondary-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-secondary-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length === 1 && (
            <div className="p-4 border-t border-primary-100">
              <p className="text-sm text-secondary-600 mb-3">Try asking:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className="text-left p-3 bg-primary-50 hover:bg-primary-100 rounded-lg text-sm text-primary-700 transition-colors duration-200 border border-primary-200"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-primary-100">
            <div className="flex space-x-2">
              <textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about fitness..."
                className="flex-1 px-4 py-3 border border-primary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                rows={1}
              />
              <button
                onClick={sendMessage}
                disabled={!inputMessage.trim() || isTyping}
                className="bg-primary-500 hover:bg-primary-600 disabled:bg-secondary-300 disabled:cursor-not-allowed text-white p-3 rounded-xl transition-all duration-200 flex items-center justify-center"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold text-secondary-900 mb-2">Instant Answers</h3>
            <p className="text-secondary-600 text-sm">Get immediate responses to all your fitness questions</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Bot className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold text-secondary-900 mb-2">Expert Knowledge</h3>
            <p className="text-secondary-600 text-sm">Trained on the latest fitness and nutrition science</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold text-secondary-900 mb-2">Personalized</h3>
            <p className="text-secondary-600 text-sm">Tailored advice based on your fitness level and goals</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChat;