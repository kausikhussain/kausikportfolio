"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const educationDetails = [
  {
    degree: "B.Tech in Computer Science",
    institution: "Silicon Institute of Technology",
    location: "Sambalpur",
    period: "2023 - 2027",
    score: "8.75 CGPA (till 5th sem)",
    type: "Degree",
  },
  {
    degree: "Class 12 (Higher Secondary)",
    institution: "Apex Senior Secondary School",
    location: "Baidyarajpur, Jajpur",
    period: "2023",
    score: "82%",
    type: "Senior Secondary",
  },
  {
    degree: "Class 10 (CBSE)",
    institution: "Gurukul Public School",
    location: "Haridaspur, Jajpur",
    period: "2021",
    score: "86%",
    type: "Secondary",
  },
];

export function EducationSection() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background flare */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      
      <div className="container px-4 md:px-6 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Academic <span className="text-primary">Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A solid foundation in academics shaping my approach to logical problem solving.
          </p>
        </motion.div>

        <div className="grid gap-8">
          {educationDetails.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <Card className="glass-card border-border dark:border-white/5 overflow-hidden group hover:border-primary/50 transition-colors duration-500">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    {/* Left visual column */}
                    <div className="bg-primary/5 dark:bg-primary/10 md:w-48 p-6 flex flex-col justify-center items-center text-center border-b md:border-b-0 md:border-r border-border dark:border-white/5 group-hover:bg-primary/10 dark:group-hover:bg-primary/20 transition-colors duration-500">
                      <GraduationCap className="h-10 w-10 text-primary mb-3" />
                      <span className="font-bold text-lg tracking-wider text-foreground">{item.period}</span>
                      <Badge variant="outline" className="mt-2 bg-background/50 border-border dark:border-white/10 uppercase tracking-widest text-[10px]">
                        {item.type}
                      </Badge>
                    </div>
                    
                    {/* Right details column */}
                    <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {item.degree}
                      </h3>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mb-4 text-muted-foreground">
                        <span className="flex items-center gap-2 text-sm font-medium">
                          <MapPin className="h-4 w-4" /> {item.institution}
                        </span>
                        <span className="hidden sm:block w-1 h-1 rounded-full bg-border" />
                        <span className="text-sm">{item.location}</span>
                      </div>
                      
                      <div className="inline-flex items-center gap-2 bg-background/80 dark:bg-background/50 border border-border dark:border-white/5 px-4 py-2 rounded-lg w-fit mt-2">
                        <Award className="h-5 w-5 text-yellow-500" />
                        <span className="font-semibold text-foreground tracking-wide">
                          Score: <span className="text-primary">{item.score}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
