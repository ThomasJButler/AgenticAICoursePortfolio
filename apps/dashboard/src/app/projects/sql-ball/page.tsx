/**
 * @author Tom Butler
 * @date 2025-10-25
 * @description SQL-Ball project showcase page with football analytics demonstration
 */

"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, ExternalLink, MessageSquare, Activity, User, TrendingUp, BarChart3, Lightbulb } from "lucide-react";
import { useEffect, useRef } from "react";
import { animate as anime, stagger } from 'animejs';
import { animeEasings, durations } from "@/lib/easings";
import ImageGallery from "@/components/ui/ImageGallery";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import MatrixRain from "@/components/animations/MatrixRain";
import MatrixDivider from "@/components/ui/MatrixDivider";

export default function SQLBallPage() {
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
            SQL-Ball
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Football data analytics with natural language queries and AI insights
          </p>

          <div className="flex gap-4 justify-center mt-6">
            <Link href="https://sql-ball.vercel.app/" target="_blank">
              <Button className="bg-green-500 hover:bg-green-600 text-black font-semibold">
                <ExternalLink className="mr-2" size={18} />
                View Live Site
              </Button>
            </Link>
            <Link href="https://github.com/ThomasJButler/sql-ball" target="_blank">
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
              A comprehensive data analytics platform that combines natural language queries with
              football match statistics. Features AI-powered insights, player performance analysis,
              and predictive modeling using Supabase for real-time data processing.
            </p>
            <p className="text-gray-300">
              This project demonstrates advanced natural language to SQL conversion,
              real-time database integration, and sophisticated sports data visualisation techniques
              to create an intuitive analytics platform for football enthusiasts.
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
                  <strong className="text-white">Database:</strong> Supabase (PostgreSQL), Real-time subscriptions
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                <span className="text-gray-300">
                  <strong className="text-white">Frontend:</strong> React, TypeScript, D3.js visualisations
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                <span className="text-gray-300">
                  <strong className="text-white">AI Integration:</strong> LangChain, OpenAI GPT-4, RAG pipeline
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
                title: "Natural Language Queries",
                description: "Ask questions in plain English and get SQL results",
                icon: MessageSquare,
                color: "from-green-500/20 to-green-600/10",
                borderColor: "border-green-500/30"
              },
              {
                title: "Real-time Analytics",
                description: "Live match data integration with instant updates",
                icon: Activity,
                color: "from-cyan-500/20 to-cyan-600/10",
                borderColor: "border-cyan-500/30"
              },
              {
                title: "Player Performance",
                description: "Comprehensive player statistics and analysis",
                icon: User,
                color: "from-purple-500/20 to-purple-600/10",
                borderColor: "border-purple-500/30"
              },
              {
                title: "Match Predictions",
                description: "AI-powered match outcome predictions",
                icon: TrendingUp,
                color: "from-yellow-500/20 to-yellow-600/10",
                borderColor: "border-yellow-500/30"
              },
              {
                title: "Interactive Visualizations",
                description: "Dynamic charts and graphs with D3.js",
                icon: BarChart3,
                color: "from-red-500/20 to-red-600/10",
                borderColor: "border-red-500/30"
              },
              {
                title: "Fantasy Insights",
                description: "Data-driven fantasy football recommendations",
                icon: Lightbulb,
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
              "https://res.cloudinary.com/depqttzlt/image/upload/v1758053634/SQLballdesktop_kmxlox.png",
              "https://res.cloudinary.com/depqttzlt/image/upload/v1758053633/sqlballbuilderprompt_xgxxvu.png",
              "https://res.cloudinary.com/depqttzlt/image/upload/v1758053631/sqlball_yqwjsp.png",
              "https://res.cloudinary.com/depqttzlt/image/upload/v1758053634/sqlreturnedata_ltwuep.png",
              "https://res.cloudinary.com/depqttzlt/image/upload/v1758053631/SQL-Ball_zd6q2p.png",
              "https://res.cloudinary.com/depqttzlt/image/upload/v1758053628/aiassistantlivecalculation_lv3n0h.png",
              "https://res.cloudinary.com/depqttzlt/image/upload/v1758053633/sqlballmobile_bwzffy.png"
            ]}
            title="SQL-Ball"
            customCaptions={[
              "SQL-Ball Main Dashboard",
              "SQL Builder Prompt Interface",
              "Interactive SQL Ball Interface",
              "SQL Query Results Display",
              "Football Analytics Dashboard",
              "AI Assistant Live Calculations",
              "Mobile Responsive Design"
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
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">Natural Language Processing</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Advanced prompt engineering for SQL generation
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Context-aware query understanding
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Real-time semantic analysis of user intent
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">Database Architecture</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Optimized PostgreSQL schema design
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Supabase integration for real-time data
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Efficient indexing for complex queries
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">AI Integration</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  LangChain framework for RAG implementation
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Vector embeddings for semantic search
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  OpenAI GPT-4 for intelligent query generation
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
                  Interactive data visualisations with D3.js
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Real-time feedback and error handling
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
            <Link href="https://sql-ball.vercel.app/" target="_blank">
              <Button size="lg" className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-black font-bold">
                <ExternalLink className="mr-2" size={20} />
                Try the Live Demo
              </Button>
            </Link>
            <Link href="https://github.com/ThomasJButler/sql-ball" target="_blank">
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