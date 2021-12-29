import { Gap } from '../../../../atomic'

import users from '../../../../../public/assets/images/users.png'
import Image from 'next/image'

const ContentText = ({contentText}) => {
  return (
    <div className="md:w-7/12 ">
        <Gap className="h-[2rem] " />
        <h1 className="xl:text-6xl xl:leading-tight lg:text-5xl text-[1.8rem] leading-10 md:leading-none lg:font-bold font-extrabold text-gradient text-transparent">{contentText.heading}</h1>
          <Gap className="h-6"/>
            <p className="lg:font-light lg:text-xl w-full lg:w-10/12 text-gray-300 leading-6 font-light">{contentText.subHeading}</p>
            <Gap className="h-6"/>
            <form>
              <input type="text" className="bg-[#052D56] lg:w-7/12 md:w-auto w-full lg:py-4 lg:px-8 md:py-2 py-4 px-6 text-gray-300 text-left md:text-left" placeholder="your email address"/>
              <Gap className="h-4 md:hidden"/>
              <button className="bg-[#c45719] lg:py-4 py-4 px-9 rounded-sm text-gray-300 hover:bg-red-500 transition capitalize font-semibold ">get started</button>
            </form>
            <Gap className="md:h-7 h-8"/>
            <div className="flex flex-col">
              <div className='md:text-left text-left'>
                <Image 
                  src={users}
                  alt="user who used"
                  width={160}
                  height={40}
                />
              </div>
              <Gap className="h-2"/>
              <p className="text-gray-300 font-light md:text-lg text-md md:text-left  text-left">1,600 people requested access a visit in last 24 hours</p>
            </div>
            
          </div>
  )
}

export default ContentText
