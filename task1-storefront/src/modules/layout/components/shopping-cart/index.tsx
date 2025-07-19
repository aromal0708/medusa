import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { ShoppingCart } from "lucide-react"

const ShoppingCartIcon = ({ className }: { className: string }) => {
  return (
    <div className={`relative cursor-pointer ${className}`}>
      <LocalizedClientLink
        className="hover:text-ui-fg-base flex gap-2"
        href="/cart"
        data-testid="nav-cart-link"
      >
        <ShoppingCart className="w-5 h-5" />
        <div className="absolute -top-2 -left-2 bg-black text-white rounded-full w-3 h-3 flex items-center justify-center text-[10px]">
          0
        </div>
      </LocalizedClientLink>
    </div>
  )
}

export default ShoppingCartIcon
