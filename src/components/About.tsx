import React from 'react';
import { Users, Target, Award, MapPin } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Users,
      title: "SMB Focused",
      description: "We specialize in solutions designed specifically for small and mid-sized businesses."
    },
    {
      icon: Target,
      title: "Results Driven",
      description: "Every solution we implement is measured by real business outcomes and ROI."
    },
    {
      icon: Award,
      title: "Expert Team",
      description: "Our certified professionals bring enterprise AI experience to growing businesses."
    },
    {
      icon: MapPin,
      title: "Texas Roots",
      description: "Based in Houston, we understand the unique needs of Texas businesses."
    }
  ];

  const team = [
    {
      name: "Michael Rodriguez",
      role: "Founder & CEO",
      bio: "Former enterprise AI consultant with 15+ years helping Fortune 500 companies. Now focused on bringing that expertise to SMBs.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2"
    },
    {
      name: "Sarah Chen",
      role: "AI Strategy Director",
      bio: "Data scientist and process optimization expert. Specializes in turning complex AI concepts into practical business solutions.",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2"
    },
    {
      name: "David Thompson",
      role: "Automation Engineer",
      bio: "10+ years in business process automation. Expert in RPA implementation and workflow optimization for growing companies.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Section */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">About Us</h2>
            <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
              Bringing Enterprise AI to Growing Businesses
            </p>
            <p className="mt-4 text-lg text-gray-500">
              Core Implementations was founded with a simple mission: make artificial intelligence accessible 
              and practical for small and mid-sized businesses across Texas.
            </p>
            
            <div className="mt-6 prose prose-lg text-gray-500">
              <p>
                After years of implementing complex AI solutions for Fortune 500 companies, our founder 
                recognized that SMBs were being left behind in the AI revolution. The technology existed, 
                but it was wrapped in enterprise complexity and pricing that made it inaccessible.
              </p>
              <p>
                We changed that. Today, we specialize in bringing enterprise-grade AI capabilities to 
                businesses ready to grow, streamline operations, and compete more effectively—all 
                without the enterprise overhead.
              </p>
            </div>
          </div>

          <div className="mt-12 lg:mt-0">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <blockquote className="text-lg text-gray-700 italic">
                "To democratize AI for small and mid-sized businesses, providing them with the same 
                competitive advantages that were once exclusive to enterprise companies."
              </blockquote>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Our Vision</h4>
                <p className="text-gray-600">
                  A future where every growing business in Texas has access to AI tools that help them 
                  operate more efficiently, make better decisions, and serve their customers better.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">What Drives Us</h3>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
              Our core values shape how we work with every client and approach every project.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center">
                    <span className="inline-flex p-3 bg-blue-100 rounded-lg">
                      <Icon size={24} className="text-blue-600" />
                    </span>
                  </div>
                  <h4 className="mt-4 text-lg font-semibold text-gray-900">{value.title}</h4>
                  <p className="mt-2 text-base text-gray-500">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">Meet Our Team</h3>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
              Experienced professionals dedicated to your success.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-w-3 aspect-h-3">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900">{member.name}</h4>
                  <p className="text-blue-600 font-medium">{member.role}</p>
                  <p className="mt-3 text-gray-500">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;