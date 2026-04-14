"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  FaJava, FaPython, FaHtml5, FaCss3Alt, FaReact, 
  FaNodeJs, FaGitAlt, FaGithub, FaFigma, FaLinux 
} from "react-icons/fa";
import { 
  SiJavascript, SiTypescript, SiNextdotjs, SiTailwindcss, 
  SiFramer, SiThreedotjs, SiRedux, SiExpress, SiMongodb, 
  SiPostgresql, SiPrisma, SiVercel, SiFirebase 
} from "react-icons/si";
import { DiMysql } from "react-icons/di";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: <FaJava className="text-[#007396]" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
      { name: "SQL", icon: <DiMysql className="text-[#4479A1]" /> },
      { name: "HTML/CSS", icon: <FaHtml5 className="text-[#E34F26]" /> },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-foreground" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      { name: "Framer Motion", icon: <SiFramer className="text-foreground" /> },
      { name: "Three.js", icon: <SiThreedotjs className="text-foreground" /> },
      { name: "Redux", icon: <SiRedux className="text-[#764ABC]" /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
      { name: "Express.js", icon: <SiExpress className="text-foreground" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
      { name: "Prisma", icon: <SiPrisma className="text-foreground" /> },
      { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
    ],
  },
  {
    title: "Tools & Deploy",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
      { name: "GitHub", icon: <FaGithub className="text-foreground" /> },
      { name: "Vercel", icon: <SiVercel className="text-foreground" /> },
      { name: "Figma", icon: <FaFigma className="text-[#F24E1E]" /> },
      { name: "Linux", icon: <FaLinux className="text-[#FCC624]" /> },
    ],
  },
];

export function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Technical <span className="text-primary">Arsenal</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            A comprehensive overview of the technologies and tools I use to build scalable products.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="bg-background rounded-2xl p-6 shadow-sm border border-border/50 group hover:border-primary/50 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <span className="w-6 h-1 bg-gradient-to-r from-primary to-transparent rounded-full mr-3" />
                {category.title}
              </h3>
              <div className="flex flex-col gap-3">
                {category.skills.map((skill) => (
                  <motion.div key={skill.name} variants={itemVariants}>
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors cursor-default">
                      <div className="w-8 h-8 flex items-center justify-center text-2xl drop-shadow-sm group-hover/icon:scale-110 transition-transform">
                        {skill.icon}
                      </div>
                      <span className="font-medium text-sm md:text-base">{skill.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
