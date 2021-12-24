import { Gap } from '../../../../atomic'
import people from '../../../../../public/assets/images/people.png'
import Image from 'next/image'

const ContentText = ({contentText}) => {
  return (
    <div className="md:w-7/12 ">
        <h1 className="xl:text-6xl xl:leading-tight lg:text-5xl text-[2rem] font-bold text-gradient text-transparent">{contentText.heading}</h1>
          <Gap className="h-6"/>
            <p className="lg:font-normal lg:text-xl w-11/12 lg:w-10/12 text-gray-400 leading-5 font-light">{contentText.subHeading}</p>
            <Gap className="h-6"/>
            <form>
              <input type="text" className="bg-gray-800 lg:w-7/12 md:w-auto w-full lg:py-4 lg:px-8 py-2 px-6 text-gray-300 text-center md:text-left" placeholder="your email address"/>
              <Gap className="h-3 md:hidden"/>
              <button className="bg-[#c45719] lg:py-4 py-2 px-7 rounded-sm text-gray-300 hover:bg-red-500 transition capitalize font-semibold md:w-max w-full">get started</button>
            </form>
            <Gap className="md:h-7 h-[50px]"/>
            <div className="flex flex-col">
              <div className='md:text-left text-center'>
                <Image 
                  src={people}
                  alt="user who used"
                />
              </div>
              <p className="text-gray-300 font-light md:text-lg text-xl md:text-left  text-center">1,600 people requested access a visit in last 24 hours</p>
            </div>
            
          </div>
  )
}

export default ContentText
