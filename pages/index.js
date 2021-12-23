import { Navbar } from "../components";
import Image from 'next/image'
import people from '../public/assets/images/people.png'

const Gap = ({className}) => {
  return (
    <div className={className}></div>
  )
}

export default function Home() {
  const contentText = {
    heading: "Let’s Build Something amazing with GPT-3 OpenAI",
    subHeading: "Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of."
  }
  return (
    <div className='bg-gradient min-h-screen'>
     <Navbar />
      <article className="mx-auto max-w-screen-xl px-3">
        <Gap className="md:block md:h-10 lg:h-8 hidden"/>
        <section className="flex md:flex-row md:items-center  flex-col-reverse">
          <div className="md:w-7/12 ">
            <h1 className="xl:text-6xl lg:text-5xl text-[2rem] leading-9 font-bold text-gradient text-transparent">{contentText.heading}</h1>
            <Gap className="h-4"/>
            <p className="lg:text-xl w-11/12 lg:w-10/12 text-gray-300 leading-5 font-light">{contentText.subHeading}</p>
            <Gap className="h-5"/>
            <form>
              <input type="text" className="bg-gray-800 lg:w-7/12 md:w-auto w-11/12 lg:py-4 lg:px-8 py-2 px-6 text-gray-300" placeholder="your email address"/>
              <Gap className="h-3 md:hidden"/>
              <button className="bg-[#c45719] lg:py-4 py-2 px-7 rounded-sm text-gray-300 hover:bg-red-500 transition capitalize font-semibold">get started</button>
            </form>
            <Gap className="h-7"/>
            <div className="flex flex-col">
              <div>
                <Image 
                  src={people}
                  alt="user who used"
                />
              </div>
              <p className="text-gray-300 font-light">1,600 people requested access a visit in last 24 hours</p>
            </div>
            
          </div>
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
        </section>
      </article>
    </div>
  )
}
