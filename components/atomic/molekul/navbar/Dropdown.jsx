const MenuDropDown = ({menus}) => {
  return (
  <div className='absolute top-20 right-0 lg:hidden text-white border z-10'>
    <ul>
      {menus.map(el => (
          <li key={el.text}><a href={el.url}>{el.text}</a></li>
      ))}
    </ul>
    <button className='bg-gray-300'>sign in</button>
    <button className='bg-red-300'>sign up</button>
  </div>
  )
}

export default MenuDropDown