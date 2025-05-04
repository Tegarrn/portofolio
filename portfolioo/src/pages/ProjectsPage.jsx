import React, { useEffect } from 'react';

const ProjectsPage = () => {
  useEffect(() => {
    document.title = 'Tegar Portfolio | Projects';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-16">
      <h1>Projects Page</h1>
      {/* Content will be added later */}
    </div>
  );
};

export default ProjectsPage;