
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24">
      <div className="container px-4 mx-auto">
        <div className="relative overflow-hidden rounded-xl p-8 md:p-12 bg-gradient-flow animate-flow-bg">
          <div className="relative z-10">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Transform How Your Teams Work
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Join our early access program and be among the first to experience the future of AI-powered project management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary">
                  Schedule a Demo
                </Button>
                <Button size="lg" className="bg-white text-aether-700 hover:bg-white/90 group">
                  Join Early Access
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute right-0 top-0 -mt-16 -mr-16 w-64 h-64 rounded-full bg-aether-700/30 blur-3xl"></div>
          <div className="absolute left-0 bottom-0 -mb-20 -ml-20 w-72 h-72 rounded-full bg-flow-700/30 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
