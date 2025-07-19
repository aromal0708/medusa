import Image from "next/image"
const KeyFeatures = () => {
  return (
    <div className="w-full flex flex-row items-center justify-between my-10 gap-4 px-10">
      <div className="p-6 max-w-96 bg-white rounded-lg flex flex-col items-center justify-center">
        <Image
          src="/assets/achievements.png"
          alt="Feature 1"
          width={100}
          height={100}
        />
        <span className="font-extrabold text-lg uppercase">Made with Peas</span>
        <div className="font-medium text-base text-center mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          itaque reiciendis facilis maiores nam{" "}
        </div>
      </div>
      <div className="p-6 max-w-96 bg-white rounded-lg  flex flex-col items-center justify-center">
        <Image
          src="/assets/achievements.png"
          alt="Feature 1"
          width={100}
          height={100}
        />
        <span className="font-extrabold text-lg uppercase">
          Packed with Protein and Fiber
        </span>
        <div className="font-medium text-base text-center mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          itaque reiciendis facilis maiores nam{" "}
        </div>
      </div>
      <div className="p-6 max-w-96 bg-white rounded-lg  flex flex-col items-center justify-center">
        <Image
          src="/assets/achievements.png"
          alt="Feature 1"
          width={100}
          height={100}
        />
        <span className="font-extrabold text-lg uppercase">
          Full of a Partout flavour
        </span>
        <div className="font-medium text-base text-center mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          itaque reiciendis facilis maiores nam{" "}
        </div>
      </div>
    </div>
  )
}

export default KeyFeatures
