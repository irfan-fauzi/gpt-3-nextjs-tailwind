import React from 'react'
import { Gap } from '../../../atomic'

const Footer = () => {
  return (
    
    <section className='footer-gradient '>
      <div className='max-w-screen-xl mx-auto px-5'>
      <Gap className="h-[5rem]" />
      <div className='max-w-screen-md mx-auto'>
        <h3 className='text-center lg:text-5xl text-2xl text-gradient text-transparent font-bold'>Do you want to step in to the future before others
        </h3>
      </div>
      <Gap className="h-10" />
      <div className='flex items-center justify-center'>
        <button className='text-gray-300 lg:font-semibold lg:px-10 px-5 lg:py-3 py-3 border border-red-300 text-center hover:color-gradient hover:text-black transition-all rounded-md'>Request Early Access</button>
      </div>
      <Gap className="lg:h-[8rem] h-[5rem]" />
      <footer>
        <div className='grid md:grid-footer gap-10'>
          <div className=''>
            <p className='text-2xl font-bold text-gray-300'>GPT-3</p>
            <Gap className="h-5" />
            <p className='text-gray-300 font-light'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
            <Gap className="md:h-4 lg:h-10" /> 
            <p className='text-gray-300 font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, tempora? Lorem ipsum dolor sit amet.</p>
          </div>
          <div className=''>
            <div className='flex text-gray-300  justify-between'>
              <ul className='flex flex-col gap-7 lg:gap-6 xl:gap-8'>
                <p className='font-bold'>Links</p>
                <li>Overons</li>
                <li>Social media</li>
                <li>Counters</li>
                <li>Contacts</li>
              </ul>
              <ul className='flex flex-col gap-7 lg:gap-6 xl:gap-8'>
                <p className='font-bold'>Company</p>
                <li>Tearms & conditions</li>
                <li>Privacy Policy</li>
                <li>Contacts</li>
              </ul>
            </div>
          </div>
          <div className='xl:justify-self-center'>
            <ul className='flex flex-col gap-7 lg:gap-6 xl:gap-8 text-gray-200'>
                <p className='font-bold'>Get is touch</p>
                <li>Crechterwoord K12 182 DK Alknjkcb</li>
                <li>085-132567</li>
                <li>info@payme.net</li>
              </ul>
          </div>
        </div>
      <Gap className="lg:h-[5rem] h-10" /> 
    </footer>
    </div>
    </section>
    
    
    
  )
}

export default Footer
