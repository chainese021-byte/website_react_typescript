import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, Cog, BarChart3, Wrench, CheckCircle, ArrowRight, Clock, DollarSign, TrendingUp, Users } from 'lucide-react';

const ServicesPage = () => {
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
      problem: "Many SMBs know AI could help but don't know where to start or what's realistic for their budget and timeline.",
      solution: "We conduct comprehensive discovery sessions to understand your business, then create a practical AI roadmap that aligns with your goals, resources, and growth plans.",
      features: [
        "Business process analysis and optimization opportunities",
        "AI opportunity identification and prioritization",
        "Phased implementation planning with clear milestones",
        "ROI projections and budget planning",
        "Technology stack recommendations",
        "Risk assessment and mitigation strategies",
        "Change management planning",
        "Success metrics and KPI definition"
      ],
      benefits: [
        "Clear path forward with AI implementation",
        "Realistic budget and timeline expectations",
        "Prioritized opportunities for maximum impact",
        "Risk mitigation and change management support"
      ],
      pricing: "Starting at $2,500",
      timeline: "2-4 weeks",
      color: "blue"
    },
    {
      icon: Cog,
      title: "Process Automation",
      problem: "Repetitive manual tasks eat up valuable time that could be spent growing your business, while human errors cost money and frustrate customers.",
      solution: "We implement intelligent automation solutions that handle routine tasks reliably and efficiently, freeing your team to focus on high-value activities that drive growth.",
      features: [
        "Robotic Process Automation (RPA) implementation",
        "Workflow optimization and redesign",
        "Document processing automation",
        "Email and communication automation",
        "ERP system enhancements and integrations",
        "Quality control and error reduction systems",
        "Approval workflow automation",
        "Reporting and monitoring dashboards"
      ],
      benefits: [
        "70% average reduction in processing time",
        "99%+ accuracy in automated tasks",
        "24/7 operation without breaks",
        "Scalable solutions that grow with your business"
      ],
      pricing: "Starting at $5,000",
      timeline: "4-8 weeks",
      color: "green"
    },
    {
      icon: BarChart3,
      title: "Data & Insights",
      problem: "Your business generates lots of valuable data, but turning it into actionable insights that drive better decisions feels overwhelming and time-consuming.",
      solution: "We build custom dashboards and implement analytics tools that make your data work for you, revealing patterns, opportunities, and insights that drive better business decisions.",
      features: [
        "Business intelligence dashboards",
        "Automated reporting systems",
        "Predictive analytics models",
        "Customer behavior analysis",
        "Performance tracking & KPIs",
        "Real-time monitoring and alerts",
        "Data visualization and storytelling",
        "Integration with existing systems"
      ],
      benefits: [
        "Real-time visibility into business performance",
        "Data-driven decision making capabilities",
        "Predictive insights for better planning",
        "Automated reporting saves hours weekly"
      ],
      pricing: "Starting at $4,000",
      timeline: "3-6 weeks",
      color: "purple"
    },
    {
      icon: Wrench,
      title: "Custom AI Solutions",
      problem: "Off-the-shelf software doesn't fit your unique business processes, industry requirements, or competitive advantages you want to maintain.",
      solution: "We develop tailored AI solutions designed specifically for your industry, workflow, and business model, giving you competitive advantages that generic software can't provide.",
      features: [
        "Custom AI model development",
        "Industry-specific solutions",
        "Integration with existing systems",
        "Mobile and web applications",
        "API development and integration",
        "Machine learning model training",
        "Natural language processing solutions",
        "Computer vision applications"
      ],
      benefits: [
        "Competitive advantage through unique capabilities",
        "Perfect fit for your specific processes",
        "Scalable architecture for future growth",
        "Full ownership and control of your solution"
      ],
      pricing: "Starting at $10,000",
      timeline: "6-12 weeks",
      color: "orange"
    }
  ];

  const colorClasses = {
    blue: "bg-blue-50 border-blue-200",
    green: "bg-green-50 border-green-200",
    purple: "bg-purple-50 border-purple-200",
    orange: "bg-orange-50 border-orange-200"
  };

  const iconClasses = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    purple: "bg-purple-100 text-purple-600",
    orange: "bg-orange-100 text-orange-600"
  };

  const buttonClasses = {
    blue: "bg-blue-600 hover:bg-blue-700",
    green: "bg-green-600 hover:bg-green-700",
    purple: "bg-purple-600 hover:bg-purple-700",
    orange: "bg-orange-600 hover:bg-orange-700"
  };

  const processSteps = [
    { 
      step: "01", 
      title: "Discovery", 
      description: "We analyze your current processes, identify pain points, and understand your goals through detailed interviews and process mapping.",
      duration: "1-2 weeks"
    },
    { 
      step: "02", 
      title: "Strategy", 
      description: "Create a tailored roadmap with clear milestones, ROI projections, and implementation phases that fit your budget and timeline.",
      duration: "1 week"
    },
    { 
      step: "03", 
      title: "Implementation", 
      description: "Deploy solutions in carefully planned phases with minimal disruption to your daily operations and comprehensive testing.",
      duration: "2-8 weeks"
    },
    { 
      step: "04", 
      title: "Optimization", 
      description: "Monitor performance, gather feedback, and continuously improve results while providing ongoing support and training.",
      duration: "Ongoing"
    }
  ];

  const industries = [
    { name: "Healthcare", icon: "🏥", description: "Patient scheduling, records management, billing automation" },
    { name: "Construction", icon: "🏗️", description: "Project management, invoice processing, resource optimization" },
    { name: "Manufacturing", icon: "🏭", description: "Inventory management, quality control, predictive maintenance" },
    { name: "Professional Services", icon: "💼", description: "Client management, proposal automation, time tracking" },
    { name: "Retail", icon: "🛍️", description: "Inventory optimization, customer insights, sales forecasting" },
    { name: "Real Estate", icon: "🏠", description: "Lead management, document processing, market analysis" }
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
              AI <span className="text-blue-600">Services</span> for Growing Businesses
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-500">
              Comprehensive AI solutions designed specifically for SMBs. Each service addresses real challenges 
              with practical solutions that deliver measurable results and ROI.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Services Detail Section */}
      <motion.div 
        className="py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div 
                  key={index} 
                  className={`lg:grid lg:grid-cols-12 lg:gap-8 items-start ${
                    isEven ? '' : 'lg:grid-flow-row-dense'
                  }`}
                  variants={itemVariants}
                >
                  <div className={`lg:col-span-7 ${isEven ? 'lg:col-start-1' : 'lg:col-start-6'}`}>
                    <div className="flex items-center mb-6">
                      <motion.span 
                        className={`inline-flex p-4 rounded-xl ${iconClasses[service.color]}`}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Icon size={32} />
                      </motion.span>
                      <div className="ml-4">
                        <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                        <div className="flex items-center mt-2 space-x-4 text-sm text-gray-500">
                          <span className="flex items-center">
                            <DollarSign size={16} className="mr-1" />
                            {service.pricing}
                          </span>
                          <span className="flex items-center">
                            <Clock size={16} className="mr-1" />
                            {service.timeline}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-3">The Challenge</h4>
                        <p className="text-gray-600 leading-relaxed">{service.problem}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-3">Our Solution</h4>
                        <p className="text-gray-600 leading-relaxed">{service.solution}</p>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-3">Key Benefits</h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start">
                              <CheckCircle size={16} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                              <span className="text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link
                          to="/contact"
                          className={`inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white ${buttonClasses[service.color]} transition-colors duration-200 shadow-lg`}
                        >
                          Request Proposal
                          <ArrowRight size={16} className="ml-2" />
                        </Link>
                      </motion.div>
                    </div>
                  </div>

                  <div className={`mt-12 lg:mt-0 lg:col-span-5 ${isEven ? 'lg:col-start-8' : 'lg:col-start-1'}`}>
                    <div className={`rounded-xl border-2 border-dashed p-8 ${colorClasses[service.color]}`}>
                      <h4 className="text-xl font-semibold text-gray-900 mb-6">What's Included</h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <motion.li 
                            key={featureIndex} 
                            className="flex items-start"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: featureIndex * 0.1 }}
                          >
                            <CheckCircle size={16} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Process Section */}
      <motion.div 
        className="py-16 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h3 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Proven Process</h3>
            <p className="mt-4 text-xl text-gray-500">
              Every project follows our structured approach to ensure success and minimize risk
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((phase, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {phase.step}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3 text-center">{phase.title}</h4>
                <p className="text-gray-600 text-center mb-4">{phase.description}</p>
                <div className="text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-600">
                    <Clock size={12} className="mr-1" />
                    {phase.duration}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Industries Section */}
      <motion.div 
        className="py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h3 className="text-3xl font-bold text-gray-900 sm:text-4xl">Industries We Serve</h3>
            <p className="mt-4 text-xl text-gray-500">
              Specialized solutions for the unique challenges of different industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md hover:border-blue-200 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{industry.name}</h4>
                  <p className="text-gray-600">{industry.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div 
        className="py-16 bg-gradient-to-r from-blue-600 to-blue-700"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Operations?
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              Schedule a free consultation to discuss which AI solutions are right for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200 shadow-lg"
                >
                  Schedule Free Consultation
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center px-8 py-3 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-colors duration-200"
                >
                  View Success Stories
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServicesPage;