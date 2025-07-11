
import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ExperienceSection = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      company: 'Freelance Developer',
      position: t('fullStackDeveloper'),
      period: '2021 - Present',
      location: 'République Démocratique du Congo',
      description: t('freelanceDesc'),
      technologies: ['React', 'Next.js', 'React native', 'Nest.js', 'Firebase', 'Tailwind CSS'],
      color: 'violet'
    },
    {
      company: 'Harvely',
      position: t('leadDeveloper'),
      period: '2022 - 2024',
      location: 'Goma, DRC',
      description: t('dugDesc'),
      technologies: ['React', 'Next.js', 'TailwindCss', 'AI Integration', 'Next.js', 'PostgresSql', 'Google Maps API'],
      color: 'emerald'
    },
    {
      company: 'Lidonation',
      position: t('mobileDeveloper'),
      period: '2023',
      location: 'Remote',
      description: t('doktaDesc'),
      technologies: ['React.js', 'Google Maps API', 'Vue.js', 'TailwindCss'],
      color: 'rose'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      violet: {
        bg: 'bg-violet-50',
        border: 'border-violet-200',
        dot: 'bg-violet-500',
        text: 'text-violet-600'
      },
      emerald: {
        bg: 'bg-emerald-50',
        border: 'border-emerald-200',
        dot: 'bg-emerald-500',
        text: 'text-emerald-600'
      },
      rose: {
        bg: 'bg-rose-50',
        border: 'border-rose-200',
        dot: 'bg-rose-500',
        text: 'text-rose-600'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
            {t('experience')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('experienceDescription')}
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const colorClasses = getColorClasses(exp.color);
              
              return (
                <div key={index} className="relative flex items-start group">
                  {/* Timeline dot */}
                  <div className={`relative z-10 w-16 h-16 ${colorClasses.bg} ${colorClasses.border} border-2 rounded-full flex items-center justify-center mr-8 group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`w-3 h-3 ${colorClasses.dot} rounded-full`}></div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                      <div className="flex flex-wrap items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800 mb-1">
                            {exp.position}
                          </h3>
                          <div className={`text-lg font-medium ${colorClasses.text} mb-2`}>
                            {exp.company}
                          </div>
                        </div>
                        <ExternalLink className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
