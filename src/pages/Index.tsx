
import React from 'react';
import { LanguageProvider } from '../contexts/LanguageContext';
import LanguageToggle from '../components/LanguageToggle';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <LanguageToggle />
        <HeroSection />
        {/* <AboutSection /> */}
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        {/* <TestimonialsSection /> */}
        <ContactSection />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
