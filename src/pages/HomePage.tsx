import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, CheckCircle, Brain, Cog, BarChart3, Wrench, Star, Users, TrendingUp } from 'lucide-react';

const HomePage = () => {
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

  const services = [
    {
      icon: Brain,
      title: "AI Strategy & Roadmaps",
      description: "Discovery sessions and adoption planning tailored to your business goals and budget.",
      color: "blue"
    },
    {
      icon: Cog,
      title: "Process Automation",
      description: "Streamline workflows with RPA, eliminate manual tasks, and boost productivity.",
      color: "green"
    },
    {
      icon: BarChart3,
      title: "Data & Insights",
      description: "Transform your data into actionable insights with dashboards and predictive models.",
      color: "purple"
    },
    {
      icon: Wrench,
      title: "Custom AI Solutions",
      description: "Bespoke AI tools designed specifically for your unique business challenges.",
      color: "orange"
    }
  ];

  const colorClasses = {
    blue: "bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
    green: "bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white",
    purple: "bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white",
    orange: "bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white"
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Johnson Construction",
      role: "Owner",
      content: "Core Implementations transformed our invoice processing. We went from 8 hours of manual work to just 2 hours weekly. The ROI was immediate.",
      rating: 5,
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
    },
    {
      name: "Michael Chen",
      company: "Texas Medical Group",
      role: "Practice Manager",
      content: "Our patient no-show rate dropped by 45% thanks to their predictive scheduling system. That's $18k more revenue monthly.",
      rating: 5,
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
    },
    {
      name: "Lisa Rodriguez",
      company: "Rodriguez Manufacturing",
      role: "Operations Director",
      content: "The inventory optimization system reduced our carrying costs by 35% while improving our fill rate to 98%. Incredible results.",
      rating: 5,
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
    }
  ];

  const partners = [
    { name: "Microsoft Partner", logo: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=120&h=60&dpr=2" },
    { name: "AWS Certified", logo: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=120&h=60&dpr=2" },
    { name: "Google Cloud", logo: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=120&h=60&dpr=2" },
    { name: "Salesforce Partner", logo: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=120&h=60&dpr=2" }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <motion.div 
        className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 pb-16 sm:pb-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute -top-40 -right-32 w-80 h-80 bg-blue-100 rounded-full opacity-50"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            className="absolute top-40 -left-32 w-60 h-60 bg-blue-50 rounded-full opacity-50"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [360, 180, 0]
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <motion.div 
              className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
              variants={itemVariants}
            >
              <motion.h1 variants={itemVariants}>
                <span className="block text-base font-semibold text-blue-600 tracking-wide uppercase">
                  AI Solutions for SMBs
                </span>
                <span className="mt-1 block text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Streamline Your</span>
                  <span className="block text-blue-600 xl:inline"> Business with AI</span>
                </span>
              </motion.h1>
              
              <motion.p 
                className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
                variants={itemVariants}
              >
                We help small and mid-sized businesses in Texas unlock the power of artificial intelligence 
                for efficiency, growth, and competitive advantage—without the enterprise complexity.
              </motion.p>

              {/* Trust indicators */}
              <motion.div 
                className="mt-8 flex flex-wrap items-center gap-6 text-sm text-gray-600"
                variants={itemVariants}
              >
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>Texas-Based Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>SMB Specialists</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>Proven Results</span>
                </div>
              </motion.div>

              {/* CTAs */}
              <motion.div 
                className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0"
                variants={itemVariants}
              >
                <div className="sm:flex sm:items-center sm:space-x-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="/contact"
                      className="block w-full sm:w-auto bg-blue-600 text-white text-center px-8 py-3 border border-transparent text-base font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                    >
                      Book Free Consultation
                      <ArrowRight size={16} className="ml-2 inline-block" />
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="/case-studies"
                      className="mt-3 sm:mt-0 block w-full sm:w-auto bg-white text-blue-600 text-center px-8 py-3 border border-blue-200 text-base font-medium rounded-lg hover:bg-blue-50 transition-colors duration-200"
                    >
                      <Play size={16} className="mr-2 inline-block" />
                      See Success Stories
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
              variants={itemVariants}
            >
              <motion.div 
                className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white p-8 rounded-lg shadow-xl">
                  <div className="text-center">
                    <motion.div 
                      className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mb-4"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    >
                      <div className="text-white text-2xl font-bold">AI</div>
                    </motion.div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Ready to Transform?</h3>
                    <p className="text-gray-600 text-sm mb-6">Join 200+ Texas SMBs already using AI to grow faster</p>
                    <div className="space-y-2">
                      <motion.div 
                        className="flex items-center justify-between text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <span className="text-gray-600">Process Efficiency</span>
                        <span className="font-semibold text-green-600">+70%</span>
                      </motion.div>
                      <motion.div 
                        className="flex items-center justify-between text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        <span className="text-gray-600">Cost Reduction</span>
                        <span className="font-semibold text-green-600">-40%</span>
                      </motion.div>
                      <motion.div 
                        className="flex items-center justify-between text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9 }}
                      >
                        <span className="text-gray-600">Time Savings</span>
                        <span className="font-semibold text-green-600">15 hrs/week</span>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Services Snapshot */}
      <motion.div 
        className="py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center" variants={itemVariants}>
            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Our Services</h2>
            <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
              Everything You Need to Succeed with AI
            </p>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              We help SMBs in Texas unlock AI for efficiency and growth with practical, affordable solutions.
            </p>
          </motion.div>

          <motion.div className="mt-12" variants={itemVariants}>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={index}
                    className="group relative bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 cursor-pointer"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div>
                      <motion.span 
                        className={`inline-flex p-3 rounded-lg ${colorClasses[service.color]} transition-all duration-300`}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Icon size={24} />
                      </motion.span>
                    </div>
                    <div className="mt-4">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-base text-gray-500 group-hover:text-gray-600">
                        {service.description}
                      </p>
                    </div>
                    <div className="mt-4">
                      <span className="text-blue-600 text-sm font-medium group-hover:text-blue-700 flex items-center">
                        Learn more
                        <ArrowRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Trust Builders */}
      <motion.div 
        className="py-16 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Trusted by Texas Businesses</h3>
            <p className="text-lg text-gray-600">Certified partners and proven results</p>
          </motion.div>

          {/* Partner Logos */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center mb-16"
            variants={itemVariants}
          >
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="flex justify-center"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 w-full text-center">
                  <div className="text-sm font-medium text-gray-600">{partner.name}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonials */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-bold text-gray-900 text-center mb-8">What Our Clients Say</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div 
        className="py-16 bg-blue-600"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h3 className="text-3xl font-bold text-white mb-4">Results That Matter</h3>
            <p className="text-xl text-blue-100">Real impact for Texas SMBs</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Users, label: "Businesses Served", value: "200+", color: "text-blue-100" },
              { icon: TrendingUp, label: "Average ROI", value: "340%", color: "text-green-300" },
              { icon: CheckCircle, label: "Success Rate", value: "98%", color: "text-white" },
              { icon: ArrowRight, label: "Time Saved Weekly", value: "15hrs", color: "text-blue-200" }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Icon size={32} className={`mx-auto mb-4 ${stat.color}`} />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Final CTA */}
      <motion.div 
        className="py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 sm:p-12 text-center"
            variants={itemVariants}
          >
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Ready to Transform Your Business?
              </h3>
              <p className="mt-4 text-lg text-blue-100">
                Schedule a free consultation to discover how AI can streamline your operations and drive growth.
              </p>
              <div className="mt-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-blue-600 bg-white hover:bg-gray-50 transition-colors duration-200 shadow-lg hover:shadow-xl"
                  >
                    Book Your Free Consultation
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;