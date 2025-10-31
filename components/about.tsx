import { CheckCircle2 } from "lucide-react"

const values = [
  "Cross-disciplinary expertise",
  "Scalable solutions",
  "Public & private sector experience",
  "Compliance & safety focused",
  "Innovation-driven approach",
  "End-to-end project support",
]

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Engineering Solutions That Scale
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {
                "JS Engineering and Consulting brings together decades of expertise across multiple engineering disciplines to deliver comprehensive technical solutions."
              }
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {
                "Our cross-disciplinary approach ensures that every project benefits from integrated thinking, innovative problem-solving, and a commitment to excellence that spans from initial consultation through final implementation."
              }
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted">
              <img
                src="/modern-engineering-office-team-collaboration.jpg"
                alt="Engineering team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-accent/10 rounded-lg -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
