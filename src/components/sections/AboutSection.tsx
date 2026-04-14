"use client";

import { motion } from "framer-motion";
import { BookOpen, Code2, Brain, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  const cards = [
    {
      icon: <Code2 className="h-6 w-6 text-primary" />,
      title: "Full Stack Engineering",
      description: "Building scalable web apps with Next.js, React, and modern backend architectures.",
    },
    {
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      title: "DSA in Java",
      description: "Strong problem-solving foundation, continuously honing skills through coding challenges.",
    },
    {
      icon: <Brain className="h-6 w-6 text-primary" />,
      title: "AI/ML Enthusiast",
      description: "Exploring the intersections of machine learning and modern software development.",
    },
    {
      icon: <Rocket className="h-6 w-6 text-primary" />,
      title: "Growth Mindset",
      description: "Always eager to learn, adapt, and build real-world products that make an impact.",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Hello! I'm Kausik, a passionate developer driven by the desire to build 
                high-quality, memorable digital experiences. My journey involves rigorous problem-solving 
                with Data Structures and Algorithms in Java, and architecting robust Full Stack applications.
              </p>
              <p>
                I thrive in environments that challenge me to grow. Whether I'm designing a 
                premium UI like VeriomeX or building backend integrations for an application like AmaRide, 
                I bring a meticulous eye for detail and a product-first mindset.
              </p>
              <p>
                Currently seeking top-tier internships where I can contribute to cutting-edge 
                projects, especially those bridging the gap between sophisticated web interfaces and AI infrastructure.
              </p>
            </div>
          </motion.div>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="glass-card border-none bg-background/40 backdrop-blur-sm h-full hover:bg-background/60 transition-colors">
                  <CardContent className="p-6 flex flex-col gap-4">
                    <div className="p-3 bg-primary/10 w-fit rounded-lg">
                      {card.icon}
                    </div>
                    <h3 className="font-semibold text-xl">{card.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
