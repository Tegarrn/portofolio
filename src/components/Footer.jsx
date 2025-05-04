import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';


const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                TEGAR
              </span>
              <span className="ml-1 text-2xl font-bold dark:text-white">Portfolio</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Web developer and cybersecurity specialist creating beautiful, secure digital experiences with modern technologies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Navigation links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">About</Link>
              </li>
              <li>
                <Link to="/skills" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">Skills</Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">Projects</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-400">
                <span className="block">Email:</span>
                <a href="mailto:contact@example.com" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">contact@example.com</a>
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                <span className="block">Location:</span>
                <span>Jakarta, Indonesia</span>
              </li>
              <li>
                <a 
                  href="#" 
                  className="inline-block mt-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors duration-300"
                >
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Tegar Portfolio. All rights reserved.
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-4 md:mt-0 flex items-center">
            Made with <Heart size={16} className="mx-1 text-red-500" /> using React & TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;