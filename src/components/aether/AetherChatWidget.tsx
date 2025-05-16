
import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type Message = {
  id: string;
  content: string;
  sender: 'user' | 'aether';
  timestamp: Date;
};

type SuggestedQuery = {
  text: string;
  action: () => void;
};

const AetherChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi, I'm Aether—your guide to AetherFlow! How can I help you today?",
      sender: 'aether',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const suggestedQueries: SuggestedQuery[] = [
    {
      text: "Show me the roadmap",
      action: () => handleSuggestedQuery("Show me the roadmap")
    },
    {
      text: "Explain microservices",
      action: () => handleSuggestedQuery("Explain microservices")
    },
    {
      text: "How to use tools",
      action: () => handleSuggestedQuery("How to use tools")
    }
  ];

  const toggleChat = () => {
    setIsOpen(!isOpen);
    
    // Focus the input when opening
    if (!isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSuggestedQuery = (query: string) => {
    setInputValue('');
    addMessage(query, 'user');
    
    // Simulate response for now
    setIsStreaming(true);
    let response = '';
    
    switch(query.toLowerCase()) {
      case 'show me the roadmap':
        response = "AetherFlow's roadmap includes 4 phases: MVP (3 months), Phase 2 (6 months), Phase 3 (6 months), and Phase 4 (Ongoing). Each phase builds upon the previous, starting with basic functionality and integrations, then adding AI capabilities, and finally scaling to enterprise.";
        break;
      case 'explain microservices':
        response = "AetherFlow uses a microservices architecture with containerized services that communicate via Kafka events. Each service is focused on a single responsibility and can scale independently. This approach allows for better resilience, scalability, and easier maintenance.";
        break;
      case 'how to use tools':
        response = "AetherFlow provides various tools for project management, including the Causal Impact Planner, Sentiment Analytics, and Knowledge Graph. Each tool can be accessed from the dashboard and provides unique insights to help optimize your workflow and team performance.";
        break;
      default:
        response = "I'm still learning about that topic. As AetherFlow develops, I'll be able to provide more detailed information.";
    }
    
    // Simulate streaming by adding characters one by one
    let i = 0;
    const interval = setInterval(() => {
      if (i < response.length) {
        setMessages(prevMessages => {
          const updatedMessages = [...prevMessages];
          const lastMessage = updatedMessages[updatedMessages.length - 1];
          
          if (lastMessage && lastMessage.sender === 'aether' && lastMessage.content === '...') {
            lastMessage.content = response.substring(0, i + 1);
          }
          
          return updatedMessages;
        });
        i++;
      } else {
        clearInterval(interval);
        setIsStreaming(false);
      }
    }, 20);
    
    // Add placeholder immediately
    setTimeout(() => {
      addMessage('...', 'aether');
    }, 500);
  };

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }
    
    if (inputValue.trim() && !isStreaming) {
      addMessage(inputValue, 'user');
      handleSuggestedQuery(inputValue);
      setInputValue('');
    }
  };

  const addMessage = (content: string, sender: 'user' | 'aether') => {
    const newMessage = {
      id: Date.now().toString(),
      content,
      sender,
      timestamp: new Date()
    };
    
    setMessages(prevMessages => [...prevMessages, newMessage]);
  };

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Keyboard shortcut to focus chat input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && !isOpen) {
        e.preventDefault();
        toggleChat();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <>
      {/* Chat toggle button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-flow text-white shadow-lg flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleChat}
      >
        <MessageCircle className="h-6 w-6" />
      </motion.button>

      {/* Chat widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 rounded-xl overflow-hidden bg-background shadow-xl border border-border flex flex-col"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            style={{ maxHeight: 'calc(100vh - 160px)' }}
          >
            {/* Header */}
            <div className="bg-secondary/30 p-4 flex items-center justify-between border-b border-border">
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8 bg-gradient-flow animate-pulse-soft">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>AE</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium text-sm">Aether Assistant</h3>
                  <p className="text-xs text-muted-foreground">Your AetherFlow guide</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={toggleChat}>
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div 
                    className={`max-w-[80%] rounded-lg px-4 py-2 ${
                      message.sender === 'user' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-secondary text-secondary-foreground'
                    }`}
                  >
                    {message.content}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick reply buttons */}
            <div className="p-3 border-t border-border flex flex-wrap gap-2 bg-background/95">
              {suggestedQueries.map((query, index) => (
                <Button 
                  key={index} 
                  variant="secondary" 
                  size="sm"
                  onClick={query.action}
                  className="text-xs"
                  disabled={isStreaming}
                >
                  {query.text}
                </Button>
              ))}
            </div>

            {/* Input */}
            <form className="p-3 border-t border-border bg-background" onSubmit={handleSubmit}>
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  disabled={isStreaming}
                  placeholder="Ask Aether something..."
                  className="flex-1 bg-secondary/30 border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <Button 
                  type="submit" 
                  size="icon"
                  disabled={!inputValue.trim() || isStreaming}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AetherChatWidget;
