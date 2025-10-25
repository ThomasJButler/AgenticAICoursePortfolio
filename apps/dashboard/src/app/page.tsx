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

          {/* Main to Development Projects Divider */}
          <MatrixDivider variant="dots" />

          {/* Projects in Development Section */}
          <ProjectsInDevelopmentHeading />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projectsInDevelopment.map((project, index) => (
              <AnimatedProjectCard
                key={project.id}
                project={project}
                index={index + mainProjects.length}
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

        {/* Skills to Stats Divider */}
        <MatrixDivider variant="glow" />

        {/* Course Stats Section - MOVED HERE */}
        <CourseStatsSection />

        {/* Stats to Journey Divider */}
        <MatrixDivider variant="dots" />

        {/* Learning Journey Section - NEW */}
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
    id: "ai-comparison-showcase",
    title: "AI Comparison Showcase",
    description: "Compare responses from multiple AI models side-by-side in real-time",
    week: "Featured",
    status: "completed",
    techStack: ["Next.js", "TypeScript", "Multiple AI APIs"],
    image: "https://res.cloudinary.com/depqttzlt/image/upload/v1754529216/aicomparison_xoherd.png",
    demo: "https://ai-comparison-showcase.vercel.app",
  },
  {
    id: "ai-code-generator",
    title: "AI Code Generator",
    description: "Generate production-ready code with AI assistance",
    week: "Week 1-2",
    status: "completed",
    techStack: ["LangChain", "GPT-4o", "Python", "Flask", "React"],
    image: "https://res.cloudinary.com/depqttzlt/image/upload/v1758201680/codegeneratorfrontend_jccy53.png",
    demo: "https://ai-code-generator-rouge.vercel.app/",
  },
  {
    id: "sql-ball",
    title: "SQL-Ball",
    description: "Football data analytics with natural language queries and AI insights",
    week: "Final Project",
    status: "completed",
    techStack: ["Supabase", "LangChain", "React", 'OpenAI', 'PostGresSQL'],
    image: "https://res.cloudinary.com/depqttzlt/image/upload/v1758053629/generatedsql_yclpkb.png",
    demo: "https://sql-ball.vercel.app/",
  },
  {
    id: "portfolio-dashboard",
    title: "Portfolio Dashboard",
    description: "Interactive AI course portfolio showcasing projects and learning journey",
    week: "Meta Project",
    status: "completed",
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Anime.js"],
    image: "https://res.cloudinary.com/depqttzlt/image/upload/v1758053628/aicourseportfolio_pejlr2.png",
    demo: "/",
  },
];

const projectsInDevelopment: Project[] = [
  {
    id: "git-review-assistant",
    title: "Git Review Assistant",
    description: "AI-powered code review system with automated PR feedback",
    week: "Week 2",
    status: "in-progress",
    techStack: ["LangChain", "GitHub API", "FastAPI"],
    progress: 90,
    eta: "September 24th, 2025",
  },
  {
    id: "rag-chatbot",
    title: "RAG Chatbot",
    description: "Document-based Q&A system with semantic search and citations",
    week: "Week 3",
    status: "in-progress",
    techStack: ["Pinecone", "OpenAI", "LangChain"],
    progress: 70,
    eta: "September 30th, 2025",
  },
  {
    id: "multi-agent-system",
    title: "Multi-Agent System",
    description: "Collaborative AI agents for complex task orchestration",
    week: "Week 4",
    status: "in-progress",
    techStack: ["LangGraph", "Multiple LLMs", "WebSocket"],
    progress: 5,
    eta: "October 5th, 2025",
  },
  {
    id: "workflow-agent",
    title: "Dev Workflow Agent",
    description: "Automate development workflows with MCP integration",
    week: "Week 5",
    status: "in-progress",
    techStack: ["MCP", "GitHub Actions", "Docker"],
    progress: 5,
    eta: "October 12th, 2025",
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

function CourseStatsSection() {
  const [statsRef, isStatsVisible] = useIntersectionObserver<HTMLElement>({
    threshold: 0.3,
    freezeOnceVisible: true,
  });
  const prefersReducedMotion = useReducedMotion();
  const statsBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isStatsVisible && !prefersReducedMotion && statsBoxRef.current) {
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
  }, [isStatsVisible, prefersReducedMotion]);

  return (
    <section ref={statsRef} className="container mx-auto px-4 pt-8 pb-10">
      <div className="text-center">
        <div
          ref={statsBoxRef}
          className="inline-block bg-gradient-to-r from-green-900/30 to-cyan-900/30 rounded-lg p-6 border border-green-500/20 hover:border-green-400/40 transition-all duration-500"
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
    </section>
  );
}

function LearningJourneySection() {
  const [journeyRef, isJourneyVisible] = useIntersectionObserver<HTMLElement>({
    threshold: 0.2,
    freezeOnceVisible: true,
  });
  const prefersReducedMotion = useReducedMotion();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (isJourneyVisible && !prefersReducedMotion && journeyRef.current) {
      // Animate title with subtle fade
      if (titleRef.current) {
        anime(titleRef.current, {
          opacity: [0, 1],
          translateY: [-20, 0],
          duration: durations.normal,
          easing: animeEasings.smoothOut,
        });
      }

      // Animate description
      if (descRef.current) {
        anime(descRef.current, {
          opacity: [0, 1],
          translateX: [-30, 0],
          duration: durations.normal,
          delay: 200,
          easing: animeEasings.smoothOut,
        });
      }

      // Animate cards with subtle stagger
      anime(journeyRef.current.querySelectorAll(".journey-card"), {
        opacity: [0, 1],
        translateY: [20, 0],
        duration: durations.normal,
        delay: stagger(100, { start: 300 }),
        easing: animeEasings.smoothOut,
      });

      // Animate bullet points
      anime(journeyRef.current.querySelectorAll(".journey-card li"), {
        opacity: [0, 1],
        translateX: [-10, 0],
        duration: durations.fast,
        delay: stagger(30, { start: 600 }),
        easing: animeEasings.smoothOut,
      });
    }
  }, [isJourneyVisible, prefersReducedMotion, journeyRef]);

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
      <div className="text-center mb-16">
        <h2 ref={titleRef} className="text-4xl font-bold text-white mb-4" style={{ opacity: 0 }}>
          My Learning Journey
        </h2>
        <p ref={descRef} className="text-gray-400 text-lg max-w-3xl mx-auto" style={{ opacity: 0 }}>
          Transforming from developer to AI engineer through the Mastering Generative AI & Agents bootcamp
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {learningHighlights.map((section) => (
          <div
            key={section.title}
            className="journey-card bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-green-500/30 hover:shadow-lg hover:shadow-green-500/10 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
            style={{ opacity: 0 }}
          >
            <h3 className="text-xl font-semibold text-green-400 mb-6 group-hover:text-cyan-400 transition-colors duration-300">{section.title}</h3>
            <ul className="space-y-3">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start group/item" style={{ opacity: 0 }}>
                  <span className="text-cyan-400 mr-2 mt-1 group-hover/item:text-green-400 transition-colors duration-300">•</span>
                  <span className="text-gray-300 text-sm leading-relaxed group-hover/item:text-gray-100 transition-colors duration-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
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

function ProjectsInDevelopmentHeading() {
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
    <div ref={headerRef}>
      <h2
        ref={titleRef}
        className="text-4xl font-bold text-center mb-4 text-cyan-400"
        style={{ opacity: 0 }}
      >
        Projects in Development
      </h2>
      <p
        ref={descRef}
        className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
        style={{ opacity: 0 }}
      >
        Exciting projects coming soon! Each project is being carefully crafted to showcase advanced AI capabilities.
      </p>
    </div>
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
