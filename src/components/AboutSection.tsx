
import React from 'react';
import { Award, Coffee, Clock, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();

  const achievements = [
    {
      icon: Award,
      value: '4+',
      label: t('yearsExperience'),
      color: 'violet'
    },
    {
      icon: Coffee,
      value: '500+',
      label: t('cupsOfCoffee'),
      color: 'emerald'
    },
    {
      icon: Clock,
      value: '2000+',
      label: t('hoursOfCoding'),
      color: 'rose'
    },
    {
      icon: Users,
      value: '15+',
      label: t('happyClients'),
      color: 'violet'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      violet: 'text-violet-500 bg-violet-100',
      emerald: 'text-emerald-500 bg-emerald-100',
      rose: 'text-rose-500 bg-rose-100'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image/Visual */}
          <div className="relative">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face"
                alt="Ciragane Metre Nicole"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-violet-400 to-emerald-400 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-xl">
                {t('webDev')}
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
                {t('aboutMe')}
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  {t('aboutDescription1')}
                </p>
                <p>
                  {t('aboutDescription2')}
                </p>
                <p>
                  {t('aboutDescription3')}
                </p>
              </div>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="group p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className={`w-12 h-12 ${getColorClasses(achievement.color)} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <achievement.icon className="w-6 h-6" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800 mb-1">
                    {achievement.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Skills Preview */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {t('coreSkills')}
              </h3>
              <div className="flex flex-wrap gap-3">
                {['React', 'Next.js', 'Firebase', 'Tailwind CSS', 'API Design'].map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-violet-100 text-violet-700 rounded-full text-sm font-medium hover:bg-violet-200 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
