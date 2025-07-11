
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Download, MapPin, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-emerald-50">
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-violet-400 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-emerald-400 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-rose-400 rounded-full animate-float animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-violet-400 rounded-full animate-float animation-delay-3000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-violet-200 text-sm text-violet-600 mb-6">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              {t('available')} - République Démocratique du Congo
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-light text-gray-800 tracking-tight">
                <span className="block">Ciragane Nicole</span>
                <span className="block text-3xl lg:text-4xl text-violet-600 font-medium mt-2">
                  {t('title')}
                </span>
              </h1>
            </div>

            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl">
              {t('heroDescription')}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start text-center">
              <div>
                <div className="text-2xl font-bold text-gray-800">3+</div>
                <div className="text-sm text-gray-600">{t('yearsExperience')}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800">7+</div>
                <div className="text-sm text-gray-600">{t('projectsCompleted')}</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToProjects}
                className="group px-8 py-4 bg-violet-500 text-white rounded-full font-medium hover:bg-violet-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                {t('viewProjects')}
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
              </button>
              
              <a href="/resume.pdf" download className="group px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-800 rounded-full font-medium hover:bg-white border border-gray-200 hover:border-violet-200 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                <Download className="w-4 h-4" />
                {t('downloadCV')}
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <a
                href="mailto:ciraganenicole@gmail.com"
                className="group p-4 bg-white/80 backdrop-blur-sm text-gray-600 hover:text-violet-500 hover:bg-white rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl border border-gray-200 hover:border-violet-200"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/ciraganenicole"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-white/80 backdrop-blur-sm text-gray-600 hover:text-violet-500 hover:bg-white rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl border border-gray-200 hover:border-violet-200"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ciraganenicole/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-white/80 backdrop-blur-sm text-gray-600 hover:text-violet-500 hover:bg-white rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl border border-gray-200 hover:border-violet-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto">
              {/* Main circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-400 via-violet-500 to-emerald-500 flex items-center justify-center text-white text-6xl font-bold shadow-2xl animate-float">
                <img
                  src='/nicole.jpg'
                  alt='CN'
                  className='w-72 h-72 rounded-full object-cover border-4 border-white shadow-xl transition-transform duration-300 hover:scale-105'
                />
              </div>
              
              {/* Orbiting elements */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <div className="w-3 h-3 bg-violet-400 rounded-full"></div>
                </div>
                <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <div className="w-3 h-3 bg-rose-400 rounded-full"></div>
                </div>
                <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <div className="w-3 h-3 bg-violet-400 rounded-full"></div>
                </div>
              </div>

              {/* Background rings */}
              <div className="absolute -inset-4 border border-violet-200 rounded-full animate-pulse"></div>
              <div className="absolute -inset-8 border border-emerald-200 rounded-full animate-pulse animation-delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
