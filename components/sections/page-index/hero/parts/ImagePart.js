import Image from "next/image"

const ImagePart = () => {
  return (
    <div className="md:w-7/12 text-center relative top-[-40px]">
    <Image 
      src='/assets/images/ai.png'
      alt="artificial intellegen"
      width={600}
      height={600}
      placeholder="blur"
      blurDataURL="data:image/png;base64,[iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPcsWNPPQAHCQKtmxt/5AAAAABJRU5ErkJggg==]"
    />
  </div>
  )
}

export default ImagePart
