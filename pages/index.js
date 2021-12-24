import { Gap } from "../components/atomic";
import { AiFeatured, BannerGetStarted, Features, Header, Hero } from "../components/sections/page-index";
import WhatIs from "../components/sections/page-index/what-is-gpt/WhatIs";


export default function Home() {

  return (
    <div className='bg-gradient min-h-screen'>
      <Header />
      <Hero />
      <WhatIs />
      <Gap className="lg:h-[5rem]" />
      <Features />
      <Gap className="h-10 lg:h-[6rem]" />
      <AiFeatured />
      <Gap className="h-[9rem]" />
      <BannerGetStarted />
      <Gap className="h-10"/>
    </div>
  )
}
