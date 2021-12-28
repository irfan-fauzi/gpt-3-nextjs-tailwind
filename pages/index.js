import { Gap } from "../components/atomic";
import { AiFeatured, BannerGetStarted, BlogFeatured, Features, Footer, Header, Hero } from "../components/sections/page-index";
import WhatIs from "../components/sections/page-index/what-is-gpt/WhatIs";
import { BiChevronUpCircle } from "react-icons/bi";
import { useEffect, useState } from "react";



export default function Home() {
  const [showBtn, setShowBtn] = useState(false)
  useEffect(() => {
    const scrollContainer = () => {
      return document.documentElement || document.body;
    };
    const progresBar = document.getElementById('progress-bar')
    
    document.addEventListener('scroll', () => {
      const scrolledPercentage = (scrollContainer().scrollTop /
      (scrollContainer().scrollHeight - scrollContainer().clientHeight)) * 100;
      progresBar.style.width = `${scrolledPercentage}%`
    })
  },[])

  const toggleVisibility = () => {
    if(window.pageYOffset > 300) {
      setShowBtn(true)
    } else {
      setShowBtn(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  },[])
  
  
 
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
      <button onClick={scrollToTop} className={`fixed bottom-7 right-4 text-white cursor-pointer z-10 bg-gradient rounded-3xl ${showBtn ? 'opacity-100' : 'opacity-0'} transition-opacity focus:outline-none`} id="top-btn"><BiChevronUpCircle size={45}/></button>
    </div>
    
  )
}
