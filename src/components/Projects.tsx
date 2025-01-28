import React from 'react';
import { Shield, Terminal, AlertTriangle } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Sistema de Detecção de Intrusões',
      description: 'Desenvolvimento de um IDS baseado em machine learning para detecção de ameaças em tempo real.',
      icon: Shield,
      technologies: ['Python', 'TensorFlow', 'Snort'],
      results: 'Redução de 85% em falsos positivos',
      repo: 'https://github.com/username/ids-project',
      demoUrl: 'https://demo.ids-project.com'
    },
    {
      title: 'Simulador de Phishing',
      description: 'Plataforma educacional para treinamento de funcionários contra ataques de phishing.',
      icon: Terminal,
      technologies: ['React', 'Node.js', 'Docker'],
      results: 'Treinamento de +5000 funcionários',
      repo: 'https://github.com/username/phishing-simulator',
      demoUrl: 'https://demo.phishing-simulator.com'
    },
    {
      title: 'Scanner de Vulnerabilidades Web',
      description: 'Ferramenta automatizada para identificação de vulnerabilidades em aplicações web.',
      icon: AlertTriangle,
      technologies: ['Python', 'SQLMap', 'OWASP ZAP'],
      results: '150+ vulnerabilidades identificadas',
      repo: 'https://github.com/username/web-scanner',
      demoUrl: 'https://demo.web-scanner.com'
    }
  ];

  return (
    <section 
      id="projects" 
      className="py-20 bg-gray-800"
      aria-labelledby="projects-title"
    >
      <div className="container mx-auto px-4">
        <h2 
          id="projects-title"
          className="text-3xl font-bold text-center mb-12"
        >
          Projetos em Destaque
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <article
              key={index}
              className="bg-gray-900 rounded-lg p-6 hover:transform hover:-translate-y-2 transition-all duration-300 focus-within:ring-2 focus-within:ring-cyan-500"
            >
              <project.icon 
                className="w-12 h-12 text-cyan-500 mb-4" 
                aria-hidden="true"
              />
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-300 mb-2">Tecnologias:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-800 rounded-full text-xs text-cyan-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-300 mb-2">Resultados:</h4>
                <p className="text-gray-400 text-sm">{project.results}</p>
              </div>

              <div className="flex space-x-4">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-cyan-500/10 text-cyan-500 px-4 py-2 rounded-lg text-sm hover:bg-cyan-500/20 transition-colors focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                  aria-label={`Ver código do projeto ${project.title} no GitHub`}
                >
                  Ver Código
                </a>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gray-700 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-600 transition-colors focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                  aria-label={`Ver demonstração do projeto ${project.title}`}
                >
                  Demo ao Vivo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;