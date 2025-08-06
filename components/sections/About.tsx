"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Meteors } from "@/components/ui/meteor";
import { Sparkles } from "@/components/ui/sparkles";
import { ArrowRight, Users, Award, Clock, Target } from "lucide-react";
import { useEffect, useState } from "react";

const stats = [
  {
    icon: <Users className="w-8 h-8" />,
    number: "100+",
    label: "Happy Clients",
    description: "Satisfied customers worldwide"
  },
  {
    icon: <Award className="w-8 h-8" />,
    number: "50+",
    label: "Projects Completed",
    description: "Successful deliveries"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    number: "3+",
    label: "Years Experience",
    description: "Industry expertise"
  },
  {
    icon: <Target className="w-8 h-8" />,
    number: "98%",
    label: "Success Rate",
    description: "Project completion rate"
  }
];

const teamMembers = [
  {
    name: "Sudhanshu Nautiyal",
    role: "Lead Frontend Developer And Architect",
    image: "/assets/images/sudhanshu.jpeg",
    description: "Frontend specialist with 5+ years crafting exceptional user experiences using React, Next.js, and modern web technologies. Expert in responsive design, performance optimization, and creating intuitive interfaces that drive user engagement."
  },
  {
    name: "Rohit Parihar",
    role: "Lead Backend Developer And Architect",
    image: "/assets/images/rohitparihar.jpeg",
    description: "Backend systems architect with 6+ years designing and implementing high-performance, scalable solutions. Expert in microservices architecture, database optimization, and cloud-native development using Node.js, Python, and AWS infrastructure."
  }
];

export default function About() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-12 sm:py-20 bg-black relative overflow-hidden">
      
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          {isMounted && (
            <Sparkles
              id="tsparticlesfull"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={100}
              className="w-full h-full"
              particleColor="#dcff00"
            />
          )}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">About</span>{" "}
              <span className="text-gradient">Our Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are a passionate team of developers, designers, and innovators dedicated to creating exceptional digital experiences.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mb-12 sm:mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-green-soft/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-soft/20 transition-colors">
                <div className="text-green-soft">{stat.icon}</div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-green-soft mb-2">
                {stat.number}
              </div>
              <div className="text-white font-semibold mb-1">{stat.label}</div>
              <div className="text-gray-400 text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-white mb-12"
          >
            Meet Our Core Team
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="w-full"
              >
                <CardContainer className="inter-var">
                  <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-green-soft/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-[500px] rounded-xl p-6 border flex flex-col">
                    {/* Meteor effect background */}
                    <div className="absolute inset-0 overflow-hidden rounded-xl">
                      <Meteors number={8} className="opacity-30" />
                    </div>
                    
                    <CardItem translateZ="50" className="relative z-10 flex flex-col h-full">
                      <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-4 border-green-soft/20 flex-shrink-0">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                      <h4 className="text-2xl font-bold text-white text-center mb-3">
                        {member.name}
                      </h4>
                      <p className="text-green-soft text-center mb-4 font-semibold text-lg">
                        {member.role}
                      </p>
                      <p className="text-gray-300 text-center text-base leading-relaxed flex-grow">
                        {member.description}
                      </p>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-green-soft/10 to-transparent rounded-2xl p-8 border border-green-soft/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Our Mission
            </h3>
            <p className="text-gray-300 text-lg max-w-4xl mx-auto mb-8">
              To empower businesses with cutting-edge technology solutions that drive growth, 
              enhance user experiences, and create lasting digital impact. We believe in 
              innovation, quality, and building meaningful partnerships with our clients.
            </p>
            <Button
              onClick={scrollToContact}
              className="bg-green-soft hover:bg-green-lighter text-black font-semibold px-8 py-3"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 