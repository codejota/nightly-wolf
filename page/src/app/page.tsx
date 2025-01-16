"use client";

import { useState, ReactNode } from "react";
import Link from "next/link";
import { ThemeProvider } from "@/components/themes/theme-context";
import { VSCodeInterface } from "@/components/VSCodeInterface";
import { Button } from "@/components/ui/button";
import CTACompact from "@/components/CtaCompact";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, Star, Download, Moon, Code, Terminal } from "lucide-react";
import "@/styles/globals.css";

interface HeroProps {
  title: ReactNode;
  description: ReactNode;
  size?: "sm" | "md" | "lg";
  children?: ReactNode;
}

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const Hero = ({ title, description, size = "lg", children }: HeroProps) => {
  const sizeClasses = {
    sm: "py-32",
    md: "py-48",
    lg: "py-32 md:py-48 lg:py-64",
  }[size];

  return (
    <div className={`w-full relative ${sizeClasses} `}>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-400/15 via-transparent to-background">
        <div
          className="absolute inset-0  "
          style={{
            backgroundImage: `
            linear-gradient(rgba(79, 70, 229, 0.05) 2px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.10) 2px, transparent 1px)
          `,
            backgroundSize: "40px 40px",
            backgroundPosition: "center center",
            mask: "radial-gradient(circle at center, black, transparent)",
          }}
        />
      </div>
      <div className="absolute inset-0 " />
      <div className="container relative">
        <div className="relative flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D4D] via-[#FF4D4D] to-[#9C40FF] sm:text-7xl mb-6">
            {title}
          </h1>
          <div
            className="max-w-2xl mx-auto text-xl text-gray-400/90 sm:text-2xl leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {description}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default function Page() {
  const [downloads, setDownloads] = useState("537");
  const [rating, setRating] = useState("5/5");

  return (
    <ThemeProvider>
      <div className="min-h-screen text-gray-200 ">
        {/* Header */}
        <header className="py-2 px-4 sm:px-6 lg:px-8 flex justify-between items-center border-b border-gray-800/20">
          <div className="flex items-center gap-2">
            <Moon className="h-8 w-8  " />
            <span className="text-4xl font-bold text-transparent text-white">
              Nightly Wolf Theme
            </span>
          </div>
          <nav className="flex items-center space-x-6">
            <Button variant="ghost" className="hover:bg-gray-800/50" asChild>
              <Link
                href="https://github.com/codejota/nightly-wolf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </Link>
            </Button>
          </nav>
        </header>

        <main className="relative flex flex-col min-h-screen">
          <Hero
            title={"Code Like a  pro "}
            description="An elegant and smooth VS Code theme for night developers. Designed to reduce eye strain and boost your productivity."
            size="md"
          >
            {" "}
            {/* <CTACompact /> */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8">
              <div className="flex items-center gap-2">
                <Download className="h-5 w-5 text-[#FF4D4D]" />
                <span className="text-lg text-gray-400">
                  {downloads} Downloads
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-400" />
                <span className="text-lg text-gray-400">{rating} Rating</span>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              <Button
                size="lg"
                className="bg-[#FF4D4D] hover:bg-[#FF4D4D]/90 text-white px-3 py-6 text-lg"
                asChild
              >
                <Link
                  href="https://marketplace.visualstudio.com/items?itemName=jotacode.nightly-wolf-theme"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MS Store page
                </Link>
              </Button>
              <Button
                size="lg"
                className="bg-[#FF4D4D] hover:bg-[#FF4D4D]/90 text-white px-2 py-6 text-lg"
                asChild
              >
                <Link
                  href="https://vscodethemes.com/e/jotacode.nightly-wolf-theme/nightly-wolf/open?with=vscode"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open VSCode
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-700 hover:bg-gray-800/50 text-gray-300 px-8 py-6 text-lg"
                asChild
              >
                <Link
                  href="https://vscodethemes.com/e/jotacode.nightly-wolf-theme/nightly-wolf/open?with=vscodeweb"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Try Online
                </Link>
              </Button>
            </div>
          </Hero>

          <section className="py-4 px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D4D] to-[#9C40FF]">
                See it in Action
              </h2>
              <p className="text-gray-400 text-xl">
                A unique visual experience for your coding sessions
              </p>
            </div>
            <div className="rounded-xl overflow-hidden border border-gray-800/20 shadow-2xl max-w-7xl mx-auto">
              <VSCodeInterface />
            </div>
          </section>

          {/* Features Section */}
          <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Moon className="h-8 w-8 text-[#FF4D4D]" />}
                title="Night Optimized"
                description="Colors carefully selected to reduce eye strain during long night coding sessions."
              />
              <FeatureCard
                icon={<Code className="h-8 w-8 text-[#FF4D4D]" />}
                title="Syntax Highlighting"
                description="Enhanced syntax highlighting for better code readability and comprehension."
              />
              <FeatureCard
                icon={<Terminal className="h-8 w-8 text-[#FF4D4D]" />}
                title="Integrated Terminal"
                description="Custom terminal colors perfectly matching the main theme."
              />
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800/20">
          <div className="text-center space-y-6">
            <div className="flex justify-center items-center gap-2">
              <Moon className="h-6 w-6 text-[#FF4D4D]" />
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D4D] to-[#9C40FF]">
                Nightly Wolf
              </span>
            </div>
            <p className="text-gray-400">
              Created with ❤️ by{" "}
              <Link
                href="https://github.com/codejota"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF4D4D] hover:text-[#FF4D4D]/80"
              >
                codejota
              </Link>
            </p>
            <div className="flex justify-center gap-6">
              <Link
                href="#"
                className="text-gray-400 hover:text-[#FF4D4D] transition-colors"
              >
                Documentation
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-[#FF4D4D] transition-colors"
              >
                Changelog
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-[#FF4D4D] transition-colors"
              >
                Support
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <Card className="bg-gray-900/20 border-gray-800/20 hover:border-[#FF4D4D]/20 transition-colors">
    <CardHeader>
      <div className="flex items-center gap-4">
        {icon}
        <CardTitle className="text-xl font-bold text-gray-100">
          {title}
        </CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-gray-400">{description}</p>
    </CardContent>
  </Card>
);
