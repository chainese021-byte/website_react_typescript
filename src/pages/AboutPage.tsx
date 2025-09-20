import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, MapPin, Heart, Lightbulb, Shield, Zap } from 'lucide-react';

const AboutPage = () => {
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

  const values = [
    {
      icon: Users,
      title: "SMB Focused",
      description: "We specialize in solutions designed specifically for small and mid-sized businesses, understanding your unique challenges and constraints."
    },
    {
      icon: Target,
      title: "Results Driven",
      description: "Every solution we implement is measured by real business outcomes and ROI. We're not satisfied unless you see tangible improvements."
    },
    {
      icon: Award,
      title: "Expert Team",
      description: "Our certified professionals bring enterprise AI experience to growing businesses, ensuring you get world-class expertise."
    },
    {
      icon: MapPin,
      title: "Texas Roots",
      description: "Based in Houston, we understand the unique needs of Texas businesses and the local market dynamics."
    },
    {
      icon: Heart,
      title: "Partnership Approach",
      description: "We don't just implement and leave. We build long-term partnerships, growing alongside your business."
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description: "We stay at the forefront of AI technology, bringing you the latest innovations adapted for SMB use."
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Your data security and business confidentiality are paramount. We implement enterprise-grade security practices."
    },
    {
      icon: Zap,
      title: "Rapid Implementation",
      description: "We understand SMBs need quick wins. Our phased approach delivers value fast while building toward larger goals."
    }
  ];

  const team = [
    {
      name: "Michael Rodriguez",
      role: "Founder & CEO",
      bio: "Former enterprise AI consultant with 15+ years helping Fortune 500 companies implement AI solutions. Michael founded Core Implementations after recognizing that SMBs were being left behind in the AI revolution. He holds an MS in Computer Science from Rice University and is a certified AI strategist.",
      expertise: ["AI Strategy", "Business Transformation", "Enterprise Architecture"],
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2"
    },
    {
      name: "Sarah Chen",
      role: "AI Strategy Director",
      bio: "Data scientist and process optimization expert with a PhD in Machine Learning from UT Austin. Sarah specializes in turning complex AI concepts into practical business solutions that SMBs can understand and implement. She's helped over 100 businesses optimize their operations through intelligent automation.",
      expertise: ["Machine Learning", "Data Analytics", "Process Optimization"],
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2"
    },
    {
      name: "David Thompson",
      role: "Automation Engineer",
      bio: "10+ years in business process automation with expertise in RPA implementation and workflow optimization. David has a unique talent for identifying automation opportunities that others miss and implementing solutions that integrate seamlessly with existing systems.",
      expertise: ["RPA Development", "Workflow Design", "System Integration"],
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2"
    },
    {
      name: "Jennifer Martinez",
      role: "Client Success Manager",
      bio: "Former SMB operations manager turned client advocate. Jennifer ensures every implementation delivers promised results and helps clients maximize their AI investments. Her background in small business operations gives her unique insight into SMB challenges.",
      expertise: ["Client Relations", "Training & Support", "Business Operations"],
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2"
    }
  ];

  const milestones = [
    {
      year: "2022",
      title: "Company Founded",
      description: "Core Implementations established with mission to democratize AI for SMBs"
    },
    {
      year: "2023",
      title: "First 50 Clients",
      description: "Reached milestone of 50 successful AI implementations across Texas"
    },
    {
      year: "2023",
      title: "Partnership Program",
      description: "Launched strategic partnerships with Microsoft, AWS, and Google Cloud"
    },
    {
      year: "2024",
      title: "200+ Businesses",
      description: "Expanded to serve over 200 SMBs with average 340% ROI"
    }
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
              About <span className="text-blue-600">Core Implementations</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-500">
              We're on a mission to bring enterprise-grade AI capabilities to small and mid-sized businesses, 
              making advanced technology accessible, practical, and profitable for growing companies.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Story Section */}
      <motion.div 
        className="py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
                Our Story
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  Core Implementations was born from a simple observation: while Fortune 500 companies 
                  were transforming their operations with AI, small and mid-sized businesses were being 
                  left behind.
                </p>
                <p>
                  Our founder, Michael Rodriguez, spent over 15 years implementing complex AI solutions 
                  for enterprise clients. Time and again, he saw the incredible impact these technologies 
                  could have—reducing costs, improving efficiency, and driving growth.
                </p>
                <p>
                  But when local SMB owners asked for help, the existing solutions were either too 
                  complex, too expensive, or required technical expertise they didn't have. That's 
                  when Michael realized there was a better way.
                </p>
                <p>
                  In 2022, we founded Core Implementations with a clear mission: take the most effective 
                  AI strategies from the enterprise world and make them accessible to growing businesses. 
                  No enterprise complexity, no massive budgets required—just practical AI solutions 
                  that deliver real results.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="mt-12 lg:mt-0"
              variants={itemVariants}
            >
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
                <blockquote className="text-lg text-gray-700 italic mb-6">
                  "To democratize AI for small and mid-sized businesses, providing them with the same 
                  competitive advantages that were once exclusive to enterprise companies."
                </blockquote>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Our Vision</h4>
                    <p className="text-gray-600">
                      A future where every growing business in Texas has access to AI tools that help them 
                      operate more efficiently, make better decisions, and serve their customers better.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Our Promise</h4>
                    <p className="text-gray-600">
                      We promise to deliver AI solutions that are practical, affordable, and designed 
                      specifically for the unique needs and constraints of SMBs.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Values Section */}
      <motion.div 
        className="py-16 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h3 className="text-3xl font-bold text-gray-900 sm:text-4xl">What Drives Us</h3>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Our core values shape how we work with every client and approach every project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex justify-center mb-4">
                    <span className="inline-flex p-3 bg-blue-100 rounded-lg">
                      <Icon size={24} className="text-blue-600" />
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 text-center mb-3">{value.title}</h4>
                  <p className="text-base text-gray-500 text-center">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Timeline Section */}
      <motion.div 
        className="py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h3 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Journey</h3>
            <p className="mt-4 text-xl text-gray-500">
              Key milestones in our mission to democratize AI for SMBs
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div 
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-8`}
                variants={itemVariants}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                    <div className="text-blue-600 font-bold text-lg mb-2">{milestone.year}</div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h4>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Team Section */}
      <motion.div 
        className="py-16 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h3 className="text-3xl font-bold text-gray-900 sm:text-4xl">Meet Our Team</h3>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Experienced professionals dedicated to your success, with deep expertise in both 
              enterprise AI and SMB operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {team.map((member, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h4>
                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{member.bio}</p>
                    <div>
                      <h5 className="text-sm font-semibold text-gray-900 mb-2">Expertise:</h5>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div 
        className="py-16 bg-blue-600"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how we can help transform your business with practical AI solutions.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Your Consultation
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;