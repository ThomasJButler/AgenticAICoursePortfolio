/**
 * @author Tom Butler
 * @date 2025-10-25
 * @description AI Comparison Showcase project page demonstrating multi-model response comparison
 */

"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, ExternalLink, Code2, Sparkles, Zap } from "lucide-react";
import { useEffect, useRef } from "react";
import { animate as anime, stagger } from 'animejs';
import { animeEasings, durations } from "@/lib/easings";
import ImageGallery from "@/components/ui/ImageGallery";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import MatrixRain from "@/components/animations/MatrixRain";
import MatrixDivider from "@/components/ui/MatrixDivider";

export default function AIComparisonShowcasePage() {
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
            <Sparkles className="text-green-400 mr-3" size={32} />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              AI Comparison Showcase
            </h1>
            <Sparkles className="text-cyan-400 ml-3" size={32} />
          </div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Compare responses from multiple AI models side-by-side in real-time
          </p>

          <div className="flex gap-4 justify-center mt-6">
            <Link href="https://ai-comparison-showcase.vercel.app" target="_blank">
              <Button className="bg-green-500 hover:bg-green-600 text-black font-semibold">
                <ExternalLink className="mr-2" size={18} />
                View Live Site
              </Button>
            </Link>
            <Link href="https://github.com/ThomasJButler/AI-Comparison-Showcase-" target="_blank">
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
              <Code2 className="mr-2" size={24} />
              Project Overview
            </h2>
            <p className="text-gray-300 mb-4">
              A cutting-edge web application that allows users to compare responses from multiple AI models
              simultaneously. Built with modern web technologies to provide real-time comparisons and insights
              into how different AI models interpret and respond to the same prompts.
            </p>
            <p className="text-gray-300">
              This project demonstrates advanced API integration, real-time data handling, and sophisticated
              UI/UX design patterns to create an intuitive comparison platform for AI enthusiasts and developers.
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
                  <strong className="text-white">Frontend:</strong> Next.js 14, TypeScript, Tailwind CSS
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                <span className="text-gray-300">
                  <strong className="text-white">AI Models:</strong> OpenAI GPT-4, Claude 3, Gemini Pro
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                <span className="text-gray-300">
                  <strong className="text-white">State Management:</strong> Zustand, TanStack Query
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                <span className="text-gray-300">
                  <strong className="text-white">Deployment:</strong> Vercel, Edge Functions
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
                title: "Real-time Comparison",
                description: "Compare AI responses as they stream in real-time",
                color: "from-green-500/20 to-green-600/10",
                borderColor: "border-green-500/30"
              },
              {
                title: "Multiple AI Models",
                description: "Support for GPT-4, Claude, Gemini, and more",
                color: "from-cyan-500/20 to-cyan-600/10",
                borderColor: "border-cyan-500/30"
              },
              {
                title: "Response Analytics",
                description: "Analyze response times, token usage, and costs",
                color: "from-purple-500/20 to-purple-600/10",
                borderColor: "border-purple-500/30"
              },
              {
                title: "Prompt Templates",
                description: "Save and reuse prompt templates for consistency",
                color: "from-yellow-500/20 to-yellow-600/10",
                borderColor: "border-yellow-500/30"
              },
              {
                title: "Export Results",
                description: "Export comparisons as JSON, CSV, or PDF",
                color: "from-red-500/20 to-red-600/10",
                borderColor: "border-red-500/30"
              },
              {
                title: "Dark Mode UI",
                description: "Beautiful dark theme optimized for developers",
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
              "https://res.cloudinary.com/depqttzlt/image/upload/v1758053629/buildmodel_bbmlst.png",
              "https://res.cloudinary.com/depqttzlt/image/upload/v1758053562/aicodeoutput_l0bp9d.png",
              "https://res.cloudinary.com/depqttzlt/image/upload/v1758053563/aicompare_wnz39e.png",
              "https://res.cloudinary.com/depqttzlt/image/upload/v1758029930/particleuniverseaicomparison_kydtbd.png",
              "https://res.cloudinary.com/depqttzlt/image/upload/v1737693677/Usage_Patterns_iw5j6a.png",
              "https://res.cloudinary.com/depqttzlt/image/upload/v1737694764/python_projects_cxbrnj.png"
            ]}
            title="AI Comparison Showcase"
            customCaptions={[
              "Building AI Model Integration",
              "AI Code Output Display",
              "AI Model Comparison Interface",
              "Particle Universe Visualization",
              "Usage Patterns Analytics",
              "Python Projects Dashboard"
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
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">Performance</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Optimized API calls with request batching
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Response caching for improved performance
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Lazy loading and code splitting
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">User Experience</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Responsive design for all devices
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Keyboard shortcuts for power users
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Accessibility-first development
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
            <Link href="https://ai-comparison-showcase.vercel.app" target="_blank">
              <Button size="lg" className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-black font-bold">
                <ExternalLink className="mr-2" size={20} />
                Try the Live Demo
              </Button>
            </Link>
            <Link href="https://github.com/ThomasJButler/AI-Comparison-Showcase-" target="_blank">
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