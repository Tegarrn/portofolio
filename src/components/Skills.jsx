import React, { useState, useEffect } from 'react';
import skills from '../data/skills';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(skills[0].category);
  const [animatedItems, setAnimatedItems] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('skills-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    // Animate skills progressively when category changes
    setAnimatedItems([]);
    const currentCategoryItems = skills.find(cat => cat.category === activeCategory)?.items || [];
    
    currentCategoryItems.forEach((_, index) => {
      setTimeout(() => {
        setAnimatedItems(prev => [...prev, index]);
      }, index * 150);  // Stagger the animations
    });
  }, [activeCategory]);

  return (
    <section 
      id="skills-section" 
      className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent dark:from-gray-800 dark:to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 dark:bg-purple-900 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 -left-20 w-72 h-72 bg-indigo-300 dark:bg-indigo-900 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-14">
            <span className="px-4 py-1 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-800 dark:text-indigo-300 rounded-full text-sm font-medium inline-block mb-4">
              PROFESSIONAL EXPERTISE
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Skills</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              As a full-stack web developer with cybersecurity expertise, I bring a comprehensive skill set to create secure, responsive, and elegant web applications.
            </p>
          </div>

          {/* Skills Navigation */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-12">
            {skills.map((category) => (
              <button
                key={category.category}
                onClick={() => setActiveCategory(category.category)}
                className={`px-5 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === category.category
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {category.category}
              </button>
            ))}
          </div>

          {/* Skills Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills
              .find((category) => category.category === activeCategory)
              ?.items.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`bg-white dark:bg-gray-800 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform ${
                    animatedItems.includes(index) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  } hover:-translate-y-2`}
                >
                  <div 
                    className="h-2 w-full" 
                    style={{ backgroundColor: skill.color }}
                  ></div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div 
                          className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                          style={{ backgroundColor: `${skill.color}20` }} // Light version of the color
                        >
                          <span 
                            className="text-xl font-bold"
                            style={{ color: skill.color }}
                          >
                            {skill.name.charAt(0)}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{skill.name}</h3>
                      </div>
                      <span 
                        className="text-sm font-semibold px-2 py-1 rounded"
                        style={{ 
                          backgroundColor: `${skill.color}20`,
                          color: skill.color 
                        }}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{skill.description}</p>
                    
                    {/* Progress bar */}
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: animatedItems.includes(index) ? `${skill.level}%` : '0%',
                          backgroundColor: skill.color 
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Want to see my skills in action?
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#projects"
                className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                View Projects
              </a>
              <a
                href="/contact"
                className="px-8 py-3 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 border-2 border-indigo-600 dark:border-indigo-400 font-medium rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;