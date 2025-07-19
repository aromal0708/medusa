import { Metadata } from "next"
import Hero from "@modules/home/components/hero"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import Certificate from "@modules/common/components/certificate"
import ProductCarousal from "@modules/common/components/products-carousal"
import KeyFeatures from "@modules/common/components/key-features"
import Button from "@modules/common/components/button"
import BestProducts from "@modules/common/components/best-products"

export const metadata: Metadata = {
  title: "Medusa Next.js Starter Template",
  description:
    "A performant frontend ecommerce starter template with Next.js 15 and Medusa.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  const region = await getRegion(countryCode)

  const { collections } = await listCollections({
    fields: "id, handle, title",
  })

  if (!collections || !region) {
    return null
  }

  return (
    <div className="px-10">
      <Hero />
      <div className="flex flex-row items-start justify-between my-4">
        <Certificate />
        <Certificate />
        <Certificate />
        <Certificate />
        <Certificate />
        <Certificate />
      </div>
      <ProductCarousal countryCode={countryCode} />
      <div className="flex flex-col items-center justify-center my-10">
        <span className="text-7xl font-extrabold text-primary ">
          Better For You, Better For The Planet
        </span>
      </div>
      <KeyFeatures />
      <div className="w-full flex flex-col items-center justify-center my-10">
        <Button text="More about Juice Factory" />
      </div>
      <BestProducts countryCode={countryCode} />
    </div>
  )
}
