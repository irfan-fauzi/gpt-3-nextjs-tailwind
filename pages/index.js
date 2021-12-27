import { Gap } from "../components/atomic";
import { AiFeatured, BannerGetStarted, BlogFeatured, Features, Footer, Header, Hero } from "../components/sections/page-index";
import WhatIs from "../components/sections/page-index/what-is-gpt/WhatIs";
import { BiChevronUpCircle } from "react-icons/bi";
import { useRouter } from "next/dist/client/router";

export default function Home() {
  const html = document.querySelector('html')
  html.style.scrollBehavior = 'smooth'
  return (
    
    <div className='bg-[#040C18] min-h-screen scroll-smooth'>
      <Header />
      <Hero />
      <WhatIs />
      <Gap className="lg:h-[5rem]" />
      <Features />
      <Gap className="h-10 lg:h-[6rem]" />
      <AiFeatured />
      <Gap className="md:h-[7rem] h-[3rem]" />
      <BannerGetStarted />
      <Gap className="h-[3.7rem]"/>
      <BlogFeatured />
      <Gap className="md:h-[7rem] h-10"/>
      <Footer />
      <button className="fixed bottom-7 right-7 text-white cursor-pointer z-10 bg-gradient"><a href="#hero"><BiChevronUpCircle size={45}/></a></button>
    </div>
    
  )
}
