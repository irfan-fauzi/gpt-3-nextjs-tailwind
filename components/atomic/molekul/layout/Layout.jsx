import { Footer, Header } from "../../../sections/page-index"

const Layout = ({children}) => {
  return (
    <div className='bg-[#040C18] min-h-screen font-Manrope'>
      <Header />
        {children}
      <Footer />  
    </div>
  )
}

export default Layout
