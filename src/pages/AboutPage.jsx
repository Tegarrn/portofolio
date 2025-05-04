import React, { useEffect } from 'react';
import About from '../components/About';
import Footer from '../components/Footer';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'About | Tegar Portfolio';
  }, []);

  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="page-enter-active">
        <About />
        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;