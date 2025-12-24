/**
 * @author Tom Butler
 * @date 2025-12-22
 * @description ReviewBot Protocol project showcase page - AI-powered GitHub PR reviews
 */

"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, Shield, TrendingUp, Code2, Sparkles, Gauge, LayoutDashboard, KeyRound } from "lucide-react";
import { useEffect, useRef } from "react";
import { animate as anime, stagger } from 'animejs';
import { animeEasings, durations } from "@/lib/easings";
import ImageGallery from "@/components/ui/ImageGallery";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import MatrixRain from "@/components/animations/MatrixRain";
import MatrixDivider from "@/components/ui/MatrixDivider";

export default function ReviewBotProtocolPage() {
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
            ReviewBot Protocol
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            AI-powered GitHub PR reviews with automated code analysis and intelligent feedback
          </p>

          <div className="flex gap-4 justify-center mt-6">
            <Link href="https://github.com/ThomasJButler/ReviewBot-Protocol" target="_blank">
              <Button className="bg-green-500 hover:bg-green-600 text-black font-semibold">
                <Github className="mr-2" size={18} />
                View on GitHub
              </Button>
            </Link>
          </div>
          
          <div className="mt-4 inline-block bg-yellow-900/30 border border-yellow-500/30 rounded-lg px-4 py-2">
            <p className="text-yellow-400 text-sm">
              Note: No live deployment due to the sensitive nature of this project
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Project Overview */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6" style={{ opacity: 0 }}>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">
              What Is This?
            </h2>
            <p className="text-gray-300 mb-4">
              ReviewBot Protocol is a full-stack AI code review system that automatically analyses GitHub pull requests 
              and provides intelligent feedback. Think of it as understanding how tools like CodeRabbit work by building 
              one from scratch.
            </p>
            <p className="text-gray-300">
              The system catches common issues before human reviewers need to look at the code, saving development time 
              and improving code quality through automated analysis. Built for the Codecademy Generative AI & Agents bootcamp.
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
                  <strong className="text-white">Frontend:</strong> Next.js 15, TypeScript, Tailwind CSS
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                <span className="text-gray-300">
                  <strong className="text-white">Backend:</strong> FastAPI (Python 3.11+), SQLAlchemy
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                <span className="text-gray-300">
                  <strong className="text-white">AI Integration:</strong> LangChain, LangGraph, OpenAI GPT-4o
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                <span className="text-gray-300">
                  <strong className="text-white">GitHub:</strong> GitHub API v3/GraphQL, OAuth, Webhooks
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                <span className="text-gray-300">
                  <strong className="text-white">Database:</strong> PostgreSQL/SQLite
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <MatrixDivider variant="glow" />

        {/* Why This Is Useful */}
        <div className="bg-gradient-to-br from-green-900/20 to-cyan-900/20 border border-green-500/30 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold text-green-400 mb-6 text-center">
            Why This Is Useful
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <TrendingUp className="text-cyan-400 mx-auto mb-3" size={40} />
              <h3 className="text-xl font-semibold text-white mb-2">Time Savings</h3>
              <p className="text-gray-300 text-sm">
                Automated reviews catch security vulnerabilities, performance issues, and code quality problems instantly
              </p>
            </div>
            <div className="text-center">
              <Code2 className="text-green-400 mx-auto mb-3" size={40} />
              <h3 className="text-xl font-semibold text-white mb-2">Learning Through Building</h3>
              <p className="text-gray-300 text-sm">
                Demonstrates how modern AI-powered developer tools work under the hood
              </p>
            </div>
            <div className="text-center">
              <Sparkles className="text-purple-400 mx-auto mb-3" size={40} />
              <h3 className="text-xl font-semibold text-white mb-2">Real-World Application</h3>
              <p className="text-gray-300 text-sm">
                Shows integration of multiple complex systems working together in practice
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <MatrixDivider variant="dots" />

        {/* Key Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-center text-white mb-8">
            Key Features
          </h2>
          <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Automated PR Reviews",
                description: "GitHub webhook integration triggers automatic analysis when PRs are opened or updated",
                icon: Code2,
                color: "from-green-500/20 to-green-600/10",
                borderColor: "border-green-500/30"
              },
              {
                title: "AI-Generated Comments",
                description: "Intelligent inline comments posted directly to pull requests",
                icon: Sparkles,
                color: "from-cyan-500/20 to-cyan-600/10",
                borderColor: "border-cyan-500/30"
              },
              {
                title: "Security Analysis",
                description: "OWASP Top 10 vulnerabilities, secret detection, dependency analysis",
                icon: Shield,
                color: "from-purple-500/20 to-purple-600/10",
                borderColor: "border-purple-500/30"
              },
              {
                title: "Performance Review",
                description: "Algorithm complexity, memory usage, optimization suggestions",
                icon: Gauge,
                color: "from-yellow-500/20 to-yellow-600/10",
                borderColor: "border-yellow-500/30"
              },
              {
                title: "Custom Dashboard",
                description: "Review history, analytics, and repository management interface",
                icon: LayoutDashboard,
                color: "from-red-500/20 to-red-600/10",
                borderColor: "border-red-500/30"
              },
              {
                title: "GitHub OAuth",
                description: "Secure authentication flow with GitHub integration",
                icon: KeyRound,
                color: "from-indigo-500/20 to-indigo-600/10",
                borderColor: "border-indigo-500/30"
              }
            ].map((feature, index) => {
              const Icon = feature.icon || Code2;
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${feature.color} border ${feature.borderColor} rounded-lg p-6 hover:scale-105 transition-transform duration-300`}
                  style={{ opacity: 0 }}
                >
                  <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                    <Icon className="text-white" size={24} />
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <MatrixDivider variant="glow" />

        {/* AI-Powered Analysis */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold text-green-400 mb-6 text-center">
            AI-Powered Analysis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">Security</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  OWASP Top 10 vulnerability detection
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Secret and credential detection
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Dependency vulnerability analysis
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">Performance</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Algorithm complexity analysis
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Memory usage optimization
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Performance improvement suggestions
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">Code Quality</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Code style and best practices
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Maintainability metrics
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Review summaries with scoring
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">Documentation</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Missing documentation detection
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Unclear naming identification
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Test coverage gap analysis
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
            Project Screenshot
          </h2>
          <ImageGallery
            images={[
              "https://github.com/user-attachments/assets/c5f6f9cb-7f4f-44b5-8a70-a0bea3e25a7e"
            ]}
            title="ReviewBot Protocol"
            customCaptions={[
              "ReviewBot Protocol Dashboard Interface"
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
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">AI Workflows</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Custom LangChain chains for different review types
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  LangGraph state machines for complex workflows
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Specialized prompts for security, performance, and quality
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">GitHub Integration</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  GitHub API v3/GraphQL integration
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Webhook event processing
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Automated PR commenting
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">Full-Stack Architecture</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Next.js 15 frontend with custom cyber/matrix theme
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  FastAPI backend with SQLAlchemy ORM
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  PostgreSQL/SQLite database support
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">Production Ready</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Error handling and logging
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  TypeScript strict mode
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Secure OAuth authentication flow
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
            <Link href="https://github.com/ThomasJButler/ReviewBot-Protocol" target="_blank">
              <Button size="lg" className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-black font-bold">
                <Github className="mr-2" size={20} />
                View Source Code
              </Button>
            </Link>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            Note: This is a portfolio demonstration project. For production code review needs, consider established tools like CodeRabbit.
          </p>
        </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
