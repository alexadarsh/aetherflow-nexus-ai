
import React from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "Architecture", href: "#architecture" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "About", href: "#about" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-flow animate-flow-bg"></div>
          <span className="text-xl font-bold">AetherFlow</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline">Log In</Button>
          <Button className="bg-gradient-cta text-white hover:opacity-90 transition-opacity">
            Get Early Access
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden p-2" onClick={toggleMobileMenu}>
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
            <a
              key={item.name}
              href={item.href}
              className="text-lg font-medium py-2 border-b border-border"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <div className="flex flex-col gap-4 mt-4">
            <Button variant="outline" className="w-full">Log In</Button>
            <Button className="w-full bg-gradient-cta text-white hover:opacity-90 transition-opacity">
              Get Early Access
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
