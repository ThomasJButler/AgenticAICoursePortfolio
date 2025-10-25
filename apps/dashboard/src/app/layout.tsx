/**
 * @author Tom Butler
 * @date 2025-10-25
 * @description Root layout for the Next.js application with global metadata and font configuration
 */

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Course Portfolio | Tom Butler",
  description: "Showcasing cutting-edge AI projects from the Mastering Generative AI & Agents for Developers bootcamp. Features LangChain, RAG, Multi-Agent Systems, and more.",
  keywords: "AI, Machine Learning, LangChain, RAG, Multi-Agent Systems, GPT-4, Portfolio, Codecademy",
  authors: [{ name: "Tom Butler", url: "https://github.com/ThomasJButler" }],
  openGraph: {
    title: "AI Course Portfolio | Tom Butler",
    description: "Explore 6 cutting-edge AI projects showcasing mastery of modern AI development",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
