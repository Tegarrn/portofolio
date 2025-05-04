import React, { useState, useEffect } from 'react';
import { Terminal, Shield, Code, Globe, Cpu, Database } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    
    const element = document.getElementById('about-section');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);
  
  return (
    <section id="about-section" className="py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden">
      <div className="container mx-auto px-6 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -right-20 w-64 h-64 bg-indigo-200 dark:bg-indigo-900/30 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-purple-200 dark:bg-purple-900/30 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute top-3/4 right-1/3 w-40 h-40 bg-pink-200 dark:bg-pink-900/30 rounded-full opacity-20 blur-2xl"></div>
        </div>
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">About</span> Me
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mx-auto mb-6 transition-all duration-1000 delay-200 transform ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}></div>
          <p className={`text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Passionate about creating beautiful web experiences and securing digital landscapes
          </p>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image & Animation */}
          <div className={`transition-all duration-1000 delay-400 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="relative">
              <div className="w-full h-[400px] rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 shadow-lg p-4 overflow-hidden">
                <div className="absolute top-4 left-4 flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                
                <div className="mt-6 font-mono text-sm text-gray-800 dark:text-gray-300 h-[340px] overflow-hidden">
                  <div className="typing-animation">
                    <p className="text-indigo-600 dark:text-indigo-400">$ whoami</p>
                    <p className="pl-4 mt-2">Tegar - Web Developer & Cyber Security Specialist</p>
                    
                    <p className="text-indigo-600 dark:text-indigo-400 mt-4">$ skills --list</p>
                    <p className="pl-4 mt-2">Frontend: React, Vue, Angular, TailwindCSS</p>
                    <p className="pl-4">Backend: Node.js, Express, Django, Flask</p>
                    <p className="pl-4">Security: Penetration Testing, Network Security, Cryptography</p>
                    
                    <p className="text-indigo-600 dark:text-indigo-400 mt-4">$ cat about.txt</p>
                    <p className="pl-4 mt-2">I'm a passionate web developer and cybersecurity enthusiast with</p>
                    <p className="pl-4">a strong focus on creating secure, performant, and beautiful web</p>
                    <p className="pl-4">applications. I love solving complex problems and continuously</p>
                    <p className="pl-4">learning new technologies and security practices.</p>
                    
                    <p className="text-indigo-600 dark:text-indigo-400 mt-4">$ ./run experience.sh</p>
                    <p className="pl-4 mt-2">Loading professional experience...</p>
                    <div className="pl-4 mt-1 flex items-center">
                      <div className="w-4 h-4 border-2 border-indigo-600 dark:border-indigo-400 border-t-transparent rounded-full animate-spin mr-2"></div>
                      <span>Experience loaded successfully!</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-yellow-400 dark:bg-yellow-600 rounded-lg rotate-12 animate-float opacity-70"></div>
              <div className="absolute -bottom-4 right-12 w-12 h-12 bg-indigo-400 dark:bg-indigo-600 rounded-full animate-float opacity-70 animation-delay-1000"></div>
              <div className="absolute top-1/2 -left-4 w-10 h-10 bg-purple-400 dark:bg-purple-600 rounded-md rotate-45 animate-float opacity-70 animation-delay-2000"></div>
            </div>
          </div>
          
          {/* Right Side - Text Content */}
          <div className={`space-y-6 transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Web Developer & Cyber Security Specialist
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              I blend creativity with technical expertise to build modern, secure web applications. With a passion for both the visual aspects of frontend development and the robust architecture of backend systems, I create digital experiences that are not only beautiful but also secure and performant.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              My journey in cybersecurity has equipped me with a unique perspective on web development, allowing me to integrate security best practices from the ground up rather than as an afterthought.
            </p>
            
            {/* Skills Icons */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center">
                  <Code className="text-indigo-600 dark:text-indigo-400 w-8 h-8 mr-3" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Web Development</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Frontend & Backend</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center">
                  <Shield className="text-indigo-600 dark:text-indigo-400 w-8 h-8 mr-3" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Cyber Security</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Penetration Testing</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center">
                  <Globe className="text-indigo-600 dark:text-indigo-400 w-8 h-8 mr-3" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">UI/UX Design</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Modern Interfaces</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center">
                  <Cpu className="text-indigo-600 dark:text-indigo-400 w-8 h-8 mr-3" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Performance</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Optimization</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center">
                  <Terminal className="text-indigo-600 dark:text-indigo-400 w-8 h-8 mr-3" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">DevOps</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">CI/CD Pipeline</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center">
                  <Database className="text-indigo-600 dark:text-indigo-400 w-8 h-8 mr-3" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Databases</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">SQL & NoSQL</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* CTA */}
            <div className="flex flex-wrap gap-4 mt-8">
              <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Download Resume
              </button>
              <button className="px-6 py-3 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 border-2 border-indigo-600 dark:border-indigo-400 font-medium rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                View Projects
              </button>
            </div>
          </div>
        </div>
        
        {/* Experience Section */}
        <div className={`mt-24 transition-all duration-1000 delay-600 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-2xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
            My Professional Journey
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-200 dark:bg-indigo-900/50"></div>
            
            {/* Timeline items */}
            <div className="space-y-16 relative">
              {/* Item 1 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">Senior Web Developer</h4>
                  <p className="text-indigo-600 dark:text-indigo-400 font-medium">TechCorp Inc.</p>
                  <p className="text-gray-500 dark:text-gray-400">2022 - Present</p>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Leading a team of developers to create robust web applications with a focus on security and scalability.
                  </p>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-4 border-white dark:border-gray-800 bg-indigo-600 dark:bg-indigo-500 z-10 flex items-center justify-center text-white">
                  <span className="font-bold">1</span>
                </div>
                
                <div className="md:w-1/2 md:pl-12"></div>
              </div>
              
              {/* Item 2 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12"></div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-4 border-white dark:border-gray-800 bg-purple-600 dark:bg-purple-500 z-10 flex items-center justify-center text-white">
                  <span className="font-bold">2</span>
                </div>
                
                <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">Security Consultant</h4>
                  <p className="text-purple-600 dark:text-purple-400 font-medium">SecureNet Services</p>
                  <p className="text-gray-500 dark:text-gray-400">2020 - 2022</p>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Conducted security audits and penetration testing for web applications, helping clients improve their security posture.
                  </p>
                </div>
              </div>
              
              {/* Item 3 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">Frontend Developer</h4>
                  <p className="text-indigo-600 dark:text-indigo-400 font-medium">Creative Web Studio</p>
                  <p className="text-gray-500 dark:text-gray-400">2018 - 2020</p>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Developed responsive and interactive user interfaces using modern frontend frameworks.
                  </p>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-4 border-white dark:border-gray-800 bg-pink-600 dark:bg-pink-500 z-10 flex items-center justify-center text-white">
                  <span className="font-bold">3</span>
                </div>
                
                <div className="md:w-1/2 md:pl-12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;