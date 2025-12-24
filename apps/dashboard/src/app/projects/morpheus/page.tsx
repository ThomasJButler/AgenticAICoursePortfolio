/**
 * @author Tom Butler
 * @date 2025-12-24
 * @description Morpheus project showcase page - Intelligent document Q&A system with RAG
 */

"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, ExternalLink, FileText, MessageSquare, Shield, Database, Zap, Brain, Lock } from "lucide-react";
import { useEffect, useRef } from "react";
import { animate as anime, stagger } from 'animejs';
import { animeEasings, durations } from "@/lib/easings";
import ImageGallery from "@/components/ui/ImageGallery";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import MatrixRain from "@/components/animations/MatrixRain";
import MatrixDivider from "@/components/ui/MatrixDivider";

export default function MorpheusPage() {
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
            Morpheus
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Intelligent document reasoning system with semantic search and source citations. Upload private documents, ask questions in natural language, and receive accurate answers with citations.
          </p>

          <div className="flex gap-4 justify-center mt-6">
            <Link href="https://morpheusrag.vercel.app" target="_blank">
              <Button className="bg-green-500 hover:bg-green-600 text-black font-semibold">
                <ExternalLink className="mr-2" size={18} />
                View Live Demo
              </Button>
            </Link>
            <Link href="https://github.com/ThomasJButler/Morpheus" target="_blank">
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
              Morpheus is a Retrieval-Augmented Generation (RAG) system featuring a Matrix-themed interface.
              Users can upload private documents and ask questions in natural language, receiving accurate
              answers with source citations from their uploaded content.
            </p>
            <p className="text-gray-300 mb-4">
              The system uses session-based isolation with fresh Pinecone vector namespaces per user, ensuring
              complete data privacy. When sessions end, all data is automatically deleted with no permanent storage.
            </p>
            <p className="text-gray-300">
              Built with a focus on cost efficiency, Morpheus offers a token-based pricing model compared to
              traditional subscription alternatives, making it accessible for researchers and developers.
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
                  <strong className="text-white">Frontend:</strong> Next.js, TypeScript, Tailwind CSS
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                <span className="text-gray-300">
                  <strong className="text-white">Backend:</strong> Python, FastAPI
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                <span className="text-gray-300">
                  <strong className="text-white">AI/ML:</strong> Claude (Anthropic), OpenAI embeddings, LangChain
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                <span className="text-gray-300">
                  <strong className="text-white">Database:</strong> Pinecone vector database
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                <span className="text-gray-300">
                  <strong className="text-white">Deployment:</strong> Vercel (frontend), API backend
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
                title: "Document Upload",
                description: "Upload and process multiple document formats for intelligent querying",
                icon: FileText,
                color: "from-green-500/20 to-green-600/10",
                borderColor: "border-green-500/30"
              },
              {
                title: "Natural Language Q&A",
                description: "Ask questions in plain English and get accurate, cited responses",
                icon: MessageSquare,
                color: "from-cyan-500/20 to-cyan-600/10",
                borderColor: "border-cyan-500/30"
              },
              {
                title: "RAG Modes",
                description: "Multiple retrieval modes including semantic search and hybrid approaches",
                icon: Brain,
                color: "from-purple-500/20 to-purple-600/10",
                borderColor: "border-purple-500/30"
              },
              {
                title: "Session Isolation",
                description: "Complete data privacy with session-based namespaces and automatic cleanup",
                icon: Shield,
                color: "from-yellow-500/20 to-yellow-600/10",
                borderColor: "border-yellow-500/30"
              },
              {
                title: "Vector Search",
                description: "Semantic search using Pinecone for accurate document retrieval",
                icon: Database,
                color: "from-red-500/20 to-red-600/10",
                borderColor: "border-red-500/30"
              },
              {
                title: "Fast Performance",
                description: "Optimized chunking and embedding for quick responses",
                icon: Zap,
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

        {/* How It Works */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold text-green-400 mb-6 text-center">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-500/20 rounded-full p-4 mb-4">
                <FileText className="text-green-400" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">1. Document Processing</h3>
              <p className="text-gray-300">
                Documents are chunked and converted to vector embeddings using OpenAI&apos;s embedding models
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-cyan-500/20 rounded-full p-4 mb-4">
                <Database className="text-cyan-400" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">2. Vector Storage</h3>
              <p className="text-gray-300">
                Embeddings are stored in Pinecone under session-specific namespaces for isolation
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-purple-500/20 rounded-full p-4 mb-4">
                <Brain className="text-purple-400" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">3. Semantic Retrieval</h3>
              <p className="text-gray-300">
                User queries are embedded and matched against stored vectors for relevant context
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-yellow-500/20 rounded-full p-4 mb-4">
                <MessageSquare className="text-yellow-400" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">4. Response Generation</h3>
              <p className="text-gray-300">
                Claude generates context-informed responses with source citations
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-red-500/20 rounded-full p-4 mb-4">
                <Shield className="text-red-400" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">5. Session Cleanup</h3>
              <p className="text-gray-300">
                All data is automatically deleted when sessions end, preventing persistence
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-indigo-500/20 rounded-full p-4 mb-4">
                <Lock className="text-indigo-400" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">6. Privacy First</h3>
              <p className="text-gray-300">
                No permanent storage ensures complete data privacy and security
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <MatrixDivider variant="glow" />

        {/* Project Screenshots */}
        <div ref={galleryRef} className="mb-12" style={{ opacity: 0 }}>
          <h2 className="text-3xl font-semibold text-center text-white mb-8">
            Project Screenshots
          </h2>
          <ImageGallery
            images={[
              "https://res.cloudinary.com/depqttzlt/image/upload/v1766589728/morpheusdiagram_nhrr6o.png",
              "https://res.cloudinary.com/depqttzlt/image/upload/v1766588474/morpheusfrontend_bgoygr.png",
              "https://res.cloudinary.com/depqttzlt/image/upload/v1766588470/morpheusbackend_toimxa.png",
              "https://res.cloudinary.com/depqttzlt/image/upload/v1766580765/morpheusupload_b8y1gi.png",
              "https://res.cloudinary.com/depqttzlt/image/upload/v1766580765/morpheuschat_evuiol.png",
              "https://res.cloudinary.com/depqttzlt/image/upload/v1766580765/morpheusapisetup_phzp53.png",
              "https://res.cloudinary.com/depqttzlt/image/upload/v1766593632/morpheusRAGmodes_gdbwe0.png"
            ]}
            title="Morpheus"
            customCaptions={[
              "System Architecture Sequence Diagram",
              "Frontend Interface and User Experience",
              "Backend Architecture and Data Flow",
              "Document Upload Interface",
              "Chat Interface with AI Responses",
              "Settings Panel and API Configuration",
              "RAG Modes and Retrieval Strategies"
            ]}
          />
        </div>

        {/* Divider */}
        <MatrixDivider variant="dots" />

        {/* Implementation Highlights */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold text-green-400 mb-6 text-center">
            Implementation Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">Frontend Architecture</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Next.js with TypeScript for type-safe development
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Matrix-themed UI with Tailwind CSS
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Real-time chat interface for document querying
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Responsive design for all devices
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">Backend Processing</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  FastAPI for high-performance async operations
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  LangChain for RAG pipeline orchestration
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Document chunking with overlap for context preservation
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  RESTful API design for clean integration
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">Privacy & Security</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Session-based isolation with unique namespaces
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Automatic data deletion on session end
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  No permanent storage of user documents
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Secure API key management
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">RAG Implementation</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Pinecone vector database for semantic search
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  OpenAI embeddings for document vectorization
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Claude for context-aware response generation
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Multiple RAG modes for different use cases
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <MatrixDivider variant="glow" />

        {/* CTA Section */}
        <div className="text-center py-8">
          <div className="flex gap-4 justify-center">
            <Link href="https://morpheusrag.vercel.app" target="_blank">
              <Button size="lg" className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-black font-bold">
                <ExternalLink className="mr-2" size={20} />
                Try the Live Demo
              </Button>
            </Link>
            <Link href="https://github.com/ThomasJButler/Morpheus" target="_blank">
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
