import { Gap } from '../../../atomic'
import Image from 'next/image'
import ContentText from './parts/ContentText'
import ImagePart from './parts/ImagePart'
import google from '../../../../public/assets/images/google.png'
import slack from '../../../../public/assets/images/slack.png'
import atlasia from '../../../../public/assets/images/atlassian.png'
import dropbox from '../../../../public/assets/images/dropbox.png'
import shopify from '../../../../public/assets/images/shopify.png'



const Hero = () => {

  const images = [google, slack, atlasia, dropbox, shopify]

  const contentText = {
    heading: "Let’s Build Something amazing with GPT-3 OpenAI",
    subHeading: "Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of."
  }
  return (
    <article className="mx-auto max-w-screen-xl px-3">
      <Gap className="md:block md:h-10 lg:h-10 hidden"/>
      <section className="flex md:items-center flex-col md:flex-row">
        <ContentText contentText={contentText}/>
        <ImagePart />
      </section>
      
      <Gap className="h-20"/>
      <section className=''>
        <div className="md:flex-row flex-col flex gap-7 justify-center items-center">
          {images.map(el => (
            <div key={Math.random()}>
              <Image 
                src={el}
                alt='google'
              />
            </div>
            ))
          }
        </div>
      </section>
      <Gap className="h-20"/>
    </article>
  )
}

export default Hero
