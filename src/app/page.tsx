"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const ventures = [
    {
      name: "MeAsmi",
      tagline: "Therapy Intelligence for Neurodivergent Families",
      description: "Evidence-based therapist discovery connecting families with similar profiles and creating structured therapy outcomes.",
      icon: "🧠",
      href: "/measmi",
      color: "from-cyan-500 to-blue-500",
      accentColor: "cyan",
    },
    {
      name: "Karnah",
      tagline: "Verified Donation Ecosystem",
      description: "AI-powered donation verification that matches items to real needs and creates transparent, audit-ready records.",
      icon: "🕊️",
      href: "/karnah",
      color: "from-emerald-500 to-teal-500",
      accentColor: "emerald",
    },
    {
      name: "CalendAI",
      tagline: "Smart Content Scheduling from Your Gallery",
      description: "Auto-tags your media, matches it to trends, and schedules ready-to-post content directly in your calendar.",
      icon: "📅",
      href: "/calendai",
      color: "from-violet-500 to-purple-500",
      accentColor: "violet",
    },
    {
      name: "NutriNavigator",
      tagline: "Real-Time Personalized Nutrition",
      description: "Combines wearable data, calendar, and location to recommend exactly when, where, and what to eat.",
      icon: "🍽️",
      href: "/nutri-navigator",
      color: "from-orange-500 to-red-500",
      accentColor: "orange",
    },
    {
      name: "Witness Evidence Platform",
      tagline: "Privacy-First Event Documentation",
      description: "Event-focused memory vault where witnesses record incidents and victims can request consent-based connections.",
      icon: "👁️",
      href: "/witness-platform",
      color: "from-slate-500 to-gray-500",
      accentColor: "slate",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.1),transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.1),transparent_50%)]" style={{ animation: "pulse 3s ease-in-out infinite" }} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(249,115,22,0.1),transparent_50%)]" style={{ animation: "pulse 4s ease-in-out infinite" }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <Badge className="mb-6 px-4 py-1 bg-gradient-to-r from-orange-500/20 to-pink-500/20 border-orange-500/30 animate-in fade-in slide-in-from-top-4 duration-700">
            Innovation Without Boundaries
          </Badge>

          <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent animate-in fade-in slide-in-from-top-8 duration-1000">
            Kinnovation
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-4 animate-in fade-in slide-in-from-top-12 duration-1000 delay-200">
            Not afraid to push boundaries and explore uncharted territories
          </p>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-in fade-in slide-in-from-top-16 duration-1000 delay-300">
            We build startups that solve real problems with innovative technology,
            creating meaningful impact across healthcare, sustainability, content creation, and justice.
          </p>

          <div className="flex flex-wrap justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            <Link href="#ventures">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 hover:scale-105 transition-transform">
                Explore Our Ventures
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="hover:scale-105 transition-transform">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-muted-foreground" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Company Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
              <h2 className="text-4xl font-bold mb-6">
                Building the Future,{" "}
                <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                  One Venture at a Time
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Kinnovation is a venture studio dedicated to creating transformative
                startups that address critical gaps in technology and society.
              </p>
              <p className="text-lg text-muted-foreground">
                From personalized healthcare to transparent charity systems, we leverage
                AI and data to build solutions that make a real difference. Our approach
                combines deep research, user-centered design, and cutting-edge technology
                to create products that people actually need.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 animate-in fade-in slide-in-from-right-8 duration-1000">
              <Card className="p-6 border-l-4 border-orange-500 hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
                <div className="text-3xl font-bold text-orange-500 mb-2">5</div>
                <div className="text-sm text-muted-foreground">Active Ventures</div>
              </Card>
              <Card className="p-6 border-l-4 border-pink-500 hover:shadow-lg transition-all hover:-translate-y-1 duration-300 delay-75">
                <div className="text-3xl font-bold text-pink-500 mb-2">∞</div>
                <div className="text-sm text-muted-foreground">Innovation Mindset</div>
              </Card>
              <Card className="p-6 border-l-4 border-red-500 hover:shadow-lg transition-all hover:-translate-y-1 duration-300 delay-150">
                <div className="text-3xl font-bold text-red-500 mb-2">AI+</div>
                <div className="text-sm text-muted-foreground">Powered Solutions</div>
              </Card>
              <Card className="p-6 border-l-4 border-amber-500 hover:shadow-lg transition-all hover:-translate-y-1 duration-300 delay-200">
                <div className="text-3xl font-bold text-amber-500 mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Impact Focused</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Ventures Section */}
      <section id="ventures" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-top-4 duration-700">
            <h2 className="text-4xl font-bold mb-4">Our Ventures</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each venture represents a bold step into uncharted territory,
              solving problems that matter with innovation that works.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ventures.map((venture, index) => (
              <Link
                key={venture.href}
                href={venture.href}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className={`group h-full p-6 transition-all duration-500 border-t-4 cursor-pointer relative overflow-hidden ${
                  hoveredCard === index
                    ? 'shadow-2xl scale-105 -translate-y-2'
                    : 'shadow-md hover:shadow-xl'
                }`}
                style={{
                  transform: hoveredCard === index
                    ? 'perspective(1000px) rotateX(2deg) rotateY(-2deg)'
                    : 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
                  borderTopColor: hoveredCard === index ? `var(--${venture.accentColor}-500)` : 'transparent',
                }}>
                  {/* Animated Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${venture.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                  {/* Shimmer Effect */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ${
                    hoveredCard === index ? 'animate-shimmer' : ''
                  }`}
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                    transform: 'translateX(-100%)',
                    animation: hoveredCard === index ? 'shimmer 2s infinite' : 'none',
                  }} />

                  <div className="relative">
                    {/* Animated Icon */}
                    <div className={`text-5xl mb-4 transition-all duration-500 ${
                      hoveredCard === index
                        ? 'scale-110 rotate-6'
                        : 'scale-100 rotate-0'
                    }`}>
                      {venture.icon}
                    </div>

                    <h3 className={`text-2xl font-bold mb-2 transition-all duration-300 ${
                      hoveredCard === index
                        ? 'bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent'
                        : ''
                    }`}>
                      {venture.name}
                    </h3>

                    <p className="text-sm font-semibold text-muted-foreground mb-3">
                      {venture.tagline}
                    </p>

                    <p className="text-sm text-muted-foreground mb-4">
                      {venture.description}
                    </p>

                    {/* Animated Arrow */}
                    <div className={`flex items-center text-sm font-medium text-orange-500 group-hover:text-pink-500 transition-all duration-300 ${
                      hoveredCard === index ? 'translate-x-2' : 'translate-x-0'
                    }`}>
                      Learn more
                      <svg
                        className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                          hoveredCard === index ? 'translate-x-1' : ''
                        }`}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                      </svg>
                    </div>
                  </div>

                  {/* Floating Particles Effect */}
                  {hoveredCard === index && (
                    <>
                      <div className="absolute top-10 left-10 w-2 h-2 rounded-full bg-orange-500/30 animate-float" style={{ animationDelay: '0s' }} />
                      <div className="absolute top-20 right-10 w-1.5 h-1.5 rounded-full bg-pink-500/30 animate-float" style={{ animationDelay: '0.5s' }} />
                      <div className="absolute bottom-10 left-20 w-1 h-1 rounded-full bg-red-500/30 animate-float" style={{ animationDelay: '1s' }} />
                    </>
                  )}
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-in fade-in zoom-in duration-700">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Explore Innovation?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get in touch to learn more about our ventures or discuss potential collaborations.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 hover:scale-110 transition-transform">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>

      <style jsx global>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
            opacity: 0;
          }
          50% {
            transform: translateY(-20px);
            opacity: 1;
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
