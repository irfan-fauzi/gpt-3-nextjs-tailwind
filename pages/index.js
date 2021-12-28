import Head from 'next/head'
import { BtnScrollToTop, Container, Layout, ProgressBarPage } from "../components/atomic";

import MainSections from '../components/sections/mainsections/MainSections';

export default function Home() {
  
  return (
    
    <Layout>
      <Container>
        <Head>
          <title>GPT-3 Indonesia </title>
        </Head>
        <ProgressBarPage />        
        <MainSections />
        
        <BtnScrollToTop />
      </Container>
    </Layout>
  )
}
