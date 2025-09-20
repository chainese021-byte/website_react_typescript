import React from 'react';
import { Brain, Cog, BarChart3, Wrench, CheckCircle, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Strategy & Roadmaps",
      problem: "Many SMBs know AI could help but don't know where to start or what's realistic for their budget.",
      solution: "We conduct discovery sessions to understand your business, then create a practical AI roadmap that aligns with your goals and resources.",
      features: [
        "Business process analysis",
        "AI opportunity identification",
        "Phased implementation planning",
        "ROI projections and budgeting",
        "Technology stack recommendations"
      ],
      color: "blue"
    },
    {
      icon: Cog,
      title: "Process Automation",
      problem: "Repetitive manual tasks eat up valuable time that could be spent growing your business.",
      solution: "We implement intelligent automation solutions that handle routine tasks, freeing your team to focus on high-value activities.",
      features: [
        "Robotic Process Automation (RPA)",
        "Workflow optimization",
        "Document processing automation",
        "Email and communication automation",
        "ERP system enhancements"
      ],
      color: "green"
    },
    {
      icon: BarChart3,
      title: "Data & Insights",
      problem: "Your business generates lots of data, but turning it into actionable insights feels overwhelming.",
      solution: "We build custom dashboards and implement analytics tools that make your data work for you, revealing patterns and opportunities.",
      features: [
        "Business intelligence dashboards",
        "Automated reporting systems",
        "Predictive analytics models",
        "Customer behavior analysis",
        "Performance tracking & KPIs"
      ],
      color: "purple"
    },
    {
      icon: Wrench,
      title: "Custom AI Solutions",
      problem: "Off-the-shelf software doesn't fit your unique business processes and requirements.",
      solution: "We develop tailored AI solutions designed specifically for your industry, workflow, and business model.",
      features: [
        "Custom AI model development",
        "Industry-specific solutions",
        "Integration with existing systems",
        "Mobile and web applications",
        "Ongoing support and optimization"
      ],
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

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Our Services</h2>
          <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Comprehensive AI Solutions for Growing Businesses
          </p>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
            Each service is designed to address specific challenges SMBs face, with practical solutions 
            that deliver measurable results.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} className={`lg:grid lg:grid-cols-2 lg:gap-8 items-center ${
                isEven ? '' : 'lg:grid-flow-row-dense'
              }`}>
                <div className={isEven ? 'lg:col-start-1' : 'lg:col-start-2'}>
                  <div className="flex items-center mb-4">
                    <span className={`inline-flex p-3 rounded-lg ${iconClasses[service.color]}`}>
                      <Icon size={24} />
                    </span>
                    <h3 className="ml-4 text-2xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">The Challenge</h4>
                      <p className="text-gray-600">{service.problem}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Our Solution</h4>
                      <p className="text-gray-600">{service.solution}</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <a
                      href="#contact"
                      className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white ${buttonClasses[service.color]} transition-colors duration-200`}
                    >
                      Request Proposal
                      <ArrowRight size={16} className="ml-2" />
                    </a>
                  </div>
                </div>

                <div className={`mt-8 lg:mt-0 ${isEven ? 'lg:col-start-2' : 'lg:col-start-1'}`}>
                  <div className={`rounded-lg border-2 border-dashed p-8 ${colorClasses[service.color]}`}>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">What's Included</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle size={16} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-8 sm:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">Our Proven Process</h3>
            <p className="mt-4 text-lg text-gray-500">
              Every project follows our structured approach to ensure success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "We analyze your current processes and identify AI opportunities" },
              { step: "02", title: "Strategy", description: "Create a tailored roadmap with clear milestones and ROI projections" },
              { step: "03", title: "Implementation", description: "Deploy solutions in phases with minimal disruption to operations" },
              { step: "04", title: "Optimization", description: "Monitor performance and continuously improve results" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center mx-auto mb-4 font-bold">
                  {phase.step}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{phase.title}</h4>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;