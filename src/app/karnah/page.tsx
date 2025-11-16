import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Karnah() {
  const features = [
    {
      title: "AI-Powered Verification",
      description: "Analyzes donated items through photos and descriptions to determine accurate condition and fair market value.",
      icon: "✓",
    },
    {
      title: "Smart Matching",
      description: "Charities submit actual needs. Donors get matched only to organizations that want the item.",
      icon: "🎯",
    },
    {
      title: "Impact Tracking",
      description: "Tracks items from donor to charity to impact, with optional feedback showing where items ended up.",
      icon: "📍",
    },
    {
      title: "Tax Documentation",
      description: "Auto-generates IRS-compliant, itemized, time-stamped receipts with verified valuations.",
      icon: "📄",
    },
    {
      title: "Integrated Logistics",
      description: "Handles pickup and delivery through local partners so donors don't transport items blindly.",
      icon: "🚚",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-emerald-500/20 border-emerald-500/30">
                Verified Donation Ecosystem
              </Badge>
              <div className="text-6xl mb-6">🕊️</div>
              <h1 className="text-5xl font-bold mb-6">Karnah</h1>
              <p className="text-xl text-muted-foreground mb-8">
                A verified donation system that values items, matches them to charities that need them,
                tracks impact, gives audit-ready tax receipts, and handles pickup — eliminating waste and opacity.
              </p>
              <div className="flex gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600">
                    Learn More
                  </Button>
                </Link>
                <Link href="/">
                  <Button size="lg" variant="outline">
                    All Ventures
                  </Button>
                </Link>
              </div>
            </div>

            <Card className="p-8 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 border-emerald-500/20">
              <h3 className="text-2xl font-bold mb-4">The Problem</h3>
              <p className="text-muted-foreground mb-4">
                Traditional donation systems are broken:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  Donors have no idea if items are actually needed
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  Tax valuations are arbitrary and often fraudulent
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  No transparency on where items end up
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  Logistics burden falls entirely on donors
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How Karnah Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Bringing transparency, efficiency, and impact to charitable giving
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-l-4 border-emerald-500">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Benefits for Everyone</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3 text-emerald-500">For Donors</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Know items go where needed</li>
                <li>✓ Get accurate tax documentation</li>
                <li>✓ See impact of donations</li>
                <li>✓ No logistics hassle</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3 text-teal-500">For Charities</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Receive only what they need</li>
                <li>✓ Reduce storage waste</li>
                <li>✓ Better donor relationships</li>
                <li>✓ Simplified logistics</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3 text-emerald-600">For Society</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Less waste in landfills</li>
                <li>✓ Reduced fraud</li>
                <li>✓ More efficient giving</li>
                <li>✓ Greater impact</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
