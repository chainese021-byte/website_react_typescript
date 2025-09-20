import React from 'react';
import { BookOpen, Download, Calendar, ArrowRight } from 'lucide-react';

const Resources = () => {
  const blogPosts = [
    {
      title: "5 Ways AI Can Save Time in Your Small Business",
      excerpt: "Discover practical AI applications that can immediately reduce manual work and boost productivity.",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Productivity",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2"
    },
    {
      title: "How SMBs Can Compete with Enterprise AI",
      excerpt: "Learn strategies for implementing enterprise-level AI capabilities without the enterprise budget.",
      date: "March 10, 2024",
      readTime: "7 min read",
      category: "Strategy",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2"
    },
    {
      title: "The ROI of Process Automation for Growing Companies",
      excerpt: "Real numbers and case studies showing how automation investments pay off for SMBs.",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "ROI",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2"
    }
  ];

  const guides = [
    {
      title: "The SMB Owner's Guide to AI Implementation",
      description: "A comprehensive 20-page guide covering everything from AI basics to implementation planning.",
      type: "PDF Guide",
      pages: "20 pages"
    },
    {
      title: "AI ROI Calculator for Small Businesses",
      description: "Interactive spreadsheet to estimate potential savings and ROI from AI implementations.",
      type: "Excel Template",
      pages: "Template"
    },
    {
      title: "Process Automation Readiness Checklist",
      description: "Step-by-step assessment to determine which processes are ready for automation.",
      type: "PDF Checklist",
      pages: "5 pages"
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Resources & Insights</h2>
          <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Stay Informed, Stay Ahead
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Educational content, guides, and insights to help you make informed decisions about AI for your business.
          </p>
        </div>

        {/* Blog Posts Section */}
        <div className="mt-16">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Latest Insights</h3>
            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
              View all posts
              <ArrowRight size={16} className="ml-1" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                    {post.title}
                  </h4>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <a href="#" className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                      Read more
                      <ArrowRight size={14} className="ml-1" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Downloadable Guides Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">Free Resources</h3>
            <p className="mt-4 text-lg text-gray-500">
              Download our comprehensive guides and tools to accelerate your AI journey
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8 hover:from-blue-50 hover:to-blue-100 transition-colors duration-300 border border-gray-200">
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
                <p className="text-gray-600 mb-6">{guide.description}</p>
                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium flex items-center justify-center">
                  <Download size={16} className="mr-2" />
                  Download Free
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-8 sm:p-12">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
              <BookOpen size={32} className="text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h3>
            <p className="text-lg text-gray-600 mb-8">
              Get the latest AI insights, case studies, and practical tips delivered to your inbox monthly.
            </p>
            <form className="sm:flex sm:max-w-md sm:mx-auto">
              <div className="min-w-0 flex-1">
                <input
                  type="email"
                  className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="block w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="mt-3 text-sm text-gray-500">
              No spam. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;