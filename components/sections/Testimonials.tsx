"use client";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "@/components/ui/infinite-scroll";

const testimonials = [
  {
    quote: "REVQUIX transformed our digital presence completely. Their team delivered a scalable e-commerce platform that increased our sales by 300%. The AI integration they provided has automated most of our customer service.",
    name: "Sarah Johnson",
    title: "CEO, TechStart Solutions",
  },
  {
    quote: "The mobile app developed by REVQUIX exceeded all our expectations. The user experience is seamless, and the integration with our existing systems was flawless. Our customer engagement has improved dramatically.",
    name: "Michael Chen",
    title: "CTO, FinanceFlow",
  },
  {
    quote: "Their tech stack tutoring program helped our entire development team level up their skills. The personalized approach and hands-on mentoring made all the difference in our project delivery speed.",
    name: "Emily Rodriguez",
    title: "Development Manager, StartupCorp",
  },
  {
    quote: "REVQUIX's AI solutions have revolutionized our business operations. The chatbot they implemented handles 80% of our customer inquiries automatically, saving us thousands in operational costs.",
    name: "David Kumar",
    title: "Operations Director, ServicePlus",
  },
  {
    quote: "Working with REVQUIX was a game-changer. They didn't just build our website; they created a complete digital ecosystem that scales with our business. Their ongoing support is exceptional.",
    name: "Lisa Thompson",
    title: "Founder, EcoTech Innovations",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-12 sm:py-20 bg-black relative overflow-hidden w-full">
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
              Real Stories from
            </motion.span>{" "}
            <motion.span 
              className="text-gradient"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Beloved Clients
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            Don&apos;t just take our word for it - hear what our clients have to say about their experience
          </motion.p>
        </motion.div>

        <div className="relative w-full">
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="slow"
            className="w-full"
          />
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 border border-gray-800 rounded-xl">
            <div className="text-3xl md:text-4xl font-bold text-green-soft mb-2">5.0</div>
            <div className="text-gray-400">Average Rating</div>
            <div className="flex justify-center mt-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-green-soft text-xl">★</span>
              ))}
            </div>
          </div>
          <div className="p-6 border border-gray-800 rounded-xl">
            <div className="text-3xl md:text-4xl font-bold text-green-soft mb-2">100%</div>
            <div className="text-gray-400">Project Success Rate</div>
          </div>
          <div className="p-6 border border-gray-800 rounded-xl">
            <div className="text-3xl md:text-4xl font-bold text-green-soft mb-2">48h</div>
            <div className="text-gray-400">Average Response Time</div>
          </div>
        </div>
      </div>
    </section>
  );
}