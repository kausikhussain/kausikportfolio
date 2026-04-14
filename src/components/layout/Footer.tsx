import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { BiEnvelope } from "react-icons/bi";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="text-2xl font-bold tracking-tighter">
            <span className="text-gradient">Kausik Azad</span> Hussain
          </Link>
          <p className="text-sm text-muted-foreground text-center md:text-left max-w-xs">
            Full Stack Developer | AI/ML Enthusiast <br />
            Building premium and scalable digital experiences.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/kausikhussain"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground hover:scale-110 transition-all p-2 rounded-full hover:bg-muted"
          >
            <FaGithub className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://leetcode.com/u/Kausik_05/"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-[#FFA116] hover:scale-110 transition-all p-2 rounded-full hover:bg-muted"
          >
            <SiLeetcode className="h-5 w-5" />
            <span className="sr-only">LeetCode</span>
          </a>
          <a
            href="https://instagram.com/kausikhussain" /* Will update with proper IG if specified */
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-[#E1306C] hover:scale-110 transition-all p-2 rounded-full hover:bg-muted"
          >
            <FaInstagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </a>
          <a
            href="mailto:kausik1027@gmail.com"
            className="text-muted-foreground hover:text-primary hover:scale-110 transition-all p-2 rounded-full hover:bg-muted"
          >
            <BiEnvelope className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 mt-8 pt-8 border-t border-border/40 text-center">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} SK Kausik Azad Hussain. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
