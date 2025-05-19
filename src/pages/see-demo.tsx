
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, MessageCircle, Github, Database, Code, RocketIcon, BarChart3 } from "lucide-react";

const SeeDemoPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="container px-4 mx-auto py-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl font-bold mb-6">Experience AetherFlow in Action</h1>
            <p className="text-lg text-muted-foreground">
              See how our AI-powered platform transforms project management through intuitive interfaces and powerful features.
            </p>
          </div>
          
          {/* Video Demo Section */}
          <section className="mb-16">
            <div className="rounded-xl overflow-hidden border border-border bg-card shadow-sm aspect-video w-full max-w-4xl mx-auto">
              {/* Placeholder for demo video */}
              <div className="w-full h-full flex items-center justify-center bg-secondary/30">
                <div className="text-center">
                  <RocketIcon className="h-16 w-16 mx-auto mb-4 text-aether-600 opacity-50" />
                  <p className="text-lg font-medium">Interactive Demo Video</p>
                  <p className="text-sm text-muted-foreground">Coming soon</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Feature Showcase Cards */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Key Features in Action</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* AI Assistant Card */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="bg-gradient-to-r from-aether-50/50 to-flow-50/50 border-b border-border">
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-aether-600" />
                    AI Assistant
                  </CardTitle>
                  <CardDescription>Natural language interface</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="rounded-lg bg-secondary/20 p-4 mb-4">
                    <p className="text-sm font-medium mb-2">Try asking:</p>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• "Schedule a team retrospective for next Thursday"</li>
                      <li>• "Show me overdue tasks in the backend queue"</li>
                      <li>• "Generate a project status report for stakeholders"</li>
                    </ul>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Our AI assistant understands project context and executes tasks with minimal input.
                  </p>
                </CardContent>
                <CardFooter className="border-t border-border pt-4">
                  <Button variant="ghost" size="sm" className="group ml-auto">
                    Try Assistant
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
              
              {/* Causal Planning Card */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="bg-gradient-to-r from-aether-50/50 to-flow-50/50 border-b border-border">
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-flow-600" />
                    Causal Planning
                  </CardTitle>
                  <CardDescription>AI-powered decision support</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="aspect-video rounded-lg bg-secondary/20 mb-4 flex items-center justify-center">
                    <p className="text-sm text-muted-foreground">Interactive causal graph visualization</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    See how different decisions impact your project timeline, resource allocation, and team workload.
                  </p>
                </CardContent>
                <CardFooter className="border-t border-border pt-4">
                  <Button variant="ghost" size="sm" className="group ml-auto">
                    Explore Causality
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
              
              {/* Integrations Card */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="bg-gradient-to-r from-aether-50/50 to-flow-50/50 border-b border-border">
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-amber-600" />
                    Integrations
                  </CardTitle>
                  <CardDescription>Seamless workflow connections</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <div className="flex items-center gap-1 px-2 py-1 bg-secondary/40 rounded text-xs">
                      <Github className="h-3 w-3" />
                      <span>GitHub</span>
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 bg-secondary/40 rounded text-xs">
                      <Database className="h-3 w-3" />
                      <span>Postgres</span>
                    </div>
                    <div className="px-2 py-1 bg-secondary/40 rounded text-xs">Slack</div>
                    <div className="px-2 py-1 bg-secondary/40 rounded text-xs">Jira</div>
                    <div className="px-2 py-1 bg-secondary/40 rounded text-xs">Figma</div>
                    <div className="px-2 py-1 bg-secondary/40 rounded text-xs">+20 more</div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Connect with your existing tools and services for a unified workflow experience.
                  </p>
                </CardContent>
                <CardFooter className="border-t border-border pt-4">
                  <Button variant="ghost" size="sm" className="group ml-auto">
                    View Integrations
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </section>
          
          {/* Interactive Demo */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-aether-50 to-flow-50 rounded-xl p-8 border border-border">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl font-bold mb-4">Interactive Product Tour</h2>
                <p className="text-muted-foreground mb-8">
                  Take a guided walkthrough of AetherFlow's core features and see how they can transform your workflow.
                </p>
                <Button size="lg" className="bg-gradient-cta text-white hover:opacity-90">
                  Start Interactive Tour
                </Button>
              </div>
            </div>
          </section>
          
          {/* Testimonials */}
          <section>
            <h2 className="text-2xl font-bold mb-8 text-center">What Our Users Say</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  quote: "AetherFlow's causal planning has cut our sprint overruns by 40% in just two months. The AI's recommendations are genuinely insightful.",
                  author: "Sarah Chen",
                  role: "Engineering Manager, TechStream"
                },
                {
                  quote: "The most impressive part is how it learns our team's patterns and adapts its suggestions over time. It feels like having another team member.",
                  author: "Marcus Johnson",
                  role: "Product Lead, InnovateCo"
                },
                {
                  quote: "We've reduced meeting time by 30% since implementing AetherFlow. The contextual awareness of the AI is something I haven't seen in other tools.",
                  author: "Priya Sharma",
                  role: "Scrum Master, FinTech Solutions"
                }
              ].map((testimonial, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <p className="italic mb-4">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
          
          {/* CTA Section */}
          <section className="mt-16">
            <div className="rounded-xl overflow-hidden border border-border shadow-sm">
              <div className="bg-gradient-to-r from-aether-100/50 to-flow-100/50 p-8 md:p-12 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Workflow?</h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join the growing community of teams using AetherFlow to streamline their projects and empower their workflows.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-cta text-white hover:opacity-90">
                    Get Early Access
                  </Button>
                  <Button size="lg" variant="outline">
                    Schedule a Demo Call
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SeeDemoPage;
