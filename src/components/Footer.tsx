import React from 'react';
import { Shield, Mail, Github, Linkedin, Rss } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="w-6 h-6 text-cyan-500" />
              <span className="text-lg font-bold">CyberPortfolio</span>
            </div>
            <p className="text-gray-400 text-sm">
              Especialista em cibersegurança dedicado a criar um ambiente digital mais seguro através de soluções inovadoras.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#projects" className="text-gray-400 hover:text-cyan-500 transition-colors">Projetos</a>
              </li>
              <li>
                <a href="#blog" className="text-gray-400 hover:text-cyan-500 transition-colors">Blog</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-cyan-500 transition-colors">Contato</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Receba atualizações sobre segurança e novos artigos.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <input
                type="email"
                placeholder="Seu email"
                aria-label="Endereço de email para newsletter"
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
                required
              />
              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Inscrever-se
              </button>
            </form>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-bold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/username"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="text-gray-400 hover:text-cyan-500 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/username"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="text-gray-400 hover:text-cyan-500 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="mailto:email@example.com"
                aria-label="Email Contact"
                className="text-gray-400 hover:text-cyan-500 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="/rss.xml"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="RSS Feed"
                className="text-gray-400 hover:text-cyan-500 transition-colors"
              >
                <Rss className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} CyberPortfolio. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="/privacy" className="text-gray-400 hover:text-cyan-500 text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="/terms" className="text-gray-400 hover:text-cyan-500 text-sm transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;