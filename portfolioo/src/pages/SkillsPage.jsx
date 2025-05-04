
// src/pages/SkillsPage.jsx
import React, { useEffect } from 'react';

const SkillsPage = () => {
  useEffect(() => {
    document.title = 'Tegar Portfolio | Skills';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-16">
      <h1>Skills Page</h1>
      {/* Content will be added later */}
    </div>
  );
};

export default SkillsPage;