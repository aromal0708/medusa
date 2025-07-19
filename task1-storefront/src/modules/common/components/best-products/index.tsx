"use client"
import Image from "next/image"
import { useEffect, useState } from "react"
import { listProducts } from "@lib/data/products"
import ProductCard from "../products-card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { StoreProduct } from "@medusajs/types"

const BestProducts = ({ countryCode }: { countryCode: string }) => {
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
  return (
    <div className="w-full flex flex-row items-center gap-x-10 justify-center my-16 px-10">
      <aside className="relative max-w-lg rounded-lg">
        <Image
          height={450}
          width={400}
          src="/assets/poster.jpg"
          alt="Best Product"
          className="rounded-lg"
        />
        <div className="absolute rounded-[100%] right-3 -top-6 bg-gray-600 text-yellow-400  h-16 w-16 text-2xl font-extrabold text-center flex items-center justify-center">
          New
        </div>
      </aside>
      <aside className="ml-10 max-w-md flex flex-col items-start justify-center">
        <h2 className="text-3xl font-bold text-gray-800 mt-4">
          Our Most Energetic Juice Pack
        </h2>
        <p className="text-gray-600 mt-2 font-semibold">
          Packed with vitamins and minerals, our juice pack is designed to give
          you the energy boost you need to power through your day.
        </p>

        <div className="flex-shrink-0 w-64">
          <ProductCard product={products[0]} />
          <div className="flex items-end justify-end gap-4 mt-2 w-full">
            <button className="w-10 h-10 rounded-full bg-yellow-600 bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all">
              <ChevronLeft size={20} className="text-gray-700" />
            </button>
            <button className="w-10 h-10 rounded-full bg-yellow-600 bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all">
              <ChevronRight size={20} className="text-gray-700" />
            </button>
          </div>
        </div>
      </aside>
    </div>
  )
}

export default BestProducts
