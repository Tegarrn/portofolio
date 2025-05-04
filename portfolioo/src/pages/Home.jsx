import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';

const Home = () => {
  useEffect(() => {
    // Set page title when component mounts
    document.title = 'Tegar Portfolio | Home';
    
    // Optional: Scroll to top when this page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeroSection />
      {/* Other sections will be added here later */}
    </div>
  );
};

export default Home;