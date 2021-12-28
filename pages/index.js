import { BtnScrollToTop, Gap } from "../components/atomic";
import { AiFeatured, BannerGetStarted, BlogFeatured, Features, Footer, Header, Hero, WhatIs } from "../components/sections/page-index";


import { useEffect, useState } from "react";




export default function Home() {
  
  const [presentageBar, setPresentageBar] = useState()
 
  const scrollContainer = () => {
    return document.documentElement || document.body
  }
  const showProgressBar = () => {
    const scrolledPercentage = (scrollContainer().scrollTop /
      (scrollContainer().scrollHeight - scrollContainer().clientHeight)) * 100;
    setPresentageBar(scrolledPercentage)
  }

  useEffect(() => { 
    window.addEventListener('scroll', showProgressBar)
    return () => {
      window.removeEventListener('scroll', showProgressBar)
    }
  },[])

  return (
    
    <div className='bg-[#040C18] min-h-screen'>
      <div id="progress-bar" style={{width: `${presentageBar}%`}} className="h-1 bg-blue-400 fixed top-0 left-0 z-[300]"></div>
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
