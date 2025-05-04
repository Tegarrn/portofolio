import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import ContactPage from './pages/ContactPage';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-white dark:bg-gray-900">
        <div className="w-16 h-16 relative">
          <div className="w-16 h-16 rounded-full border-4 border-indigo-100 dark:border-indigo-900"></div>
          <div className="w-16 h-16 rounded-full border-t-4 border-indigo-600 dark:border-indigo-400 absolute top-0 left-0 animate-spin"></div>
        </div>
        <h2 className="mt-4 text-xl font-medium text-gray-700 dark:text-gray-300">Loading...</h2>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        {/* Footer will be added here later */}
      </div>
    </Router>
  );
}

export default App;