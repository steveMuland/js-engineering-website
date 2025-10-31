import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-accent">
      <div className="absolute inset-0 bg-[url('/abstract-technical-engineering-blueprint-pattern.jpg')] opacity-5 bg-cover bg-center" />

      <div className="container mx-auto px-4 lg:px-8 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-accent-foreground mb-6 text-balance leading-tight">
            Engineering Excellence Across All Disciplines
          </h1>
          <p className="text-lg md:text-xl text-accent-foreground/80 mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
            {
              "JS Engineering and Consulting delivers comprehensive technical solutions for public and private sector clients through innovative, cross-disciplinary engineering expertise."
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-base bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="#services">
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base bg-transparent text-accent-foreground border-accent-foreground/30 hover:bg-accent-foreground/10"
            >
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
