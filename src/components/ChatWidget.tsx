import React, { useState } from 'react';
import { MessageSquare, Send, Rocket, X } from 'lucide-react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasNotification, setHasNotification] = useState(true);
  const [query, setQuery] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setHasNotification(false);
    }
  };
  const [messages, setMessages] = useState<{role: 'bot' | 'user', text: string}[]>([
    { role: 'bot', text: "Hi there! I'm your Chatylink assistant. How can I help you transform your customer communication today?" }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!query.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { role: 'user', text: query }]);
    setQuery('');
    setIsTyping(true);
    
    // Simulate bot response
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { 
        role: 'bot', 
        text: 'Great question! Chatylink brings all your customer conversations into one AI-powered inbox. Would you like to see how it works or explore our pricing plans?' 
      }]);
    }, 1500);
  };

  return (
    <>
      {/* Slide-out Chat Modal */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40 animate-in fade-in duration-200"
            onClick={() => setIsOpen(false)}
          />
          {/* Panel - slides in from right */}
          <div className="fixed top-0 right-0 bottom-0 z-50 chat-widget-panel flex flex-col bg-surface border-l border-outline-variant/30 shadow-2xl animate-in slide-in-from-right duration-300">
            {/* Header */}
            <div className="p-4 bg-surface-container/50 border-b border-outline-variant/30 flex items-center gap-3 justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center">
                  <Rocket className="w-4 h-4 text-on-primary" />
                </div>
                <div>
                  <div className="font-label-caps text-on-surface">Chatylink Assistant</div>
                  <div className="text-[10px] text-surface-tint flex items-center gap-1 font-code">
                    <span className="w-1.5 h-1.5 rounded-full bg-surface-tint animate-pulse"></span> ONLINE
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 min-h-0 overflow-y-auto p-4 space-y-4 flex flex-col bg-surface/50">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-lg max-w-[85%] text-xs leading-relaxed ${
                    msg.role === 'bot'
                      ? 'bg-surface-variant/50 rounded-tl-none self-start text-on-surface-variant'
                      : 'bg-primary-container/20 border border-primary-container/30 text-on-surface rounded-tr-none self-end'
                  }`}
                >
                  {msg.text}
                </div>
              ))}
              {isTyping && (
                <div className="bg-surface-variant/50 p-3 rounded-lg rounded-tl-none self-start max-w-[85%]">
                  <div className="flex gap-1.5">
                    <span className="w-1.5 h-1.5 bg-on-surface-variant/50 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-on-surface-variant/50 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 bg-on-surface-variant/50 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-3 bg-surface-container border-t border-outline-variant/30 shrink-0">
              <div className="relative flex items-center bg-surface-container-high rounded-lg border border-outline-variant/30 focus-within:border-surface-tint/50 transition-colors">
                <input
                  className="w-full bg-transparent py-2.5 pl-3 pr-10 text-xs text-on-surface focus:outline-none placeholder:text-on-surface-variant/50"
                  placeholder="Enter query..."
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                />
                <button
                  onClick={handleSend}
                  className="absolute right-2 text-on-surface-variant hover:text-surface-tint transition-colors cursor-pointer p-1"
                  disabled={!query.trim() || isTyping}
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Chat Bubble Toggle */}
      <div className="fixed bottom-20 right-6 z-50">
        <div className="relative group">
          {/* Unread Preview Bubble */}
          {hasNotification && !isOpen && (
            <div className="absolute bottom-full right-0 mb-4 w-48 bg-surface-container-high border border-outline-variant/30 rounded-xl p-3 shadow-2xl animate-bounce pointer-events-auto">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setHasNotification(false);
                }}
                className="absolute -top-2 -right-2 w-5 h-5 bg-surface-container-lowest border border-outline-variant/30 rounded-full flex items-center justify-center text-on-surface-variant hover:text-red-500 transition-colors shadow-sm cursor-pointer z-20"
              >
                <X className="w-3 h-3" />
              </button>
              <div className="text-[10px] text-on-surface leading-tight">
                Hello! I'm your Chatylink assistant. Ready to transform your customer communication?
              </div>
              <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-surface-container-high border-r border-b border-outline-variant/30 rotate-45"></div>
            </div>
          )}

          <button
            onClick={toggleChat}
            className={`w-14 h-14 bg-primary-container rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.4)] cursor-pointer hover:scale-110 transition-transform relative ${isOpen ? 'rotate-90 scale-90 opacity-0 pointer-events-none' : ''}`}
          >
            <MessageSquare className="w-6 h-6 text-on-primary" />

            {/* Notification Badge */}
            {hasNotification && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-background flex items-center justify-center shadow-lg animate-pulse">
                <span className="text-[10px] text-white font-black">1</span>
              </span>
            )}
          </button>
        </div>
      </div>
    </>
  );
}
