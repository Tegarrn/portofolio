import React, { useEffect } from 'react';

const AboutPage = () => {
  useEffect(() => {
    document.title = 'Tegar Portfolio | About';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-16">
      <h1>About Page</h1>
      {/* Content will be added later */}
    </div>
  );
};

export default AboutPage;