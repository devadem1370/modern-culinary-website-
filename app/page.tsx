import { Navbar } from '@/components'
import Home from '@/sections/Home'
const Homepage = () => {
  return (
    <div className='max-w-[1250px] mx-auto'>
      <Navbar/>
      <Home/>
    </div>
  )
}

export default Homepage