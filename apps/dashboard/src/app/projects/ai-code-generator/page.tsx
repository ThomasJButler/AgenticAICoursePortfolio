/**
 * @author Tom Butler
 * @date 2025-10-25
 * @description AI Code Generator project showcase page with animated features and gallery
 */

"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, ExternalLink, Languages, FlaskConical, FileText, Gauge, CheckCircle, Smartphone } from "lucide-react";
import { useEffect, useRef } from "react";
import { animate as anime, stagger } from 'animejs';
import { animeEasings, durations } from "@/lib/easings";
import ImageGallery from "@/components/ui/ImageGallery";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import MatrixRain from "@/components/animations/MatrixRain";
import MatrixDivider from "@/components/ui/MatrixDivider";

export default function AICodeGeneratorPage() {
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
            Code Generator
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Generate production-ready code with AI assistance
          </p>

          <div className="flex gap-4 justify-center mt-6">
            <Link href="https://theaigenerator.vercel.app/" target="_blank">
              <Button className="bg-green-500 hover:bg-green-600 text-black font-semibold">
                <ExternalLink className="mr-2" size={18} />
                View Live Site
              </Button>
            </Link>
            <Link href="https://github.com/ThomasJButler/AICodeGenerator" target="_blank">
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
              Project Overview
            </h2>
            <p className="text-gray-300 mb-4">
              An intelligent natural language to code conversion system that leverages advanced AI models
              to generate high-quality, well-structured code from plain English descriptions. Features
              support for multiple programming languages and frameworks with automated testing and
              documentation generation.
            </p>
            <p className="text-gray-300">
              This project demonstrates advanced prompt engineering, multi-language code generation,
              and the integration of AI-powered development tools to accelerate the software development process.
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
                  <strong className="text-white">Backend:</strong> Flask (Python), RESTful APIs
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                <span className="text-gray-300">
                  <strong className="text-white">Frontend:</strong> React, TypeScript, Modern CSS
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                <span className="text-gray-300">
                  <strong className="text-white">AI Integration:</strong> LangChain, GPT-4o, OpenAI API
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                <span className="text-gray-300">
                  <strong className="text-white">Deployment:</strong> Vercel, Cloud Functions
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
                title: "Multi-Language Support",
                description: "Generate code in Python, JavaScript, Java, C#, and more",
                icon: Languages,
                color: "from-green-500/20 to-green-600/10",
                borderColor: "border-green-500/30"
              },
              {
                title: "Automated Testing",
                description: "Generate comprehensive test cases for all functions",
                icon: FlaskConical,
                color: "from-cyan-500/20 to-cyan-600/10",
                borderColor: "border-cyan-500/30"
              },
              {
                title: "Documentation Generation",
                description: "Create detailed documentation with examples",
                icon: FileText,
                color: "from-purple-500/20 to-purple-600/10",
                borderColor: "border-purple-500/30"
              },
              {
                title: "Real-time Streaming",
                description: "Watch code generate in real-time with syntax highlighting",
                icon: Gauge,
                color: "from-yellow-500/20 to-yellow-600/10",
                borderColor: "border-yellow-500/30"
              },
              {
                title: "Code Quality Optimisation",
                description: "Best practices enforcement and performance optimisation",
                icon: CheckCircle,
                color: "from-red-500/20 to-red-600/10",
                borderColor: "border-red-500/30"
              },
              {
                title: "Responsive Design",
                description: "Optimized for both desktop and mobile devices",
                icon: Smartphone,
                color: "from-indigo-500/20 to-indigo-600/10",
                borderColor: "border-indigo-500/30"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${feature.color} border ${feature.borderColor} rounded-lg p-6 hover:scale-105 transition-transform duration-300`}
                style={{ opacity: 0 }}
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
        <MatrixDivider variant="dots" />

        {/* Project Screenshots */}
        <div ref={galleryRef} className="mb-12" style={{ opacity: 0 }}>
          <h2 className="text-3xl font-semibold text-center text-white mb-8">
            Project Screenshots
          </h2>
          <ImageGallery
            images={[
              "https://res.cloudinary.com/depqttzlt/image/upload/v1758201680/codegeneratorfrontend_jccy53.png",
              "https://res.cloudinary.com/depqttzlt/image/upload/v1758201815/codegeneratorcode_lrojre.png",
              "https://res.cloudinary.com/depqttzlt/image/upload/v1758201680/codegeneratortests_an5wmq.png",
              "https://res.cloudinary.com/depqttzlt/image/upload/v1758201680/codegeneratordocs_snywas.png",
              "https://res.cloudinary.com/depqttzlt/image/upload/v1758201680/ai-code-generator-rouge.vercel.appmobile1__jlxcm2.png",
              "https://res.cloudinary.com/depqttzlt/image/upload/v1758201680/ai-code-generator-rouge.vercel.appmobile2_cxmy8i.png"
            ]}
            title="Code Generator"
            customCaptions={[
              "Frontend Application Interface",
              "Code Generation Output",
              "Automated Test Generation",
              "Documentation Generation",
              "Mobile Responsive Interface",
              "Mobile Code Generation View"
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
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">Code Generation Engine</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Advanced LangChain integration with GPT-4o
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Multi-language code generation with context awareness
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Real-time streaming code output with syntax highlighting
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">Testing & Documentation</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Automated test case generation for functions
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Comprehensive code documentation generation
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Code quality validation and best practices enforcement
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">Architecture</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Flask backend with RESTful API design
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  React frontend with TypeScript for type safety
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Optimized prompt engineering for code quality
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">User Experience</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Responsive design for desktop and mobile
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Tabbed interface for code, tests, and documentation
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Copy-to-clipboard functionality and code export
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
            <Link href="https://theaigenerator.vercel.app/" target="_blank">
              <Button size="lg" className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-black font-bold">
                <ExternalLink className="mr-2" size={20} />
                Try the Live Demo
              </Button>
            </Link>
            <Link href="https://github.com/ThomasJButler/AICodeGenerator" target="_blank">
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
