import Link from "next/link"
import { JSLogo } from "./js-logo"

export function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <JSLogo className="w-10 h-10 text-primary" />
              <span className="font-semibold text-lg">JS Engineering and Consulting</span>
            </div>
            <p className="text-accent-foreground/80 text-sm leading-relaxed max-w-md">
              {
                "Delivering comprehensive engineering solutions across multiple disciplines with a commitment to excellence and innovation."
              }
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#services"
                  className="text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                >
                  Consulting Services
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                >
                  Electrical & Automation
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                >
                  HVAC & Refrigeration
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                >
                  Building Construction
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                >
                  Industrial IT
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#about"
                  className="text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#expertise"
                  className="text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                >
                  Expertise
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-accent-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-accent-foreground/80">
              © {new Date().getFullYear()} JS Engineering and Consulting. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
