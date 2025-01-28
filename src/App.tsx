import React, { useState, useEffect } from 'react';
import { Shield, Terminal, Award, BookOpen, Briefcase, Mail, Github, Linkedin, ChevronDown, Lock, User, MessageSquare } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Blog from './components/Blog';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Skills from './components/Skills';
import Community from './components/Community';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        // Close any open modals or menus
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-cyan-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main>
        <Hero />
        <Projects />
        <Certifications />
        <Blog />
        <Experience />
        <Skills />
        <Testimonials />
        <Community />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;