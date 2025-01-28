import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      name: 'Certified Information Systems Security Professional (CISSP)',
      organization: 'ISC²',
      date: '2023',
      logo: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&q=80&w=100',
      link: '#'
    },
    {
      name: 'Certified Ethical Hacker (CEH)',
      organization: 'EC-Council',
      date: '2022',
      logo: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=100',
      link: '#'
    },
    {
      name: 'CompTIA Security+',
      organization: 'CompTIA',
      date: '2021',
      logo: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=100',
      link: '#'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Certificações e Qualificações
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors"
            >
              <div className="flex items-start space-x-4">
                <Award className="w-12 h-12 text-cyan-500 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
                  <p className="text-gray-400 mb-2">{cert.organization}</p>
                  <p className="text-sm text-gray-500 mb-4">{cert.date}</p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-cyan-500 hover:text-cyan-400 transition-colors"
                  >
                    Ver certificado
                    <ExternalLink className="w-4 h-4 ml-2" />
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

export default Certifications;