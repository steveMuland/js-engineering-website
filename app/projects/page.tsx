import { Header } from "@/components/header"
import { ProjectsGallery } from "@/components/projects-gallery"
import { Footer } from "@/components/footer"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ProjectsGallery />
      <Footer />
    </main>
  )
}
