import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import projects from '../data/projects';

const Projects = ({ limit }) => {
  // Filter featured projects if limit is provided
  const displayedProjects = limit 
    ? projects.filter(project => project.featured).slice(0, limit)
    : projects;

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 stagger-children">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore my latest work showcasing my skills in web development and cybersecurity.
            Each project represents a unique challenge and innovative solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <div 
              key={project.id}
              className="card group hover:shadow-xl transition-all duration-500 ease-in-out"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
                animation: 'fadeInUp 0.6s ease-out forwards',
                animationDelay: `${0.1 + index * 0.1}s`
              }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-56 object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-between items-center">
                      <a 
                        href={project.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white flex items-center hover:text-indigo-300 transition-colors"
                      >
                        <ExternalLink size={18} className="mr-1" /> Live Demo
                      </a>
                      <a 
                        href={project.codeLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-white flex items-center hover:text-indigo-300 transition-colors"
                      >
                        <Github size={18} className="mr-1" /> Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
                <Link 
                  to={`/projects#project-${project.id}`} 
                  className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                >
                  View Details <ChevronRight size={18} className="ml-1 animate-bounce-subtle" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {limit && (
          <div className="text-center mt-12">
            <Link 
              to="/projects" 
              className="btn-gradient inline-flex items-center"
            >
              View All Projects <ChevronRight size={18} className="ml-1" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;