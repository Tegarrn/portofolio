import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Instagram, Mail, Phone, Send, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null);
  const [sending, setSending] = useState(false);
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(contactRef.current);
        }
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    
    // Simulate sending the form data
    setTimeout(() => {
      setSending(false);
      setFormStatus('success');
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 5000);
    }, 2000);
  };

  // Social media data with appropriate hover colors
  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: <Github className="h-6 w-6" />, 
      link: 'https://github.com/tegarmunwr',
      username: '@tegarmunwr',
      hoverClass: 'hover:bg-gray-800 dark:hover:bg-gray-700',
      color: 'text-gray-800 dark:text-gray-200'
    },
    { 
      name: 'LinkedIn', 
      icon: <Linkedin className="h-6 w-6" />, 
      link: 'https://linkedin.com/in/tegarmunwarohman',
      username: 'tegarmunwarohman',
      hoverClass: 'hover:bg-blue-600 dark:hover:bg-blue-700',
      color: 'text-blue-600 dark:text-blue-400'
    },
    { 
      name: 'Instagram', 
      icon: <Instagram className="h-6 w-6" />, 
      link: 'https://instagram.com/tegarmunwr',
      username: '@tegarmunwr',
      hoverClass: 'hover:bg-pink-600 dark:hover:bg-pink-700',
      color: 'text-pink-600 dark:text-pink-400'
    },
    { 
      name: 'Email', 
      icon: <Mail className="h-6 w-6" />, 
      link: 'mailto:tegar@example.com',
      username: 'tegar@example.com',
      hoverClass: 'hover:bg-indigo-600 dark:hover:bg-indigo-700',
      color: 'text-indigo-600 dark:text-indigo-400'
    },
    { 
      name: 'WhatsApp', 
      icon: <Phone className="h-6 w-6" />, 
      link: 'https://wa.me/6281234567890',
      username: '+62 812-3456-7890',
      hoverClass: 'hover:bg-green-600 dark:hover:bg-green-700',
      color: 'text-green-600 dark:text-green-400'
    }
  ];

  // Contact info items
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: 'Email',
      details: 'tegar@example.com',
      color: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: 'Phone',
      details: '+62 812-3456-7890',
      color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: 'Location',
      details: 'Jakarta, Indonesia',
      color: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: 'Working Hours',
      details: 'Mon - Fri: 9AM - 5PM',
      color: 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400'
    }
  ];

  return (
    <div 
      ref={contactRef}
      className={`py-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach out through any of the channels below.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {socialLinks.map((social, index) => (
            <a 
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg ${social.hoverClass} hover:text-white transform hover:-translate-y-1 transition-all duration-300 border border-gray-200 dark:border-gray-700`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`mr-4 ${social.color} group-hover:text-white transition-colors duration-300`}>
                {social.icon}
              </div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white group-hover:text-white transition-colors duration-300">{social.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors duration-300">{social.username}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={info.title}
                    className="flex items-start"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`p-3 rounded-lg mr-4 ${info.color}`}>
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">{info.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400">{info.details}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Preview */}
              <div className="mt-8 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <MapPin className="h-12 w-12 text-indigo-600 dark:text-indigo-400 animate-bounce" />
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-800 px-3 py-1 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Jakarta, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send Me a Message</h3>
              
              {formStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg text-green-700 dark:text-green-400 flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span>Your message has been sent successfully! I'll get back to you soon.</span>
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-400 flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2" />
                  <span>Oops! Something went wrong. Please try again later.</span>
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all duration-300"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all duration-300 resize-none"
                    placeholder="Hello, I'd like to discuss a project with you..."
                  ></textarea>
                </div>
                
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={sending}
                    className={`px-8 py-3 rounded-lg flex items-center justify-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ${sending ? 'opacity-80 cursor-not-allowed' : ''}`}
                  >
                    {sending ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;