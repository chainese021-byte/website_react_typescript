import React from 'react';
import { Brain, Cog, BarChart3, Wrench, ArrowRight } from 'lucide-react';

const ServicesSnapshot = () => {
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

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Our Services</h2>
          <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Everything You Need to Succeed with AI
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            We help SMBs in Texas unlock AI for efficiency and growth with practical, affordable solutions.
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 cursor-pointer"
                >
                  <div>
                    <span className={`inline-flex p-3 rounded-lg ${colorClasses[service.color]} transition-all duration-300`}>
                      <Icon size={24} />
                    </span>
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
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 sm:p-12">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Ready to Transform Your Business?
              </h3>
              <p className="mt-4 text-lg text-blue-100">
                Schedule a free consultation to discover how AI can streamline your operations and drive growth.
              </p>
              <div className="mt-8">
                <a
                  href="#contact"
                  className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-blue-600 bg-white hover:bg-gray-50 transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  Book Your Free Consultation
                  <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSnapshot;