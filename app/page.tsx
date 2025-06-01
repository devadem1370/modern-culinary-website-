import { Footer, Navbar } from "@/components"
import { About, Blog, Experience, Faq, Home } from "@/sections"

const Homepage = () => {
  return (
    <>
     <div className='max-w-[1250px] mx-auto'>
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
      <Blog/>
      <Faq/>
    </div>
      <Footer/>
    </>
   
  )
}

export default Homepage