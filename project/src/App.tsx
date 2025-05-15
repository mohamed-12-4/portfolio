import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Github, Linkedin, Mail, User, Briefcase, Award, BookOpen, Code, Home } from 'lucide-react';
import './App.css';

// Components
import Timeline from './components/Timeline';
import SkillMap from './components/SkillMap';
import ChatBot from './components/ChatBot';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [showNav, setShowNav] = useState<boolean>(false);
  const [character, setCharacter] = useState<{ x: number, y: number }>({ x: 50, y: 50 });
  const [isMoving, setIsMoving] = useState<boolean>(false);
  const [direction, setDirection] = useState<string>('right');

  // Handle keyboard navigation for character
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const step = 10;
      setIsMoving(true);
      
      switch (e.key) {
        case 'ArrowUp':
          setCharacter(prev => ({ ...prev, y: Math.max(prev.y - step, 0) }));
          break;
        case 'ArrowDown':
          setCharacter(prev => ({ ...prev, y: Math.min(prev.y + step, window.innerHeight - 100) }));
          break;
        case 'ArrowLeft':
          setDirection('left');
          setCharacter(prev => ({ ...prev, x: Math.max(prev.x - step, 0) }));
          break;
        case 'ArrowRight':
          setDirection('right');
          setCharacter(prev => ({ ...prev, x: Math.min(prev.x + step, window.innerWidth - 100) }));
          break;
        default:
          break;
      }
    };

    const handleKeyUp = () => {
      setIsMoving(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  // Sections for navigation
  const sections = [
    { id: 'home', label: 'Home 🏠', icon: <Home size={20} /> },
    { id: 'about', label: 'About 👨‍🔬', icon: <User size={20} /> },
    { id: 'timeline', label: 'Journey 📈', icon: <ChevronRight size={20} /> },
    { id: 'skills', label: 'Skills 🧮', icon: <Code size={20} /> },
    { id: 'projects', label: 'Projects 🔬', icon: <Briefcase size={20} /> },
    { id: 'education', label: 'Education 🎓', icon: <BookOpen size={20} /> },
    { id: 'contact', label: 'Contact 📩', icon: <Mail size={20} /> },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="home-section">
            <div className="math-symbols-bg"></div>
            <div className="hero-content">
              <h1 className="text-5xl font-bold mb-4 animate-fadeIn">Welcome to My Portfolio! 🚀</h1>
              <p className="text-xl mb-8 text-gray-300 animate-slideUp">
                Where Mathematics, Data Science, and Technology Converge 
                <span className="formula">∫∞</span>
              </p>
              
              <div className="flex gap-4 justify-center">
                <button 
                  onClick={() => setActiveSection('timeline')} 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all transform hover:scale-105"
                >
                  My Journey 📈
                </button>
                <button 
                  onClick={() => setActiveSection('about')} 
                  className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition-all transform hover:scale-105"
                >
                  About Me 👨‍🔬
                </button>
              </div>
            </div>
            <div className="formula-decorations">
              <div className="formula-item">∮E·ds = −∂B/∂t</div>
              <div className="formula-item">∇ × E = −∂B/∂t</div>
              <div className="formula-item">e = mc²</div>
              <div className="formula-item">∫f(x)dx</div>
              <div className="formula-item">∑i=0∞</div>
            </div>
          </div>
        );
      case 'about':
        return <About />;
      case 'timeline':
        return <Timeline />;
      case 'skills':
        return <SkillMap />;
      case 'projects':
        return <Projects />;
      case 'education':
        return <Education />;
      case 'contact':
        return <Contact />;
      default:
        return <div>Select a section</div>;
    }
  };

  return (
    <div className="app-container text-white min-h-screen">
      {/* Character */}
      <div 
        className={`character ${isMoving ? 'walking' : ''} ${direction}`}
        style={{ 
          left: `${character.x}px`, 
          top: `${character.y}px`,
        }}
      >
        <div className="character-sprite"></div>
      </div>

      {/* Mobile Navigation Toggle */}
      <button 
        className="mobile-nav-toggle md:hidden fixed top-4 right-4 z-50 bg-blue-600 p-2 rounded-full"
        onClick={() => setShowNav(!showNav)}
      >
        {showNav ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
      </button>

      {/* Navigation */}
      <nav className={`side-navigation ${showNav ? 'show' : ''} fixed h-full w-64 p-6 flex flex-col z-40`}>
        <div className="logo mb-10">
          <h2 className="text-2xl font-bold">Φάκελος εργασιών</h2>
        </div>
        <ul className="flex-1">
          {sections.map((section) => (
            <li key={section.id} className="mb-2">
              <button
                onClick={() => {
                  setActiveSection(section.id);
                  if (window.innerWidth < 768) setShowNav(false);
                }}
                className={`w-full text-left py-2 px-4 rounded-lg flex items-center transition-colors ${
                  activeSection === section.id ? 'bg-blue-600' : 'hover:bg-gray-700'
                }`}
              >
                <span className="mr-3">{section.icon}</span>
                {section.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="social-links flex gap-4 mt-auto">
          <a href="https://github.com/mohamed-12-4 " target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/mohamed-elashmony-19073b24a/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <Linkedin size={20} />
          </a>
          <a href="mailto:mohamed_2005_12@outlook.com" className="hover:text-blue-400">
            <Mail size={20} />
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main className={`main-content ${showNav ? 'pushed' : ''} relative z-10`}>
        {renderSection()}
      </main>

      {/* Chatbot */}
      <ChatBot />
    </div>
  );
};

export default App;