interface Product {
  id: number
  name: string
  image: string
  price: string
  description: string
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md py-4 px-2 flex flex-col items-center text-center">

      <img
        src={product?.image}
        alt={product?.name}
        className=" h-40 object-cover rounded-xl mb-4"
        />
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex flex-col items-start gap-x-2">
          <h2 className="text-start text-sm font-bold mb-0">
            {product?.name}
          </h2>
          <p className="text-start text-gray-600 text-xs font-normal  mb-2">
            {product?.description}
          </p>
        </div>
        <span className="text-start  text-indigo-600 font-bold">
          {product?.price}
        </span>
      </div>
    </div>
  )
}

export default ProductCard
