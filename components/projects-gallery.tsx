"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

const projects = [
  {
    id: 1,
    title: "Industrial Automation System",
    category: "Electrical & Automation",
    description:
      "Complete automation overhaul for a manufacturing facility, including PLC programming, SCADA integration, and real-time monitoring systems.",
    image: "/modern-industrial-automation-control-room-with-scr.jpg",
    tags: ["Automation", "PLC", "SCADA"],
    year: "2024",
  },
  {
    id: 2,
    title: "Commercial HVAC Optimization",
    category: "HVAC & Thermal",
    description:
      "Energy-efficient HVAC system design and installation for a 50,000 sq ft commercial building, reducing energy consumption by 35%.",
    image: "/modern-commercial-building-hvac-system-installatio.jpg",
    tags: ["HVAC", "Energy Efficiency", "Commercial"],
    year: "2024",
  },
  {
    id: 3,
    title: "Smart Building Integration",
    category: "Industrial IT",
    description:
      "IoT-based building management system with embedded sensors, real-time analytics, and predictive maintenance capabilities.",
    image: "/smart-building-technology-with-sensors-and-digital.jpg",
    tags: ["IoT", "Embedded Systems", "Smart Building"],
    year: "2023",
  },
  {
    id: 4,
    title: "Power Distribution Upgrade",
    category: "Electrical Engineering",
    description:
      "Complete electrical infrastructure modernization for a hospital complex, ensuring 99.99% uptime with redundant power systems.",
    image: "/electrical-power-distribution-panel-and-infrastruc.jpg",
    tags: ["Electrical", "Power Systems", "Healthcare"],
    year: "2023",
  },
  {
    id: 5,
    title: "Data Center Cooling Solution",
    category: "HVAC & Refrigeration",
    description:
      "High-efficiency cooling system for a tier-3 data center with precision temperature control and hot aisle containment.",
    image: "/data-center-cooling-system-with-server-racks.jpg",
    tags: ["Refrigeration", "Data Center", "Precision Cooling"],
    year: "2023",
  },
  {
    id: 6,
    title: "Corporate Office Renovation",
    category: "Building Construction",
    description:
      "Full interior renovation including electrical, plumbing, HVAC, and finishing work for a modern corporate headquarters.",
    image: "/modern-corporate-office-interior-renovation.jpg",
    tags: ["Construction", "Interior", "Commercial"],
    year: "2024",
  },
  {
    id: 7,
    title: "Manufacturing Plant Electrification",
    category: "Electromechanical",
    description:
      "Complete electrical and mechanical systems installation for a new automotive parts manufacturing facility.",
    image: "/manufacturing-plant-with-electrical-and-mechanical.jpg",
    tags: ["Manufacturing", "Electromechanical", "Industrial"],
    year: "2022",
  },
  {
    id: 8,
    title: "Hospital HVAC Compliance",
    category: "HVAC & Air Treatment",
    description:
      "Medical-grade air treatment and ventilation system upgrade to meet healthcare facility standards and regulations.",
    image: "/hospital-clean-room-hvac-ventilation-system.jpg",
    tags: ["Healthcare", "Compliance", "Air Treatment"],
    year: "2022",
  },
  {
    id: 9,
    title: "Warehouse Automation",
    category: "Industrial IT & Automation",
    description:
      "Automated inventory management system with robotics integration, barcode scanning, and real-time tracking.",
    image: "/automated-warehouse-with-robotics-and-conveyor-sys.jpg",
    tags: ["Automation", "Robotics", "Logistics"],
    year: "2024",
  },
]

const categories = [
  "All",
  "Electrical & Automation",
  "HVAC & Thermal",
  "Industrial IT",
  "Building Construction",
  "Electromechanical",
]

export function ProjectsGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category.includes(selectedCategory.split(" & ")[0]))

  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="outline">
              Our Work
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">Project Portfolio</h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Explore our diverse range of engineering projects across multiple disciplines. Each project showcases our
              commitment to excellence, innovation, and technical expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b border-border sticky top-16 lg:top-20 bg-background/95 backdrop-blur-md z-40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className="group overflow-hidden border-border hover:border-accent transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: "fadeInUp 0.6s ease-out forwards",
                  opacity: 0,
                }}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent transition-opacity duration-500 ${
                      hoveredProject === project.id ? "opacity-90" : "opacity-0"
                    }`}
                  />

                  {/* Overlay Content */}
                  <div
                    className={`absolute inset-0 p-6 flex flex-col justify-end transition-all duration-500 ${
                      hoveredProject === project.id ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                    }`}
                  >
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>
                  </div>

                  {/* Year Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-background/90 text-foreground backdrop-blur-sm">{project.year}</Badge>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-2">
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 lg:line-clamp-none lg:hidden">
                    {project.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
