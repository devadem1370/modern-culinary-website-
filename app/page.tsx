import { Navbar } from '@/components'
import About from '@/sections/About'
import Home from '@/sections/Home'
const Homepage = () => {
  return (
    <div className='max-w-[1250px] mx-auto'>
      <Navbar/>
      <Home/>
      <About/>
    </div>
  )
}

export default Homepage