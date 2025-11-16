import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function MeAsmi() {
  const features = [
    {
      title: "Evidence-Based Discovery",
      description: "Instead of vague searches or blind referrals, see which centers other similar families are actually using, with what outcomes.",
      icon: "🔍",
    },
    {
      title: "Community Connection",
      description: "Connect with families dealing with similar neurodivergent profiles and learn from their experiences.",
      icon: "🤝",
    },
    {
      title: "Structured Outcomes Database",
      description: "Aggregates data on disorder types, therapy methods, duration, centers, and results.",
      icon: "📊",
    },
    {
      title: "Streamlined Referrals",
      description: "Once you find a pattern that fits, directly reach therapy centers through the platform.",
      icon: "🎯",
    },
    {
      title: "Professional Insights",
      description: "Therapists and researchers can use trend data to refine and personalize therapy plans.",
      icon: "💡",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-cyan-500/20 border-cyan-500/30">
                Therapy Intelligence
              </Badge>
              <div className="text-6xl mb-6">🧠</div>
              <h1 className="text-5xl font-bold mb-6">MeAsmi</h1>
              <p className="text-xl text-muted-foreground mb-8">
                A community-powered therapy intelligence platform that connects neurodivergent families,
                shows where similar families get treatment and with what results, and turns scattered
                experience into structured data to improve therapist discovery and therapy design.
              </p>
              <div className="flex gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
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

            <Card className="p-8 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 border-cyan-500/20">
              <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
              <p className="text-muted-foreground mb-4">
                Families with neurodivergent children face overwhelming uncertainty when seeking therapy.
                They struggle with:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  Random therapist discovery with no outcome data
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  Isolation from families with similar experiences
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  Lack of structured information on what works
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
            <h2 className="text-4xl font-bold mb-4">How MeAsmi Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Turning isolated experiences into collective intelligence for better therapy outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-l-4 border-cyan-500">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">The Impact</h2>
          <p className="text-lg text-muted-foreground mb-8">
            MeAsmi transforms therapy discovery from guesswork into an evidence-based,
            community-supported journey where families learn from each other and therapists
            continuously improve based on real-world outcomes.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="p-6">
              <div className="text-3xl font-bold text-cyan-500 mb-2">Faster</div>
              <div className="text-sm text-muted-foreground">Therapy Discovery</div>
            </Card>
            <Card className="p-6">
              <div className="text-3xl font-bold text-blue-500 mb-2">Better</div>
              <div className="text-sm text-muted-foreground">Outcome Matching</div>
            </Card>
            <Card className="p-6">
              <div className="text-3xl font-bold text-cyan-500 mb-2">Stronger</div>
              <div className="text-sm text-muted-foreground">Family Network</div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
