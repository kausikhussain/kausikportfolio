"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { BiEnvelope, BiPhoneCall } from "react-icons/bi";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    
    // Web3Forms API Implementation
    // The user needs to get a free Access Key from web3forms.com and paste it here
    formData.append("access_key", "1ffd4b10-d22a-4ff2-9706-7e9e45901a99");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Network error occurred. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-primary/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Looking for a skilled developer for your next project or an internship opportunity? My inbox is always open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-card p-8 rounded-2xl h-full flex flex-col border-border dark:border-white/5 relative z-10">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <BiEnvelope className="text-primary h-6 w-6" /> Reach Out
              </h3>
              <p className="text-muted-foreground mb-8 text-lg">
                Whether you have a question, an opportunity, or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="space-y-6 flex-1">
                <a href="mailto:kausik1027@gmail.com" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <BiEnvelope className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                     <p className="text-sm font-medium text-foreground">Email</p>
                     <p className="text-lg overflow-hidden text-ellipsis">kausik1027@gmail.com</p>
                  </div>
                </a>
                
                <a href="tel:+917327070843" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <BiPhoneCall className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Phone</p>
                    <p className="text-lg">+91 73270 70843</p>
                  </div>
                </a>
              </div>

              {/* Social Link Grid */}
              <div className="mt-8 pt-8 border-t border-border/50">
                <p className="text-sm font-medium mb-4 text-foreground">Catch me on social networks:</p>
                <div className="flex gap-4">
                  <a href="https://leetcode.com/u/Kausik_05/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-muted flex flex-col items-center justify-center text-muted-foreground hover:bg-[#FFA116]/10 hover:text-[#FFA116] transition-colors" title="LeetCode">
                    <SiLeetcode className="w-5 h-5" />
                  </a>
                  <a href="https://github.com/kausikhussain" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-muted flex flex-col items-center justify-center text-muted-foreground hover:bg-white/10 hover:text-foreground transition-colors" title="GitHub">
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a href="https://instagram.com/kausikhussain" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-muted flex flex-col items-center justify-center text-muted-foreground hover:bg-[#E1306C]/10 hover:text-[#E1306C] transition-colors" title="Instagram">
                    <FaInstagram className="w-5 h-5" />
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-2xl border-border dark:border-white/5 relative z-10"
          >
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold">Message Sent!</h3>
                <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => setStatus("idle")}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input 
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe" 
                    className="bg-background/50 focus-visible:ring-primary backdrop-blur-sm"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input 
                    id="email" 
                    name="email"
                    type="email" 
                    required
                    placeholder="john@example.com" 
                    className="bg-background/50 focus-visible:ring-primary backdrop-blur-sm"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea 
                    id="message" 
                    name="message"
                    required
                    placeholder="Hello Kausik, I wanted to discuss..." 
                    rows={5}
                    className="bg-background/50 focus-visible:ring-primary backdrop-blur-sm resize-none"
                  />
                </div>

                {status === "error" && (
                  <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-md flex items-center gap-2 text-red-500 text-sm">
                    <AlertCircle className="h-4 w-4" />
                    <span>{errorMessage}</span>
                  </div>
                )}
                
                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={status === "submitting"}
                  className="w-full h-12 gap-2 text-md transition-all relative overflow-hidden"
                >
                  {status === "submitting" ? (
                    <span className="flex items-center gap-2">
                      Sending... <span className="animate-spin h-4 w-4 border-2 border-white/30 border-t-white rounded-full" />
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message <Send className="h-4 w-4" />
                    </span>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
