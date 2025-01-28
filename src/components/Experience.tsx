import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Security Engineer Lead',
      company: 'CyberTech Solutions',
      period: '2022 - Presente',
      description: 'Liderança de equipe de segurança, implementação de políticas de segurança e gestão de incidentes.',
      achievements: [
        'Redução de 60% no tempo de resposta a incidentes',
        'Implementação de programa de conscientização em segurança',
        'Desenvolvimento de framework próprio de análise de riscos'
      ]
    },
    {
      title: 'Senior Security Analyst',
      company: 'SecureNet Industries',
      period: '2019 - 2022',
      description: 'Análise de vulnerabilidades, testes de penetração e desenvolvimento de soluções de segurança.',
      achievements: [
        'Identificação e mitigação de mais de 200 vulnerabilidades críticas',
        'Desenvolvimento de sistema automatizado de varredura',
        'Mentoria de analistas júnior'
      ]
    },
    {
      title: 'Security Consultant',
      company: 'CyberGuard Consulting',
      period: '2017 - 2019',
      description: 'Consultoria em segurança da informação para empresas de médio e grande porte.',
      achievements: [
        'Realização de mais de 50 projetos de consultoria',
        'Implementação de SOC para 3 clientes enterprise',
        'Desenvolvimento de metodologia de análise de riscos'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Experiência Profissional
        </h2>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {index !== experiences.length - 1 && (
                <div className="absolute left-3 top-0 h-full w-px bg-gray-700" />
              )}
              <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-cyan-500 border-4 border-gray-900" />
              
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <div className="flex items-center text-gray-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    {exp.period}
                  </div>
                </div>

                <p className="text-cyan-500 font-medium mb-4">{exp.company}</p>
                <p className="text-gray-400 mb-4">{exp.description}</p>

                <h4 className="text-sm font-semibold text-gray-300 mb-2">Principais Conquistas:</h4>
                <ul className="list-disc list-inside text-gray-400">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="mb-1">{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;