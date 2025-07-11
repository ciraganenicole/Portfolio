
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Hero Section
    name: "Ciragane Metre Nicole",
    title: "Développeuse Web Full Stack (RDC)",
    heroDescription: "Je conçois des solutions numériques accessibles et utiles pour les communautés africaines.",
    viewProjects: "Voir mes projets",
    yearsExperience: "Années d'expérience",
    projectsCompleted: "Projets réalisés",
    downloadCV: "Télécharger le CV",
    
    // Projects Section
    projects: "Projets",
    projectsDescription: "Découvrez quelques-uns de mes projets récents",
    viewOnGithub: "Voir sur GitHub",
    dugAssistant: "DugAssistant",
    dugAssistantDesc: "Plateforme éducative avec intelligence artificielle pour l'apprentissage personnalisé",
    doktaMobile: "DoktaMobile",
    doktaMobileDesc: "Application de gestion numérique des soins de santé pour les communautés africaines",
    tawajiCongo: "Tawaji-Congo",
    tawajiCongoDesc: "Plateforme de création des musiques avec l'IA",
    lidoNation: "LidoNation",
    lidoNationDesc: "Plateforme communautaire d'éducation blockchain et crypto-monnaies",
    
    // Skills Section
    skills: "Compétences",
    frontend: "Frontend",
    backend: "Backend & Base de données",
    other: "Autres",
    
    // Contact Section
    contact: "Contact",
    contactDescription: "Discutons d'un projet ou d'une opportunité.",
    name_field: "Nom",
    email_field: "Email",
    message_field: "Message",
    send: "Envoyer",
    
    // Experience Section
    experience: "Expérience",
    experienceDescription: "Un résumé de mon parcours professionnel et de mes rôles.",
    fullStackDeveloper: "Développeuse Full Stack",
    freelanceDesc: "Collaboration avec divers clients pour créer des solutions web et mobiles avec des technologies modernes.",
    leadDeveloper: "Développeuse Full Stack",
    dugDesc: "Développement de plusieurs plateformes: éducative, medicales,... et integration de l'IA.",
    mobileDeveloper: "Développeuse Frontend",
    doktaDesc: "Développement et maintenance d'applications web.",
    
    // Footer
    madeWith: "Ciragane Metre Nicole"
  },
  en: {
    // Hero Section
    name: "Ciragane Metre Nicole",
    title: "Full Stack Web Developer (DRC)",
    heroDescription: "I design accessible and useful digital solutions for African communities.",
    viewProjects: "View My Projects",
    yearsExperience: "Years Experience",
    projectsCompleted: "Projects Completed",
    downloadCV: "Download CV",
    
    // Projects Section
    projects: "Projects",
    projectsDescription: "Discover some of my recent projects",
    viewOnGithub: "View on GitHub",
    dugAssistant: "DugAssistant",
    dugAssistantDesc: "Educational platform with artificial intelligence for personalized learning",
    doktaMobile: "DoktaMobile",
    doktaMobileDesc: "Digital healthcare management application for African communities",
    tawajiCongo: "Tawaji-Congo",
    tawajiCongoDesc: "Musique generator platform",
    lidoNation: "LidoNation",
    lidoNationDesc: "Community platform for blockchain and cryptocurrency education",
    
    // Skills Section
    skills: "Skills",
    frontend: "Frontend",
    backend: "Backend & Database",
    other: "Others",
    
    // Contact Section
    contact: "Contact",
    contactDescription: "Let's discuss a project or opportunity.",
    name_field: "Name",
    email_field: "Email",
    message_field: "Message",
    send: "Send",
    
    // Experience Section
    experience: "Experience",
    experienceDescription: "A summary of my professional journey and roles.",
    fullStackDeveloper: "Full Stack Developer",
    freelanceDesc: "Worked with various clients to build web and mobile solutions using modern technologies.",
    leadDeveloper: "FullStack Developer",
    dugDesc: "Led the development of an AI-powered educational platform for personalized learning.",
    mobileDeveloper: "Frontend Developer",
    doktaDesc: "Developed and maintained mobile healthcare applications for local communities.",
    
    // Footer
    madeWith: "Ciragane Metre Nicole"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['fr']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
