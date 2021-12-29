const MenuDropDown = ({menus}) => {
  return (
  <div className={`fixed w-full h-[100vh] bg-gradient top-0 right-0 lg:hidden text-white  z-[8888] flex items-start justify-center `}>
    <ul className="flex flex-col gap-5 mt-[7rem]">
      {menus.map(el => (
          <li key={el.text}><a href={el.url} className=" block py-2 px-2 border-b border-blue-600 ">{el.text}</a></li>
      ))}
      <div className="flex flex-col gap-5 mt-10">
        <button className='color-gradient px-10 py-2 rounded-sm text-black font-semibold'>Log in</button>
        <button className='border px-10 py-2'>Sign up</button>
      </div>
    </ul>
    
  </div>
  )
}

export default MenuDropDown