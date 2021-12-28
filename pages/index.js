import Head from 'next/head'
import { BtnScrollToTop, Gap, ProgressBarPage } from "../components/atomic";
import Container from "../components/atomic/molekul/layout/Container";
import Layout from "../components/atomic/molekul/layout/Layout";
import { AiFeatured, BannerGetStarted, BlogFeatured, Features, Hero, WhatIs } from "../components/sections/page-index";

export default function Home() {
  
  return (
    
    <Layout>
      <Container>
        <Head>
          <title>GPT-3 Indonesia</title>
        </Head>
        <ProgressBarPage />        
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
        
        <BtnScrollToTop />
      </Container>
    </Layout>
  )
}
