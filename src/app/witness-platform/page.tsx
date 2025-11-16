import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function WitnessPlatform() {
  const features = [
    {
      title: "Event-Focused Logging",
      description: "Witnesses record what happened: time, location, type of incident, neutral description, and optional photos. No names, no identities.",
      icon: "📝",
    },
    {
      title: "Evidence Preservation",
      description: "Creates verifiable, time-anchored records while memories are fresh, before evidence is lost.",
      icon: "🔒",
    },
    {
      title: "Victim Search",
      description: "Victims or attorneys search by date, time, area, and incident type to find potential witness matches.",
      icon: "🔍",
    },
    {
      title: "Consent-Based Connection",
      description: "Witnesses choose to respond, stay anonymous, or share details. Platform only facilitates the connection.",
      icon: "🤝",
    },
    {
      title: "Privacy-First Design",
      description: "Complies with defamation and privacy laws by focusing only on events, never storing private identities or creating reputational stats.",
      icon: "🛡️",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-slate-500/10 via-gray-500/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-slate-500/20 border-slate-500/30">
                Privacy-First Event Documentation
              </Badge>
              <div className="text-6xl mb-6">👁️</div>
              <h1 className="text-5xl font-bold mb-6">Witness Evidence Platform</h1>
              <p className="text-xl text-muted-foreground mb-8">
                A private, event-focused memory vault where witnesses record what they saw,
                and victims can later request consent-based connections to recover lost evidence.
              </p>
              <div className="flex gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-slate-500 to-gray-600 hover:from-slate-600 hover:to-gray-700">
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

            <Card className="p-8 bg-gradient-to-br from-slate-500/5 to-gray-500/5 border-slate-500/20">
              <h3 className="text-2xl font-bold mb-4">The Critical Gap</h3>
              <p className="text-muted-foreground mb-4">
                Witnesses to harassment, discrimination, or misconduct often want to help but face barriers:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-slate-500 mr-2">•</span>
                  No safe way to record what they saw
                </li>
                <li className="flex items-start">
                  <span className="text-slate-500 mr-2">•</span>
                  Fear of retaliation if they come forward publicly
                </li>
                <li className="flex items-start">
                  <span className="text-slate-500 mr-2">•</span>
                  Victims have no way to find them later
                </li>
                <li className="flex items-start">
                  <span className="text-slate-500 mr-2">•</span>
                  Evidence fades as memories dim over time
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
            <h2 className="text-4xl font-bold mb-4">How The Platform Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Balancing witness protection with victim access to justice
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-l-4 border-slate-500">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">The Process</h2>

          <div className="space-y-6">
            <Card className="p-6 border-l-4 border-slate-500">
              <div className="flex items-start gap-4">
                <div className="text-2xl font-bold text-slate-500">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Witness Records Event</h3>
                  <p className="text-muted-foreground">
                    A bystander sees something concerning. They log the event with time, location, type,
                    and description. No names. No public posting. Just a private, timestamped record.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-gray-500">
              <div className="flex items-start gap-4">
                <div className="text-2xl font-bold text-gray-500">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Evidence is Preserved</h3>
                  <p className="text-muted-foreground">
                    The platform securely stores the witness's contact info and event details.
                    This creates a verifiable record while memories are fresh.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-slate-600">
              <div className="flex items-start gap-4">
                <div className="text-2xl font-bold text-slate-600">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Victim Searches Later</h3>
                  <p className="text-muted-foreground">
                    When a victim decides to take action (weeks, months, or years later), they search by
                    date, location, and incident type. The platform shows matching events.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-gray-600">
              <div className="flex items-start gap-4">
                <div className="text-2xl font-bold text-gray-600">4</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Consent-Based Connection</h3>
                  <p className="text-muted-foreground">
                    Platform asks witnesses if they're willing to be contacted. Witness can decline,
                    stay anonymous, or agree to connect. Control stays with the witness throughout.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Privacy & Legal Compliance</h2>
          <p className="text-lg text-muted-foreground mb-8">
            The platform is designed from the ground up to protect everyone involved while enabling justice.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 text-left">
              <h3 className="text-xl font-bold mb-3 text-slate-500">What We Store</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Event details (time, place, type)</li>
                <li>✓ Neutral descriptions</li>
                <li>✓ Witness contact (encrypted)</li>
                <li>✓ Optional photos/documents</li>
              </ul>
            </Card>

            <Card className="p-6 text-left">
              <h3 className="text-xl font-bold mb-3 text-gray-600">What We Never Store</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✗ Accused person identities</li>
                <li>✗ Public reputational data</li>
                <li>✗ Witness info without consent</li>
                <li>✗ Unverified claims</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
