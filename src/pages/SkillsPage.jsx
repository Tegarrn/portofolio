import React, { useEffect } from 'react';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

const SkillsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Tegar | Skills';
  }, []);

  return (
    <div className="pt-16 min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 py-20 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-indigo-300/20 dark:bg-indigo-700/20 blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-96 h-96 rounded-full bg-purple-300/20 dark:bg-purple-700/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute -bottom-10 right-1/4 w-72 h-72 rounded-full bg-blue-300/20 dark:bg-blue-700/20 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Skills</span> & Expertise
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              As a seasoned web developer, I bring a diverse toolkit of technical skills to create amazing digital experiences. From front-end finesse to back-end brilliance, I transform ideas into powerful web solutions.
            </p>
            
            {/* Stats counters with animations */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-xl">
                <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 counter-animation" data-target="5">5+</div>
                <div className="text-gray-600 dark:text-gray-300 font-medium mt-2">Years Experience</div>
              </div>
              <div className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-xl">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 counter-animation" data-target="100">100+</div>
                <div className="text-gray-600 dark:text-gray-300 font-medium mt-2">Projects Completed</div>
              </div>
              <div className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-xl">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 counter-animation" data-target="20">20+</div>
                <div className="text-gray-600 dark:text-gray-300 font-medium mt-2">Technologies</div>
              </div>
              <div className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-xl">
                <div className="text-4xl font-bold text-pink-600 dark:text-pink-400 counter-animation" data-target="35">35+</div>
                <div className="text-gray-600 dark:text-gray-300 font-medium mt-2">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <Skills />

      {/* Additional Skills Info */}
      <section className="py-20 bg-white dark:bg-gray-800 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Left side - Working process */}
              <div className="order-2 md:order-1">
                <span className="px-4 py-1 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-800 dark:text-indigo-300 rounded-full text-sm font-medium inline-block mb-4">
                  MY APPROACH
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                  My Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Process</span>
                </h2>
                
                <div className="space-y-8 mt-8">
                  {/* Process steps */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        1
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Discovery & Planning</h3>
                      <p className="text-gray-600 dark:text-gray-300">I begin by understanding your vision, goals, and requirements to create a strategic roadmap for the project.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        2
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Design & Prototyping</h3>
                      <p className="text-gray-600 dark:text-gray-300">I create wireframes and interactive prototypes to visualize the user experience before diving into development.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        3
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Development & Testing</h3>
                      <p className="text-gray-600 dark:text-gray-300">I write clean, well-documented code and rigorously test across devices and browsers to ensure quality.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        4
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Deployment & Support</h3>
                      <p className="text-gray-600 dark:text-gray-300">I handle the launch process and provide ongoing maintenance and support to ensure your project continues to excel.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right side - Experience timeline */}
              <div className="order-1 md:order-2">
                <span className="px-4 py-1 bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium inline-block mb-4">
                  MY EXPERTISE
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                  Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Experience</span>
                </h2>
                
                <div className="relative pl-8 space-y-10 mt-8 before:absolute before:top-0 before:bottom-0 before:left-0 before:w-0.5 before:bg-gradient-to-b before:from-indigo-600 before:to-purple-600 dark:before:from-indigo-400 dark:before:to-purple-400">
                  {/* Timeline items */}
                  <div className="relative">
                    <div className="absolute -left-8 top-0 w-6 h-6 rounded-full border-4 border-indigo-600 dark:border-indigo-400 bg-white dark:bg-gray-800"></div>
                    <div className="mb-1 text-sm font-medium text-indigo-600 dark:text-indigo-400">2023 - Present</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Senior Frontend Developer</h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">Tech Innovations Inc.</p>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">Leading the frontend development team and implementing advanced UI/UX solutions with React and TailwindCSS.</p>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-8 top-0 w-6 h-6 rounded-full border-4 border-purple-600 dark:border-purple-400 bg-white dark:bg-gray-800"></div>
                    <div className="mb-1 text-sm font-medium text-purple-600 dark:text-purple-400">2021 - 2023</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Full Stack Developer</h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">Digital Solutions Co.</p>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">Developed and maintained web applications using React, Node.js, and PostgreSQL while implementing cybersecurity best practices.</p>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-8 top-0 w-6 h-6 rounded-full border-4 border-blue-600 dark:border-blue-400 bg-white dark:bg-gray-800"></div>
                    <div className="mb-1 text-sm font-medium text-blue-600 dark:text-blue-400">2020 - 2021</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Web Developer & Security Specialist</h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">CyberGuard Systems</p>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">Specialized in secure web application development and implementation of security protocols for client websites.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-4 py-1 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-800 dark:text-indigo-300 rounded-full text-sm font-medium inline-block mb-4">
              QUALIFICATIONS
            </span>
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Certifications</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I continuously invest in my professional development to stay at the cutting edge of web technologies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Certification Cards */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
              <div className="h-2 w-full bg-indigo-600"></div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Certified AWS Solutions Architect</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Mastered cloud infrastructure design and deployment with a focus on scalability and security.</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Issued: 2023</span>
                  <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">Amazon Web Services</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
              <div className="h-2 w-full bg-purple-600"></div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Full Stack Web Developer</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Comprehensive certification in modern web development including MERN stack technologies.</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Issued: 2022</span>
                  <span className="text-sm font-medium text-purple-600 dark:text-purple-400">freeCodeCamp</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
              <div className="h-2 w-full bg-blue-600"></div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Certified Ethical Hacker</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Advanced training in identifying and addressing security vulnerabilities in web applications.</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Issued: 2021</span>
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">EC-Council</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-800 dark:to-purple-800 relative overflow-hidden">
        {/* Background shapes */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-white rounded-full opacity-10"></div>
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-white rounded-full opacity-10"></div>
          <div className="absolute -bottom-40 left-1/4 w-64 h-64 bg-white rounded-full opacity-10"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Discuss Your Next Project?</h2>
            <p className="text-lg text-indigo-100 mb-8">
              Let's combine your vision with my technical expertise to create something amazing together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="px-8 py-3 bg-white text-indigo-600 font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Contact Me
              </a>
              <a href="/projects" className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transform hover:-translate-y-1 transition-all duration-300">
                View My Work
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SkillsPage;