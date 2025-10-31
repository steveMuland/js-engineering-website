import { Card, CardContent } from "@/components/ui/card"

const stats = [
  { number: "3+", label: "Years Experience" },
  { number: "13+", label: "Projects Completed" },
  { number: "5+", label: "Expert Engineers" },
  { number: "97%", label: "Client Satisfaction" },
]

const expertiseAreas = [
  {
    title: "Technical Excellence",
    description:
      "Our team brings deep technical knowledge across electrical, mechanical, and digital engineering domains.",
  },
  {
    title: "Regulatory Compliance",
    description: "We ensure all projects meet or exceed industry standards and regulatory requirements.",
  },
  {
    title: "Project Management",
    description: "From concept to completion, we deliver projects on time and within budget.",
  },
  {
    title: "Innovation Focus",
    description: "We leverage the latest technologies and methodologies to deliver cutting-edge solutions.",
  },
]

export function Expertise() {
  return (
    <section id="expertise" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">Proven Expertise</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            {"Delivering exceptional results through technical mastery and unwavering commitment to quality."}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-border">
              <CardContent className="pt-6">
                <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="p-6 rounded-lg bg-card border border-border">
              <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
