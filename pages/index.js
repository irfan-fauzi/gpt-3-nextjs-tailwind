import { Gap } from "../components/atomic";
import { Header, Hero, WhatIsGpt } from "../components/sections/page-index";


export default function Home() {
  
  return (
    <div className='bg-gradient min-h-screen'>
      <Header />
      <Hero />
      <article className="">
        <div className="max-w-screen-xl mx-auto">
          <div className="p-10  bg-blue-900">
            <section className="flex md:flex-row flex-col">
              <article className="md:w-4/12">
                <div className="relative top-[-20px]">
                  <h3 className="font-black text-transparent text-gradient">_____</h3>
                  <h3 className="text-2xl font-bold text-gray-300 after:contents:'sas' ">What is GPT-3</h3>
                </div>
              </article>
              <article className="md:w-8/12">
                <p className="text-gray-300 font-light text-lg md:w-11/12">We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
              </article>
            </section>
            <Gap className="h-10"/>
            
          </div>
        </div>
      </article>
      <Gap className="h-10" />
    </div>
  )
}
