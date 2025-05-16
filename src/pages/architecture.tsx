
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ArchitectureSection from '../components/sections/ArchitectureSection';

const ArchitecturePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="container px-4 mx-auto py-12">
          <h1 className="text-4xl font-bold mb-6">Architecture</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Learn about the powerful architecture behind AetherFlow's platform.
          </p>
          <ArchitectureSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ArchitecturePage;
