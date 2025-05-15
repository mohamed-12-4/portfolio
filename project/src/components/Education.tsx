/// <reference types="react" />

import React from 'react';
import { BookOpen, Award, Calendar } from 'lucide-react';

interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
}

interface CertificationItem {
  id: number;
  name: string;
  issuer: string;
  date: string;
  skills?: string;
  credentialId?: string;
}

const Education: React.FC = () => {
  const educationItems: EducationItem[] = [
    {
      id: 1,
      degree: 'Bachelor of Science in Applied Mathematics, Statistics, and Data Science, Minor in AI',
      institution: 'Khalifa University',
      location: 'Abu Dhabi, UAE',
      period: 'Aug 2023 – May 2027',
      description: 'CGPA: 3.9/4.0. Served as a peer mentor and tutor for courses including Computing with Python, Calculus I, II, and introduction to mathematical reasoning and logic, Data Science and AI. Served as a TA for winter program in Data science and AI by KU and ADIA.'
    }
  ];

  const certifications: CertificationItem[] = [
    {
      id: 1,
      name: '3rd Place: CTF Workshop',
      issuer: 'Khalifa University',
      date: 'Apr 2025',
      skills: 'Problem Solving'
    },
    {
      id: 2,
      name: 'Certificate of Participation | Generative AI Hackathon',
      issuer: 'Khalifa University',
      date: 'Apr 2025',
      skills: 'Machine Learning · Pattern Recognition · Computer Science'
    },
    {
      id: 3,
      name: 'Databases and SQL for Data Science with Python',
      issuer: 'IBM',
      date: 'Feb 2025',
      credentialId: 'DJ8LORB0TMIN',
      skills: 'Database Management System (DBMS) · MySQL · Programming Languages · Data Engineering · Databases · SQL'
    },
    {
      id: 4,
      name: 'Data Engineering Essentials',
      issuer: 'Coursera',
      date: 'Jan 2025',
      skills: 'Database Management System (DBMS) · MySQL · Data Engineering · Databases · Database Administration · SQL'
    },
    {
      id: 5,
      name: 'Data Science Orientation',
      issuer: 'Coursera',
      date: 'Jan 2025',
      skills: 'Data Science · Big Data · Databases · Database Administration · SQL'
    },
    {
      id: 6,
      name: 'Python for Data Science, AI & Development',
      issuer: 'IBM',
      date: 'Jan 2025',
      credentialId: 'NW4XJ3BSPM4A',
      skills: 'Machine Learning · Pattern Recognition · Data Science · Python (Programming Language)'
    },
    {
      id: 7,
      name: 'Peer Mentor - Fall 2024',
      issuer: 'Khalifa University',
      date: 'Dec 2024',
      credentialId: 'cbd69647-a1ad-4f70-b8d3-94e924486e0c',
      skills: 'Mathematics · Time Management · Leadership'
    },
    {
      id: 8,
      name: 'Data Analysis and Visualization -- Power BI',
      issuer: 'Udacity',
      date: 'Apr 2024',
      skills: 'Microsoft Power BI · Data Analysis · Database Administration'
    },
    {
      id: 9,
      name: 'COMPUTER VISION WORKSHOP ON OBJECT DETECTION USING YOLO',
      issuer: 'Khalifa University',
      date: 'Mar 2024',
      skills: 'Computer Vision · Python (Programming Language) · Artificial Intelligence (AI) · Yolo'
    }
  ];

  return (
    <div className="section py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-4xl font-bold mb-12 text-center">Education & Certifications <span className="math-symbol">∆</span></h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <BookOpen className="mr-3 text-blue-500" size={24} />
              Academic Education 🎓
            </h3>
            
            <div className="space-y-8">
              {educationItems.map(item => (
                <div key={item.id} className="math-card bg-gray-800 rounded-lg p-6 shadow-lg transition-transform hover:transform hover:scale-105">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold text-blue-400">{item.degree}</h4>
                    <span className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {item.period}
                    </span>
                  </div>
                  <div className="mb-4">
                    <div className="text-lg">{item.institution}</div>
                    <div className="text-gray-400">{item.location}</div>
                  </div>
                  <p className="text-gray-300">{item.description}</p>
                  <div className="mt-4 p-3 bg-gray-700 rounded-md">
                    <div className="text-sm font-semibold mb-1">Courses & Topics:</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="education-tag">Calculus 📊</span>
                      <span className="education-tag">Linear Algebra 🧮</span>
                      <span className="education-tag">Statistics 📈</span>
                      <span className="education-tag">Probability ∫</span>
                      <span className="education-tag">Machine Learning 🤖</span>
                      <span className="education-tag">Python 🐍</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications Preview */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Award className="mr-3 text-blue-500" size={24} />
              Recent Certifications 🏆
            </h3>
            
            <div className="space-y-4">
              {certifications.slice(0, 4).map(cert => (
                <div key={cert.id} className="bg-gray-800 rounded-lg p-5 shadow-lg transition-all hover:bg-gray-750 education-card">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold">{cert.name}</h4>
                    <span className="text-gray-400 text-sm">{cert.date}</span>
                  </div>
                  <div className="text-blue-400 mb-2">{cert.issuer} {cert.issuer === 'IBM' ? '🔬' : cert.issuer === 'Coursera' ? '🌐' : cert.issuer === 'Udacity' ? '📚' : '🏫'}</div>
                  {cert.skills && (
                    <div className="text-gray-300 text-sm">
                      <span className="font-medium">Skills:</span> {cert.skills}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* All Certifications Section */}
        <div>
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <Award className="mr-3 text-blue-500" size={24} />
            All Certifications <span className="math-symbol">∑</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map(cert => (
              <div key={cert.id} className="bg-gray-800 rounded-lg p-5 shadow-lg transition-all hover:bg-gray-750 education-card">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-bold">{cert.name}</h4>
                  <span className="text-gray-400 text-sm">{cert.date}</span>
                </div>
                <div className="text-blue-400 mb-2">{cert.issuer} {cert.issuer === 'IBM' ? '🔬' : cert.issuer === 'Coursera' ? '🌐' : cert.issuer === 'Udacity' ? '📚' : '🏫'}</div>
                {cert.credentialId && (
                  <div className="text-gray-400 text-xs mb-2">Credential ID: {cert.credentialId}</div>
                )}
                {cert.skills && (
                  <div className="text-gray-300 text-sm">
                    <span className="font-medium">Skills:</span> {cert.skills}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 p-6 bg-gray-800 rounded-lg math-theorem text-center">
          <div className="text-xl font-semibold mb-2">Learning Function</div>
          <div className="text-gray-300 math-text">
            <div className="formula text-2xl my-4">
              K(t) = K₀ + ∫<sub>0</sub><sup>t</sup> α·E(τ)·C(τ) dτ
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mt-4">
              <div>
                <div className="text-sm"><span className="formula">K(t)</span>: Knowledge at time <span className="formula">t</span></div>
                <div className="text-sm"><span className="formula">K₀</span>: Initial knowledge</div>
                <div className="text-sm"><span className="formula">α</span>: Learning efficiency</div>
              </div>
              <div>
                <div className="text-sm"><span className="formula">E(τ)</span>: Education quality</div>
                <div className="text-sm"><span className="formula">C(τ)</span>: Commitment level</div>
                <div className="text-sm"><span className="formula">τ</span>: Time variable</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;