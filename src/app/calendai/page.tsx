import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function CalendAI() {
  const features = [
    {
      title: "Auto-Tagging",
      description: "AI scans your photos and videos, extracts themes, actions, and content categories automatically.",
      icon: "🏷️",
    },
    {
      title: "Trend Matching",
      description: "Tracks trending audios, formats, and templates, then pairs them with relevant clips in your gallery.",
      icon: "📈",
    },
    {
      title: "Ready-to-Post Bundles",
      description: "Get complete content suggestions with audio, caption ideas, and format templates for immediate posting.",
      icon: "📦",
    },
    {
      title: "Smart Calendar",
      description: "Schedule posts directly in the tool with reminders, timeline management, and workflow integration.",
      icon: "📅",
    },
    {
      title: "Continuous Learning",
      description: "Feedback loop refines AI understanding of your brand identity and improves future recommendations.",
      icon: "🧠",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-violet-500/10 via-purple-500/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-violet-500/20 border-violet-500/30">
                Smart Content Scheduling
              </Badge>
              <div className="text-6xl mb-6">📅</div>
              <h1 className="text-5xl font-bold mb-6">CalendAI</h1>
              <p className="text-xl text-muted-foreground mb-8">
                AI that reuses your old photos and videos by auto-tagging them, matching them to trends,
                and scheduling posts — combining a content-creation engine with a smart calendar.
              </p>
              <div className="flex gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600">
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

            <Card className="p-8 bg-gradient-to-br from-violet-500/5 to-purple-500/5 border-violet-500/20">
              <h3 className="text-2xl font-bold mb-4">The Opportunity</h3>
              <p className="text-muted-foreground mb-4">
                Content creators sit on goldmines of unused media but struggle with:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-violet-500 mr-2">•</span>
                  Finding relevant old content in massive libraries
                </li>
                <li className="flex items-start">
                  <span className="text-violet-500 mr-2">•</span>
                  Keeping up with constantly changing trends
                </li>
                <li className="flex items-start">
                  <span className="text-violet-500 mr-2">•</span>
                  Managing content calendars and posting schedules
                </li>
                <li className="flex items-start">
                  <span className="text-violet-500 mr-2">•</span>
                  Creating fresh content from existing material
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
            <h2 className="text-4xl font-bold mb-4">How CalendAI Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform your media library into a perpetual content engine
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-l-4 border-violet-500">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Your Content Workflow, Simplified</h2>

          <div className="space-y-6">
            <Card className="p-6 border-l-4 border-violet-500">
              <div className="flex items-start gap-4">
                <div className="text-2xl font-bold text-violet-500">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Upload & Auto-Tag</h3>
                  <p className="text-muted-foreground">
                    Connect your photo library. AI instantly categorizes everything by theme, mood, and content type.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-purple-500">
              <div className="flex items-start gap-4">
                <div className="text-2xl font-bold text-purple-500">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Discover Trend Matches</h3>
                  <p className="text-muted-foreground">
                    CalendAI finds trending formats and audios that pair perfectly with your existing content.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-violet-600">
              <div className="flex items-start gap-4">
                <div className="text-2xl font-bold text-violet-600">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Schedule & Post</h3>
                  <p className="text-muted-foreground">
                    Get ready-to-post bundles with captions and templates. Schedule directly or post immediately.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-purple-600">
              <div className="flex items-start gap-4">
                <div className="text-2xl font-bold text-purple-600">4</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Refine & Improve</h3>
                  <p className="text-muted-foreground">
                    Rate suggestions to help AI learn your style and deliver even better matches over time.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
