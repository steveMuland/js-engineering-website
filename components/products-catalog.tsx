"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"

const categories = [
  { id: "all", name: "All Products" },
  { id: "engineering", name: "Engineering Systems & Components" },
  { id: "construction", name: "Construction & Finishing Materials" },
  { id: "industrial", name: "Industrial IT & Automation Tools" },
  { id: "maintenance", name: "Maintenance & Compliance Kits" },
]

const products = [
  // Engineering Systems & Components
  {
    id: 1,
    name: "Industrial Control Panel",
    category: "engineering",
    price: "$2,450",
    description: "Complete control panel with PLC integration, circuit breakers, and monitoring systems",
    image: "/industrial-control-panel-electrical-cabinet.jpg",
    inStock: true,
    specs: ["IP65 Rating", "400V Compatible", "Remote Monitoring"],
  },
  {
    id: 2,
    name: "Variable Frequency Drive",
    category: "engineering",
    price: "$1,850",
    description: "High-performance VFD for motor speed control and energy optimization",
    image: "/variable-frequency-drive-vfd-motor-controller.jpg",
    inStock: true,
    specs: ["0.75-400kW Range", "Energy Saving", "Digital Display"],
  },
  {
    id: 3,
    name: "Power Distribution Unit",
    category: "engineering",
    price: "$3,200",
    description: "Modular PDU with surge protection and load monitoring capabilities",
    image: "/power-distribution-unit-electrical-pdu-rack.jpg",
    inStock: true,
    specs: ["Surge Protection", "Load Monitoring", "Modular Design"],
  },
  {
    id: 4,
    name: "Servo Motor System",
    category: "engineering",
    price: "$4,100",
    description: "Precision servo motor with encoder feedback and advanced motion control",
    image: "/industrial-servo-motor-automation-system.jpg",
    inStock: false,
    specs: ["High Precision", "Encoder Feedback", "Low Maintenance"],
  },

  // Construction & Finishing Materials
  {
    id: 5,
    name: "Premium Ceiling Tiles",
    category: "construction",
    price: "$45/m²",
    description: "Acoustic ceiling tiles with fire resistance and moisture protection",
    image: "/acoustic-ceiling-tiles-suspended-ceiling-panels.jpg",
    inStock: true,
    specs: ["Fire Resistant", "Acoustic Insulation", "Easy Installation"],
  },
  {
    id: 6,
    name: "Industrial Paint System",
    category: "construction",
    price: "$180/kit",
    description: "Complete paint system including primer, topcoat, and protective sealant",
    image: "/industrial-paint-coating-system-buckets.jpg",
    inStock: true,
    specs: ["Anti-Corrosion", "Quick Dry", "UV Resistant"],
  },
  {
    id: 7,
    name: "Plumbing Fixture Set",
    category: "construction",
    price: "$890",
    description: "Commercial-grade plumbing fixtures with water-saving technology",
    image: "/commercial-plumbing-fixtures-faucets-valves.jpg",
    inStock: true,
    specs: ["Water Efficient", "Durable Brass", "5-Year Warranty"],
  },
  {
    id: 8,
    name: "Flooring Installation Kit",
    category: "construction",
    price: "$320",
    description: "Professional flooring tools and materials for commercial installations",
    image: "/flooring-installation-tools-kit-professional.jpg",
    inStock: true,
    specs: ["Complete Toolkit", "Professional Grade", "Carrying Case"],
  },

  // Industrial IT & Automation Tools
  {
    id: 9,
    name: "Industrial IoT Gateway",
    category: "industrial",
    price: "$1,650",
    description: "Edge computing gateway for industrial IoT applications with cloud connectivity",
    image: "/industrial-iot-gateway-edge-computing-device.jpg",
    inStock: true,
    specs: ["4G/5G Ready", "Edge Computing", "Secure Protocol"],
  },
  {
    id: 10,
    name: "PLC Programming Kit",
    category: "industrial",
    price: "$2,100",
    description: "Complete PLC programming and testing kit with software licenses",
    image: "/plc-programming-kit-industrial-automation-tools.jpg",
    inStock: true,
    specs: ["Multi-Brand Support", "Diagnostic Tools", "Software Included"],
  },
  {
    id: 11,
    name: "SCADA Monitoring System",
    category: "industrial",
    price: "$5,800",
    description: "Comprehensive SCADA system for real-time monitoring and control",
    image: "/scada-monitoring-system-industrial-control-screen.jpg",
    inStock: false,
    specs: ["Real-Time Data", "Remote Access", "Alarm Management"],
  },
  {
    id: 12,
    name: "Embedded Development Board",
    category: "industrial",
    price: "$450",
    description: "Industrial-grade embedded system development board with I/O expansion",
    image: "/embedded-development-board-industrial-microcontrol.jpg",
    inStock: true,
    specs: ["ARM Processor", "Multiple I/O", "Industrial Temp"],
  },

  // Maintenance & Compliance Kits
  {
    id: 13,
    name: "Electrical Safety Kit",
    category: "maintenance",
    price: "$680",
    description: "Complete electrical safety testing and compliance verification kit",
    image: "/electrical-safety-testing-kit-multimeter-tools.jpg",
    inStock: true,
    specs: ["CAT IV Rated", "Digital Meters", "Compliance Tools"],
  },
  {
    id: 14,
    name: "HVAC Maintenance Set",
    category: "maintenance",
    price: "$1,250",
    description: "Professional HVAC maintenance tools and diagnostic equipment",
    image: "/hvac-maintenance-tools-kit-refrigeration-gauges.jpg",
    inStock: true,
    specs: ["Refrigerant Gauges", "Leak Detector", "Vacuum Pump"],
  },
  {
    id: 15,
    name: "Calibration Equipment",
    category: "maintenance",
    price: "$3,400",
    description: "Precision calibration tools for industrial instruments and sensors",
    image: "/calibration-equipment-precision-measurement-tools.jpg",
    inStock: true,
    specs: ["High Accuracy", "Traceable Standards", "Portable Case"],
  },
  {
    id: 16,
    name: "Compliance Documentation Kit",
    category: "maintenance",
    price: "$290",
    description: "Complete documentation and reporting tools for regulatory compliance",
    image: "/placeholder.svg?height=400&width=400",
    inStock: true,
    specs: ["Digital Templates", "Inspection Forms", "Report Generator"],
  },
]

export function ProductsCatalog() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredProducts =
    selectedCategory === "all" ? products : products.filter((p) => p.category === selectedCategory)

  return (
    <div className="min-h-screen bg-background pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary via-primary to-primary/90 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] opacity-5" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-accent text-accent-foreground">Product Catalog</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary-foreground text-balance">
              Engineering Products & Equipment
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed text-pretty">
              Browse our comprehensive selection of high-quality engineering systems, construction materials, industrial
              automation tools, and maintenance equipment.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:+243992226149">
                  <Phone className="mr-2 h-5 w-5" />
                  Call for Quote
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20"
                asChild
              >
                <a href="mailto:info@jsengineeringconsulting.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Inquiry
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-16 lg:top-20 z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="whitespace-nowrap"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {filteredProducts.map((product, index) => (
              <Card
                key={product.id}
                className="group overflow-hidden border-border hover:border-accent transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative overflow-hidden aspect-square bg-muted">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                      <Badge variant="secondary" className="text-sm">
                        Out of Stock
                      </Badge>
                    </div>
                  )}
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-accent text-accent-foreground">{product.price}</Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-accent transition-colors">{product.name}</CardTitle>
                  <CardDescription className="line-clamp-2 leading-relaxed">{product.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {product.specs.map((spec, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {spec}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1" size="sm" asChild>
                        <a href="tel:+243992226149">Request Quote</a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href="mailto:info@jsengineeringconsulting.com">Inquire</a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 lg:py-20 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Need a Custom Solution?</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-pretty">
              {
                "Can't find what you're looking for? Contact us for custom product sourcing and tailored engineering solutions."
              }
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="tel:+243992226149">
                  <Phone className="mr-2 h-5 w-5" />
                  +243 (0) 992-226-149
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:info@jsengineeringconsulting.com">
                  <Mail className="mr-2 h-5 w-5" />
                  info@jsengineeringconsulting.com
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
