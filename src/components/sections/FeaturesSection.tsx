
import React from 'react';
import { Brain, Network, MessageSquare, BarChart, Database, Layers, AlertCircle, GraduationCap } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="overflow-hidden border border-border hover:shadow-lg transition-shadow duration-300 bg-gradient-card">
      <CardContent className="p-6">
        <div className="w-12 h-12 rounded-lg mb-5 bg-gradient-to-br from-aether-100 to-aether-50 flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-lg font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <Brain className="h-6 w-6 text-aether-600" />,
      title: "Causal Impact Planner",
      description: "Drive 'what-if' scenarios using structural causal models to predict accurate project outcomes.",
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-flow-600" />,
      title: "Multimodal Interface",
      description: "Convert voice, video whiteboard sessions into structured backlog items seamlessly.",
    },
    {
      icon: <Layers className="h-6 w-6 text-amber-600" />,
      title: "Autonomous Agents",
      description: "RL-driven bots to triage tickets, update documentation, and notify stakeholders.",
    },
    {
      icon: <BarChart className="h-6 w-6 text-aether-600" />,
      title: "Sentiment & Load Analytics",
      description: "Real-time affective insights from chat, commits, and calendar to monitor team wellbeing.",
    },
    {
      icon: <Network className="h-6 w-6 text-flow-600" />,
      title: "Neuro-Symbolic Knowledge Graph",
      description: "Unified search across documentation, tickets, code, and meetings for instant answers.",
    },
    {
      icon: <Database className="h-6 w-6 text-amber-600" />,
      title: "Tokenized Incentives",
      description: "Permissioned blockchain for transparent reputation and team recognition.",
    },
    {
      icon: <AlertCircle className="h-6 w-6 text-aether-600" />,
      title: "Explainable Risk Engine",
      description: "Counterfactual and SHAP-based ticket risk explanations for proactive management.",
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-flow-600" />,
      title: "Adaptive Learning Hub",
      description: "Context-aware micro-learning nudges that improve team skills over time.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Differentiating Features</h2>
          <p className="text-muted-foreground">
            Our revolutionary platform combines cutting-edge AI technologies to create a truly adaptive project ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
