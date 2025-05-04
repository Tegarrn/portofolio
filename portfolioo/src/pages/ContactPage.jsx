import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const ContactPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-16 bg-gray-50 dark:bg-gray-900 min-h-screen"
    >
      {/* Decorative header shape */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 transform -skew-y-6 origin-top-left h-48 -z-10"></div>
        
        <div className="container mx-auto px-6 pt-12 pb-20">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">Contact Me</h1>
            <p className="text-lg text-gray-700 dark:text-white/80 max-w-2xl mx-auto">
              Let's discuss how we can work together to bring your ideas to life with stunning modern web experiences.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Floating contact cards */}
      <div className="container mx-auto px-6 -mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Chat Directly",
              description: "Have questions? Get in touch for a quick chat about your project needs.",
              button: "Start Chat",
              delay: 0.3,
              color: "from-blue-500 to-indigo-600"
            },
            {
              title: "Book a Meeting", 
              description: "Schedule a dedicated time slot for an in-depth discussion about your project.",
              button: "Book Now",
              delay: 0.5,
              color: "from-indigo-500 to-purple-600"
            },
            {
              title: "Get a Quote",
              description: "Ready to start? Get a detailed project estimate based on your requirements.",
              button: "Request Quote",
              delay: 0.7,
              color: "from-purple-500 to-pink-600"
            }
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: card.delay, duration: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              <div className={`h-2 bg-gradient-to-r ${card.color}`}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{card.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{card.description}</p>
                <button className={`px-4 py-2 rounded-lg bg-gradient-to-r ${card.color} text-white font-medium transition-transform hover:scale-105`}>
                  {card.button}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Contact Component */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <Contact />
      </motion.div>

      {/* Testimonials Section */}
      <div className="py-16 bg-gray-100 dark:bg-gray-800/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              What Clients <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Say About Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Don't just take my word for it – here's what some of my clients have to say about working with me.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Tegar delivered beyond our expectations. The website design is stunning and the performance metrics have significantly improved.",
                author: "Sarah Johnson",
                role: "Marketing Director, TechCorp",
                avatar: "/api/placeholder/80/80",
                delay: 0.2
              },
              {
                quote: "Working with Tegar was a game-changer for our startup. He not only built a beautiful website but also provided insights on improving our overall digital presence.",
                author: "Michael Chen",
                role: "Founder, InnovateLabs",
                avatar: "/api/placeholder/80/80",
                delay: 0.4
              },
              {
                quote: "Exceptional attention to detail and a keen eye for design. Our e-commerce conversion rate doubled after the redesign project.",
                author: "Emma Rodriguez",
                role: "E-commerce Manager, StyleHub",
                avatar: "/api/placeholder/80/80",
                delay: 0.6
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: testimonial.delay, duration: 0.6 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-4">
                  <div className="relative">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author} 
                      className="w-12 h-12 rounded-full object-cover border-2 border-indigo-500"
                    />
                    <div className="absolute -right-1 -bottom-1 bg-green-500 rounded-full w-4 h-4 border-2 border-white dark:border-gray-800"></div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic">"{testimonial.quote}"</p>
                <div className="mt-4 flex text-yellow-500">
                  {Array(5).fill().map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Let's create something amazing together. Get in touch today and let's turn your vision into reality.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-indigo-600 font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get Started Now
          </motion.button>
        </div>
      </motion.div>

      {/* FAQ Section */}
      <div className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Questions</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Find answers to common questions about my services, process, and more.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "What is your typical process for a new project?",
                answer: "I follow a structured approach: initial consultation, requirement gathering, conceptual design, development, testing, revision, and launch. Throughout the process, I maintain regular communication to ensure the final product meets all your needs."
              },
              {
                question: "How long does it usually take to complete a project?",
                answer: "Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, while a complex web application could take 2-3 months. I'll provide a detailed timeline estimate during our initial consultation."
              },
              {
                question: "Do you offer ongoing maintenance and support?",
                answer: "Yes, I offer various maintenance packages to keep your website secure, updated, and performing optimally. These can be customized based on your specific needs and budget constraints."
              },
              {
                question: "How do you handle revisions and feedback?",
                answer: "Feedback and revisions are a natural part of the process. My standard packages include two rounds of revisions. I use collaborative tools to make the feedback process smooth and efficient."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </motion.div>
  );
};

export default ContactPage;