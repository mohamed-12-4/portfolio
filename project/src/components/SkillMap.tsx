/// <reference types="react" />

import React, { useState, useEffect } from 'react';
import { Code, Database, Server, Globe, Palette, Terminal } from 'lucide-react';

interface Skill {
  id: number;
  name: string;
  category: string;
  icon: React.ReactNode;
}

const SkillMap: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  useEffect(() => {
    // Simulating data fetch
    const skillsData: Skill[] = [
      { id: 1, name: 'Python 🐍', category: 'programming', icon: <Code size={32} /> },
      { id: 2, name: 'Pandas 🐼', category: 'data', icon: <Database size={32} /> },
      { id: 3, name: 'NumPy ⚡', category: 'data', icon: <Database size={32} /> },
      { id: 4, name: 'Scikit-learn 🧠', category: 'ml', icon: <Server size={32} /> },
      { id: 5, name: 'TensorFlow 🤖', category: 'ml', icon: <Server size={32} /> },
      { id: 6, name: 'PyTorch 🔥', category: 'ml', icon: <Server size={32} /> },
      { id: 7, name: 'Django 🌐', category: 'web', icon: <Globe size={32} /> },
      { id: 8, name: 'R Programming 📊', category: 'programming', icon: <Code size={32} /> },
      { id: 9, name: 'C/C++ ⚙️', category: 'programming', icon: <Code size={32} /> },
      { id: 10, name: 'JavaScript 💻', category: 'web', icon: <Globe size={32} /> },
      { id: 11, name: 'SQL 📂', category: 'data', icon: <Database size={32} /> },
      { id: 12, name: 'NoSQL 📁', category: 'data', icon: <Database size={32} /> },
    ];
    
    setSkills(skillsData);
  }, []);

  const categories = [
    { id: 'all', name: 'All Skills ∀' },
    { id: 'programming', name: 'Programming λ' },
    { id: 'data', name: 'Data Science 📊' },
    { id: 'ml', name: 'Machine Learning 🧠' },
    { id: 'web', name: 'Web Development 🌐' },
  ];

  const filterSkills = (category: string) => {
    setIsAnimating(true);
    setActiveCategory(category);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <div className="section py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-4xl font-bold mb-12 text-center">Skills & Expertise <span className="math-symbol">∑</span></h2>
        
        <div className="flex justify-center mb-8 flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => filterSkills(category.id)}
              className={`px-4 py-2 rounded-full transition-all ${
                activeCategory === category.id 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          {filteredSkills.map(skill => (
            <div key={skill.id} className="skill-node bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center justify-center hover:bg-gray-700 transition-colors">
              <div className="text-blue-500 mb-3">{skill.icon}</div>
              <h3 className="text-lg font-medium text-center">{skill.name}</h3>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-gray-800 rounded-lg math-theorem">
          <div className="text-xl font-semibold mb-2">Learning Formula</div>
          <div className="text-gray-300 math-text">
            <div className="formula text-center my-4">skills = ∫<sub>0</sub><sup>t</sup> practice(t) dt</div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillMap;