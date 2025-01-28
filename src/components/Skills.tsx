import React from 'react';
import { Shield, Lock, Server, Code, Database, Network } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      category: 'Offensive Security',
      icon: Shield,
      items: ['Penetration Testing', 'Vulnerability Assessment', 'Red Teaming', 'Social Engineering']
    },
    {
      category: 'Defensive Security',
      icon: Lock,
      items: ['Incident Response', 'Threat Hunting', 'Security Monitoring', 'SIEM Management']
    },
    {
      category: 'Infrastructure',
      icon: Server,
      items: ['Cloud Security', 'Network Security', 'System Hardening', 'Access Control']
    },
    {
      category: 'Development',
      icon: Code,
      items: ['Secure Coding', 'Code Review', 'Security Testing', 'DevSecOps']
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Habilidades Técnicas
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-all duration-300"
            >
              <skill.icon className="w-12 h-12 text-cyan-500 mb-4" />
              <h3 className="text-xl font-bold mb-4">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-400">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Skill Meter */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-8 text-center">Níveis de Proficiência</h3>
          {[
            { name: 'Ethical Hacking', level: 90 },
            { name: 'Incident Response', level: 85 },
            { name: 'Malware Analysis', level: 75 },
            { name: 'Cloud Security', level: 80 }
          ].map((skill, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">{skill.name}</span>
                <span className="text-cyan-500">{skill.level}%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full">
                <div
                  className="h-full bg-cyan-500 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;