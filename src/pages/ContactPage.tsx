import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Calendar, CheckCircle, ArrowRight, Clock, Users, Award, MessageSquare } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    employees: '',
    service: '',
    budget: '',
    timeline: '',
    message: '',
    hearAbout: ''
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      info: "(713) 555-0123",
      subInfo: "Mon-Fri 9AM-6PM CST",
      description: "Speak directly with our AI consultants"
    },
    {
      icon: Mail,
      title: "Email Us",
      info: "hello@coreimplementations.com",
      subInfo: "We respond within 4 hours",
      description: "Send us your questions anytime"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "Houston, Texas",
      subInfo: "Serving all of Texas",
      description: "Meet our team in person"
    },
    {
      icon: Calendar,
      title: "Schedule Online",
      info: "Book instantly",
      subInfo: "Available slots updated daily",
      description: "Choose a time that works for you"
    }
  ];

  const services = [
    "AI Strategy & Roadmaps",
    "Process Automation",
    "Data & Insights", 
    "Custom AI Solutions",
    "Multiple Services",
    "Not sure - help me decide"
  ];

  const budgetRanges = [
    "Under $5,000",
    "$5,000 - $15,000",
    "$15,000 - $50,000",
    "$50,000 - $100,000",
    "Over $100,000",
    "Need help determining budget"
  ];

  const timelines = [
    "ASAP (within 1 month)",
    "1-3 months",
    "3-6 months",
    "6-12 months",
    "12+ months",
    "Just exploring options"
  ];

  const employeeCounts = [
    "1-10 employees",
    "11-25 employees",
    "26-50 employees",
    "51-100 employees",
    "100+ employees"
  ];

  const hearAboutOptions = [
    "Google search",
    "LinkedIn",
    "Referral from colleague",
    "Industry event",
    "Social media",
    "Other"
  ];

  const faqs = [
    {
      question: "How long does a typical AI implementation take?",
      answer: "Most implementations take 4-12 weeks depending on complexity. We use a phased approach to deliver value quickly while building toward larger goals."
    },
    {
      question: "What's the minimum budget for AI implementation?",
      answer: "Our projects typically start at $5,000 for strategy and planning. We work with your budget to prioritize the highest-impact opportunities first."
    },
    {
      question: "Do you work with businesses outside of Texas?",
      answer: "While we're based in Texas and specialize in the local market, we do work with select clients nationwide, especially for larger implementations."
    },
    {
      question: "What if we don't have technical expertise in-house?",
      answer: "That's exactly why we exist! We handle all technical aspects and provide training to ensure your team can manage the solutions effectively."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <motion.div 
        className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center" variants={itemVariants}>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Let's <span className="text-blue-600">Transform</span> Your Business
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-500">
              Ready to streamline your operations with AI? Schedule your free consultation or get in touch 
              with any questions. We're here to help you succeed.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div 
            className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-8"
            variants={itemVariants}
          >
            {[
              { icon: Users, label: "Businesses Served", value: "200+" },
              { icon: Clock, label: "Avg Response Time", value: "4 hours" },
              { icon: Award, label: "Success Rate", value: "98%" },
              { icon: MessageSquare, label: "Consultation", value: "Free" }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div 
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <Icon size={32} className="text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>

      {/* Contact Methods */}
      <motion.div 
        className="py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Get In Touch</h2>
            <p className="mt-4 text-xl text-gray-500">
              Choose the method that works best for you
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md hover:border-blue-200 transition-all duration-300 text-center"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon size={24} className="text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-blue-600 font-medium mb-1">{item.info}</p>
                  <p className="text-sm text-gray-500 mb-2">{item.subInfo}</p>
                  <p className="text-xs text-gray-400">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Main Contact Form */}
      <motion.div 
        className="py-16 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-8 sm:p-12"
            variants={itemVariants}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tell Us About Your Project</h3>
              <p className="text-gray-600">
                The more details you provide, the better we can tailor our consultation to your needs.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleInputChange}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                    placeholder="Your company"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                    placeholder="(713) 555-0123"
                  />
                </div>
              </div>

              {/* Business Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="employees" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Size
                  </label>
                  <select
                    id="employees"
                    name="employees"
                    value={formData.employees}
                    onChange={handleInputChange}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                  >
                    <option value="">Select company size</option>
                    {employeeCounts.map((count, index) => (
                      <option key={index} value={count}>{count}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range, index) => (
                      <option key={index} value={range}>{range}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                  >
                    <option value="">Select timeline</option>
                    {timelines.map((timeline, index) => (
                      <option key={index} value={timeline}>{timeline}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="hearAbout" className="block text-sm font-medium text-gray-700 mb-2">
                  How did you hear about us?
                </label>
                <select
                  id="hearAbout"
                  name="hearAbout"
                  value={formData.hearAbout}
                  onChange={handleInputChange}
                  className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                >
                  <option value="">Select an option</option>
                  {hearAboutOptions.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Tell us about your project *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                  placeholder="Describe your business challenges, goals, and what you hope to achieve with AI..."
                />
              </div>

              <div>
                <motion.button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium flex items-center justify-center text-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message & Schedule Consultation
                  <ArrowRight size={20} className="ml-2" />
                </motion.button>
              </div>
            </form>

            {/* What to Expect */}
            <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                <CheckCircle size={20} className="text-blue-600 mr-2" />
                What happens next?
              </h4>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-blue-600 font-bold text-xs">1</span>
                  </div>
                  <span>We'll respond within 4 hours with a personalized message</span>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-blue-600 font-bold text-xs">2</span>
                  </div>
                  <span>Schedule a free 45-minute strategy consultation</span>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-blue-600 font-bold text-xs">3</span>
                  </div>
                  <span>Receive a custom AI roadmap and proposal within 48 hours</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div 
        className="py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h3 className="text-3xl font-bold text-gray-900 sm:text-4xl">Frequently Asked Questions</h3>
            <p className="mt-4 text-xl text-gray-500">
              Quick answers to common questions about our AI implementation process
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-200"
                variants={itemVariants}
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h4>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>

          <motion.div className="text-center mt-12" variants={itemVariants}>
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <motion.button 
              className="text-blue-600 hover:text-blue-700 font-medium"
              whileHover={{ scale: 1.05 }}
            >
              Schedule a call to discuss your specific needs →
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;