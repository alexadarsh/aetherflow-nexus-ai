
import React from 'react';
import { CheckCircle2, Clock, Rocket, BarChart3 } from 'lucide-react';

interface RoadmapPhaseProps {
  phase: string;
  duration: string;
  icon: React.ReactNode;
  deliverables: string[];
  metrics: string[];
  status?: 'current' | 'upcoming' | 'completed';
}

const RoadmapPhase = ({ phase, duration, icon, deliverables, metrics, status = 'upcoming' }: RoadmapPhaseProps) => {
  return (
    <div className={`
      rounded-lg p-6 border 
      ${status === 'current' ? 'border-aether-500 bg-aether-50/50' : 
        status === 'completed' ? 'border-green-500 bg-green-50/50' : 'border-border bg-gradient-card'}
    `}>
      <div className="flex items-center mb-4">
        <div className={`
          w-10 h-10 rounded-full flex items-center justify-center mr-3
          ${status === 'current' ? 'bg-aether-100 text-aether-600' : 
            status === 'completed' ? 'bg-green-100 text-green-600' : 'bg-muted text-muted-foreground'}
        `}>
          {icon}
        </div>
        <div>
          <h3 className="font-semibold">{phase}</h3>
          <div className="text-sm text-muted-foreground">{duration}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <div className="text-sm font-medium mb-2">Deliverables</div>
          <ul className="text-sm space-y-1">
            {deliverables.map((item, index) => (
              <li key={`deliverable-${index}`} className="flex items-start">
                <span className="mr-2 text-xs mt-1">•</span>
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-sm font-medium mb-2">Success Metrics</div>
          <ul className="text-sm space-y-1">
            {metrics.map((item, index) => (
              <li key={`metric-${index}`} className="flex items-start">
                <span className="mr-2 text-xs mt-1">•</span>
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const RoadmapSection = () => {
  return (
    <section id="roadmap" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Roadmap & Phases</h2>
          <p className="text-muted-foreground">
            Our strategic development approach ensures continuous value delivery from day one.
          </p>
        </div>

        <div className="space-y-8">
          <RoadmapPhase
            phase="MVP"
            duration="3 months"
            icon={<CheckCircle2 className="h-5 w-5" />}
            deliverables={[
              "Task board implementation",
              "Basic AI-suggestions",
              "Integrations with Git/Slack"
            ]}
            metrics={[
              "100 developer users",
              "NPS ≥ 40"
            ]}
            status="completed"
          />
          
          <RoadmapPhase
            phase="Phase 2"
            duration="6 months"
            icon={<Clock className="h-5 w-5" />}
            deliverables={[
              "Causal planner implementation",
              "Sentiment analytics dashboard",
              "Agent-delegate MVP deployment"
            ]}
            metrics={[
              "500 developer users",
              "30% sprint improvement"
            ]}
            status="current"
          />
          
          <RoadmapPhase
            phase="Phase 3"
            duration="6 months"
            icon={<BarChart3 className="h-5 w-5" />}
            deliverables={[
              "Knowledge graph integration",
              "Token incentives system",
              "Adaptive learning platform"
            ]}
            metrics={[
              "1,000 teams onboarded",
              "Burnout reduction by 20%"
            ]}
          />
          
          <RoadmapPhase
            phase="Phase 4"
            duration="Ongoing"
            icon={<Rocket className="h-5 w-5" />}
            deliverables={[
              "Enterprise compliance features",
              "Global scale infrastructure",
              "Developer marketplace"
            ]}
            metrics={[
              "100+ enterprise clients",
              "99.9% uptime guarantee"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
