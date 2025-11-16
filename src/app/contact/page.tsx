"use client";

import { useState } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    venture: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically send the form data to a backend
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-orange-500/10 via-red-500/10 to-pink-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-orange-500/20 border-orange-500/30">
            Get In Touch
          </Badge>
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Interested in one of our ventures? Have a collaboration idea? Want to join the team?
            We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>

              {submitted ? (
                <div className="py-8 text-center">
                  <div className="text-5xl mb-4">✓</div>
                  <h3 className="text-xl font-bold mb-2 text-green-500">Message Sent!</h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you for reaching out. We'll get back to you soon.
                  </p>
                  <Button onClick={() => setSubmitted(false)} variant="outline">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-background"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-background"
                    />
                  </div>

                  <div>
                    <label htmlFor="venture" className="block text-sm font-medium mb-2">
                      Interested Venture (Optional)
                    </label>
                    <select
                      id="venture"
                      name="venture"
                      value={formData.venture}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-background"
                    >
                      <option value="">Select a venture...</option>
                      <option value="measmi">MeAsmi</option>
                      <option value="karnah">Karnah</option>
                      <option value="calendai">CalendAI</option>
                      <option value="nutrinavigator">NutriNavigator</option>
                      <option value="witness">Witness Evidence Platform</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-background"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-background resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600"
                  >
                    Send Message
                  </Button>
                </form>
              )}
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Why Reach Out?</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">→</span>
                    Learn more about any of our ventures
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">→</span>
                    Explore partnership opportunities
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">→</span>
                    Discuss investment possibilities
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">→</span>
                    Join our team
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">→</span>
                    Share feedback or ideas
                  </li>
                </ul>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-orange-500/5 to-pink-500/5 border-orange-500/20">
                <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground mb-4">
                  At Kinnovation, we're not afraid to push boundaries and explore uncharted territories.
                  Each venture represents our commitment to solving real problems with innovative solutions.
                </p>
                <p className="text-muted-foreground">
                  Whether you're a potential user, partner, investor, or just someone passionate about
                  innovation, we'd love to connect.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <Link href="/measmi" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                    → MeAsmi - Therapy Intelligence
                  </Link>
                  <Link href="/karnah" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                    → Karnah - Verified Donations
                  </Link>
                  <Link href="/calendai" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                    → CalendAI - Smart Content
                  </Link>
                  <Link href="/nutri-navigator" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                    → NutriNavigator - Personalized Nutrition
                  </Link>
                  <Link href="/witness-platform" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                    → Witness Platform - Event Documentation
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
