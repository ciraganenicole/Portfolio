
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-gray-600">
          {t('madeWith')}
        </p>
        <p className="text-sm text-gray-500 mt-2">
          © {new Date().getFullYear()} - République Démocratique du Congo
        </p>
      </div>
    </footer>
  );
};

export default Footer;
