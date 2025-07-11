
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="bg-white/90 backdrop-blur-sm rounded-full border border-gray-200 shadow-lg">
        <div className="flex items-center p-1">
          <button
            onClick={() => setLanguage('fr')}
            className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
              language === 'fr'
                ? 'bg-violet-500 text-white shadow-sm'
                : 'text-gray-600 hover:text-violet-500'
            }`}
          >
            FR
          </button>
          <button
            onClick={() => setLanguage('en')}
            className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
              language === 'en'
                ? 'bg-violet-500 text-white shadow-sm'
                : 'text-gray-600 hover:text-violet-500'
            }`}
          >
            EN
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageToggle;
