import { Header } from "@/components/header"
import { ProductsCatalog } from "@/components/products-catalog"
import { Footer } from "@/components/footer"

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ProductsCatalog />
      <Footer />
    </main>
  )
}
