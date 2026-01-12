/**
 * @author Tom Butler
 * @date 2025-10-25
 * @description Main portfolio homepage showcasing AI projects with animated components
 */

"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import MatrixRain from "@/components/animations/MatrixRain";
import AnimatedHero from "@/components/animations/AnimatedHero";
import AnimatedProjectCard from "@/components/animations/AnimatedProjectCard";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import TechStackIcon from "@/components/ui/TechStackIcon";
import MatrixDivider from "@/components/ui/MatrixDivider";
import { animate as anime, stagger } from 'animejs';
import { useEffect, useRef } from "react";
import { animeEasings, durations } from "@/lib/easings";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function Home() {
  const contestRef = useRef<HTMLDivElement>(null);
  const [contestSectionRef, isContestVisible] = useIntersectionObserver<HTMLElement>({
    threshold: 0.3,
    freezeOnceVisible: true,
  });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (isContestVisible && !prefersReducedMotion && contestRef.current) {
      anime(contestRef.current, {
        opacity: [0, 1],
        scale: [0.9, 1],
        translateY: [30, 0],
        duration: durations.slow,
        easing: animeEasings.appleElastic,
      });

      anime(contestRef.current.querySelectorAll("h2, p, button"), {
        opacity: [0, 1],
        translateY: [20, 0],
        duration: durations.normal,
        delay: stagger(100, { start: 200 }),
        easing: animeEasings.smoothOut,
      });
    }
  }, [isContestVisible, prefersReducedMotion]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Matrix Rain Background Effect */}
      <MatrixRain />
      
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Animated Hero Section */}
        <AnimatedHero />

        {/* Hero to Projects Divider */}
        <MatrixDivider variant="glow" />

        {/* Main Projects Section */}
        <section id="projects" className="container mx-auto px-4 py-6">
          <MainProjectsHeading />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-16">
            {mainProjects.map((project, index) => (
              <AnimatedProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* Projects to Skills Divider */}
        <MatrixDivider variant="default" />

        {/* Skills & Technologies Section */}
        <section className="container mx-auto px-4 py-10">
          <SkillsAndTechHeading />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              "Gen AI", "Azure AI Foundry", "RAG pipelines", "Machine Learning",
              "LLMs", "Python", "C#", "APIs", "OpenAI", "LangChain",
              "TypeScript", "React"
            ].map((skill) => (
              <div
                key={skill}
                className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 transition-all duration-500 hover:border-gray-600/70 hover:shadow-2xl hover:shadow-white/5 hover:-translate-y-1"
              >
                {/* Subtle inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Icon and Text */}
                <div className="relative flex items-center justify-center">
                  <TechStackIcon tech={skill} size={24} className="opacity-80 group-hover:opacity-100 transition-opacity duration-300" showTooltip={false} />
                </div>

                {/* Subtle highlight bar */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-green-400/0 via-green-400/60 to-green-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills to Journey Divider */}
        <MatrixDivider variant="glow" />

        {/* Learning Journey Section with integrated stats */}
        <LearningJourneySection />

        {/* Journey to Contest Divider */}
        <MatrixDivider variant="default" />

        {/* Animated Contest Banner - MOVED TO BOTTOM */}
        <section ref={contestSectionRef} id="contest" className="container mx-auto px-4 py-12">
          <div
            ref={contestRef}
            className="bg-gradient-to-r from-green-900/50 to-cyan-900/50 rounded-lg p-8 text-center border border-green-500/30 relative overflow-hidden"
            style={{ opacity: 0 }}
          >
            <ContestGlow />
            <h2 className="text-3xl font-bold mb-4 text-green-400" style={{ opacity: 0 }}>
              Contest Entry: SQL-Ball
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto" style={{ opacity: 0 }}>
              Football data analytics with natural language queries, AI-powered insights,
              and interactive performance visualisations.
            </p>
            <Link href="/projects/sql-ball">
              <Button
                className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold transform-gpu"
                style={{ opacity: 0 }}
                onMouseEnter={(e) => handleButtonHover(e.currentTarget)}
                onMouseLeave={(e) => handleButtonLeave(e.currentTarget)}
              >
                View Contest Project
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

interface Project {
  id: string;
  title: string;
  description: string;
  week: string;
  status: "completed" | "in-progress" | "upcoming";
  techStack: string[];
  link?: string;
  progress?: number;
  eta?: string;
  githubUrl?: string;
  image?: string;
  demo?: string;
}

const mainProjects: Project[] = [
  {
    id: "modelviz",
    title: "ModelViz",
    description: "Interactive analytics platform for comparing AI models across multiple providers with real-time performance metrics, cost analysis, and 3D visualisations",
    week: "Featured",
    status: "completed",
    techStack: ["Next.js 16", "React 19", "TypeScript", "Three.js", "Framer Motion"],
    image: "https://res.cloudinary.com/depqttzlt/image/upload/v1767710994/ModelViz_blz9ct.png",
    demo: "https://modelviz.vercel.app/",
    githubUrl: "https://github.com/ThomasJButler/ModelViz",
  },
    {
    id: "morpheus",
    title: "Morpheus",
    description: "Intelligent document Q&A system with semantic search and source citations using RAG",
    week: "Week 3",
    status: "completed",
    techStack: ["Pinecone", "Anthropic", "OpenAI", "LangChain", "FastAPI"],
    image: "https://res.cloudinary.com/depqttzlt/image/upload/v1767713745/Morpheus5_pdcmvr.png",
    demo: "https://morpheusrag.vercel.app",
    githubUrl: "https://github.com/ThomasJButler/Morpheus",
  },
  {
    id: "ai-code-generator",
    title: "Code Generator",
    description: "Generate production-ready code with AI assistance",
    week: "Week 1-2",
    status: "completed",
    techStack: ["LangChain", "GPT-4o", "Python", "Flask", "React"],
    image: "https://res.cloudinary.com/depqttzlt/image/upload/v1767710994/CodeGenerator2_mvre83.png",
    demo: "https://theaigenerator.vercel.app/",
    githubUrl: "https://github.com/ThomasJButler/AICodeGenerator",
  },
  {
    id: "sql-ball",
    title: "SQL-Ball",
    description: "Football data analytics with natural language queries and AI insights",
    week: "Final Project",
    status: "completed",
    techStack: ["Supabase", "LangChain", "React", 'OpenAI', 'PostGresSQL'],
    image: "https://res.cloudinary.com/depqttzlt/image/upload/v1768231036/sqlballlogo_vu2zk5-cropped_2_whaptj.svg",
    demo: "https://sql-ball.vercel.app/",
  },
    {
    id: "reviewbot-protocol",
    title: "ReviewBot Protocol",
    description: "AI-powered GitHub PR reviews with automated code analysis and intelligent feedback",
    week: "Week 2",
    status: "completed",
    techStack: ["Next.js 15", "FastAPI", "LangChain", "LangGraph", "PostgreSQL"],
    image: "https://res.cloudinary.com/depqttzlt/image/upload/v1767707308/ReviewBot_lrzvo5.png",
    githubUrl: "https://github.com/ThomasJButler/ReviewBot-Protocol",
  },
    {
    id: "portfolio-dashboard",
    title: "Portfolio Dashboard",
    description: "Interactive AI course portfolio showcasing projects and learning journey",
    week: "Meta Project",
    status: "completed",
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Anime.js"],
    image: "https://res.cloudinary.com/depqttzlt/image/upload/v1766595895/dashboardhomepage_xxsk0z.png",
    demo: "/",
  },
];

function ContestGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!glowRef.current || prefersReducedMotion) return;

    anime(glowRef.current, {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      duration: durations.slowest * 4,
      easing: animeEasings.smoothInOut,
      loop: true,
    });
  }, [prefersReducedMotion]);

  return (
    <div
      ref={glowRef}
      className="absolute inset-0 opacity-30 pointer-events-none"
      style={{
        background: "linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.3), transparent, rgba(0, 255, 0, 0.3), transparent)",
        backgroundSize: "200% 100%",
      }}
    />
  );
}

function handleButtonHover(button: HTMLElement) {
  anime(button, {
    scale: 1.05,
    duration: durations.fast,
    easing: animeEasings.smoothOut,
  });
}

function handleButtonLeave(button: HTMLElement) {
  anime(button, {
    scale: 1,
    duration: durations.normal,
    easing: animeEasings.appleSpring,
  });
}

function LearningJourneySection() {
  const [journeyRef, isJourneyVisible] = useIntersectionObserver<HTMLElement>({
    threshold: 0.2,
    freezeOnceVisible: true,
  });
  const prefersReducedMotion = useReducedMotion();
  const statsBoxRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const glowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isJourneyVisible && !hasAnimated.current && !prefersReducedMotion && journeyRef.current) {
      hasAnimated.current = true;

      // Animate stats box first
      if (statsBoxRef.current) {
        anime(statsBoxRef.current, {
          opacity: [0, 1],
          scale: [0.95, 1],
          translateY: [20, 0],
          duration: durations.normal,
          easing: animeEasings.smoothOut,
        });

        anime(statsBoxRef.current.querySelectorAll("p"), {
          opacity: [0, 1],
          translateX: [-20, 0],
          duration: durations.fast,
          delay: stagger(100, { start: 200 }),
          easing: animeEasings.smoothOut,
        });
      }

      // Animate title with subtle fade
      if (titleRef.current) {
        anime(titleRef.current, {
          opacity: [0, 1],
          translateY: [-20, 0],
          duration: durations.normal,
          delay: 400,
          easing: animeEasings.smoothOut,
        });
      }

      // Animate description
      if (descRef.current) {
        anime(descRef.current, {
          opacity: [0, 1],
          translateX: [-30, 0],
          duration: durations.normal,
          delay: 600,
          easing: animeEasings.smoothOut,
        });
      }

      // Animate cards with sophisticated entrance (similar to project cards)
      cardRefs.current.forEach((card, index) => {
        if (card) {
          anime(card, {
            opacity: [0, 1],
            translateY: [40, 0],
            rotateX: [-10, 0],
            duration: durations.slow,
            delay: index * 150 + 700,
            easing: animeEasings.appleEaseOut,
          });
        }
      });

      // Animate bullet points with enhanced effects
      anime(journeyRef.current.querySelectorAll(".journey-card li"), {
        opacity: [0, 1],
        translateX: [-15, 0],
        scale: [0.95, 1],
        duration: durations.fast,
        delay: stagger(30, { start: 1100 }),
        easing: animeEasings.smoothOut,
      });
    }
  }, [isJourneyVisible, prefersReducedMotion, journeyRef]);

  const handleCardMouseEnter = (index: number) => {
    if (prefersReducedMotion) return;

    const card = cardRefs.current[index];
    const glow = glowRefs.current[index];
    if (!card) return;

    anime(card, {
      translateY: -10,
      scale: 1.03,
      duration: durations.normal,
      easing: animeEasings.appleEaseOut,
    });

    const glowColors = [
      "rgba(0, 255, 255, 0.2)",
      "rgba(0, 255, 0, 0.2)",
      "rgba(168, 85, 247, 0.2)",
    ];

    anime(card, {
      boxShadow: [
        "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        `0 20px 40px -10px ${glowColors[index]}`,
      ],
      duration: durations.normal,
      easing: animeEasings.smoothOut,
    });

    if (glow) {
      anime(glow, {
        opacity: [0, 0.4],
        scale: [0.9, 1.1],
        duration: durations.normal,
        easing: animeEasings.smoothOut,
      });
    }

    const bullets = card.querySelectorAll("li");
    anime(bullets, {
      translateX: [0, 3],
      duration: durations.fast,
      delay: stagger(20),
      easing: animeEasings.smoothOut,
    });
  };

  const handleCardMouseLeave = (index: number) => {
    if (prefersReducedMotion) return;

    const card = cardRefs.current[index];
    const glow = glowRefs.current[index];
    if (!card) return;

    anime(card, {
      translateY: 0,
      scale: 1,
      duration: durations.normal,
      easing: animeEasings.appleEaseOut,
    });

    anime(card, {
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
      duration: durations.normal,
      easing: animeEasings.smoothOut,
    });

    if (glow) {
      anime(glow, {
        opacity: 0,
        scale: 0.9,
        duration: durations.normal,
        easing: animeEasings.smoothOut,
      });
    }

    const bullets = card.querySelectorAll("li");
    anime(bullets, {
      translateX: 0,
      duration: durations.fast,
      delay: stagger(20),
      easing: animeEasings.smoothOut,
    });
  };

  const learningHighlights = [
    {
      title: "What I Learned",
      items: [
        "Building production-ready AI applications with LangChain",
        "Implementing RAG pipelines for intelligent document retrieval",
        "Orchestrating multi-agent systems with LangGraph",
        "Optimizing prompts for GPT-4 and Claude 3.5",
        "Vector database integration with Pinecone & ChromaDB",
      ],
    },
    {
      title: "Course Highlights",
      items: [
        "Weekly hands-on projects with real-world applications",
        "Expert mentorship from industry professionals",
        "Collaborative learning with passionate developers",
        "Cutting-edge AI technologies and best practices",
        "Building a portfolio that showcases AI mastery",
      ],
    },
    {
      title: "What I Enjoyed Most",
      items: [
        "Creating the SQL-Ball contest entry with innovative features",
        "Solving complex problems with AI-driven solutions",
        "Learning from feedback and iterating on projects",
        "Exploring the boundaries of what's possible with AI",
        "Contributing to the AI community through open source",
      ],
    },
  ];

  return (
    <section ref={journeyRef} id="journey" className="container mx-auto px-4 py-10">
      <div className="text-center mb-8">
        <h2 ref={titleRef} className="text-4xl font-bold text-white mb-4" style={{ opacity: 0 }}>
          My Learning Journey
        </h2>
        <p ref={descRef} className="text-gray-400 text-lg max-w-3xl mx-auto mb-8" style={{ opacity: 0 }}>
          Transforming from developer to AI engineer through the Mastering Generative AI & Agents bootcamp
        </p>

        {/* Course Stats Box */}
        <div
          ref={statsBoxRef}
          className="inline-block bg-gradient-to-r from-green-900/30 to-cyan-900/30 rounded-lg p-6 border border-green-500/20 hover:border-green-400/40 transition-all duration-500 mb-16"
          style={{ opacity: 0 }}
        >
          <p className="text-gray-300 mb-2" style={{ opacity: 0 }}>
            <span className="text-green-400 font-semibold">Course Duration:</span> August - September 2025 (6 Weeks)
          </p>
          <p className="text-gray-300 mb-2" style={{ opacity: 0 }}>
            <span className="text-green-400 font-semibold">Projects Completed:</span> 6 Production-Ready Applications
          </p>
          <p className="text-gray-300" style={{ opacity: 0 }}>
            <span className="text-green-400 font-semibold">Technologies Mastered:</span> 12+ AI/ML Frameworks & Tools
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {learningHighlights.map((section, cardIndex) => {
          const borderColors = [
            "border-cyan-400/30",
            "border-green-400/30",
            "border-purple-400/30",
          ];
          const glowColors = [
            "bg-cyan-500/20",
            "bg-green-500/20",
            "bg-purple-500/20",
          ];
          const titleColors = [
            "text-cyan-400 group-hover:text-cyan-300",
            "text-green-400 group-hover:text-green-300",
            "text-purple-400 group-hover:text-purple-300",
          ];

          return (
            <div
              key={section.title}
              ref={(el) => {
                cardRefs.current[cardIndex] = el;
              }}
              onMouseEnter={() => handleCardMouseEnter(cardIndex)}
              onMouseLeave={() => handleCardMouseLeave(cardIndex)}
              className="journey-card relative overflow-hidden bg-gradient-to-br from-gray-900/70 via-gray-800/50 to-gray-900/70 backdrop-blur-md border border-gray-700/50 rounded-3xl p-10 cursor-pointer group"
              style={{
                opacity: 0,
                perspective: "1000px",
              }}
            >
              <div
                ref={(el) => {
                  glowRefs.current[cardIndex] = el;
                }}
                className={`absolute inset-0 ${glowColors[cardIndex]} blur-2xl opacity-0 -z-10`}
                style={{ transform: "scale(0.9)" }}
              />

              <div className={`absolute top-0 left-0 right-0 h-1 ${borderColors[cardIndex]} rounded-t-3xl`} />

              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none rounded-3xl" />

              <h3 className={`text-xl font-semibold mb-6 transition-all duration-300 ${titleColors[cardIndex]}`}>
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start group/item" style={{ opacity: 0 }}>
                    <span className="text-cyan-400 mr-3 mt-1 group-hover/item:text-green-400 transition-colors duration-300 font-bold">•</span>
                    <span className="text-gray-300 text-sm leading-relaxed group-hover/item:text-gray-100 transition-colors duration-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

    </section>
  );
}

function MainProjectsHeading() {
  const [headerRef, isVisible] = useIntersectionObserver<HTMLHeadingElement>({
    threshold: 0.3,
    freezeOnceVisible: true,
  });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (isVisible && !prefersReducedMotion && headerRef.current) {
      anime(headerRef.current, {
        opacity: [0, 1],
        translateY: [20, 0],
        duration: durations.normal,
        delay: 300,
        easing: animeEasings.smoothOut,
      });
    }
  }, [isVisible, prefersReducedMotion, headerRef]);

  return (
    <h2
      ref={headerRef}
      className="text-4xl font-bold text-center mb-12 text-green-400 hidden sm:block"
      style={{ opacity: 0 }}
    >
      Main Projects
    </h2>
  );
}

function SkillsAndTechHeading() {
  const [headerRef, isVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.3,
    freezeOnceVisible: true,
  });
  const prefersReducedMotion = useReducedMotion();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (isVisible && !prefersReducedMotion) {
      if (titleRef.current) {
        anime(titleRef.current, {
          opacity: [0, 1],
          translateY: [20, 0],
          duration: durations.normal,
          delay: 300,
          easing: animeEasings.smoothOut,
        });
      }

      if (descRef.current) {
        anime(descRef.current, {
          opacity: [0, 1],
          translateY: [20, 0],
          duration: durations.normal,
          delay: 450,
          easing: animeEasings.smoothOut,
        });
      }
    }
  }, [isVisible, prefersReducedMotion, headerRef]);

  return (
    <div ref={headerRef} className="text-center mb-16">
      <h2
        ref={titleRef}
        className="text-4xl font-bold text-white mb-4"
        style={{ opacity: 0 }}
      >
        Skills & Technologies Demonstrated
      </h2>
      <p
        ref={descRef}
        className="text-gray-400 text-lg max-w-3xl mx-auto"
        style={{ opacity: 0 }}
      >
        Expertise in cutting-edge technologies valuable to employers
      </p>
    </div>
  );
}
