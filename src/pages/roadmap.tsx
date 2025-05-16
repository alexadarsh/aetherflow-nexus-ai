
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import RoadmapSection from '../components/sections/RoadmapSection';

const RoadmapPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="container px-4 mx-auto py-12">
          <h1 className="text-4xl font-bold mb-6">Product Roadmap</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Explore our development timeline and upcoming features.
          </p>
          <RoadmapSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RoadmapPage;
