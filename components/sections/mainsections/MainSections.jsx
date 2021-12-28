import { Gap } from "../../atomic"
import { Hero, WhatIs, Features, AiFeatured, BannerGetStarted, BlogFeatured } from "../page-index"

const MainSections = () => {
  return (
    <>
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
    </>
  )
}

export default MainSections
