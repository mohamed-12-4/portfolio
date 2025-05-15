/// <reference types="react" />

import React, { useEffect, useState } from 'react';

interface TimelineItem {
  id: number;
  date: string;
  title: string;
  organization: string;
  description: string;
  position: 'left' | 'right';
  location?: string;
}

const Timeline: React.FC = () => {
  const [timelineItems, setTimelineItems] = useState<TimelineItem[]>([]);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    // Simulating data fetch
    const items: TimelineItem[] = [
      
      {
        id: 1,
        date: 'Jun 2025 - Aug 2025',
        title: 'Undergraduate Research 🔬',
        organization: 'Polymath JR',
        description: 'More info to come!!',
        position: 'left'
      },

      {
        id: 2,
        date: 'Mar 2025 - Present',
        title: 'Member at Abu Dhabi Hub 🌐',
        organization: 'AI for Good',
        description: 'Collaborating with individuals from diverse backgrounds to leverage artificial intelligence as a tool to address the challenges confronting our communities.',
        position: 'right',
        location: 'Abu Dhabi Emirate, United Arab Emirates'
      },
      
      {
        id: 3,
        date: '2023 - Present',
        title: 'Teaching and Mentoring 👨‍🏫',
        organization: 'Khalifa University',
        description: 'Served as a peer mentor and tutor for courses including Computing with Python, Calculus I, II, and introduction to mathematical reasoning and logic, Data Science and AI.',
        position: 'left'
      },
      {
        id: 4,
        date: '2024',
        title: 'Teaching Assistant 📊',
        organization: 'KU and ADIA Winter Program',
        description: 'Served as a TA for winter program in Data science and AI by KU and ADIA, where I helped students with Python and data science concepts.',
        position: 'right'
      },
      {
        id: 5,
        date: '2025',
        title: 'Backend Development Workshop 💻',
        organization: 'Khalifa University',
        description: 'Conducted a workshop on Backend Development where I introduced students to APIs and backend development using Django.',
        position: 'left'
      }
    ];
    
    setTimelineItems(items);

    // Animate items into view as user scrolls
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = Number(entry.target.getAttribute('data-id'));
          setVisibleItems(prev => [...prev, id]);
        }
      });
    }, { threshold: 0.2 });

    setTimeout(() => {
      document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item);
      });
    }, 100);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="section py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-4xl font-bold mb-12 text-center">My Journey <span className="math-symbol">→</span></h2>
        
        <div className="mb-8 text-center">
          <div className="inline-block p-4 bg-gray-800 rounded-lg math-theorem mb-8">
            <span className="formula">f(t) = f(t₀) + ∫<sub>t₀</sub><sup>t</sup> f'(τ) dτ</span>
            <span className="mx-2 text-gray-400">|</span>
            <span className="text-gray-300">The path integral of experience</span>
          </div>
        </div>
        
        <div className="timeline-container">
          <div className="timeline">
            {timelineItems.map((item) => (
              <div 
                key={item.id}
                data-id={item.id}
                className={`timeline-item ${item.position} ${visibleItems.includes(item.id) ? 'animate-fadeIn' : 'opacity-0'}`}
                style={{ 
                  transitionDelay: `${(item.id - 1) * 200}ms`,
                  animationDelay: `${(item.id - 1) * 200}ms` 
                }}
              >
                <div className="timeline-content math-card">
                  <div className="timeline-date">{item.date}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <div className="text-blue-400 mb-2">{item.organization}</div>
                  {item.location && (
                    <div className="text-gray-400 text-sm mb-2">{item.location}</div>
                  )}
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block math-text text-lg">
            <span className="formula">lim<sub>t→∞</sub> Experience(t) = ∞</span>
            <span className="mx-2 text-gray-400">|</span>
            <span className="text-gray-300">Never stop learning</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;