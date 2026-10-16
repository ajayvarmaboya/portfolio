import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechBanner from './components/TechBanner';
import Competencies from './components/Competencies';
import Projects from './components/Projects';
import LeetCodeStrip from './components/LeetCodeStrip';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="dot-grid min-h-screen bg-[#0b0b0c] text-neutral-200">
      <Navbar />
      <main>
        <Hero />
        <TechBanner />
        <Competencies />
        <Projects />
        <LeetCodeStrip />
      </main>
      <Footer />
    </div>
  );
}
