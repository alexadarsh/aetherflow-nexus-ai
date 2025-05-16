
import React, { createContext, useContext, useState, useEffect } from 'react';
import AetherChatWidget from './AetherChatWidget';

type AetherContextType = {
  isOpen: boolean;
  toggleChat: () => void;
  openChat: () => void;
  closeChat: () => void;
};

const AetherContext = createContext<AetherContextType | undefined>(undefined);

export const useAether = () => {
  const context = useContext(AetherContext);
  if (context === undefined) {
    throw new Error('useAether must be used within an AetherProvider');
  }
  return context;
};

export const AetherProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => setIsOpen(prev => !prev);
  const openChat = () => setIsOpen(true);
  const closeChat = () => setIsOpen(false);

  // Listen for custom event to toggle chat
  useEffect(() => {
    const handleToggleEvent = () => {
      toggleChat();
    };

    window.addEventListener('toggle-aether-chat', handleToggleEvent);
    
    return () => {
      window.removeEventListener('toggle-aether-chat', handleToggleEvent);
    };
  }, []);

  const value = { isOpen, toggleChat, openChat, closeChat };

  return (
    <AetherContext.Provider value={value}>
      {children}
      <AetherChatWidget />
    </AetherContext.Provider>
  );
};
