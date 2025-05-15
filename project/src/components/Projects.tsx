/// <reference types="react" />

import React, { useState, useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  githubLink: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    // Simulating data fetch
    const projectsData: Project[] = [
      {
        id: 1,
        title: 'UNet + KAN for image segmentation 🧠',
        description: 'Created a model that has the same architecture as UNet using Convolutional KAN layers. The KAN-based model had 50%+ less parameters compared to traditional model. Achieved a better performance compared to traditional model on Brain MRI image segmentation.',
        image: 'https://images.unsplash.com/photo-1714939722610-9169e8883bf8?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        tags: ['PyTorch', 'Deep Learning', 'Medical Imaging', 'Image Segmentation'],
        
        githubLink: 'https://github.com/mohamed-12-4/unetkan'
      },
      {
        id: 2,
        title: 'Universe at Hand 🪐',
        description: 'Developed "Universe at Hand," an interactive web application that simulates the solar system and provides detailed data on nearby asteroids using Next.js, Three.js, and Django. Integrated NASA APIs to create a virtual orrery where users explore planetary orbits and access information about asteroids.',
        image: 'https://images.pexels.com/photos/2098428/pexels-photo-2098428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        tags: ['Next.js', 'Three.js', 'Django', 'NASA API'],
        demoLink: 'https://nasa-app-eight.vercel.app/',
        githubLink: 'https://github.com/mohamed-12-4/nasa_app'
      },
      {
        id: 3,
        title: 'Heart Sound Classification ❤️',
        description: 'Reimplemented results from multiple research papers to validate machine learning techniques. Experimented with various machine learning and deep learning models and sampling techniques, including SMOTE for handling class imbalance. Achieved a 90% classification accuracy using an ensemble vote model.',
        image: 'https://images.unsplash.com/photo-1715111183948-ee02f78b9175?q=80&w=1951&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        tags: ['Machine Learning', 'Deep Learning', 'Python', 'SMOTE'],
        githubLink: 'https://github.com/mohamed-12-4/Heart_Sound_Classification'
      },
      {
        id: 4,
        title: 'StudyGenius AI 📚',
        description: ' "StudyGenius" AI is an AI-powered platform that helps students: Plan their studies more effectively, Create quizzes to test themselves, Build roadmaps for any course or topic they want to learn',
        image: 'https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        tags: ['Azure', 'AI', 'Next.js', 'API', 'Databases'],
        githubLink: 'https://github.com/mohamed-12-4/StudyGenius-AI'
      }
    ];
    
    setProjects(projectsData);
  }, []);

  // Get all unique tags
  const allTags = ['all', ...new Set(projects.flatMap(project => project.tags))];

  // Filter projects based on selected tag
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  return (
    <div className="section py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-4xl font-bold mb-12 text-center">
          My Projects <span className="math-symbol">∫</span>
        </h2>
        
        <div className="flex justify-center mb-8 flex-wrap gap-2">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full transition-all ${
                filter === tag 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {tag === 'all' ? 'All ∀' : tag.charAt(0).toUpperCase() + tag.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:transform hover:scale-105">
              <div className="project-formula-overlay"></div>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs">{tag}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 flex items-center text-sm"
                    >
                      <ExternalLink size={16} className="mr-1" /> Demo
                    </a>
                  )}
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 flex items-center text-sm"
                  >
                    <Github size={16} className="mr-1" /> Code
                  </a>
              </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-6 bg-gray-800 rounded-lg math-theorem">
          <div className="text-xl font-semibold mb-2">Project Complexity Axiom</div>
          <div className="text-gray-300 math-text">
            <div className="mb-2">For any project <span className="formula">p ∈ P</span>, its complexity <span className="formula">C(p)</span> and impact <span className="formula">I(p)</span> are related by:</div>
            <div className="formula text-center my-4">I(p) = ∫<sub>t₀</sub><sup>t₁</sup> C(p) · e<sup>-λ(t₁-t)</sup> dt</div>
            <div>Where <span className="formula">λ</span> is the learning rate and <span className="formula">[t₀, t₁]</span> is the time interval of development.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;