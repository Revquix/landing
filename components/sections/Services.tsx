"use client";
import { motion } from "framer-motion";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Meteors } from "@/components/ui/meteor";
import { Code, Smartphone, Bot, GraduationCap, Globe, Database, Shield, Zap } from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: <Code className="w-8 h-8 text-green-soft" />,
    title: "Web Development",
    description: "Complete end-to-end development with latest technologies and scalable solutions",
    features: ["React/Next.js", "Node.js", "Cloud Deployment", "Responsive Design"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop&crop=center"
  },
  {
    icon: <Smartphone className="w-8 h-8 text-green-soft" />,
    title: "App Development", 
    description: "Native and cross-platform mobile applications for iOS and Android",
    features: ["React Native", "Flutter", "Native iOS/Android"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&crop=center"
  },
  {
    icon: <Bot className="w-8 h-8 text-green-soft" />,
    title: "AI Integration",
    description: "Cutting-edge artificial intelligence solutions to automate and enhance your business",
    features: ["Machine Learning", "Chatbots", "Automation", "Data Analytics"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&crop=center"
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-green-soft" />,
    title: "Tech Stack Tutoring",
    description: "Personalized mentoring and training in modern development technologies",
    features: ["1-on-1 Mentoring", "Code Reviews", "Career Guidance", "Skill Assessment"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-12 sm:py-20 bg-black relative w-full">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.span 
              className="text-white"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Our
            </motion.span>{" "}
            <motion.span 
              className="text-gradient"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Services
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            We offer comprehensive digital solutions to transform your ideas into reality
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1500px] mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-green-soft/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-[500px] rounded-xl p-4 sm:p-6 border flex flex-col">
                {/* Meteor effect background */}
                <div className="absolute inset-0 overflow-hidden rounded-xl">
                  <Meteors number={10} className="opacity-30" />
                </div>
                
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white relative z-10 flex-shrink-0"
                >
                  <div className="flex items-center gap-3 mb-4">
                    {service.icon}
                    <span>{service.title}</span>
                  </div>
                </CardItem>

                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm mt-2 dark:text-neutral-300 relative z-10 flex-shrink-0"
                >
                  {service.description}
                </CardItem>

                <CardItem translateZ="100" className="w-full mt-4 relative z-10 flex-shrink-0">
                  <Image
                    src={service.image}
                    height={200}
                    width={400}
                    className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt={service.title}
                  />
                </CardItem>

                <CardItem translateZ="60" className="mt-4 relative z-10 flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-green-soft/10 text-green-soft text-xs rounded-full border border-green-soft/20"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </CardItem>

                <div className="flex justify-between items-center mt-6 relative z-10 flex-shrink-0">
                  <CardItem translateZ={20}>
                    <button
                      onClick={() => {
                        const element = document.querySelector("#portfolio");
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white hover:text-green-soft transition-colors"
                    >
                      Learn More →
                    </button>
                  </CardItem>
                  <CardItem translateZ={20}>
                    <button
                      onClick={() => {
                        const element = document.querySelector("#contact");
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="px-4 py-2 rounded-xl bg-green-soft text-black text-xs font-bold hover:bg-green-lighter transition-colors"
                    >
                      Get Started
                    </button>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            { icon: <Globe className="w-12 h-12 text-green-soft mx-auto" />, title: "Global Reach", desc: "Serving clients worldwide" },
            { icon: <Shield className="w-12 h-12 text-green-soft mx-auto" />, title: "Secure & Reliable", desc: "Enterprise-grade security" },
            { icon: <Database className="w-12 h-12 text-green-soft mx-auto" />, title: "Scalable Solutions", desc: "Built to grow with you" },
            { icon: <Zap className="w-12 h-12 text-green-soft mx-auto" />, title: "Fast Delivery", desc: "Quick turnaround times" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}