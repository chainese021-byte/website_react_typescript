import React from 'react';
import { TrendingUp, Clock, DollarSign, Users } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Local Contractor Streamlines Invoice Processing",
      industry: "Construction",
      challenge: "Manual invoice processing took 8 hours weekly, with frequent errors and payment delays affecting cash flow.",
      solution: "Implemented automated document processing and approval workflows with AI-powered data extraction.",
      results: [
        { icon: Clock, label: "Time Saved", value: "70%", detail: "From 8 hours to 2.5 hours weekly" },
        { icon: TrendingUp, label: "Accuracy", value: "99.5%", detail: "Virtually eliminated processing errors" },
        { icon: DollarSign, label: "Cost Reduction", value: "$2,400", detail: "Monthly savings in processing costs" }
      ],
      image: "https://images.pexels.com/photos/1543895/pexels-photo-1543895.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2"
    },
    {
      title: "Healthcare Practice Improves Patient Scheduling",
      industry: "Healthcare",
      challenge: "High no-show rates and inefficient scheduling led to lost revenue and poor patient experience.",
      solution: "Deployed predictive analytics for optimal scheduling and automated patient communication system.",
      results: [
        { icon: Users, label: "No-shows Reduced", value: "45%", detail: "From 25% to 14% monthly rate" },
        { icon: DollarSign, label: "Revenue Increase", value: "$18k", detail: "Monthly additional revenue" },
        { icon: TrendingUp, label: "Efficiency Gain", value: "30%", detail: "More patients served daily" }
      ],
      image: "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2"
    },
    {
      title: "Manufacturing Company Optimizes Inventory",
      industry: "Manufacturing",
      challenge: "Excess inventory tied up capital while stockouts caused production delays and lost sales.",
      solution: "Built predictive inventory management system using historical data and market trends analysis.",
      results: [
        { icon: DollarSign, label: "Inventory Costs", value: "-35%", detail: "Reduced carrying costs significantly" },
        { icon: TrendingUp, label: "Fill Rate", value: "98%", detail: "Improved from 82% availability" },
        { icon: Clock, label: "Reorder Time", value: "60%", detail: "Faster inventory decisions" }
      ],
      image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Success Stories</h2>
          <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Real Results for Texas Businesses
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            See how our AI solutions have transformed operations and delivered measurable ROI for SMBs like yours.
          </p>
        </div>

        <div className="mt-16 space-y-12">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="lg:grid lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <div className="flex items-center mb-4">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      {study.industry}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{study.title}</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">The Challenge</h4>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Our Solution</h4>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {study.results.map((result, resultIndex) => {
                      const Icon = result.icon;
                      return (
                        <div key={resultIndex} className="text-center p-4 bg-gray-50 rounded-lg">
                          <Icon size={24} className="text-blue-600 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-gray-900">{result.value}</div>
                          <div className="text-sm font-medium text-gray-600">{result.label}</div>
                          <div className="text-xs text-gray-500 mt-1">{result.detail}</div>
                        </div>
                      );
                    })}
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
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Your Success Story Starts Here
          </h3>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Join these successful Texas businesses and discover how AI can transform your operations. 
            Schedule your free consultation today.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200 shadow-lg"
          >
            Schedule Your Consultation
          </a>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;