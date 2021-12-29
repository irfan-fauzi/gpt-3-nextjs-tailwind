import Image from 'next/image'
import woman from '../../../../public/assets/images/possibility.png'
import { Gap } from '../../../atomic'


const AiFeatured = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-4 lg:px-3">
        <div className="flex lg:items-center lg:flex-row flex-col lg:gap-10">
          <div className="lg:w-6/12">
            <Image 
              src={woman}
              alt="woman"
              width={600}
              height={600}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN89/adDAAIgQLnKp2BqQAAAABJRU5ErkJggg=="
            />
          </div>
          <article className="lg:w-6/12">
           
            <Gap className="h-6" />
            <h3 className="lg:text-4xl text-3xl text-transparent text-gradient font-bold lg:w-10/12">The possibilities are beyond your imagination</h3>
            <Gap className="h-6" />
            <p className="text-gray-400 lg:w-10/12 font-light">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
            <Gap className="h-6" />
            <button className="border px-4 py-3 lg:p-4 border-gray-500 text-transparent text-gradient md:font-semibold cursor-pointer">Request Early Access to Get Started</button>
          </article>
        </div>
      </section>
  )
}

export default AiFeatured
