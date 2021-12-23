import Image from "next/image"

const ImagePart = () => {
  return (
    <div className="md:w-5/12 text-center">
    <Image 
      src='/assets/images/ai.png'
      alt="artificial intellegen"
      width={580}
      height={580}
      placeholder="blur"
      blurDataURL="data:image/png;base64,[iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPcsWNPPQAHCQKtmxt/5AAAAABJRU5ErkJggg==]"
    />
  </div>
  )
}

export default ImagePart
