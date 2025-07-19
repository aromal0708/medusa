import Image from "next/image";

const Certificate = ({ path }: { path?: string }) => {
  return (
    <Image
      height={240}
      width={240}
      src="/assets/certificate.png"
      alt="Certificate"
      className="p-1 rounded-full"
    />
  )
}

export default Certificate
