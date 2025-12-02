import React, { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SEO from './components/SEO';
import ScrollToTop from './components/ScrollToTop';
import AnimatedSection from './components/AnimatedSection';
import portfolioData from './data/portfolio.json';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <SEO
          title="Accueil"
          description={portfolioData.profile.tagline}
        />
        <ScrollToTop />
        <Header darkMode={darkMode} toggleTheme={toggleTheme} />
        <main>
          <Hero profile={portfolioData.profile} about={portfolioData.about} />
          <About about={portfolioData.about} stats={portfolioData.stats} />
          <Experience experiences={portfolioData.experiences} />
          <Timeline
            experiences={portfolioData.experiences}
            certifications={portfolioData.certifications}
          />
          <Projects projects={portfolioData.projects} />
          <Skills skills={portfolioData.skills} />
          <Certifications certifications={portfolioData.certifications} />
          <Contact
            profile={portfolioData.profile}
            contact={portfolioData.contact}
            interests={portfolioData.interests}
          />
        </main>
        <Footer profile={portfolioData.profile} />
      </div>
    </HelmetProvider>
  );
}

export default App;
