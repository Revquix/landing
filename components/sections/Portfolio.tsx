"use client";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Meteors } from "@/components/ui/meteor";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
    technologies: ["React", "Node.js", "Stripe", "MongoDB"],
    link: "https://github.com/your-username/ecommerce-platform",
    demo: "https://ecommerce-demo.com"
  },
  {
    title: "AI Chatbot Integration",
    description: "Implemented intelligent customer service bot using OpenAI API",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&crop=center",
    technologies: ["OpenAI", "Python", "FastAPI", "WebSocket"],
    link: "https://github.com/your-username/ai-chatbot",
    demo: "https://chatbot-demo.com"
  },
  {
    title: "Mobile Banking App",
    description: "Secure mobile banking application with biometric authentication",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&crop=center",
    technologies: ["React Native", "Biometrics", "Node.js", "PostgreSQL"],
    link: "https://github.com/your-username/banking-app",
    demo: "https://banking-demo.com"
  },
  {
    title: "SaaS Dashboard",
    description: "Analytics dashboard with real-time data visualization and reporting",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center",
    technologies: ["Next.js", "D3.js", "TypeScript", "Supabase"],
    link: "https://github.com/your-username/saas-dashboard",
    demo: "https://dashboard-demo.com"
  },
  {
    title: "Social Media Platform",
    description: "Modern social networking platform with real-time messaging",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center",
    technologies: ["Vue.js", "Socket.io", "Express", "Redis"],
    link: "https://github.com/your-username/social-platform",
    demo: "https://social-demo.com"
  },
  {
    title: "Task Management System",
    description: "Collaborative project management with team features",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&crop=center",
    technologies: ["Angular", "Firebase", "Material UI", "RxJS"],
    link: "https://github.com/your-username/task-manager",
    demo: "https://task-demo.com"
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-12 sm:py-20 bg-black w-full">
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
              Let&apos;s Create
            </motion.span>{" "}
            <motion.span 
              className="text-gradient"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Something Amazing!
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            Explore our portfolio of successful projects and innovative solutions
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1500px] mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CardContainer className="inter-var w-full">
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
                      <div className="w-8 h-8 bg-green-soft/10 rounded-lg flex items-center justify-center">
                        <span className="text-green-soft font-bold text-sm">P</span>
                      </div>
                      <span>{project.title}</span>
                    </div>
                  </CardItem>

                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm mt-2 dark:text-neutral-300 relative z-10 flex-shrink-0"
                  >
                    {project.description}
                  </CardItem>

                  <CardItem translateZ="100" className="w-full mt-4 relative z-10 flex-shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    />
                  </CardItem>

                  <CardItem translateZ="60" className="mt-4 relative z-10 flex-grow">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-green-soft/10 text-green-soft text-xs rounded-full border border-green-soft/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardItem>

                  <div className="flex justify-between items-center mt-6 relative z-10 flex-shrink-0">
                    <CardItem translateZ={20}>
                      <button
                        onClick={() => {
                          const element = document.querySelector("#contact");
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth" });
                          }
                        }}
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white hover:text-green-soft transition-colors"
                      >
                        View Details →
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
                        Start Project
                      </button>
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="px-8 py-3 bg-green-soft hover:bg-green-lighter text-black font-semibold rounded-full transition-colors"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
}