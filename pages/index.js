import { BtnScrollToTop, Gap, ProgressBarPage } from "../components/atomic";
import { AiFeatured, BannerGetStarted, BlogFeatured, Features, Footer, Header, Hero, WhatIs } from "../components/sections/page-index";

export default function Home() {
  
  return (
    
    <div className='bg-[#040C18] min-h-screen'>
      <ProgressBarPage />        
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
      <BtnScrollToTop />
    </div>
    
  )
}
