
import React from 'react';
import { Brain, Network, MessageSquare, BarChart, Database, Layers, AlertCircle, GraduationCap } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  aiPowered?: boolean;
  techStack?: string;
}

const FeatureCard = ({ icon, title, description, aiPowered, techStack }: FeatureCardProps) => {
  return (
    <Card className="overflow-hidden border border-border hover:shadow-lg transition-shadow duration-300 bg-gradient-card">
      <CardContent className="p-6">
        <div className="w-12 h-12 rounded-lg mb-5 bg-gradient-to-br from-aether-100 to-aether-50 flex items-center justify-center">
          {icon}
        </div>
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-semibold">{title}</h3>
          {aiPowered && (
            <span className="text-xs bg-flow-100 text-flow-700 px-2 py-0.5 rounded-full font-medium">
              AI-Powered
            </span>
          )}
        </div>
        <p className="text-muted-foreground mb-4">{description}</p>
        {techStack && (
          <div className="text-xs text-muted-foreground bg-secondary/40 px-3 py-1.5 rounded-md">
            {techStack}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <Brain className="h-6 w-6 text-aether-600" />,
      title: "Causal Impact Planner",
      description: "Drive 'what-if' scenarios using structural causal models to predict accurate project outcomes and optimize resource allocation.",
      aiPowered: true,
      techStack: "DoWhy, CausalNex, Structural Causal Models"
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-flow-600" />,
      title: "Multimodal Interface",
      description: "Convert voice, video whiteboard sessions into structured backlog items with advanced NLP and computer vision models.",
      aiPowered: true,
      techStack: "PyTorch, HuggingFace Transformers, CLIP"
    },
    {
      icon: <Layers className="h-6 w-6 text-amber-600" />,
      title: "Autonomous Agents",
      description: "Reinforcement Learning driven bots that triage tickets, update documentation, and notify stakeholders without human intervention.",
      aiPowered: true,
      techStack: "RL Algorithms, Agent Frameworks, Kubernetes"
    },
    {
      icon: <BarChart className="h-6 w-6 text-aether-600" />,
      title: "Sentiment & Load Analytics",
      description: "Real-time affective insights from chat, commits, and calendar to monitor team wellbeing and prevent burnout.",
      aiPowered: true,
      techStack: "BERT, GPT, Affective Computing Models"
    },
    {
      icon: <Network className="h-6 w-6 text-flow-600" />,
      title: "Neuro-Symbolic Knowledge Graph",
      description: "Unified search across documentation, tickets, code, and meetings for instant answers with context-aware embeddings.",
      aiPowered: true,
      techStack: "Neo4j, Vector Embeddings, Knowledge Graphs"
    },
    {
      icon: <Database className="h-6 w-6 text-amber-600" />,
      title: "Tokenized Incentives",
      description: "Permissioned blockchain for transparent reputation and team recognition with immutable performance history.",
      techStack: "Hyperledger Fabric, Permissioned Blockchain"
    },
    {
      icon: <AlertCircle className="h-6 w-6 text-aether-600" />,
      title: "Explainable Risk Engine",
      description: "Counterfactual and SHAP-based ticket risk explanations for proactive management and transparent decision-making.",
      aiPowered: true,
      techStack: "SHAP, Counterfactual Explainers, XAI"
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-flow-600" />,
      title: "Adaptive Learning Hub",
      description: "Context-aware micro-learning nudges that improve team skills over time based on actual work patterns and needs.",
      aiPowered: true,
      techStack: "Reinforcement Learning, Personalization Algorithms"
    },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">AI-Powered Features</h2>
          <p className="text-muted-foreground">
            Our platform combines cutting-edge AI technologies to create a truly adaptive project ecosystem that learns and evolves.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              aiPowered={feature.aiPowered}
              techStack={feature.techStack}
            />
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-gradient-to-r from-aether-50/50 to-flow-50/50 rounded-lg border border-border">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-aether-100 to-flow-100 flex items-center justify-center mb-4 md:mb-0 md:mr-6">
              <Brain className="h-8 w-8 text-aether-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-center md:text-left">How Our AI Works</h3>
              <p className="text-muted-foreground">
                AetherFlow uses a combination of deep learning, reinforcement learning, and causal inference to create
                an intelligent system that understands context, predicts outcomes, and takes autonomous actions.
                All models are continuously trained on your project data with strict privacy guarantees and explainable outputs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
