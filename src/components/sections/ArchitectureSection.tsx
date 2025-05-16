
import React from 'react';
import { Server, Database, Cpu, Monitor, Layers } from 'lucide-react';

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
            A modern stack built for performance, scalability and intelligence.
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
                <span>Video transcript processing</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Real-time event streaming</span>
              </li>
            </ul>
          </div>

          {/* AI Services */}
          <div className="bg-gradient-card p-6 rounded-lg border border-border">
            <div className="w-12 h-12 rounded-lg mb-5 bg-gradient-to-br from-flow-100 to-flow-50 flex items-center justify-center">
              <Cpu className="h-6 w-6 text-flow-600" />
            </div>
            <h3 className="text-lg font-semibold mb-3">AI Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Causal Planner Service (Python, Do-Why)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Multimodal Agent Service (PyTorch, Transformers)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Sentiment & Load Analyzer</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Knowledge Graph Engine (Neo4j + custom embedding store)</span>
              </li>
            </ul>
          </div>

          {/* Frontend */}
          <div className="bg-gradient-card p-6 rounded-lg border border-border">
            <div className="w-12 h-12 rounded-lg mb-5 bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center">
              <Monitor className="h-6 w-6 text-amber-600" />
            </div>
            <h3 className="text-lg font-semibold mb-3">Frontend & Execution</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>React + Tailwind + D3 interactive dashboards</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Agent Execution Layer (Kubernetes-based microservices)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Blockchain Layer (Hyperledger Fabric)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Visualization & Reports via REST/gRPC</span>
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
              <h3 className="text-lg font-semibold ml-4">Data Flow Architecture</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="p-4 rounded-lg bg-background border border-border flex flex-col items-center">
                <div className="font-semibold text-sm mb-2">Event Capture</div>
                <div className="text-xs text-center text-muted-foreground">Actions from integrations stream into Kafka</div>
              </div>
              
              <div className="p-4 rounded-lg bg-background border border-border flex flex-col items-center">
                <div className="font-semibold text-sm mb-2">Pre-Processing</div>
                <div className="text-xs text-center text-muted-foreground">Normalize, anonymize, and store in a data lake</div>
              </div>
              
              <div className="p-4 rounded-lg bg-background border border-border flex flex-col items-center">
                <div className="font-semibold text-sm mb-2">AI Processing</div>
                <div className="text-xs text-center text-muted-foreground">Causal analysis, sentiment scoring, graph updates</div>
              </div>
              
              <div className="p-4 rounded-lg bg-background border border-border flex flex-col items-center">
                <div className="font-semibold text-sm mb-2">Agent Execution</div>
                <div className="text-xs text-center text-muted-foreground">Agents consume tasks from queue, perform API calls</div>
              </div>
              
              <div className="p-4 rounded-lg bg-background border border-border flex flex-col items-center">
                <div className="font-semibold text-sm mb-2">Visualization</div>
                <div className="text-xs text-center text-muted-foreground">REST/gRPC to frontend clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
