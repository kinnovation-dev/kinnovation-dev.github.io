import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent mb-3">
              Kinnovation
            </h3>
            <p className="text-sm text-muted-foreground">
              Not afraid to push boundaries and explore uncharted territories.
            </p>
          </div>

          {/* Ventures */}
          <div>
            <h4 className="font-semibold mb-3">Ventures</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/measmi" className="hover:text-foreground transition-colors">
                  MeAsmi
                </Link>
              </li>
              <li>
                <Link href="/karnah" className="hover:text-foreground transition-colors">
                  Karnah
                </Link>
              </li>
              <li>
                <Link href="/calendai" className="hover:text-foreground transition-colors">
                  CalendAI
                </Link>
              </li>
              <li>
                <Link href="/nutri-navigator" className="hover:text-foreground transition-colors">
                  NutriNavigator
                </Link>
              </li>
              <li>
                <Link href="/witness-platform" className="hover:text-foreground transition-colors">
                  Witness Platform
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#ventures" className="hover:text-foreground transition-colors">
                  Our Ventures
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Mission */}
          <div>
            <h4 className="font-semibold mb-3">Our Mission</h4>
            <p className="text-sm text-muted-foreground">
              Building transformative startups that solve real problems with innovative technology.
            </p>
          </div>
        </div>

        <div className="border-t border-border/40 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Kinnovation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
