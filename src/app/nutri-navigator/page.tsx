import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function NutriNavigator() {
  const features = [
    {
      title: "Reads Your Body",
      description: "Pulls HRV, stress, sleep quality, fatigue, glucose, and activity from wearables to understand biological needs in real time.",
      icon: "⌚",
    },
    {
      title: "Reads Your Schedule",
      description: "Knows class times, meetings, study sessions, and commutes to identify when eating is realistically possible.",
      icon: "📆",
    },
    {
      title: "Reads Your Surroundings",
      description: "Finds nearby places with walking time, menus, nutrition info, and prices filtered by your goals.",
      icon: "📍",
    },
    {
      title: "Real-Time Recommendations",
      description: "Suggests what to eat, when to eat, and where to get it based on biology, schedule, location, and goals.",
      icon: "🎯",
    },
    {
      title: "Personalized Learning",
      description: "You rate meals on energy, mood, focus, and hunger. AI personalizes future suggestions based on what works for you.",
      icon: "📊",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-orange-500/10 via-red-500/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-orange-500/20 border-orange-500/30">
                Real-Time Personalized Nutrition
              </Badge>
              <div className="text-6xl mb-6">🍽️</div>
              <h1 className="text-5xl font-bold mb-6">NutriNavigator</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Combines wearable data, calendar, maps, and personal goals to tell students exactly
                when, where, and what to eat — in real time — optimizing health and energy.
              </p>
              <div className="flex gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
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

            <Card className="p-8 bg-gradient-to-br from-orange-500/5 to-red-500/5 border-orange-500/20">
              <h3 className="text-2xl font-bold mb-4">The Student Struggle</h3>
              <p className="text-muted-foreground mb-4">
                Students know they should eat better, but face constant challenges:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Packed schedules with unpredictable eating windows
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Limited knowledge of nearby healthy options
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  No connection between food choices and how they feel
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Generic nutrition advice that doesn't fit their life
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
            <h2 className="text-4xl font-bold mb-4">How NutriNavigator Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your personal nutrition guide that adapts to your body, schedule, and location
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-l-4 border-orange-500">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Real-Time Intelligence</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3 text-orange-500">Morning Scenario</h3>
              <p className="text-muted-foreground mb-3">
                Your wearable shows poor sleep and high stress. You have a 15-minute window before class.
              </p>
              <p className="text-sm text-muted-foreground italic">
                NutriNavigator suggests a nearby cafe with a protein-rich breakfast that stabilizes
                energy, takes 5 minutes to walk to, and fits your budget.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3 text-red-500">Afternoon Scenario</h3>
              <p className="text-muted-foreground mb-3">
                Low glucose detected. You have a study session in 30 minutes across campus.
              </p>
              <p className="text-sm text-muted-foreground italic">
                NutriNavigator recommends a quick meal on your route that boosts focus without
                causing an energy crash, based on your past ratings.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3 text-orange-600">Evening Scenario</h3>
              <p className="text-muted-foreground mb-3">
                High activity day. Need recovery nutrition. Free time after 7pm.
              </p>
              <p className="text-sm text-muted-foreground italic">
                NutriNavigator suggests dinner options rich in protein and carbs for recovery,
                within walking distance, with delivery options if you're too tired.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3 text-red-600">Exam Week</h3>
              <p className="text-muted-foreground mb-3">
                Irregular schedule. High stress. Need sustained focus.
              </p>
              <p className="text-sm text-muted-foreground italic">
                NutriNavigator adapts to your chaotic calendar, prioritizing brain-fueling meals
                at optimal times and avoiding energy-draining choices.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
