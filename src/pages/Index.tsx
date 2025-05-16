
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/HeroSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import ArchitectureSection from '../components/sections/ArchitectureSection';
import TechnologyStackSection from '../components/sections/TechnologyStackSection';
import RoadmapSection from '../components/sections/RoadmapSection';
import CTASection from '../components/sections/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <HeroSection />
        <FeaturesSection />
        <ArchitectureSection />
        <TechnologyStackSection />
        <RoadmapSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
