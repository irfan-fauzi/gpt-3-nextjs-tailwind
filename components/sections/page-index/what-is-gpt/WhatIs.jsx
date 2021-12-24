import { WhatIsGpt } from ".."
import { Gap } from "../../../atomic"

const WhatIs = () => {
  const products = [
    {
      title: "Chatbots",
      subTitle: "We so opinion friends me message as delight. Whole front do of plate heard oh ought." 
    },
    {
      title: "Knowladgebase",
      subTitle: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
    },
    {
      title: "Education",
      subTitle: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
    }
  ]
  return (
    <article className="">
    <div className="max-w-screen-xl mx-auto">
      <div className="md:p-[3.5rem] p-7 bg-blue-900">
        <WhatIsGpt />
        <Gap className="md:h-[8rem] h-[4rem]"/>
        <section className="flex md:justify-between md:items-center md:flex-row flex-col">
          <article>
            <h3 className="text-gradient text-transparent text-3xl font-bold md:w-8/12">The possibilities are beyond your imagination</h3>
          </article>
          <Gap className="h-8 lg:hidden block"/>
          <article>
            <button className="text-lg font-semibold text-red-300 cursor-pointer border px-8 py-4 border-red-400 hover:bg-red-500 hover:text-gray-200 transition">Explore the Library</button>
          </article>
        </section>
        <Gap className="md:h-[8rem] h-10"/>
        <section className="flex lg:flex-row flex-col gap-9 content-between">
          {
            products.map(el => (
              <article className="lg:w-4/12">
                <h3 className="font-black text-transparent text-gradient">_____</h3>
                <h3 className="cursor-pointer text-2xl text-gray-300 font-semibold">{el.title}</h3>
                <Gap className="h-10"/>
                <p className="text-gray-400 ">{el.subTitle}</p>
            </article>
            ))
          }
        </section>
      </div>
    </div>
    <Gap className="h-10" />
  </article>
  )
}

export default WhatIs
