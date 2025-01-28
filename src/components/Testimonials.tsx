import React from 'react';
import { MessageSquare, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ana Silva',
      role: 'CISO at TechCorp',
      content: 'Um profissional excepcional que trouxe uma nova perspectiva para nossa estratégia de segurança. Sua expertise em threat hunting foi fundamental para fortalecer nossa postura de segurança.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100'
    },
    {
      name: 'Carlos Santos',
      role: 'Security Director',
      content: 'Sua capacidade de identificar e mitigar vulnerabilidades complexas é impressionante. Um verdadeiro expert em segurança cibernética.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100'
    },
    {
      name: 'Mariana Costa',
      role: 'IT Manager',
      content: 'O trabalho de consultoria realizado superou todas as expectativas. Sua abordagem metodológica e atenção aos detalhes são exemplares.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100'
    }
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          O que Dizem Sobre Mim
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg p-6 relative"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-cyan-500 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-gray-400 italic">"{testimonial.content}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;