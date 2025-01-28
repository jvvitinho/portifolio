import React from 'react';
import { Users, Award, Calendar } from 'lucide-react';

const Community = () => {
  const contributions = [
    {
      title: 'OWASP Chapter Leader',
      description: 'Liderança do capítulo local da OWASP, organizando eventos e workshops mensais.',
      date: '2022 - Presente'
    },
    {
      title: 'Security Conferences Speaker',
      description: 'Palestrante regular em conferências de segurança, compartilhando conhecimentos sobre threat hunting e incident response.',
      date: '2020 - Presente'
    },
    {
      title: 'Mentor de Segurança',
      description: 'Mentoria para profissionais iniciantes em segurança cibernética.',
      date: '2021 - Presente'
    }
  ];

  const upcomingEvents = [
    {
      name: 'Workshop: Threat Hunting Avançado',
      date: '25 Abril 2024',
      location: 'Online',
      registration: '#'
    },
    {
      name: 'Conferência SecureWorld 2024',
      date: '15 Maio 2024',
      location: 'São Paulo, SP',
      registration: '#'
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Contribuições para a Comunidade
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Community Contributions */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <Users className="w-6 h-6 mr-2 text-cyan-500" />
              Atividades na Comunidade
            </h3>

            <div className="space-y-6">
              {contributions.map((contribution, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg p-6"
                >
                  <h4 className="text-lg font-bold mb-2">{contribution.title}</h4>
                  <p className="text-gray-400 mb-2">{contribution.description}</p>
                  <p className="text-sm text-cyan-500">{contribution.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <Calendar className="w-6 h-6 mr-2 text-cyan-500" />
              Próximos Eventos
            </h3>

            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg p-6"
                >
                  <h4 className="text-lg font-bold mb-2">{event.name}</h4>
                  <div className="flex items-center text-gray-400 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.date}
                  </div>
                  <p className="text-gray-400 mb-4">{event.location}</p>
                  <a
                    href={event.registration}
                    className="inline-block bg-cyan-500/10 text-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-500/20 transition-colors"
                  >
                    Inscrever-se
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;