import { Suspense } from "react"

import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import DropdownMenu from "@modules/layout/components/drop-down"
import Link from "next/link"
import ShoppingCartIcon from "@modules/layout/components/shopping-cart"

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  const shopItems = [
    "Find Store Near You",
    "Online Store",
    "Flagship Locations",
    "Juice Bars",
    "Wholesale Partners",
    "Franchise Opportunities",
  ]

  const learnItems = [
    "Health Benefits",
    "Ingredient Guide",
    "Juicing 101",
    "Nutrition Facts",
    "Cleanse Programs",
    "Recipes & Tips",
  ]

  return (
    <div className="sticky top-0 inset-x-0 z-50 group ">
      <header className="relative h-16 mx-auto border-b duration-200 bg-white border-ui-border-base px-10">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full flex items-center gap-x-6">
              <DropdownMenu name="shop" items={shopItems} />
              <DropdownMenu name="learn" items={learnItems} />
              <Link
                href="#"
                className="text-gray-800 hover:text-gray-500 font-medium text-base cursor-pointer"
              >
                Subscribe
              </Link>
            </div>
          </div>

          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="font-mono text-2xl text-gray-950 font-bold hover:text-ui-fg-base uppercase"
              data-testid="nav-store-link"
            >
              JUICE Factory
            </LocalizedClientLink>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              <LocalizedClientLink
                className="hover:text-ui-fg-base font-medium text-base"
                href="/account"
                data-testid="nav-account-link"
              >
                Account
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-2"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  cart(0)
                </LocalizedClientLink>
              }
            >
              <ShoppingCartIcon className="w-5 h-5" />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
