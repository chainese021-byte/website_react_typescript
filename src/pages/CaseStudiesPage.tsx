import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TrendingUp, Clock, DollarSign, Users, CheckCircle, ArrowRight, BarChart3, Zap, Target } from 'lucide-react';

const CaseStudiesPage = () => {
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

  const caseStudies = [
    {
      title: "Local Contractor Streamlines Invoice Processing",
      company: "Johnson Construction",
      industry: "Construction",
      size: "25 employees",
      location: "Austin, TX",
      challenge: "Manual invoice processing took 8 hours weekly, with frequent errors and payment delays affecting cash flow. The office manager spent entire mornings just processing invoices, leaving little time for other critical tasks.",
      solution: "Implemented automated document processing and approval workflows with AI-powered data extraction. The system now automatically reads invoices, extracts key information, routes for approval, and integrates with their accounting software.",
      implementation: [
        "Analyzed existing invoice workflow and pain points",
        "Deployed OCR and AI document processing system",
        "Created automated approval workflows",
        "Integrated with QuickBooks accounting system",
        "Trained staff on new processes",
        "Implemented error monitoring and reporting"
      ],
      results: [
        { icon: Clock, label: "Time Saved", value: "70%", detail: "From 8 hours to 2.5 hours weekly", color: "blue" },
        { icon: TrendingUp, label: "Accuracy", value: "99.5%", detail: "Virtually eliminated processing errors", color: "green" },
        { icon: DollarSign, label: "Cost Reduction", value: "$2,400", detail: "Monthly savings in processing costs", color: "purple" },
        { icon: Users, label: "Staff Satisfaction", value: "+85%", detail: "More time for strategic work", color: "orange" }
      ],
      testimonial: {
        quote: "This transformation has been incredible. Our office manager now has time to focus on growing the business instead of drowning in paperwork. The ROI was immediate.",
        author: "Sarah Johnson",
        role: "Owner, Johnson Construction"
      },
      image: "https://images.pexels.com/photos/1543895/pexels-photo-1543895.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=2",
      timeline: "6 weeks",
      investment: "$8,500"
    },
    {
      title: "Healthcare Practice Improves Patient Scheduling",
      company: "Texas Medical Group",
      industry: "Healthcare",
      size: "40 employees",
      location: "Houston, TX",
      challenge: "High no-show rates (25%) and inefficient scheduling led to lost revenue and poor patient experience. Manual scheduling conflicts and lack of predictive insights made optimization impossible.",
      solution: "Deployed predictive analytics for optimal scheduling and automated patient communication system. The AI analyzes patient history, appointment types, and external factors to predict no-shows and optimize scheduling.",
      implementation: [
        "Analyzed 2 years of appointment and patient data",
        "Built predictive no-show model",
        "Implemented automated reminder system",
        "Created dynamic scheduling optimization",
        "Integrated with existing practice management software",
        "Trained staff on new scheduling protocols"
      ],
      results: [
        { icon: Users, label: "No-shows Reduced", value: "45%", detail: "From 25% to 14% monthly rate", color: "green" },
        { icon: DollarSign, label: "Revenue Increase", value: "$18k", detail: "Monthly additional revenue", color: "blue" },
        { icon: TrendingUp, label: "Efficiency Gain", value: "30%", detail: "More patients served daily", color: "purple" },
        { icon: Clock, label: "Scheduling Time", value: "-60%", detail: "Automated optimization", color: "orange" }
      ],
      testimonial: {
        quote: "The predictive scheduling has transformed our practice. We're serving 30% more patients with the same resources, and our staff stress levels have dropped significantly.",
        author: "Dr. Michael Chen",
        role: "Practice Manager, Texas Medical Group"
      },
      image: "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=2",
      timeline: "8 weeks",
      investment: "$12,000"
    },
    {
      title: "Manufacturing Company Optimizes Inventory",
      company: "Rodriguez Manufacturing",
      industry: "Manufacturing",
      size: "60 employees",
      location: "Dallas, TX",
      challenge: "Excess inventory tied up $200k in capital while stockouts caused production delays and lost sales. Manual inventory management led to poor forecasting and reactive decision-making.",
      solution: "Built predictive inventory management system using historical data, market trends, and seasonal patterns. The system automatically generates purchase orders and alerts for optimal inventory levels.",
      implementation: [
        "Integrated with existing ERP system",
        "Analyzed 3 years of sales and inventory data",
        "Built demand forecasting models",
        "Created automated reorder point system",
        "Implemented real-time inventory tracking",
        "Trained procurement team on new processes"
      ],
      results: [
        { icon: DollarSign, label: "Inventory Costs", value: "-35%", detail: "Reduced carrying costs significantly", color: "green" },
        { icon: TrendingUp, label: "Fill Rate", value: "98%", detail: "Improved from 82% availability", color: "blue" },
        { icon: Clock, label: "Reorder Time", value: "60%", detail: "Faster inventory decisions", color: "purple" },
        { icon: BarChart3, label: "Cash Flow", value: "+$70k", detail: "Freed up working capital", color: "orange" }
      ],
      testimonial: {
        quote: "The inventory optimization system has been a game-changer. We've freed up significant capital while improving our service levels. It's like having a crystal ball for demand.",
        author: "Lisa Rodriguez",
        role: "Operations Director, Rodriguez Manufacturing"
      },
      image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=2",
      timeline: "10 weeks",
      investment: "$15,000"
    },
    {
      title: "Professional Services Firm Automates Proposals",
      company: "Lone Star Consulting",
      industry: "Professional Services",
      size: "15 employees",
      location: "San Antonio, TX",
      challenge: "Creating custom proposals took 6-8 hours per proposal, limiting the number of opportunities they could pursue. Inconsistent formatting and content led to lower win rates.",
      solution: "Developed AI-powered proposal generation system that creates customized proposals in minutes using client data, past successful proposals, and industry templates.",
      implementation: [
        "Analyzed successful proposal patterns",
        "Built proposal template library",
        "Created AI content generation system",
        "Integrated with CRM system",
        "Implemented approval workflows",
        "Trained sales team on new process"
      ],
      results: [
        { icon: Clock, label: "Time Saved", value: "85%", detail: "From 6 hours to 1 hour per proposal", color: "blue" },
        { icon: Target, label: "Win Rate", value: "+40%", detail: "Improved proposal quality", color: "green" },
        { icon: TrendingUp, label: "Proposals Sent", value: "+200%", detail: "Can pursue more opportunities", color: "purple" },
        { icon: DollarSign, label: "Revenue Growth", value: "+$150k", detail: "Annual revenue increase", color: "orange" }
      ],
      testimonial: {
        quote: "We can now respond to three times as many RFPs with higher quality proposals. Our win rate has improved dramatically, and our team can focus on client delivery instead of proposal writing.",
        author: "Mark Thompson",
        role: "Managing Partner, Lone Star Consulting"
      },
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=2",
      timeline: "5 weeks",
      investment: "$7,500"
    }
  ];

  const colorClasses = {
    blue: "text-blue-600",
    green: "text-green-600",
    purple: "text-purple-600",
    orange: "text-orange-600"
  };

  const stats = [
    { label: "Average ROI", value: "340%", icon: TrendingUp },
    { label: "Time Savings", value: "15hrs/week", icon: Clock },
    { label: "Success Rate", value: "98%", icon: CheckCircle },
    { label: "Client Satisfaction", value: "4.9/5", icon: Users }
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
              Success <span className="text-blue-600">Stories</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-500">
              Real results for Texas businesses. See how our AI solutions have transformed operations 
              and delivered measurable ROI for SMBs like yours.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-8"
            variants={itemVariants}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div 
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <Icon size={32} className="text-blue-600 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>

      {/* Case Studies */}
      <motion.div 
        className="py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="lg:grid lg:grid-cols-2">
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                          {study.industry}
                        </span>
                        <span className="text-gray-500 text-sm">{study.size}</span>
                        <span className="text-gray-500 text-sm">{study.location}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.title}</h3>
                    <p className="text-lg text-blue-600 font-medium mb-6">{study.company}</p>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                          The Challenge
                        </h4>
                        <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                          Our Solution
                        </h4>
                        <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                          Implementation Process
                        </h4>
                        <ul className="space-y-2">
                          {study.implementation.map((step, stepIndex) => (
                            <li key={stepIndex} className="flex items-start text-sm">
                              <CheckCircle size={14} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-gray-600">{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                          <span className="flex items-center">
                            <Clock size={14} className="mr-1" />
                            Timeline: {study.timeline}
                          </span>
                          <span className="flex items-center">
                            <DollarSign size={14} className="mr-1" />
                            Investment: {study.investment}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Results Grid */}
                    <div className="mt-8 grid grid-cols-2 gap-4">
                      {study.results.map((result, resultIndex) => {
                        const Icon = result.icon;
                        return (
                          <motion.div 
                            key={resultIndex} 
                            className="text-center p-4 bg-gray-50 rounded-lg"
                            whileHover={{ scale: 1.05 }}
                          >
                            <Icon size={24} className={`mx-auto mb-2 ${colorClasses[result.color]}`} />
                            <div className="text-2xl font-bold text-gray-900">{result.value}</div>
                            <div className="text-sm font-medium text-gray-600">{result.label}</div>
                            <div className="text-xs text-gray-500 mt-1">{result.detail}</div>
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* Testimonial */}
                    <div className="mt-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                      <blockquote className="text-gray-700 italic mb-4">
                        "{study.testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center">
                        <div>
                          <div className="font-semibold text-gray-900">{study.testimonial.author}</div>
                          <div className="text-sm text-gray-600">{study.testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="h-64 lg:h-auto">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Process Overview */}
      <motion.div 
        className="py-16 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h3 className="text-3xl font-bold text-gray-900 sm:text-4xl">Why Our Clients Succeed</h3>
            <p className="mt-4 text-xl text-gray-500">
              Our proven methodology ensures consistent results across all implementations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Strategic Approach",
                description: "We start with your business goals and work backward to identify the right AI solutions that deliver measurable ROI."
              },
              {
                icon: Zap,
                title: "Rapid Implementation",
                description: "Our phased approach delivers quick wins while building toward larger transformations, ensuring you see value fast."
              },
              {
                icon: Users,
                title: "Ongoing Partnership",
                description: "We don't just implement and leave. We provide ongoing support, optimization, and growth as your business evolves."
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-sm text-center"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <Icon size={48} className="text-blue-600 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              );
            })}
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
              Your Success Story Starts Here
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              Join these successful Texas businesses and discover how AI can transform your operations. 
              Schedule your free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200 shadow-lg"
                >
                  Schedule Your Consultation
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/services"
                  className="inline-flex items-center px-8 py-3 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-colors duration-200"
                >
                  Explore Our Services
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default CaseStudiesPage;