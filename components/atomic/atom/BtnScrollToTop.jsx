import {useState, useEffect} from 'react'
import { BiChevronUp } from "react-icons/bi";

const BtnScrollToTop = () => {
  const [showBtn, setShowBtn] = useState(false)
  const toggleVisibility = () => {
    if(window.pageYOffset > 150) {
      setShowBtn(true)
    } else {
      setShowBtn(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  },[])
  return (
    <button onClick={scrollToTop} className={`fixed bottom-7 right-4 text-black cursor-pointer z-10 color-gradient rounded-3xl ${showBtn ? 'opacity-100' : 'opacity-0'} transition-all focus:outline-none`} id="top-btn"><BiChevronUp size={50}/></button>
  )
}

export default BtnScrollToTop
