
import React from 'react';
import { Button } from "@/components/ui/button";
import { Menu, MessageCircle } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { name: "Features", href: "/features" },
    { name: "Architecture", href: "/architecture" },
    { name: "Roadmap", href: "/roadmap" },
    { name: "See Demo", href: "/see-demo" },
    { name: "About", href: "/about" },
    { name: "Meet Aether", href: "/aether-assistant" },
  ];

  const toggleAetherChat = () => {
    // This is a placeholder - the actual event will be handled by the AetherProvider
    const event = new CustomEvent('toggle-aether-chat');
    window.dispatchEvent(event);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-flow animate-flow-bg"></div>
            <span className="text-xl font-bold">AetherFlow</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "text-sm font-medium transition-colors",
                isActive(item.href) 
                  ? "text-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex items-center gap-1.5"
            onClick={toggleAetherChat}
          >
            <MessageCircle className="h-4 w-4" />
            <span>Chat with Aether</span>
          </Button>
          <Link to="/login">
            <Button variant="outline" className="transition-all duration-200 active:scale-95">Log In</Button>
          </Link>
          <Link to="/early-access">
            <Button className="bg-gradient-cta text-white hover:opacity-90 transition-all duration-200 active:scale-95">
              Get Early Access
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden p-2" 
          onClick={toggleMobileMenu}
          aria-label="Menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-50 bg-background pt-16 px-4 transition-transform duration-300 ease-in-out transform",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "text-lg font-medium py-2 border-b border-border",
                isActive(item.href) ? "text-foreground" : "text-muted-foreground"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex flex-col gap-4 mt-4">
            <Button 
              variant="ghost" 
              className="flex items-center justify-center gap-2 w-full"
              onClick={() => {
                toggleAetherChat();
                setMobileMenuOpen(false);
              }}
            >
              <MessageCircle className="h-4 w-4" />
              <span>Chat with Aether</span>
            </Button>
            <Link to="/login" className="w-full" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="outline" className="w-full">Log In</Button>
            </Link>
            <Link to="/early-access" className="w-full" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full bg-gradient-cta text-white hover:opacity-90 transition-opacity">
                Get Early Access
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
