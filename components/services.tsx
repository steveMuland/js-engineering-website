import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Wind, Wrench, Cpu, Lightbulb } from "lucide-react"

const services = [
  {
    icon: Lightbulb,
    title: "Consulting Services",
    description:
      "Comprehensive consulting across engineering disciplines including study, design, optimization, monitoring, and integration of technical projects with a cross-disciplinary and scalable approach.",
  },
  {
    icon: Zap,
    title: "Electrical & Automation",
    description:
      "Installation, maintenance, and compliance upgrades for electrical, electromechanical, and automation systems. Supply and commercialization of related materials and equipment.",
  },
  {
    icon: Wind,
    title: "HVAC & Refrigeration",
    description:
      "Maintenance and compliance services for heating, ventilation, air conditioning, air treatment, and cooling systems, including equipment supply and commercialization.",
  },
  {
    icon: Wrench,
    title: "Building Construction",
    description:
      "Technical and craft services including plumbing, ceiling work, painting, and interior finishing for comprehensive building construction solutions.",
  },
  {
    icon: Cpu,
    title: "Industrial IT & Embedded Systems",
    description:
      "Advanced industrial computing and embedded systems engineering services for modern manufacturing and automation environments.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">Our Services</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            {
              "We provide comprehensive engineering solutions tailored to meet the unique needs of both public and private sector clients."
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:border-accent transition-colors duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
