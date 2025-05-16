
import React from 'react';
import { Server, Database, Cpu, Monitor, Layers, Cloud, Code, Brain } from 'lucide-react';

const ArchitectureSection = () => {
  const renderConnector = (top: string, left: string, width: string, height: string, direction: string) => {
    return (
      <div 
        className={`absolute bg-aether-200 hidden md:block ${direction === 'horizontal' ? 'h-[2px]' : 'w-[2px]'}`}
        style={{ top, left, width: direction === 'horizontal' ? width : '2px', height: direction === 'horizontal' ? '2px' : height }}
      >
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-aether-500"></div>
      </div>
    );
  };

  return (
    <section id="architecture" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Architecture</h2>
          <p className="text-muted-foreground">
            A modern, cloud-native stack built for intelligence, scalability and performance.
          </p>
        </div>

        <div className="relative hidden md:block">
          {/* Connectors */}
          {renderConnector('30%', '25%', '10%', '0', 'horizontal')}
          {renderConnector('30%', '65%', '10%', '0', 'horizontal')}
          {renderConnector('45%', '50%', '0', '15%', 'vertical')}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Data Ingestion */}
          <div className="bg-gradient-card p-6 rounded-lg border border-border">
            <div className="w-12 h-12 rounded-lg mb-5 bg-gradient-to-br from-aether-100 to-aether-50 flex items-center justify-center">
              <Server className="h-6 w-6 text-aether-600" />
            </div>
            <h3 className="text-lg font-semibold mb-3">Data Ingestion Layer</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>API connectors (Git, Slack, Calendar)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Video transcript processing pipeline</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Real-time event streaming via Kafka</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Pre-processing & normalization layer</span>
              </li>
            </ul>
          </div>

          {/* AI Services */}
          <div className="bg-gradient-card p-6 rounded-lg border border-border">
            <div className="w-12 h-12 rounded-lg mb-5 bg-gradient-to-br from-flow-100 to-flow-50 flex items-center justify-center">
              <Brain className="h-6 w-6 text-flow-600" />
            </div>
            <h3 className="text-lg font-semibold mb-3">AI Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Causal Planner (Python, DoWhy, SCMs)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Multimodal Agent (PyTorch, Transformers)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Sentiment & Load Analyzer (BERT, GPT)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Knowledge Graph Engine (Neo4j + embeddings)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>ML Ops pipeline with versioning</span>
              </li>
            </ul>
          </div>

          {/* Frontend & Execution */}
          <div className="bg-gradient-card p-6 rounded-lg border border-border">
            <div className="w-12 h-12 rounded-lg mb-5 bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center">
              <Monitor className="h-6 w-6 text-amber-600" />
            </div>
            <h3 className="text-lg font-semibold mb-3">Frontend & Execution</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>React + TypeScript + D3 dashboards</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Agent Execution Layer (Kubernetes microservices)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>GraphQL/REST API Gateway</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Blockchain Layer (Hyperledger Fabric)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Authentication & OAuth integrations</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-gradient-card p-6 rounded-lg border border-border">
            <div className="mb-5 flex items-center">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-aether-100 to-aether-50 flex items-center justify-center">
                <Layers className="h-6 w-6 text-aether-600" />
              </div>
              <h3 className="text-lg font-semibold ml-4">System Architecture & Data Flow</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="p-4 rounded-lg bg-background border border-border flex flex-col items-center">
                <div className="font-semibold text-sm mb-2">Event Capture</div>
                <div className="text-xs text-center text-muted-foreground">Integrations stream events into Kafka event bus</div>
              </div>
              
              <div className="p-4 rounded-lg bg-background border border-border flex flex-col items-center">
                <div className="font-semibold text-sm mb-2">Pre-Processing</div>
                <div className="text-xs text-center text-muted-foreground">Data lake storage with normalization pipeline</div>
              </div>
              
              <div className="p-4 rounded-lg bg-background border border-border flex flex-col items-center">
                <div className="font-semibold text-sm mb-2">AI Processing</div>
                <div className="text-xs text-center text-muted-foreground">ML microservices with GPU acceleration</div>
              </div>
              
              <div className="p-4 rounded-lg bg-background border border-border flex flex-col items-center">
                <div className="font-semibold text-sm mb-2">Agent Execution</div>
                <div className="text-xs text-center text-muted-foreground">Autonomous agents perform orchestrated tasks</div>
              </div>
              
              <div className="p-4 rounded-lg bg-background border border-border flex flex-col items-center">
                <div className="font-semibold text-sm mb-2">Visualization</div>
                <div className="text-xs text-center text-muted-foreground">Secure API gateway to frontend clients</div>
              </div>
            </div>
            
            <div className="mt-8 p-4 rounded-lg border border-border bg-secondary/10">
              <p className="text-sm text-muted-foreground italic">
                Our architecture follows modern microservice patterns with containerized services, event-driven communication, 
                and independent scaling. Each AI module can be deployed and updated independently, ensuring continuous delivery 
                of new features and improvements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
