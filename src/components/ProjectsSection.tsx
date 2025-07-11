
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ProjectsSection = () => {
  const { t } = useLanguage();

  const projects = [
    {
      name: 'DugAssistant',
      description: t('dugAssistantDesc'),
      technologies: ['React', 'Next.js', 'Nest.js', 'PostgresSql', 'AI', 'TailwindCss'],
      image: '/dug.png',
      demo: 'https://www.dugassistant.com/'
    },
    {
      name: 'Sautly',
      description: t('tawajiCongoDesc'),
      technologies: ['Next.js', 'Nest.js', 'Tailwind CSS', 'AI'],
      image: 'sautly.png',
      demo: 'https://www.sautly.com/'
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
            {t('projects')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('projectsDescription')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden border-bpr">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {project.name}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-violet-100 text-violet-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 px-4 py-2 bg-violet-500 text-white hover:bg-violet-600 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
