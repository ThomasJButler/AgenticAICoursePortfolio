/**
 * @author Tom Butler
 * @date 2025-10-25
 * @description Portfolio Dashboard meta-project showcase page highlighting this website
 */

"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, ExternalLink, Monitor, Sparkles, Zap } from "lucide-react";
import { useEffect, useRef } from "react";
import { animate as anime, stagger } from 'animejs';
import { animeEasings, durations } from "@/lib/easings";
import ImageGallery from "@/components/ui/ImageGallery";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import MatrixRain from "@/components/animations/MatrixRain";
import MatrixDivider from "@/components/ui/MatrixDivider";

export default function PortfolioDashboardPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate header
    if (headerRef.current) {
      anime(headerRef.current, {
        opacity: [0, 1],
        translateY: [-30, 0],
        duration: durations.normal,
        easing: animeEasings.smoothOut,
      });
    }

    // Animate content sections
    if (contentRef.current) {
      anime(contentRef.current.children, {
        opacity: [0, 1],
        translateY: [20, 0],
        duration: durations.normal,
        delay: stagger(100, { start: 200 }),
        easing: animeEasings.smoothOut,
      });
    }

    // Animate features
    if (featuresRef.current) {
      anime(featuresRef.current.children, {
        opacity: [0, 1],
        scale: [0.9, 1],
        duration: durations.normal,
        delay: stagger(100, { start: 400 }),
        easing: animeEasings.appleElastic,
      });
    }

    // Animate gallery
    if (galleryRef.current) {
      anime(galleryRef.current, {
        opacity: [0, 1],
        translateY: [30, 0],
        duration: durations.normal,
        delay: 600,
        easing: animeEasings.smoothOut,
      });
    }
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Matrix Rain Background Effect */}
      <MatrixRain />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        <div className="container mx-auto px-4 py-32">
        {/* Back Button */}
        <Link href="/">
          <Button variant="ghost" className="mb-8 text-gray-400 hover:text-black hover:bg-green-400/20 border border-transparent hover:border-green-400/50">
            <ArrowLeft className="mr-2" size={16} />
            Back to Portfolio
          </Button>
        </Link>

        {/* Header */}
        <div ref={headerRef} className="text-center mb-12" style={{ opacity: 0 }}>
          <div className="inline-flex items-center justify-center mb-4">
            <Monitor className="text-green-400 mr-3" size={32} />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Portfolio Dashboard
            </h1>
            <Sparkles className="text-cyan-400 ml-3" size={32} />
          </div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Interactive AI course portfolio showcasing projects and learning journey
          </p>

          <div className="flex gap-4 justify-center mt-6">
            <Link href="/">
              <Button className="bg-green-500 hover:bg-green-600 text-black font-semibold">
                <ExternalLink className="mr-2" size={18} />
                You&apos;re Here Now!
              </Button>
            </Link>
            <Link href="https://github.com/ThomasJButler/MasteringAICoursePortfolio" target="_blank">
              <Button variant="outline" className="border-green-500 text-green-400 hover:bg-green-500/10">
                <Github className="mr-2" size={18} />
                View on GitHub
              </Button>
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Project Overview */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6" style={{ opacity: 0 }}>
            <h2 className="text-2xl font-semibold text-green-400 mb-4 flex items-center">
              <Monitor className="mr-2" size={24} />
              Project Overview
            </h2>
            <p className="text-gray-300 mb-4">
              This stunning portfolio website showcases all AI projects from the Mastering Generative AI
              & Agents bootcamp. Built completely from scratch with modern web technologies, featuring
              immersive Matrix-themed animations, responsive design, and an intuitive user experience.
            </p>
            <p className="text-gray-300">
              The portfolio serves as both a showcase of technical projects and a demonstration of
              advanced frontend development skills, combining cutting-edge web technologies with
              thoughtful UX design to create an engaging learning journey narrative.
            </p>
          </div>

          {/* Technical Stack */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6" style={{ opacity: 0 }}>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4 flex items-center">
              <Zap className="mr-2" size={24} />
              Technical Stack
            </h2>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                <span className="text-gray-300">
                  <strong className="text-white">Framework:</strong> Next.js 15 with App Router
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                <span className="text-gray-300">
                  <strong className="text-white">Language:</strong> TypeScript with strict mode
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                <span className="text-gray-300">
                  <strong className="text-white">Styling:</strong> Tailwind CSS 4.0, Shadcn/ui
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                <span className="text-gray-300">
                  <strong className="text-white">Animations:</strong> Anime.js, Framer Motion
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <MatrixDivider variant="glow" />

        {/* Key Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-center text-white mb-8">
            Key Features
          </h2>
          <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Matrix Rain Animation",
                description: "Immersive background effects with optimized performance",
                color: "from-green-500/20 to-green-600/10",
                borderColor: "border-green-500/30"
              },
              {
                title: "Smooth Navigation",
                description: "Seamless scroll navigation with animated transitions",
                color: "from-cyan-500/20 to-cyan-600/10",
                borderColor: "border-cyan-500/30"
              },
              {
                title: "Project Showcase",
                description: "Interactive project cards with detailed pages",
                color: "from-purple-500/20 to-purple-600/10",
                borderColor: "border-purple-500/30"
              },
              {
                title: "Responsive Design",
                description: "Optimized for desktop, tablet, and mobile devices",
                color: "from-yellow-500/20 to-yellow-600/10",
                borderColor: "border-yellow-500/30"
              },
              {
                title: "Performance Optimized",
                description: "Fast loading times with Next.js optimizations",
                color: "from-red-500/20 to-red-600/10",
                borderColor: "border-red-500/30"
              },
              {
                title: "SEO Optimized",
                description: "Proper meta tags and structured data",
                color: "from-indigo-500/20 to-indigo-600/10",
                borderColor: "border-indigo-500/30"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${feature.color} border ${feature.borderColor} rounded-lg p-6 hover:scale-105 transition-transform duration-300`}
                style={{ opacity: 0 }}
              >
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <MatrixDivider variant="dots" />

        {/* Project Screenshots */}
        <div ref={galleryRef} className="mb-12" style={{ opacity: 0 }}>
          <h2 className="text-3xl font-semibold text-center text-white mb-8">
            Project Screenshots
          </h2>
          <ImageGallery
            images={[
              "https://res.cloudinary.com/depqttzlt/image/upload/v1758053628/aicourseportfolio_pejlr2.png",
              "https://res.cloudinary.com/depqttzlt/image/upload/v1758055736/dashboardlearningjourney_fuypxr.png",
              "https://res.cloudinary.com/depqttzlt/image/upload/v1758053628/aidashboardmobile_phjbmx.png",
              "https://res.cloudinary.com/depqttzlt/image/upload/v1758053627/aicoursemobilefeatures_bvmcto.png",
              "https://res.cloudinary.com/depqttzlt/image/upload/v1758053563/dashboardeffects_itxmob.png",
              "https://res.cloudinary.com/depqttzlt/image/upload/v1758053561/aidashboardfrontend_a3ox6v.png"
            ]}
            title="Portfolio Dashboard"
            customCaptions={[
              "AI Course Portfolio - Main Dashboard",
              "Learning Journey Section",
              "Mobile Responsive Design",
              "Mobile Navigation & Features",
              "Matrix Effects & Animations",
              "Next.js Frontend Architecture"
            ]}
          />
        </div>

        {/* Divider */}
        <MatrixDivider variant="glow" />

        {/* Implementation Highlights */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold text-green-400 mb-6 text-center">
            Implementation Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">Modern Architecture</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Next.js 15 with App Router for optimal performance
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  TypeScript strict mode for type safety
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Server-side rendering and static generation
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">Animation & Effects</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Custom Matrix rain effect with WebGL optimization
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Anime.js for smooth, performant animations
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Intersection Observer for scroll-triggered effects
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">User Experience</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Responsive design with mobile-first approach
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Accessibility-compliant navigation and interactions
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Progressive loading and optimized images
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">Performance</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Optimized bundle splitting and lazy loading
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Image optimization with Next.js Image component
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Edge deployment with Vercel for global CDN
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <MatrixDivider variant="dots" />

        {/* CTA Section */}
        <div className="text-center py-8">
          <div className="flex gap-4 justify-center">
            <Link href="/">
              <Button size="lg" className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-black font-bold">
                <ExternalLink className="mr-2" size={20} />
                Explore the Portfolio
              </Button>
            </Link>
            <Link href="https://github.com/ThomasJButler/MasteringAICoursePortfolio" target="_blank">
              <Button size="lg" variant="outline" className="border-green-500 text-green-400 hover:bg-green-500/10">
                <Github className="mr-2" size={20} />
                View Source Code
              </Button>
            </Link>
          </div>
        </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}