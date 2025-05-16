
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import FeaturesSection from '../components/sections/FeaturesSection';

const FeaturesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="container px-4 mx-auto py-12">
          <h1 className="text-4xl font-bold mb-6">Features</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Discover the powerful features of AetherFlow that can transform your workflow.
          </p>
          <FeaturesSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FeaturesPage;
