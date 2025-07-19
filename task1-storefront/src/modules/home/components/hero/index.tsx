import Button from "@modules/common/components/button"
import { Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="flex flex-col items-start justify-center bg-primary w-full min-h-[450px] mt-10 px-10 rounded-xl">
      <div className="flex flex-col items-start justify-center ml-4 font-sans">

      <Heading className="text-6xl text-white font-bold mb-2">
        Refresh
      </Heading>
      <Heading className="text-5xl text-black font-bold mb-3">
        Your Minds
      </Heading>

      <span className="text-lg text-black mb-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </span>
      <Button text="Shop Now" />
      </div>
    </div>
  )
}

export default Hero
