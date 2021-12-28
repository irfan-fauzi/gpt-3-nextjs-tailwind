import { BtnScrollToTop, Gap } from "../components/atomic";
import { AiFeatured, BannerGetStarted, BlogFeatured, Features, Footer, Header, Hero, WhatIs } from "../components/sections/page-index";


import { useEffect, useState } from "react";




export default function Home() {
  
  const [presentageBar, setPresentageBar] = useState(0)
 
  const showProgressBar = () => {
    const scrolledPercentage = (window.scrollTop /
      (window.scrollHeight - window.clientHeight)) * 100;
    setPresentageBar(scrolledPercentage)
  }

  useEffect(() => { 
    document.addEventListener('scroll', showProgressBar)
  },[])

  console.log(presentageBar)

  return (
    
    <div className='bg-[#040C18] min-h-screen'>
      <div id="progress-bar" className="h-1 bg-blue-400 fixed top-0 left-0"></div>
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
