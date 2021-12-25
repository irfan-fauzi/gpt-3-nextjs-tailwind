import React from 'react'
import { Gap } from '../../../atomic'
import Image from 'next/image'
import imgBlog from '../../../../public/assets/images/blog01.png'

const BlogFeatured = () => {
  const blogs = [
    {
      id: 1,
      image: '/assets/images/blog01.png',
      date: 'Sept 26, 2021',
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
    },
    {
      id: 2,
      image: '/assets/images/blog02.png',
      date: 'Sept 26, 2021',
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
    },
    {
      id: 3,
      image: '/assets/images/blog03.png',
      date: 'Sept 26, 2021',
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
    },
    {
      id: 4,
      image: '/assets/images/blog04.png',
      date: 'Sept 26, 2021',
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
    },
    {
      id: 5,
      image: '/assets/images/blog05.png',
      date: 'Sept 26, 2021',
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
    }
  ]
  return (
    <section className='max-w-screen-xl mx-auto px-4 '>
     <article>
       <h2 className='lg:w-6/12 lg:font-bold text-3xl lg:text-6xl font-semibold text-gradient text-transparent '>A lot is happening, We are blogging about it.</h2>
     </article>
     <Gap className="h-[3.7rem]"/>
    
     <article className='grid md:grid-blog gap-7'>
       
       {
         blogs.map(el => (
           
          <div key={el.id} className={blogs.indexOf(el) === 0 ? 'md:grid-row-blog': ' '}>
            <div className=''>
              <img src={el.image} alt={el.title} />
            </div>
            <article className='blue-gradient p-4'>
              <Gap className="h-5" />
              <p className='text-white'>{el.date}</p>
              <h3 className='cursor-pointer text-gray-200 font-semibold lg:text-2xl text-lg'>{el.title}</h3>
              <Gap className={blogs.indexOf(el) === 0 ? 'md:h-[20rem] h-5' : 'md:h-8 h-5'} />
              <button className='border px-4 py-2 text-gray-200 cursor-pointer'>read more..</button>
            </article>
          </div>
         ))
       }
       
     </article>
    </section>
  )
}

export default BlogFeatured
