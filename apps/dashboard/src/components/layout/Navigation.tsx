/**
 * @author Tom Butler
 * @date 2025-10-25
 * @description Main navigation bar with scroll detection, mobile menu, and progress indicator
 */

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Github, Linkedin, ArrowUp, Globe } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      const sections = ["hero", "projects"];
      const scrollPosition = scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (sectionId: string) => {
    if (isHomePage) {
      // On homepage, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMobileMenuOpen(false);
      }
    } else {
      // On other pages, navigate to homepage with section anchor
      if (sectionId === "hero") {
        window.location.href = "/";
      } else {
        window.location.href = `/#${sectionId}`;
      }
      setIsMobileMenuOpen(false);
    }
  };

  const isHomePage = pathname === "/";

  const navItems = [
    ...(isHomePage ? [] : [{ id: "hero", label: "Home" }]),
    { id: "projects", label: "Projects" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-gray-900/95 backdrop-blur-sm border-b border-green-500/20"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-green-400 font-bold text-xl bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent hover:from-cyan-400 hover:to-green-400 transition-all duration-300">
                ML&GenAI
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-6">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavigation(item.id)}
                    className={`text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? "text-green-400"
                        : "text-gray-400 hover:text-green-400"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <Link
                  href="/projects/sql-ball"
                  className="text-sm font-medium text-gray-400 hover:text-green-400 transition-colors"
                >
                  Contest
                </Link>
              </div>
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="https://www.thomasjbutler.me/"
                target="_blank"
                className="text-gray-400 hover:text-green-400 transition-colors"
                aria-label="Main Site"
              >
                <Globe size={18} />
              </Link>
              <Link
                href="https://github.com/ThomasJButler/MasteringAICoursePortfolio"
                target="_blank"
                className="text-gray-400 hover:text-green-400 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/thomasbutleruk/"
                target="_blank"
                className="text-gray-400 hover:text-green-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-400 hover:text-green-400"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed right-0 top-0 h-full w-64 bg-gray-900 border-l border-green-500/20 p-6 pt-20">
            <div className="space-y-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`block text-lg font-medium transition-colors ${
                    activeSection === item.id
                      ? "text-green-400"
                      : "text-gray-400 hover:text-green-400"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Link
                href="/projects/sql-ball"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-lg font-medium text-gray-400 hover:text-green-400 transition-colors"
              >
                Contest
              </Link>
              <div className="pt-6 border-t border-gray-800 space-y-4">
                <Link
                  href="https://www.thomasjbutler.me/"
                  target="_blank"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors"
                >
                  <Globe size={18} />
                  Main Site
                </Link>
                <Link
                  href="https://github.com/ThomasJButler"
                  target="_blank"
                  className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors"
                >
                  <Github size={18} />
                  GitHub
                </Link>
                <Link
                  href="https://www.linkedin.com/in/thomasbutleruk/"
                  target="_blank"
                  className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Progress Bar - At the very top */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-800 z-50">
        <div
          className="h-full bg-gradient-to-r from-green-400 to-cyan-400 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Back to Top Button */}
      {isScrolled && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50 bg-green-500/20 hover:bg-green-500/30 text-green-400 p-3 rounded-full border border-green-500/50 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/20"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
}
