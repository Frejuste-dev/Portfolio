import React, { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Canvas } from '@react-three/fiber';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SEO from './components/SEO';
import ScrollToTop from './components/ScrollToTop';
import AnimatedSection from './components/AnimatedSection';
import Background3D from './components/Background3D';
import ParticleField from './components/ParticleField';
import GridBackground from './components/GridBackground';

import portfolioData from './data/portfolio.json';

function App() {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode for cyberpunk theme
  const [mousePos, setMousePos] = useState([0, 0]);
  const [particleCount, setParticleCount] = useState(1500);
  const mouseRef = React.useRef([0, 0]);

  useEffect(() => {
    const handleResize = () => {
      setParticleCount(window.innerWidth < 768 ? 500 : 1500);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Force dark mode for futuristic theme
    document.documentElement.classList.add('dark');

    const handleMouseMove = (e) => {
      mouseRef.current = [
        (e.clientX / window.innerWidth) * 2 - 1,
        -(e.clientY / window.innerHeight) * 2 + 1
      ];
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleTheme = () => {
    // Theme toggling disabled for cyberpunk theme (always dark)
    // setDarkMode(!darkMode);
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-gray-950 text-gray-100 font-sans transition-colors duration-300 relative">
        <SEO profile={portfolioData.profile} />

        {/* 3D Background Layer */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
            <Background3D />
            <ParticleField count={particleCount} mouse={mouseRef} />
            <GridBackground />
          </Canvas>
        </div>

        {/* Content Layer */}
        <div className="relative z-10">
          <Header profile={portfolioData.profile} darkMode={darkMode} toggleTheme={toggleTheme} />

          <main>
            <Hero profile={portfolioData.profile} about={portfolioData.about} />

            <AnimatedSection>
              <About about={portfolioData.about} stats={portfolioData.stats} interests={portfolioData.interests} />
            </AnimatedSection>

            <AnimatedSection>
              <Skills skills={portfolioData.skills} />
            </AnimatedSection>

            <AnimatedSection>
              <Experience experiences={portfolioData.experiences} />
            </AnimatedSection>

            <AnimatedSection>
              <Projects projects={portfolioData.projects} />
            </AnimatedSection>

            <AnimatedSection>
              <Timeline experiences={portfolioData.experiences} education={portfolioData.certifications} />
            </AnimatedSection>

            <AnimatedSection>
              <Contact contact={portfolioData.contact} profile={portfolioData.profile} />
            </AnimatedSection>
          </main>

          <Footer profile={portfolioData.profile} />
          <ScrollToTop />
        </div>
      </div>
    </HelmetProvider>
  );
}

export default App;
