import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { ExternalLink, Github, Tag, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import projects from '../data/projects';
import Footer from '../components/Footer';

const ProjectsPage = () => {
  const location = useLocation();
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedProject, setExpandedProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [showFullDescription, setShowFullDescription] = useState({});
  const projectRefs = useRef({});

  // Extract unique tags from all projects
  const allTags = [...new Set(projects.flatMap(project => project.tags))];

  useEffect(() => {
    // Apply filters
    let result = projects;
    
    // Apply tag filter
    if (activeFilter !== 'all') {
      result = result.filter(project => project.tags.includes(activeFilter));
    }
    
    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        project => 
          project.title.toLowerCase().includes(term) || 
          project.description.toLowerCase().includes(term) ||
          project.tags.some(tag => tag.toLowerCase().includes(term))
      );
    }
    
    setFilteredProjects(result);
  }, [activeFilter, searchTerm]);

  // Scroll to project if hash is present in URL
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#project-', '');
      const projectId = parseInt(id);
      if (!isNaN(projectId) && projectRefs.current[projectId]) {
        setTimeout(() => {
          projectRefs.current[projectId].scrollIntoView({ behavior: 'smooth', block: 'start' });
          setExpandedProject(projectId);
        }, 500);
      }
    }
  }, [location]);

  const toggleProjectDetails = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  const toggleDescriptionLength = (id) => {
    setShowFullDescription(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Animations on scroll
  useEffect(() => {
    const handleScroll = () => {
      const projectElements = document.querySelectorAll('.project-card');
      projectElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        
        if (isVisible) {
          element.classList.add('opacity-100');
          element.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [filteredProjects]);

  return (
    <div className="pt-24 min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16 stagger-children">
          <h1 className="text-5xl font-bold mb-6 text-gradient">My Projects</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Explore my portfolio of web development and cybersecurity projects. 
            Each project demonstrates my skills, expertise, and passion for creating 
            robust and innovative solutions.
          </p>
          
          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <div className="relative w-full sm:w-80">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-4 pr-10 py-2 border-2 border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300"
              />
              <svg className="absolute right-3 top-2.5 h-5 w-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            <div className="flex items-center space-x-2 overflow-x-auto py-2 w-full sm:w-auto whitespace-nowrap">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  activeFilter === 'all'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                All Projects
              </button>
              
              {allTags.slice(0, 5).map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveFilter(tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 flex items-center ${
                    activeFilter === tag
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  <Tag size={14} className="mr-1" /> {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <div
                key={project.id}
                ref={el => projectRefs.current[project.id] = el}
                id={`project-${project.id}`}
                className="project-card card transform transition-all duration-700 opacity-0 translate-y-10"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    {project.featured && (
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                        Featured
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                  <div className="text-gray-600 dark:text-gray-400 mb-4">
                    {expandedProject === project.id ? (
                      <div>
                        <p>{project.details}</p>
                      </div>
                    ) : (
                      <p className="line-clamp-2">{project.description}</p>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => toggleProjectDetails(project.id)}
                      className="flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                    >
                      {expandedProject === project.id ? (
                        <>Hide Details <ChevronUp size={18} className="ml-1" /></>
                      ) : (
                        <>View Details <ChevronDown size={18} className="ml-1" /></>
                      )}
                    </button>
                    
                    <div className="flex space-x-3">
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                        aria-label="Source Code"
                      >
                        <Github size={18} />
                      </a>
                    </div>
                  </div>
                  
                  {/* Expanded Project Details */}
                  {expandedProject === project.id && (
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 animate-fadeInUp">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-2 md:col-span-1">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="col-span-2 md:col-span-1">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Links</h4>
                          <div className="flex space-x-4">
                            <a
                              href={project.demoLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                            >
                              <ExternalLink size={16} className="mr-1" /> Live Demo
                            </a>
                            <a
                              href={project.codeLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                            >
                              <Github size={16} className="mr-1" /> Source Code
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col items-center justify-center py-20">
              <div className="text-center">
                <svg className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="mt-2 text-xl font-medium text-gray-900 dark:text-white">No projects found</h3>
                <p className="mt-1 text-gray-500 dark:text-gray-400">Try adjusting your search or filter to find what you're looking for.</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setActiveFilter('all');
                  }}
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;