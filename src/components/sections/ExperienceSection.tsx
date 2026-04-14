"use client";

import { motion } from "framer-motion";
import { Briefcase, Trophy, Code, Globe, GraduationCap } from "lucide-react";

const milestones = [
  {
    icon: <Trophy className="h-5 w-5" />,
    title: "Smart India Hackathon 2025 Finalist",
    date: "2025",
    description: (
      <ul className="list-none space-y-2">
        <li>• Built an AI-powered telemedicine platform (JanSehat) for rural healthcare</li>
        <li>• Designed low-bandwidth communication system for remote consultations</li>
      </ul>
    ),
  },
  {
    icon: <Code className="h-5 w-5" />,
    title: "IIT Bhubaneswar Hackathon 2025",
    date: "2025",
    description: (
      <ul className="list-none space-y-2">
        <li>• Developed a full-stack e-learning platform during hackathon</li>
      </ul>
    ),
  },
  {
    icon: <Briefcase className="h-5 w-5" />,
    title: "Freelance Project – Cement Booking Platform",
    date: "Recent",
    description: (
      <ul className="list-none space-y-2">
        <li>• Built a web-based ordering system for local business operations</li>
      </ul>
    ),
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: "Freelance Project – School Website",
    date: "Recent",
    description: (
      <ul className="list-none space-y-2">
        <li>• Developed a responsive website improving digital accessibility</li>
      </ul>
    ),
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-muted/20 relative">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Experience & <span className="text-primary">Impact</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Track record of building real-world solutions through hackathons and freelance development.
          </p>
        </motion.div>

        <div className="relative border-l border-primary/30 ml-4 md:ml-0 space-y-12 pb-8">
          {milestones.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-5 md:gap-8 items-start">
                <div className="absolute left-[-21px] top-0 md:relative md:left-auto md:col-span-1 flex md:justify-end md:pr-8 md:mt-1">
                  <div className="w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center text-primary z-10 shadow-[0_0_15px_rgba(var(--primary),0.3)]">
                    {item.icon}
                  </div>
                  <div className="hidden md:block absolute right-0 top-5 w-8 h-[2px] bg-primary/30" />
                </div>

                <div className="md:col-span-4 bg-background border border-border/50 rounded-xl p-6 shadow-sm hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 relative top-[-10px] md:top-0">
                  <span className="inline-block text-xs font-semibold text-primary mb-2 tracking-wider">
                    {item.date}
                  </span>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <div className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
