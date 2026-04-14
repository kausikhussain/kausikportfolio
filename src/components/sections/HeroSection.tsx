"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import HeroScene from "@/components/3d/HeroScene";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden" id="home">
      <HeroScene />
      
      <div className="container px-4 md:px-6 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-secondary-foreground/60 font-semibold tracking-widest uppercase text-sm md:text-base mb-4">
            Welcome to my portfolio
          </h2>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6"
        >
          I am <br className="md:hidden" />
          <span className="text-gradient drop-shadow-sm">Kausik Azad</span> Hussain
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto mb-10"
        >
          Full Stack Developer <span className="text-primary font-medium mx-2">|</span> AI/ML Enthusiast
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-lg text-muted-foreground/80 max-w-xl mx-auto mb-10"
        >
          Crafting top-tier visual experiences and scalable architectures for the modern web.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="#projects" className="w-full sm:w-auto">
            <Button size="lg" className="rounded-full px-8 h-14 text-lg w-full group">
              View Projects 
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="#contact" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg w-full glass-card hover:bg-accent dark:hover:bg-white/10 text-foreground">
              Contact Me
              <Mail className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Scroll Down</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
