
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="container px-4 mx-auto py-12">
          <h1 className="text-4xl font-bold mb-6">About AetherFlow</h1>
          <div className="prose max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              AetherFlow is a cutting-edge platform designed to optimize AI workflows and enhance team productivity.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
            <p>
              We're on a mission to transform how organizations leverage AI by providing powerful, intuitive tools
              that solve real business problems and create measurable value.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Team</h2>
            <p>
              AetherFlow was founded by a team of AI experts, software engineers, and design thinkers
              who saw an opportunity to bridge the gap between complex AI capabilities and everyday business users.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p>
              We'd love to hear from you! Whether you have questions, feedback, or just want to chat about
              how AetherFlow can help your organization, don't hesitate to reach out.
            </p>
            <div className="mt-4">
              <p><strong>Email:</strong> contact@aetherflow.ai</p>
              <p><strong>Address:</strong> 123 Innovation Way, San Francisco, CA 94105</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
