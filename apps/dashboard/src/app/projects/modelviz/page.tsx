/**
 * @author Tom Butler
 * @date 2025-12-22
 * @description ModelViz project showcase page - Interactive analytics platform for AI models
 */

"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, ExternalLink, Settings, Code2, BarChart3, Sparkles, Layers, Activity, DollarSign, Box, Lock } from "lucide-react";
import { useEffect, useRef } from "react";
import { animate as anime, stagger } from 'animejs';
import { animeEasings, durations } from "@/lib/easings";
import ImageGallery from "@/components/ui/ImageGallery";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import MatrixRain from "@/components/animations/MatrixRain";
import MatrixDivider from "@/components/ui/MatrixDivider";

export default function ModelVizPage() {
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
          <Button variant="ghost" className="mb-8 text-gray-400 hover:text-white hover:bg-green-400/20 border border-transparent hover:border-green-400/50">
            <ArrowLeft className="mr-2" size={16} />
            Back to Portfolio
          </Button>
        </Link>

        {/* Header */}
        <div ref={headerRef} className="text-center mb-12" style={{ opacity: 0 }}>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            ModelViz
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Interactive analytics platform for comparing AI models across multiple providers with real-time performance metrics, cost analysis, and 3D visualisations
          </p>

          <div className="flex gap-4 justify-center mt-6">
            <Link href="https://modelviz.vercel.app/" target="_blank">
              <Button className="bg-green-500 hover:bg-green-600 text-black font-semibold">
                <ExternalLink className="mr-2" size={18} />
                View Live Site
              </Button>
            </Link>
            <Link href="https://github.com/ThomasJButler/ModelViz" target="_blank">
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
            <h2 className="text-2xl font-semibold text-green-400 mb-4">
              What It Does
            </h2>
            <p className="text-gray-300 mb-4">
              ModelViz enables you to compare OpenAI, Anthropic, Google (Gemini), and Perplexity models side by side. 
              Test prompts across multiple models simultaneously, track usage metrics, analyse costs, and visualise 
              API performance with an immersive cyberpunk-themed interface.
            </p>
            <p className="text-gray-300">
              The platform provides real-time analytics, cost tracking, and 3D visualisations to help developers and 
              researchers make informed decisions about which AI models to use for their projects.
            </p>
          </div>

          {/* Technical Stack */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6" style={{ opacity: 0 }}>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
              Technical Stack
            </h2>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                <span className="text-gray-300">
                  <strong className="text-white">Framework:</strong> Next.js 16 (App Router, Turbopack), React 19
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                <span className="text-gray-300">
                  <strong className="text-white">Language:</strong> TypeScript (strict mode)
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                <span className="text-gray-300">
                  <strong className="text-white">3D Graphics:</strong> @react-three/fiber, @react-three/drei
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                <span className="text-gray-300">
                  <strong className="text-white">UI/Charts:</strong> Radix UI, shadcn/ui, Recharts, Monaco Editor
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                <span className="text-gray-300">
                  <strong className="text-white">Styling:</strong> Tailwind CSS, Framer Motion 12
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <MatrixDivider variant="glow" />

        {/* Key Pages Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-center text-white mb-8">
            Key Pages
          </h2>
          <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Playground",
                description: "Test AI models with text, JSON, or code input",
                icon: Code2,
                color: "from-green-500/20 to-green-600/10",
                borderColor: "border-green-500/30"
              },
              {
                title: "Dashboard",
                description: "Real-time API analytics with multiple views",
                icon: BarChart3,
                color: "from-cyan-500/20 to-cyan-600/10",
                borderColor: "border-cyan-500/30"
              },
              {
                title: "Analytics",
                description: "Advanced insights and predictive analytics",
                icon: Sparkles,
                color: "from-purple-500/20 to-purple-600/10",
                borderColor: "border-purple-500/30"
              },
              {
                title: "Settings",
                description: "API key management with import/export",
                icon: Settings,
                color: "from-yellow-500/20 to-yellow-600/10",
                borderColor: "border-yellow-500/30"
              }
            ].map((page, index) => {
              const Icon = page.icon;
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${page.color} border ${page.borderColor} rounded-lg p-6 hover:scale-105 transition-transform duration-300`}
                  style={{ opacity: 0 }}
                >
                  <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                    <Icon className="text-white" size={24} />
                    {page.title}
                  </h3>
                  <p className="text-sm text-gray-400">{page.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <MatrixDivider variant="dots" />

        {/* Key Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-center text-white mb-8">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Multi-Provider Support",
                description: "Compare OpenAI, Anthropic, Google Gemini, and Perplexity models",
                icon: Layers,
                color: "from-green-500/20 to-green-600/10",
                borderColor: "border-green-500/30"
              },
              {
                title: "Real-time Analytics",
                description: "Track API performance, response times, and usage patterns",
                icon: Activity,
                color: "from-cyan-500/20 to-cyan-600/10",
                borderColor: "border-cyan-500/30"
              },
              {
                title: "Cost Analysis",
                description: "Monitor and compare costs across different AI providers",
                icon: DollarSign,
                color: "from-purple-500/20 to-purple-600/10",
                borderColor: "border-purple-500/30"
              },
              {
                title: "3D Visualisations",
                description: "Immersive cyberpunk-themed data visualisations with Three.js",
                icon: Box,
                color: "from-yellow-500/20 to-yellow-600/10",
                borderColor: "border-yellow-500/30"
              },
              {
                title: "Demo Mode",
                description: "Test the interface without API keys",
                icon: Code2,
                color: "from-red-500/20 to-red-600/10",
                borderColor: "border-red-500/30"
              },
              {
                title: "Secure Storage",
                description: "API keys stored securely in browser localStorage with 90-day retention",
                icon: Lock,
                color: "from-indigo-500/20 to-indigo-600/10",
                borderColor: "border-indigo-500/30"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${feature.color} border ${feature.borderColor} rounded-lg p-6 hover:scale-105 transition-transform duration-300`}
              >
                <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                  <feature.icon className="text-white" size={24} />
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <MatrixDivider variant="glow" />

        {/* Supported Models */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold text-green-400 mb-6 text-center">
            Supported AI Models
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">OpenAI</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  GPT-4o, GPT-4 Turbo
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  GPT-3.5, o1 models
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">Anthropic</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Claude 3.5 Sonnet
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Claude 3 Opus & Haiku
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">Google</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Gemini 2.0 Flash
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Gemini 1.5 Pro & Flash
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">Perplexity</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Sonar models
                </li>
              </ul>
            </div>
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
              "https://res.cloudinary.com/depqttzlt/image/upload/v1766595441/modelvizsequence_gtwfxa.png",
              "https://res.cloudinary.com/depqttzlt/image/upload/v1766586749/modelvizintro_aq3uq5.png",
              "https://res.cloudinary.com/depqttzlt/image/upload/v1766586753/modelvizstart_wnffmd.png",
              "https://res.cloudinary.com/depqttzlt/image/upload/v1766586748/modelvizdashboard1_vmsrdc.png",
              "https://res.cloudinary.com/depqttzlt/image/upload/v1766586748/modelvizanswer_lkqdlr.png",
              "https://res.cloudinary.com/depqttzlt/image/upload/v1766586749/modelvizdashboard2_davkpv.png"
            ]}
            title="ModelViz"
            customCaptions={[
              "System Architecture Sequence Diagram",
              "Welcome Page - Introduction to ModelViz",
              "Getting Started with Model Comparison",
              "Analytics Dashboard - Real-time Metrics",
              "AI Model Response Output",
              "API Output Statistics and Performance Analysis"
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
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">Performance & Architecture</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Turbopack for blazingly fast development
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Bundle splitting for optimal loading performance
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Edge-compatible API routes for global performance
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">Data Management</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  LocalStorage & IndexedDB for client-side persistence
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  90-day data retention with automatic cleanup
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  API key import/export functionality
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">User Experience</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Cyberpunk-themed interface with 3D effects
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Monaco Editor for code input
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Responsive design for all devices
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">Analytics & Insights</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Real-time API performance tracking
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Cost comparison across providers
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Predictive analytics for usage patterns
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
            <Link href="https://modelviz.vercel.app/" target="_blank">
              <Button size="lg" className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-black font-bold">
                <ExternalLink className="mr-2" size={20} />
                Try the Live Demo
              </Button>
            </Link>
            <Link href="https://github.com/ThomasJButler/ModelViz" target="_blank">
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
