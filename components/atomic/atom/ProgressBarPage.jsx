import {useEffect, useState} from 'react'

const ProgressBarPage = () => {
  const [presentageBar, setPresentageBar] = useState()
 
  const scrollContainer = () => {
    return document.documentElement || document.body
  }
  const showProgressBar = () => {
    const scrolledPercentage = (scrollContainer().scrollTop /
      (scrollContainer().scrollHeight - scrollContainer().clientHeight)) * 100;
    setPresentageBar(scrolledPercentage)
  }

  useEffect(() => { 
    window.addEventListener('scroll', showProgressBar)
    return () => {
      window.removeEventListener('scroll', showProgressBar)
    }
  },[])
  return (
    <div id="progress-bar" style={{width: `${presentageBar}%`}} className="h-1 bg-blue-400 fixed top-0 left-0 z-[300]"></div>
  )
}

export default ProgressBarPage
