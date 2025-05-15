/// <reference types="react" />

import React, { useEffect } from 'react';
import { User, Mail, MapPin, Calendar, Briefcase, BookOpen, Linkedin, Github, Phone } from 'lucide-react';

const MathFormula: React.FC<{ formula: string; className?: string }> = ({ formula, className }) => {
  return (
    <div className={`floating-formula ${className || ''}`}>
      {formula}
    </div>
  );
};

const About: React.FC = () => {
  useEffect(() => {
    // Create floating formulas animation
    const container = document.querySelector('.section');
    if (container) {
      const formulas = ['∫', '∑', '∂', '∆', 'f(x)', '∇', 'λ', 'π'];
      formulas.forEach((formula) => {
        const element = document.createElement('div');
        element.classList.add('floating-formula', 'absolute');
        element.innerText = formula;
        element.style.left = `${Math.random() * 100}%`;
        element.style.top = `${Math.random() * 100}%`;
        element.style.animationDuration = `${Math.random() * 10 + 15}s`;
        element.style.animationDelay = `${Math.random() * 5}s`;
        element.style.opacity = '0.15';
        element.style.color = '#60a5fa';
        element.style.fontSize = `${Math.random() * 20 + 16}px`;
        element.style.zIndex = '0';
        container.appendChild(element);
      });
    }
  }, []);

  return (
    <div className="section py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 z-10 relative">
        <h2 className="section-title text-4xl font-bold mb-12 text-center">About Me 👨‍🔬</h2>
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/3">
            <div className="relative bg-gray-800 bg-opacity-80 backdrop-filter backdrop-blur-sm p-6 rounded-lg shadow-lg border border-blue-500 h-full">
              <div className="math-decorations absolute top-2 left-2 text-blue-400 opacity-30 text-4xl">∫</div>
              <div className="math-decorations absolute top-2 right-2 text-blue-400 opacity-30 text-4xl">∑</div>
              <div className="math-decorations absolute bottom-2 left-2 text-blue-400 opacity-30 text-4xl">∂</div>
              <div className="math-decorations absolute bottom-2 right-2 text-blue-400 opacity-30 text-4xl">∆</div>
              
              <div className="flex justify-center items-center mb-4">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-700 rounded-full flex items-center justify-center text-5xl shadow-glow">
                  ME
                </div>
              </div>
              
              <div className="text-center">
                <h4 className="text-xl font-bold mb-2">Mathematician & Data Scientist</h4>
                <p className="text-gray-300 mb-4">Exploring the intersection of mathematics and real-world applications</p>
                
              </div>
              
              
            </div>
          </div>
          
          <div className="md:w-2/3">
            <div className="bg-gray-800 bg-opacity-80 backdrop-filter backdrop-blur-sm p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Mohamed Gamal Elashmony <span className="math-symbol">∂/∂x</span></h3>
              <p className="text-gray-300 mb-6">
                I'm a passionate student pursuing a Bachelor's degree in Applied Mathematics, Statistics, and Data Science with a 
                minor in AI at Khalifa University. I have a strong foundation in both theoretical mathematics 📊 and practical 
                data science applications 🧠.
              </p>
              <p className="text-gray-300 mb-6">
                I enjoy applying mathematical concepts to solve real-world problems through data science and AI techniques 📐. 
                I'm constantly learning and exploring new technologies in these fields to enhance my skills and knowledge 🚀.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center p-2 hover:bg-gray-700 rounded-md transition-colors">
                  <User className="text-blue-500 mr-3" size={20} />
                  <span>Mohamed Elashmony</span>
                </div>
                <div className="flex items-center p-2 hover:bg-gray-700 rounded-md transition-colors">
                  <Mail className="text-blue-500 mr-3" size={20} />
                  <span>📧 mohamed_2005_12@outlook.com</span>
                </div>
                <div className="flex items-center p-2 hover:bg-gray-700 rounded-md transition-colors">
                  <MapPin className="text-blue-500 mr-3" size={20} />
                  <span>📍 Dubai, UAE</span>
                </div>
                <div className="flex items-center p-2 hover:bg-gray-700 rounded-md transition-colors">
                  <Phone className="text-blue-500 mr-3" size={20} />
                  <span>📱 +971523040010</span>
                </div>
                <div className="flex items-center p-2 hover:bg-gray-700 rounded-md transition-colors">
                  <Linkedin className="text-blue-500 mr-3" size={20} />
                  <a href="https://www.linkedin.com/in/mohamed-elashmony-19073b24a/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400">LinkedIn 🔗</a>
                </div>
                <div className="flex items-center p-2 hover:bg-gray-700 rounded-md transition-colors">
                  <Github className="text-blue-500 mr-3" size={20} />
                  <a href="https://github.com/mohamed-12-4" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400">Github 🔗</a>
                </div>
              </div>
              
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all transform hover:scale-105 hover:shadow-glow">
                
                <a href="https://drive.google.com/file/d/1K0nrPwLR8Et88wpCIkF978zsuPvQDxrs/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400">Download Resume 📄</a>
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-center">What I Do ∑(Skills)</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 bg-opacity-80 backdrop-filter backdrop-blur-sm p-6 rounded-lg shadow-lg transition-all hover:transform hover:scale-105 hover:shadow-glow math-card">
              <div className="text-blue-500 mb-4">
                <Code size={40} />
              </div>
              <h4 className="text-xl font-bold mb-2">Data Analysis 📊</h4>
              <p className="text-gray-300">
                Analyzing complex datasets using Python (Pandas, NumPy) and R to extract meaningful insights and patterns. My statistical approach: <span className="formula">μ ± σ</span>
              </p>
            </div>
            
            <div className="bg-gray-800 bg-opacity-80 backdrop-filter backdrop-blur-sm p-6 rounded-lg shadow-lg transition-all hover:transform hover:scale-105 hover:shadow-glow math-card">
              <div className="text-blue-500 mb-4">
                <Palette size={40} />
              </div>
              <h4 className="text-xl font-bold mb-2">Machine Learning 🧠</h4>
              <p className="text-gray-300">
                Building and implementing machine learning models using Scikit-learn, TensorFlow, and PyTorch. Optimizing with <span className="formula">∇f(x)</span>
              </p>
            </div>
            
            <div className="bg-gray-800 bg-opacity-80 backdrop-filter backdrop-blur-sm p-6 rounded-lg shadow-lg transition-all hover:transform hover:scale-105 hover:shadow-glow math-card">
              <div className="text-blue-500 mb-4">
                <Server size={40} />
              </div>
              <h4 className="text-xl font-bold mb-2">Web Development 💻</h4>
              <p className="text-gray-300">
                Creating web applications using JavaScript frameworks and Django, with a focus on data-driven interfaces and algorithms <span className="formula">O(n log n)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Import the necessary icons
function Code(props: { size: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  );
}

function Palette(props: { size: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="13.5" cy="6.5" r=".5"></circle>
      <circle cx="17.5" cy="10.5" r=".5"></circle>
      <circle cx="8.5" cy="7.5" r=".5"></circle>
      <circle cx="6.5" cy="12.5" r=".5"></circle>
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
    </svg>
  );
}

function Server(props: { size: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
      <line x1="6" y1="6" x2="6.01" y2="6"></line>
      <line x1="6" y1="18" x2="6.01" y2="18"></line>
    </svg>
  );
}

export default About;