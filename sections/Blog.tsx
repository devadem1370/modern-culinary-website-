import { BlogCard } from '@/components'
import React from 'react'

const Blog = () => {
  return (
    <main>
        <section className=' w-full text-center '>
        <h1 className='heading-xl'>From Our Kitchen to <br /> Your Table</h1>

        <div className="flex items-center ml-10 mt-[130px]">
            <BlogCard
            date="January 5, 2024" 
            title="The Art of Flavor : How to Create Perfectly Balanced Dishes"
            />
            <BlogCard
            date="January 5, 2024" 
            title="The Art of Flavor : How to Create Perfectly Balanced Dishes"
            />
            <BlogCard
            date="January 5, 2024" 
            title="The Art of Flavor : How to Create Perfectly Balanced Dishes"
            
            />


        </div>

        </section>
    </main>
  )
}

export default Blog