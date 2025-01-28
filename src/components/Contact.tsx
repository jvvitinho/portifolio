import React, { useState } from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Entre em Contato
        </h2>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                Assunto
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
            >
              <Send className="w-5 h-5 mr-2" />
              Enviar Mensagem
            </button>
          </form>

          <div className="mt-12 flex justify-center space-x-6">
            <a
              href="https://linkedin.com/in/username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-500 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-500 transition-colors"
            >
              GitHub
            </a>
            <a
              href="mailto:email@example.com"
              className="text-gray-400 hover:text-cyan-500 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;