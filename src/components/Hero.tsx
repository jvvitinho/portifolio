import React from 'react';
import { Shield, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center py-20 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80')] bg-cover bg-center"
      role="banner"
      aria-label="Hero Section"
    >
      <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm"></div>
      
      <div className="relative container mx-auto px-4 text-center">
        <Shield className="w-16 h-16 mx-auto mb-8 text-cyan-500" aria-hidden="true" />
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Protegendo o Futuro
          <span className="block text-cyan-500">Meu Portfólio em Cibersegurança</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-xl text-gray-300 mb-12">
          Especialista em segurança cibernética com foco em proteção de infraestruturas críticas,
          análise de vulnerabilidades e resposta a incidentes. Comprometido com a criação de um
          ambiente digital mais seguro através de soluções inovadoras e práticas robustas de segurança.
        </p>

        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-medium transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 focus:outline-none"
            role="button"
          >
            Ver Projetos
          </a>
          <a
            href="#contact"
            className="border border-cyan-500 text-cyan-500 hover:bg-cyan-500/10 px-8 py-3 rounded-lg font-medium transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 focus:outline-none"
            role="button"
          >
            Contato
          </a>
        </div>

        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          aria-hidden="true"
        >
          <ChevronDown className="w-8 h-8 text-cyan-500" />
        </div>
      </div>
    </section>
  );
};

export default Hero;