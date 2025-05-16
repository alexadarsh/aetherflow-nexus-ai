
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle } from "lucide-react";
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const EarlyAccessPage = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    if (!email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      toast({
        title: "Request submitted!",
        description: "We'll be in touch with early access information.",
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="container px-4 mx-auto py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Get Early Access</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Be among the first to experience AetherFlow's revolutionary approach to AI workflow management.
            </p>
            
            {!submitted ? (
              <>
                <div className="bg-card border border-border rounded-xl p-6 mb-8">
                  <h2 className="text-xl font-semibold mb-4">Request Early Access</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Work Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 bg-background border border-input rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="you@company.com"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        className="w-full px-3 py-2 bg-background border border-input rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="Acme Corp"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="role" className="block text-sm font-medium mb-1">
                        Your Role
                      </label>
                      <select
                        id="role"
                        className="w-full px-3 py-2 bg-background border border-input rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary"
                        required
                      >
                        <option value="">Select your role</option>
                        <option value="executive">Executive</option>
                        <option value="manager">Manager</option>
                        <option value="developer">Developer</option>
                        <option value="data_scientist">Data Scientist</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="pt-2">
                      <Button type="submit" className="w-full bg-gradient-cta text-white hover:opacity-90 transition-opacity">
                        Request Access
                      </Button>
                    </div>
                  </form>
                </div>
              </>
            ) : (
              <div className="bg-card border border-border rounded-xl p-8 text-center">
                <div className="flex justify-center mb-4">
                  <CheckCircle className="h-16 w-16 text-green-500" />
                </div>
                <h2 className="text-2xl font-semibold mb-2">Thank You!</h2>
                <p className="text-lg mb-6">
                  Your early access request has been submitted. We'll be in touch soon with more information.
                </p>
                <Button 
                  variant="outline" 
                  className="mx-auto"
                  onClick={() => window.location.href = '/'}
                >
                  Return to Home
                </Button>
              </div>
            )}
            
            <div className="mt-12">
              <h2 className="text-2xl font-semibold mb-4">Early Access Benefits</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="rounded-full h-6 w-6 bg-primary/20 text-primary flex items-center justify-center mt-0.5">•</div>
                  <span><strong>Priority onboarding</strong> with personalized setup assistance</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full h-6 w-6 bg-primary/20 text-primary flex items-center justify-center mt-0.5">•</div>
                  <span><strong>Extended trial period</strong> with full access to all premium features</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full h-6 w-6 bg-primary/20 text-primary flex items-center justify-center mt-0.5">•</div>
                  <span><strong>Direct access</strong> to our product team for feedback and feature requests</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full h-6 w-6 bg-primary/20 text-primary flex items-center justify-center mt-0.5">•</div>
                  <span><strong>Exclusive pricing</strong> when we launch publicly</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EarlyAccessPage;
