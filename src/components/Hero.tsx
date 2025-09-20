import React from 'react';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-20 pb-16 sm:pt-24 sm:pb-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-blue-100 rounded-full opacity-50"></div>
        <div className="absolute top-40 -left-32 w-60 h-60 bg-blue-50 rounded-full opacity-50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1>
              <span className="block text-base font-semibold text-blue-600 tracking-wide uppercase">
                AI Solutions for SMBs
              </span>
              <span className="mt-1 block text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Streamline Your</span>
                <span className="block text-blue-600 xl:inline"> Business with AI</span>
              </span>
            </h1>
            
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              We help small and mid-sized businesses in Texas unlock the power of artificial intelligence 
              for efficiency, growth, and competitive advantage—without the enterprise complexity.
            </p>

            {/* Trust indicators */}
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-gray-600">
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
            </div>

            {/* CTAs */}
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="sm:flex sm:items-center sm:space-x-4">
                <a
                  href="#contact"
                  className="block w-full sm:w-auto bg-blue-600 text-white text-center px-8 py-3 border border-transparent text-base font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  Book Free Consultation
                  <ArrowRight size={16} className="ml-2 inline-block" />
                </a>
                <a
                  href="#case-studies"
                  className="mt-3 sm:mt-0 block w-full sm:w-auto bg-white text-blue-600 text-center px-8 py-3 border border-blue-200 text-base font-medium rounded-lg hover:bg-blue-50 transition-colors duration-200"
                >
                  <Play size={16} className="mr-2 inline-block" />
                  See Success Stories
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="bg-white p-8 rounded-lg shadow-xl">
                <div className="text-center">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-white text-2xl font-bold">AI</div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Ready to Transform?</h3>
                  <p className="text-gray-600 text-sm mb-6">Join 200+ Texas SMBs already using AI to grow faster</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Process Efficiency</span>
                      <span className="font-semibold text-green-600">+70%</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Cost Reduction</span>
                      <span className="font-semibold text-green-600">-40%</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Time Savings</span>
                      <span className="font-semibold text-green-600">15 hrs/week</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;