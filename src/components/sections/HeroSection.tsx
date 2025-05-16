
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden py-20 md:py-32 lg:py-40">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(99,18,239,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,rgba(14,102,255,0.15),transparent_50%)]"></div>
      
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-border rounded-full mb-8 bg-background/50 backdrop-blur-sm">
            <Star className="h-4 w-4 fill-amber-400 stroke-amber-500" />
            <span className="text-sm">Redefining Project Management with AI</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="animate-gradient-text">AetherFlow:</span> The AI-Powered Project Ecosystem
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mb-10">
            A self-optimizing, multimodal platform that learns from usage, automates routine work, and provides causal, explainable guidance for modern teams.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button size="lg" className="bg-gradient-cta text-white hover:opacity-90 transition-opacity">
              Get Early Access
            </Button>
            <Button size="lg" variant="outline" className="group">
              See Demo
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-aether-600">50%</div>
              <div className="text-sm text-muted-foreground text-center">Routine Tasks Automated</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-flow-600">30%</div>
              <div className="text-sm text-muted-foreground text-center">Reduced Sprint Overruns</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-amber-600">25%</div>
              <div className="text-sm text-muted-foreground text-center">Reduced Team Burnout</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-aether-600">99.9%</div>
              <div className="text-sm text-muted-foreground text-center">Enterprise Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
