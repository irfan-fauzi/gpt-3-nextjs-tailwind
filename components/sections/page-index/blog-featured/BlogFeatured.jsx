import { Gap } from '../../../atomic'
import blog1 from '../../../../public/assets/images/blog01.png'
import blog2 from '../../../../public/assets/images/blog02.png'
import blog3 from '../../../../public/assets/images/blog03.png'
import blog4 from '../../../../public/assets/images/blog04.png'
import blog5 from '../../../../public/assets/images/blog05.png'

const BlogFeatured = () => {
  const blogs = [
    {
      id: 1,
      image: blog1,
      date: 'Sept 26, 2021',
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
    },
    {
      id: 2,
      image: blog2,
      date: 'Sept 26, 2021',
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
    },
    {
      id: 3,
      image: blog3,
      date: 'Sept 26, 2021',
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
    },
    {
      id: 4,
      image: blog4,
      date: 'Sept 26, 2021',
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
    },
    {
      id: 5,
      image: blog5,
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
            <picture>
              <img src={el.image} alt={el.title} loading='lazy'/>
            </picture>
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
