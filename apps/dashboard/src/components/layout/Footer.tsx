/**
 * @author Tom Butler
 * @date 2025-10-25
 * @description Footer component with social links, quick navigation, and copyright
 */

import Link from "next/link";
import { Github, Linkedin, Code2, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: "https://github.com/ThomasJButler", icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/thomasbutleruk/", icon: Linkedin, label: "LinkedIn" },
    { href: "https://codepen.io/thomasbutler", icon: Code2, label: "CodePen" },
    { href: "mailto:dev@thomasjbutler.me.com", icon: Mail, label: "Email" },
  ];

  const quickLinks = [
    { href: "#hero", label: "Home" },
    { href: "#contest", label: "Contest" },
    { href: "#projects", label: "Projects" },
    { href: "#journey", label: "Journey" },
    { href: "https://www.thomasjbutler.me/", label: "Main Site", external: true },
    { href: "https://www.thomasjbutler.me/#contact", label: "Contact Me", external: true },
  ];

  return (
    <footer className="relative z-10 border-t border-green-500/20 bg-gray-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-green-400 font-semibold text-lg mb-4">Course Portfolio</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Showcasing cutting-edge AI projects from the &ldquo;CodeCademy Mastering Generative AI & Agents for Developers&rdquo; bootcamp.
            </p>
            <p className="text-gray-500 text-xs mt-4">
              Built with Next.js, TypeScript, Anime.js, and love from York, UK 🇬🇧
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-green-400 font-semibold text-lg mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              {quickLinks.map((link) => (
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-green-400 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 text-sm transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {link.label}
                  </a>
                )
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-green-400 font-semibold text-lg mb-4">Connect</h3>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-green-400 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </Link>
                );
              })}
            </div>
            <p className="text-gray-500 text-xs">
              <Link 
                href="https://www.linkedin.com/in/thomasbutleruk/" 
                target="_blank"
                className="hover:text-green-400 transition-colors underline-offset-2 hover:underline"
              >
                Tom Butler
              </Link><br />
              York, UK<br />
              #CodecademyGenAIBootcamp
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>© {currentYear} Tom Butler. All rights reserved.</p>
            <p className="mt-2 md:mt-0 flex items-center">
              Made with <Heart size={12} className="mx-1 text-red-500" /> for the AI community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
