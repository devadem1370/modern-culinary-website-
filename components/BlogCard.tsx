import React from 'react'

interface cardProps {
    date: string,
    title: string,
}

const BlogCard = ({date, title}: cardProps) => {
  return (
    <div>
        <div className='w-[350px] h-[280px] rounded-[20px] bg-purple-400'></div>
        <p className='text-start p-base mt-6'>
            {date}
        </p>
        <h2 className='text-start title-xl mt-[30px]'>{title}</h2>
    </div>
  )
}

export default BlogCard