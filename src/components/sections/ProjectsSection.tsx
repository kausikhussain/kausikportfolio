"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Image as ImageIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Believers Church Residential School",
    description: "A comprehensive digital school platform featuring virtual tours, academic exploration, and news distribution. Built to modernize the institution's online presence.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/kausikhussain/School-Website.git",
    live: "https://school-website-theta-virid.vercel.app/",
    image: "/images/projects/SchoolWeb%20UI.png",
  },
  {
    title: "MedXChain",
    description: "A federated machine learning model for hospitals and clinics. Enables multiple institutions to provide test data securely to train models that predict results in the absence of a doctor.",
    tech: ["Python", "Machine Learning", "OCI Architecture"],
    github: "https://github.com/kausikhussain/MedXChain.git",
    live: "#",
    image: "/images/projects/MedXChain%20UI.png",
  },
  {
    title: "JanSehat Companion",
    description: "A digital health assistant application providing symptom checking, video consultations, and instant access to medical records.",
    tech: ["React Native", "Firebase", "WebRTC"],
    github: "https://github.com/kausikhussain/Jansehat.git",
    live: "#",
    image: "/images/projects/JanSehat%20UI.png",
  },
  {
    title: "Victus AI Dashboard",
    description: "A highly complex distributive node dashboard for monitoring verifiable training computation and zero-knowledge proofs.",
    tech: ["Next.js", "Web3", "Tailwind CSS"],
    github: "https://github.com/kausikhussain/Victus.git",
    live: "#",
    image: "/images/projects/Victus%20UI.png",
  },
  {
    title: "Zam Zam Traders",
    description: "An e-commerce platform for construction supplies integrating secure payments, fast logistics, and real-time product catalogs.",
    tech: ["React.js", "Node.js", "Stripe"],
    github: "https://github.com/kausikhussain/Zam-Zam-Booking-Site.git",
    live: "#",
    image: "/images/projects/ZamZam%20UI.png",
  },
  {
    title: "E-Learning Platform",
    description: "A full-scale educational application enabling course browsing, secure authentication, and real-time progress tracking.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/kausikhussain/E-learning-platform.git",
    live: "#",
    image: "/images/projects/E-learning%20UI.png",
  },
  {
    title: "TripSync Logistics",
    description: "A real-time delivery and map-tracking application designed for enterprise scale logistics. Provides live driver tracking and cost estimates.",
    tech: ["React", "Mapbox", "Express.js"],
    github: "https://github.com/kausikhussain/TripSync.git",
    live: "#",
    image: "/images/projects/TripSync%20UI.png",
  },
  {
    title: "VeriomeX Genomic Platform",
    description: "A research-grade platform managing variant databases, genomic data pipelines, and variant search queries via decentralized architecture.",
    tech: ["TypeScript", "GraphQL", "Prisma"],
    github: "https://github.com/kausikhussain/VeriomeX-UI.git",
    live: "#",
    image: "/images/projects/Veriomex%20Ui.png",
  },
  {
    title: "UberClone TS Migration",
    description: "A complete migration of an Uber clone application from JavaScript to TypeScript, implementing strict type interfaces.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/kausikhussain/UberClone.git",
    live: "#",
    image: "/images/projects/UberClone%20UI.png",
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative bg-background">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-16"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              A selection of my recent work focusing on scalable architecture and premium design.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden glass-card border-border dark:border-white/10 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full bg-card"
              >
                <div className="relative w-full h-[280px] overflow-hidden bg-muted flex items-center justify-center">
                  
                  {/* Fallback Icon */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground/30 z-0">
                    <ImageIcon className="h-12 w-12 mb-2" />
                    <span className="text-xs uppercase tracking-widest font-semibold">{project.title}</span>
                  </div>
                  
                  {/* Robust Native Image to avoid Next.js crash if image is missing */}
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 z-10"
                    onError={(e) => {
                      // Hide broken image icon, allowing the fallback icon to show underneath
                      e.currentTarget.style.opacity = "0";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10 group-hover:opacity-80 transition-opacity" />
                </div>

                <div className="p-6 md:p-8 flex-1 flex flex-col z-20 relative bg-card">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 flex-1 text-sm md:text-base leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="secondary" className="bg-primary/10 text-primary border-none">
                        {t}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 mt-auto pt-5 border-t border-border dark:border-white/10">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors text-foreground"
                    >
                      <svg className="text-foreground" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path></svg>
                      Code
                    </a>
                    {project.live !== "#" && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors ml-auto"
                      >
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
                
                {/* Premium sweep effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent. via-white/10 dark:via-white/5 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none z-30" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
