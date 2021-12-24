import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { useState, useEffect } from 'react'
import MenuDropDown from './Dropdown'

const Navbar = () => {  
  const [showMenu, setShowMenu] = useState(false)
  useEffect(() => {
    setShowMenu(!false)
  }, []) 
  const contentMenu = [
    {url: "#", text: "Home"},
    {url: "#", text: "What is Gpt-3 ?"},
    {url: "#", text: "Open Ai"},
    {url: "#", text: "Case Studies"},
    {url: "#", text: "Library"}
  ]
  return (
    <nav className="pt-10 ">
        <div className="mx-auto max-w-screen-xl px-3">
          <div className="flex  items-center">
            <div className="w-1/12 ">
              <h1 className="text-2xl font-bold text-gray-400">GPT-3</h1>
            </div>
            <div className="w-7/12 ">
              {!showMenu && (<MenuDropDown menus={contentMenu}/>)}
            <ul className="lg:flex text-gray-300 hidden">
              {contentMenu.map(el => (
                  <li key={el.text}><a href={el.url} className="hover:text-red-300 transition px-6 py-3 font-semibold">{el.text}</a></li>
                ))}
            </ul>
            </div>
            <div className="w-4/12 ">
              <div className="flex gap-2 justify-end">
                <button className="lg:block text-white px-7 hidden">sign in</button>
                <button className="lg:block bg-[#c45719] hover:bg-red-500 px-7 py-2 capitalize text-white hidden rounded-sm">sign up</button>
                <RiMenu3Line color="#fff" size={30} className='hover:cursor-pointer lg:hidden' onClick={() => setShowMenu(!showMenu)}/>
              </div>
              
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Navbar
