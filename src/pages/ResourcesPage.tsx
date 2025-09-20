import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Download, Calendar, ArrowRight, Search, Filter, Clock, User, Tag } from 'lucide-react';

const ResourcesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const blogPosts = [
    {
      title: "5 Ways AI Can Save Time in Your Small Business",
      excerpt: "Discover practical AI applications that can immediately reduce manual work and boost productivity in your daily operations.",
      content: "From automated customer service to intelligent document processing, learn how SMBs are using AI to reclaim hours every week.",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Productivity",
      author: "Sarah Chen",
      tags: ["Automation", "Productivity", "SMB"],
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2"
    },
    {
      title: "How SMBs Can Compete with Enterprise AI",
      excerpt: "Learn strategies for implementing enterprise-level AI capabilities without the enterprise budget or complexity.",
      content: "Discover how to leverage cloud AI services, open-source tools, and strategic partnerships to level the playing field.",
      date: "March 10, 2024",
      readTime: "7 min read",
      category: "Strategy",
      author: "Michael Rodriguez",
      tags: ["Strategy", "Competition", "Enterprise"],
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2"
    },
    {
      title: "The ROI of Process Automation for Growing Companies",
      excerpt: "Real numbers and case studies showing how automation investments pay off for SMBs across different industries.",
      content: "Detailed analysis of automation ROI with specific examples from construction, healthcare, and manufacturing clients.",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "ROI",
      author: "David Thompson",
      tags: ["ROI", "Automation", "Case Studies"],
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2"
    },
    {
      title: "AI Implementation Mistakes to Avoid",
      excerpt: "Common pitfalls that SMBs encounter when implementing AI solutions and how to avoid them from the start.",
      content: "Learn from the mistakes of others and ensure your AI implementation is successful from day one.",
      date: "February 28, 2024",
      readTime: "8 min read",
      category: "Implementation",
      author: "Jennifer Martinez",
      tags: ["Implementation", "Best Practices", "Mistakes"],
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2"
    },
    {
      title: "Data Security in AI: What SMBs Need to Know",
      excerpt: "Essential security considerations when implementing AI solutions, including data protection and compliance requirements.",
      content: "Comprehensive guide to maintaining data security while leveraging AI capabilities for business growth.",
      date: "February 20, 2024",
      readTime: "9 min read",
      category: "Security",
      author: "Sarah Chen",
      tags: ["Security", "Data Protection", "Compliance"],
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2"
    },
    {
      title: "Building an AI-Ready Team",
      excerpt: "How to prepare your team for AI implementation, including training, change management, and cultural considerations.",
      content: "Step-by-step guide to getting your team excited about and prepared for AI transformation.",
      date: "February 15, 2024",
      readTime: "6 min read",
      category: "Team",
      author: "Michael Rodriguez",
      tags: ["Team Building", "Training", "Change Management"],
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2"
    }
  ];

  const guides = [
    {
      title: "The SMB Owner's Guide to AI Implementation",
      description: "A comprehensive 25-page guide covering everything from AI basics to implementation planning, with real-world examples and checklists.",
      type: "PDF Guide",
      pages: "25 pages",
      downloads: "1,247",
      category: "Implementation"
    },
    {
      title: "AI ROI Calculator for Small Businesses",
      description: "Interactive Excel template to estimate potential savings and ROI from AI implementations, with industry benchmarks and scenarios.",
      type: "Excel Template",
      pages: "Template + Guide",
      downloads: "892",
      category: "ROI"
    },
    {
      title: "Process Automation Readiness Checklist",
      description: "Step-by-step assessment to determine which processes are ready for automation, with scoring system and recommendations.",
      type: "PDF Checklist",
      pages: "8 pages",
      downloads: "1,156",
      category: "Assessment"
    },
    {
      title: "AI Vendor Selection Framework",
      description: "Complete framework for evaluating AI vendors and solutions, including RFP templates and evaluation criteria.",
      type: "PDF + Templates",
      pages: "15 pages",
      downloads: "634",
      category: "Vendor Selection"
    },
    {
      title: "Data Preparation for AI Projects",
      description: "Technical guide for preparing your data for AI implementation, including cleaning, formatting, and quality assessment.",
      type: "PDF Guide",
      pages: "18 pages",
      downloads: "723",
      category: "Data"
    },
    {
      title: "AI Implementation Timeline Template",
      description: "Project management template with phases, milestones, and deliverables for typical AI implementation projects.",
      type: "Project Template",
      pages: "Template + Guide",
      downloads: "567",
      category: "Project Management"
    }
  ];

  const webinars = [
    {
      title: "AI Fundamentals for SMB Leaders",
      description: "Introduction to AI concepts, applications, and opportunities specifically for small and mid-sized businesses.",
      date: "April 15, 2024",
      time: "2:00 PM CST",
      duration: "45 minutes",
      presenter: "Michael Rodriguez",
      status: "upcoming"
    },
    {
      title: "Process Automation Success Stories",
      description: "Real case studies and lessons learned from successful automation implementations across different industries.",
      date: "March 20, 2024",
      time: "2:00 PM CST",
      duration: "60 minutes",
      presenter: "Sarah Chen",
      status: "recorded"
    },
    {
      title: "Building Your AI Strategy",
      description: "Workshop on developing a practical AI roadmap that aligns with your business goals and budget constraints.",
      date: "February 18, 2024",
      time: "2:00 PM CST",
      duration: "90 minutes",
      presenter: "David Thompson",
      status: "recorded"
    }
  ];

  const categories = ['All', 'Productivity', 'Strategy', 'ROI', 'Implementation', 'Security', 'Team'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

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
              Resources & <span className="text-blue-600">Insights</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-500">
              Educational content, guides, and insights to help you make informed decisions about AI for your business. 
              Stay ahead with practical knowledge and proven strategies.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Search and Filter */}
      <motion.div 
        className="py-8 bg-white border-b border-gray-200"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles, guides, and resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Filter size={16} className="text-gray-500" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Blog Posts Section */}
      <motion.div 
        className="py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="mb-12" variants={itemVariants}>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Insights</h2>
            <p className="text-lg text-gray-600">
              Practical advice and insights from our AI implementation experts
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article 
                key={index} 
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {post.readTime}
                      </span>
                      <span className="flex items-center">
                        <User size={14} className="mr-1" />
                        {post.author}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 hover:text-blue-600 cursor-pointer line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-600"
                      >
                        <Tag size={10} className="mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center text-sm">
                      Read more
                      <ArrowRight size={14} className="ml-1" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div 
              className="text-center py-12"
              variants={itemVariants}
            >
              <p className="text-gray-500 text-lg">No articles found matching your search criteria.</p>
              <button 
                onClick={() => {setSearchTerm(''); setSelectedCategory('All');}}
                className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Downloadable Guides Section */}
      <motion.div 
        className="py-16 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h3 className="text-3xl font-bold text-gray-900 sm:text-4xl">Free Resources</h3>
            <p className="mt-4 text-xl text-gray-500">
              Download our comprehensive guides and tools to accelerate your AI journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Download size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm text-blue-600 font-medium">{guide.type}</div>
                    <div className="text-sm text-gray-500">{guide.pages}</div>
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{guide.title}</h4>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{guide.description}</p>
                
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs text-gray-500">{guide.downloads} downloads</span>
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                    {guide.category}
                  </span>
                </div>
                
                <motion.button 
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download size={16} className="mr-2" />
                  Download Free
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Webinars Section */}
      <motion.div 
        className="py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h3 className="text-3xl font-bold text-gray-900 sm:text-4xl">Webinars & Events</h3>
            <p className="mt-4 text-xl text-gray-500">
              Join our experts for live discussions and Q&A sessions on AI implementation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {webinars.map((webinar, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className={`p-4 ${webinar.status === 'upcoming' ? 'bg-green-50' : 'bg-blue-50'}`}>
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      webinar.status === 'upcoming' 
                        ? 'bg-green-100 text-green-600' 
                        : 'bg-blue-100 text-blue-600'
                    }`}>
                      {webinar.status === 'upcoming' ? 'Upcoming' : 'Recorded'}
                    </span>
                    <span className="text-sm text-gray-600">{webinar.duration}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{webinar.title}</h4>
                  <p className="text-gray-600 mb-4 text-sm">{webinar.description}</p>
                  
                  <div className="space-y-2 text-sm text-gray-500 mb-6">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-2" />
                      <span>{webinar.date} at {webinar.time}</span>
                    </div>
                    <div className="flex items-center">
                      <User size={14} className="mr-2" />
                      <span>Presented by {webinar.presenter}</span>
                    </div>
                  </div>
                  
                  <motion.button 
                    className={`w-full px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                      webinar.status === 'upcoming'
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {webinar.status === 'upcoming' ? 'Register Now' : 'Watch Recording'}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Newsletter Section */}
      <motion.div 
        className="py-16 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg"
            variants={itemVariants}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <BookOpen size={32} className="text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h3>
              <p className="text-lg text-gray-600 mb-8">
                Get the latest AI insights, case studies, and practical tips delivered to your inbox monthly. 
                Join 2,500+ SMB leaders who trust our expertise.
              </p>
              
              <form className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                    placeholder="Enter your email"
                    required
                  />
                  <motion.button
                    type="submit"
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Subscribe
                  </motion.button>
                </div>
              </form>
              
              <p className="mt-4 text-sm text-gray-500">
                No spam. Unsubscribe at any time. We respect your privacy.
              </p>
              
              <div className="mt-6 flex items-center justify-center space-x-6 text-sm text-gray-500">
                <span className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  Weekly insights
                </span>
                <span className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  Case studies
                </span>
                <span className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  Free resources
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ResourcesPage;