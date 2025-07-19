"use client"
import { useEffect, useRef, useState } from "react"
import ProductCard from "../products-card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { listProducts } from "@lib/data/products"
import { StoreProduct } from "@medusajs/types"

const ProductCarousal = ({ countryCode }: { countryCode: string }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [products, setProducts] = useState<StoreProduct[]>([])

  const fetchProducts = async () => {
    const products = await listProducts({ countryCode }).then(
      ({ response }) => response.products
    )
    setProducts(products)
  }

  useEffect(() => {
    fetchProducts()
    console.log("First product fetched:", products[0])
  }, [])

  console.log("Products fetched for carousel:", products)
  // const productData = {
  //   id: 1,
  //   name: "Juice Factory",
  //   image: "/assets/product2.jpeg",
  //   price: "$39.00",
  //   description: "Maximum energy and Minumum calories",
  // }

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300, // Scroll left by 300px
        behavior: "smooth",
      })
    }
  }

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300, // Scroll right by 300px
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="w-full bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800 uppercase tracking-wide">
          Juice Is Good For You
        </h2>
        <button className="text-gray-700 font-medium hover:text-gray-900 transition-colors">
          view all →
        </button>
      </div>
      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-yellow-600 scrollbar-track-yellow-300"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#ca8a04 #fde047",
          }}
        >
          {products.map((product,index) => (
            <div key={product.id || index} className="flex-shrink-0 w-64">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="flex items-end justify-end gap-4 mt-2">
          <button
            onClick={handleScrollLeft}
            className="w-10 h-10 rounded-full bg-yellow-600 bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all"
          >
            <ChevronLeft size={20} className="text-gray-700" />
          </button>
          <button
            onClick={handleScrollRight}
            className="w-10 h-10 rounded-full bg-yellow-600 bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all"
          >
            <ChevronRight size={20} className="text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCarousal
