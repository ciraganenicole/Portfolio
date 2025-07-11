
import React from 'react';
import { Code2, Database, Wrench } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const SkillsSection = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t('frontend'),
      icon: Code2,
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'],
      color: 'violet'
    },
    {
      title: t('backend'),
      icon: Database,
      skills: ['Nest.js', 'PostgresSql', 'Firebase', 'Netlify', 'API Design'],
      color: 'emerald'
    },
    {
      title: t('other'),
      icon: Wrench,
      skills: ['Git', 'GitHub', 'Responsive Design', 'API Integration', 'Google Maps API'],
      color: 'rose'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      violet: {
        bg: 'bg-violet-50',
        hover: 'hover:bg-violet-100',
        icon: 'text-violet-500',
        border: 'border-violet-200'
      },
      emerald: {
        bg: 'bg-emerald-50',
        hover: 'hover:bg-emerald-100',
        icon: 'text-emerald-500',
        border: 'border-emerald-200'
      },
      rose: {
        bg: 'bg-rose-50',
        hover: 'hover:bg-rose-100',
        icon: 'text-rose-500',
        border: 'border-rose-200'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
            {t('skills')}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const colorClasses = getColorClasses(category.color);
            
            return (
              <div
                key={index}
                className={`${colorClasses.bg} ${colorClasses.hover} ${colorClasses.border} border rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:scale-105`}
              >
                <div className="text-center mb-6">
                  <category.icon className={`w-12 h-12 ${colorClasses.icon} mx-auto mb-4`} />
                  <h3 className="text-xl font-semibold text-gray-800">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-3 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-2 bg-white/70 text-gray-700 text-sm rounded-lg font-medium hover:bg-white hover:shadow-sm transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
