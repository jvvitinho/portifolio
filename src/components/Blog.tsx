import React from 'react';
import { BookOpen, Calendar } from 'lucide-react';

const Blog = () => {
  const articles = [
    {
      title: 'Análise Avançada de Malware: Técnicas e Ferramentas',
      excerpt: 'Um guia completo sobre as técnicas modernas de análise de malware e as ferramentas mais eficientes do mercado.',
      date: '15 Mar 2024',
      readTime: '10 min',
      category: 'Malware Analysis'
    },
    {
      title: 'Zero Trust Architecture: Implementação Prática',
      excerpt: 'Como implementar uma arquitetura Zero Trust em sua organização, desde o planejamento até a execução.',
      date: '10 Mar 2024',
      readTime: '8 min',
      category: 'Security Architecture'
    },
    {
      title: 'Threat Hunting: Detectando Ameaças Avançadas',
      excerpt: 'Metodologias e práticas para identificação proativa de ameaças em sua infraestrutura.',
      date: '5 Mar 2024',
      readTime: '12 min',
      category: 'Threat Detection'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Blog e Artigos
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-cyan-500 font-semibold px-3 py-1 bg-cyan-500/10 rounded-full">
                    {article.category}
                  </span>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {article.date}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                <p className="text-gray-400 mb-4">{article.excerpt}</p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {article.readTime} de leitura
                  </span>
                  <button className="text-cyan-500 hover:text-cyan-400 transition-colors">
                    Ler mais
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-cyan-500/10 text-cyan-500 px-6 py-3 rounded-lg hover:bg-cyan-500/20 transition-colors">
            Ver todos os artigos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;