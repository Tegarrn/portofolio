import React, { useEffect } from 'react';

const ContactPage = () => {
  useEffect(() => {
    document.title = 'Tegar Portfolio | Contact';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-16">
      <h1>Contact Page</h1>
      {/* Content will be added later */}
    </div>
  );
};

export default ContactPage;