
import React from 'react';
import { Database, Code, Cloud, Brain, Server, Terminal } from 'lucide-react';

const TechCard = ({ 
  title, 
  icon, 
  technologies 
}: { 
  title: string; 
  icon: React.ReactNode; 
  technologies: Array<{ name: string; description: string }> 
}) => {
  return (
    <div className="bg-gradient-card border border-border rounded-lg p-6">
      <div className="flex items-center mb-5">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-aether-100 to-aether-50 flex items-center justify-center mr-3">
          {icon}
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="space-y-4">
        {technologies.map((tech, index) => (
          <div key={index}>
            <div className="font-medium text-sm">{tech.name}</div>
            <p className="text-sm text-muted-foreground">{tech.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const TechnologyStackSection = () => {
  const techStacks = [
    {
      title: "AI/ML Stack",
      icon: <Brain className="h-5 w-5 text-aether-600" />,
      technologies: [
        {
          name: "HuggingFace Transformers",
          description: "For NLP tasks, sentiment analysis, and multimodal processing with fine-tuned models."
        },
        {
          name: "DoWhy & CausalNex",
          description: "Implementation of Structural Causal Models (SCMs) for causal planning and reasoning."
        },
        {
          name: "PyTorch & TensorFlow",
          description: "For deep learning models, GPU-accelerated training and inference pipelines."
        }
      ]
    },
    {
      title: "Database Technologies",
      icon: <Database className="h-5 w-5 text-flow-600" />,
      technologies: [
        {
          name: "PostgreSQL & MongoDB",
          description: "Relational and document stores for transactional data and flexible schemas."
        },
        {
          name: "Neo4j Graph Database",
          description: "For relationships data, knowledge graphs, and task dependency networks."
        },
        {
          name: "Elasticsearch & Time-Series DBs",
          description: "For full-text search, logs, and metrics with real-time analytic capabilities."
        }
      ]
    },
    {
      title: "Backend Services",
      icon: <Server className="h-5 w-5 text-amber-600" />,
      technologies: [
        {
          name: "Node.js & Python Microservices",
          description: "Express/NestJS and FastAPI/Django for RESTful and GraphQL APIs."
        },
        {
          name: "Kafka Event Streaming",
          description: "Central message bus for event-driven architecture and real-time data flow."
        },
        {
          name: "OAuth & JWT Authentication",
          description: "Secure access with enterprise-ready SSO integration and RBAC."
        }
      ]
    },
    {
      title: "Frontend Stack",
      icon: <Code className="h-5 w-5 text-aether-600" />,
      technologies: [
        {
          name: "React & TypeScript",
          description: "Type-safe frontend with component-based architecture and state management."
        },
        {
          name: "D3.js Visualizations",
          description: "Interactive dashboards for analytics, Gantt charts, and causal graphs."
        },
        {
          name: "WebSockets & React Query",
          description: "Real-time updates and efficient data fetching with caching."
        }
      ]
    },
    {
      title: "DevOps & Infrastructure",
      icon: <Cloud className="h-5 w-5 text-flow-600" />,
      technologies: [
        {
          name: "Kubernetes Orchestration",
          description: "Container orchestration with auto-scaling, self-healing, and zero-downtime deployments."
        },
        {
          name: "Infrastructure as Code",
          description: "Terraform/CloudFormation with GitOps for reproducible environments."
        },
        {
          name: "Observability Stack",
          description: "Prometheus/Grafana for metrics, ELK for logs, and distributed tracing."
        }
      ]
    },
    {
      title: "Security & Compliance",
      icon: <Terminal className="h-5 w-5 text-amber-600" />,
      technologies: [
        {
          name: "Enterprise-grade Security",
          description: "HTTPS/TLS, AES-256 encryption at rest, and secure secrets management."
        },
        {
          name: "OWASP Security Practices",
          description: "Input sanitization, CSRF protection, and regular vulnerability scanning."
        },
        {
          name: "SOC 2 & ISO 27001",
          description: "Compliant infrastructure with audit logging and data residency options."
        }
      ]
    }
  ];

  return (
    <section id="technology" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technology Stack</h2>
          <p className="text-muted-foreground">
            Built with cutting-edge technologies to deliver intelligence, performance, and scalability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStacks.map((stack, index) => (
            <TechCard
              key={index}
              title={stack.title}
              icon={stack.icon}
              technologies={stack.technologies}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Our technology choices prioritize reliability, security, and developer experience.
            Each component is carefully selected to ensure a robust foundation for enterprise-grade AI 
            capabilities with the flexibility to evolve as technology advances.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechnologyStackSection;
