"use client";
import { ParticleNetwork } from "@/components/ui/particle-network";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Smartphone, Bot, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 w-full h-full">
        <ParticleNetwork 
          particleCount={120}
          particleColor="#dcff00"
          connectionColor="#dcff00"
          particleSize={2}
          connectionDistance={250}
          speed={0.4}
          className="opacity-30"
        />
      </div>
      
      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold">
                <motion.span 
                  className="text-white"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Digital
                </motion.span>{" "}
                <motion.span 
                  className="text-gradient"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Innovation
                </motion.span>
                <br />
                <motion.span 
                  className="text-white"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  Development
                </motion.span>
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <p className="text-lg md:text-xl text-green-soft font-medium mb-2">
                "Where Innovation Meets Execution"
              </p>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                We build innovative software solutions that drive growth with the latest technologies 
                and provide scalable options for your business success.
              </p>
            </motion.div>
          </div>

          <motion.div 
            className="flex flex-wrap justify-center gap-4 text-sm text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05, color: "#dcff00" }}
              transition={{ duration: 0.2 }}
            >
              <Code className="w-4 h-4 text-green-soft" />
              <span>Web Development</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05, color: "#dcff00" }}
              transition={{ duration: 0.2 }}
            >
              <Smartphone className="w-4 h-4 text-green-soft" />
              <span>App Development</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05, color: "#dcff00" }}
              transition={{ duration: 0.2 }}
            >
              <Bot className="w-4 h-4 text-green-soft" />
              <span>AI Integration</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05, color: "#dcff00" }}
              transition={{ duration: 0.2 }}
            >
              <GraduationCap className="w-4 h-4 text-green-soft" />
              <span>Tech Stack Tutoring</span>
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-green-soft hover:bg-green-lighter text-black font-semibold px-8 py-3 transition-colors"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => {
                  const element = document.querySelector("#portfolio");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="border-green-soft text-green-soft hover:bg-green-soft hover:text-black px-8 py-3 transition-colors"
              >
                View Our Work
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-green-soft">50+</div>
              <div className="text-gray-400">Projects Delivered</div>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-green-soft">98%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-green-soft">24/7</div>
              <div className="text-gray-400">Support Available</div>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-green-soft">3+</div>
              <div className="text-gray-400">Years Experience</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.button
          onClick={() => {
            const element = document.querySelector("#services");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-green-soft rounded-full flex justify-center cursor-pointer hover:border-green-lighter transition-colors"
        >
          <div className="w-1 h-3 bg-green-soft rounded-full mt-2"></div>
        </motion.button>
      </div>
    </section>
  );
}