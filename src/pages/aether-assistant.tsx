
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AetherChatWidget from '../components/aether/AetherChatWidget';
import { Separator } from "@/components/ui/separator";
import { MessageCircle } from "lucide-react"; // Add this import for the MessageCircle icon

const AetherAssistantPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16 pb-16">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-12">
            {/* Left column - documentation */}
            <div>
              <h1 className="text-4xl font-bold mb-6 animate-gradient-text">Meet Aether</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Your intelligent assistant for navigating the AetherFlow ecosystem.
                Aether provides context-aware help, quick access to information, and
                interactive guidance to help you make the most of our platform.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4">What Aether Can Do</h2>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start gap-2">
                  <div className="rounded-full h-6 w-6 bg-primary/20 text-primary flex items-center justify-center mt-0.5">•</div>
                  <span><strong>Provide guidance</strong> on using AetherFlow's features and tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full h-6 w-6 bg-primary/20 text-primary flex items-center justify-center mt-0.5">•</div>
                  <span><strong>Quick link access</strong> to relevant documentation and resources</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full h-6 w-6 bg-primary/20 text-primary flex items-center justify-center mt-0.5">•</div>
                  <span><strong>Answer questions</strong> about AetherFlow's architecture and capabilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full h-6 w-6 bg-primary/20 text-primary flex items-center justify-center mt-0.5">•</div>
                  <span><strong>Troubleshoot issues</strong> during implementation and integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full h-6 w-6 bg-primary/20 text-primary flex items-center justify-center mt-0.5">•</div>
                  <span><strong>Explain technical concepts</strong> in simple, clear language</span>
                </li>
              </ul>
              
              <h2 className="text-2xl font-semibold mb-4">How to Invoke Aether</h2>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <div className="rounded-full h-6 w-6 bg-primary/20 text-primary flex items-center justify-center mt-0.5">1</div>
                  <span>Click the <strong>chat icon</strong> in the bottom-right corner of any page</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full h-6 w-6 bg-primary/20 text-primary flex items-center justify-center mt-0.5">2</div>
                  <span>Use the keyboard shortcut <kbd className="px-1.5 py-0.5 text-xs rounded border bg-muted">/</kbd> from anywhere in the app</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full h-6 w-6 bg-primary/20 text-primary flex items-center justify-center mt-0.5">3</div>
                  <span>Click <strong>"Chat with Aether"</strong> in the navigation bar</span>
                </li>
              </ul>
              
              <h2 className="text-2xl font-semibold mb-4">Sample Queries</h2>
              <div className="bg-muted/50 p-4 rounded-lg mb-8">
                <ul className="space-y-3">
                  <li>
                    <p className="text-sm font-medium text-accent-foreground">@Aether, show me Phase 3 timeline</p>
                    <p className="text-sm text-muted-foreground">Get specific details about the roadmap phases</p>
                  </li>
                  <Separator className="my-2" />
                  <li>
                    <p className="text-sm font-medium text-accent-foreground">How do I integrate GitHub with AetherFlow?</p>
                    <p className="text-sm text-muted-foreground">Learn about integration capabilities</p>
                  </li>
                  <Separator className="my-2" />
                  <li>
                    <p className="text-sm font-medium text-accent-foreground">Explain the causal planning service</p>
                    <p className="text-sm text-muted-foreground">Get technical explanations of platform features</p>
                  </li>
                  <Separator className="my-2" />
                  <li>
                    <p className="text-sm font-medium text-accent-foreground">What AI models power the sentiment analysis?</p>
                    <p className="text-sm text-muted-foreground">Understand the technology behind AetherFlow</p>
                  </li>
                </ul>
              </div>
              
              <h2 className="text-2xl font-semibold mb-4">Developer Guide</h2>
              <div className="bg-muted/50 p-4 rounded-lg mb-8 overflow-auto">
                <h3 className="text-sm font-medium mb-2">API Request Format</h3>
                <pre className="text-xs overflow-x-auto p-3 bg-secondary/40 rounded border border-border">
{`// POST /api/chat
{
  "query": "How do I setup causal planning?",
  "context": {
    "page": "/docs/causal-planning",
    "userId": "user_123",
    "history": [...]
  },
  "options": {
    "stream": true,
    "toolAccess": true
  }
}`}
                </pre>
                
                <h3 className="text-sm font-medium mt-4 mb-2">API Response Format</h3>
                <pre className="text-xs overflow-x-auto p-3 bg-secondary/40 rounded border border-border">
{`{
  "id": "resp_123abc",
  "response": "To set up causal planning...",
  "tools": [
    {
      "type": "link",
      "label": "Causal Planning Docs",
      "url": "/docs/causal-planning"
    }
  ],
  "suggestedQueries": [
    "How to visualize causal graphs?",
    "Connect to external data sources"
  ]
}`}
                </pre>
              </div>
            </div>
            
            {/* Right column - live preview */}
            <div className="hidden lg:flex flex-col">
              <div className="sticky top-24 bg-gradient-card rounded-xl border border-border p-6 shadow-sm">
                <h3 className="text-lg font-medium mb-4">Live Preview</h3>
                <div className="aspect-[9/16] bg-background/80 rounded-lg border border-border relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-muted-foreground mb-4">Try Aether right now</p>
                      <p className="text-sm">Click the chat button in the bottom-right corner</p>
                    </div>
                  </div>
                  <div className="absolute bottom-6 right-6">
                    <div className="w-10 h-10 rounded-full bg-gradient-flow shadow-lg flex items-center justify-center animate-pulse-soft">
                      <MessageCircle className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <h4 className="font-medium mb-2">Keyboard Shortcuts</h4>
                  <div className="grid grid-cols-2 gap-y-2 text-sm">
                    <div>Open/close Aether</div>
                    <div className="text-right"><kbd className="px-1.5 py-0.5 text-xs rounded border bg-muted">/</kbd></div>
                    <div>Send message</div>
                    <div className="text-right"><kbd className="px-1.5 py-0.5 text-xs rounded border bg-muted">Enter</kbd></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <AetherChatWidget />
    </div>
  );
};

export default AetherAssistantPage;
