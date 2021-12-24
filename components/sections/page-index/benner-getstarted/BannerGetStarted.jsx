import React from 'react'
import { Gap } from '../../../atomic'

const BannerGetStarted = () => {
  return (
    <section className='max-w-screen-xl mx-auto px-4 bg-gradient-to-r'>
      <article className='p-10 flex  lg:items-center lg:justify-between flex-col lg:flex-row color-gradient rounded-lg'>
        <div className=''>
          <p>Request Early Access to Get Started</p>
          <Gap className="h-2" />
          <h3 className='lg:text-2xl text-xl font-bold'>Register today & start exploring the endless possiblities.</h3>
          <Gap className="h-5" />
        </div>
        <div className=''>
          <button className='px-10 py-3 bg-black text-gray-100 rounded-3xl'>Get Started</button>
        </div>
      </article>

    </section>
  )
}

export default BannerGetStarted
